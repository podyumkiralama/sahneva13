import { devices, expect, test } from "@playwright/test";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const axePath = require.resolve("axe-core/axe.min.js");
const pixel7 = devices["Pixel 7"];

const representativeRoutes = [
  { name: "Turkish home", path: "/" },
  { name: "Turkish service", path: "/led-ekran-kiralama" },
  { name: "Turkish stage rental", path: "/sahne-kiralama" },
  { name: "Turkish podium rental", path: "/podyum-kiralama" },
  { name: "Turkish sound & light systems", path: "/ses-isik-sistemleri" },
  { name: "Turkish corporate organization", path: "/kurumsal-organizasyon" },
  { name: "Turkish contact", path: "/iletisim" },
  {
    name: "Turkish project detail",
    path: "/projeler/bayrampasa-adapark-30-agustos-sahne-kurulumu",
  },
  { name: "Turkish blog", path: "/blog" },
  {
    name: "Turkish blog detail",
    path: "/blog/kurumsal-etkinlik-yonetimi",
  },
  { name: "Turkish price page", path: "/led-ekran-kiralama-fiyatlari" },
  { name: "English home", path: "/en" },
  { name: "English service", path: "/en/led-screen-rental" },
  { name: "English blog", path: "/en/blog" },
  {
    name: "English blog detail",
    path: "/en/blog/corporate-event-management",
  },
  { name: "English price page", path: "/en/led-screen-rental-prices" },
  { name: "Arabic home", path: "/ar" },
  { name: "German home", path: "/de" },
  { name: "Russian home", path: "/ru" },
  { name: "Chinese home", path: "/zh" },
];

const mobileScrollableRoutes = [
  { name: "Turkish LED rental", path: "/led-ekran-kiralama" },
  { name: "English LED rental", path: "/en/led-screen-rental" },
  { name: "Turkish tent rental", path: "/cadir-kiralama" },
  { name: "English LED prices", path: "/en/led-screen-rental-prices" },
];

for (const route of representativeRoutes) {
  test(`${route.name} has no serious or critical automated WCAG violations`, async ({
    page,
  }) => {
    const consoleErrors = [];
    const pageErrors = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

    const response = await page.goto(route.path, { waitUntil: "domcontentloaded" });
    expect(response, `${route.path} did not return a document response`).not.toBeNull();
    expect(response.ok(), `${route.path} returned HTTP ${response.status()}`).toBeTruthy();
    await page.locator("body").waitFor();
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("h1").first()).toBeVisible();
    await page.addScriptTag({ path: axePath });

    const routeSummary = await page.evaluate(async () => {
      const results = await window.axe.run(document, {
        runOnly: {
          type: "tag",
          values: [
            "wcag2a",
            "wcag2aa",
            "wcag21a",
            "wcag21aa",
            "wcag22a",
            "wcag22aa",
          ],
        },
      });

      const impacts = {
        critical: 0,
        serious: 0,
        moderate: 0,
        minor: 0,
      };

      for (const { impact } of results.violations) {
        if (impact && Object.prototype.hasOwnProperty.call(impacts, impact)) {
          impacts[impact]++;
        }
      }

      const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")).map((heading) =>
        Number(heading.tagName.slice(1)),
      );
      const headingBreaks = [];
      for (let index = 1; index < headings.length; index += 1) {
        const previous = headings[index - 1];
        const current = headings[index];
        if (current - previous > 1) {
          headingBreaks.push({ from: previous, to: current });
        }
      }

      const labelledIdRefs = Array.from(
        document.querySelectorAll("[aria-labelledby], [aria-describedby]"),
      ).flatMap((el) => {
        const ids = [];
        const labeled = el.getAttribute("aria-labelledby");
        const described = el.getAttribute("aria-describedby");
        if (labeled) {
          ids.push(...labeled.split(/\s+/).filter(Boolean).map((id) => ({id, type: "aria-labelledby"})));
        }
        if (described) {
          ids.push(...described.split(/\s+/).filter(Boolean).map((id) => ({id, type: "aria-describedby"})));
        }
        return ids;
      });
      const missingAriaRefs = labelledIdRefs
        .filter(({ id }) => !document.getElementById(id))
        .map(({ id, type }) => `${type}:${id}`);

      const ids = Array.from(document.querySelectorAll("[id]")).map((el) => el.id);
      const idCounts = ids.reduce((acc, id) => {
        if (!id) {
          return acc;
        }
        acc[id] = (acc[id] || 0) + 1;
        return acc;
      }, {});
      const duplicateIds = Object.entries(idCounts)
        .filter(([, count]) => count > 1)
        .map(([id, count]) => ({ id, count }));

      return {
        impacts,
        headingBreaks,
        missingAriaRefs,
        duplicateIds,
        violationIds: results.violations
          .filter(
            ({ impact }) =>
              impact === "serious" || impact === "critical",
          )
          .map(({ id, impact, help, nodes }) => ({
            id,
            impact,
            help,
            targets: nodes.map(({ target }) => target.join(" ")),
          })),
      };
    });

    console.log(
      `${route.path} WCAG impact distribution: ${
        JSON.stringify(routeSummary.impacts)
      }`,
    );
    if (routeSummary.headingBreaks.length > 0) {
      console.log(
        `${route.path} heading-level jumps: ${JSON.stringify(
          routeSummary.headingBreaks,
        )}`,
      );
    }
    if (routeSummary.missingAriaRefs.length > 0) {
      console.log(
        `${route.path} broken aria refs: ${JSON.stringify(
          routeSummary.missingAriaRefs,
        )}`,
      );
    }
    if (routeSummary.duplicateIds.length > 0) {
      console.log(
        `${route.path} duplicate ids: ${JSON.stringify(
          routeSummary.duplicateIds,
        )}`,
      );
    }

    expect(
      routeSummary.violationIds,
      `${route.path} accessibility violations:\n${JSON.stringify(
        routeSummary.violationIds,
        null,
        2,
      )}`,
    ).toEqual([]);
    expect(
      routeSummary.headingBreaks,
      `${route.path} heading structure should avoid skipped levels`,
    ).toEqual([]);
    expect(
      routeSummary.missingAriaRefs,
      `${route.path} should not have broken aria-* references`,
    ).toEqual([]);
    expect(
      routeSummary.duplicateIds,
      `${route.path} should not have duplicate ids`,
    ).toEqual([]);
    expect(consoleErrors, `${route.path} console errors`).toEqual([]);
    expect(pageErrors, `${route.path} uncaught page errors`).toEqual([]);
  });
}

test("contact page form controls have accessible names", async ({ page }) => {
  const response = await page.goto("/iletisim", { waitUntil: "domcontentloaded" });
  expect(response?.ok(), `/iletisim returned HTTP ${response?.status()}`).toBeTruthy();
  await page.addScriptTag({ path: axePath });

    const violations = await page.evaluate(async () => {
      const results = await window.axe.run(document, {
        runOnly: {
          type: "rule",
          values: ["label", "label-title-only"],
        },
      });
    return results.violations.map(({ id, impact, help, nodes }) => ({
      id,
      impact,
      help,
      targets: nodes.map(({ target }) => target.join(" ")),
    }));
  });

  expect(
    violations,
    `Contact form label violations:\n${JSON.stringify(violations, null, 2)}`,
  ).toEqual([]);
});

test("home project mosaic visible labels match their accessible names", async ({
  page,
}) => {
  const response = await page.goto("/", { waitUntil: "domcontentloaded" });
  expect(response?.ok(), `/ returned HTTP ${response?.status()}`).toBeTruthy();

  const projectTriggers = page.locator("[data-project-mosaic-trigger]");
  await expect(projectTriggers).toHaveCount(3);
  await page.addScriptTag({ path: axePath });

  const violations = await page.evaluate(async () => {
    const results = await window.axe.run("[data-project-mosaic-trigger]", {
      runOnly: {
        type: "rule",
        values: ["label-content-name-mismatch"],
      },
      rules: {
        "label-content-name-mismatch": { enabled: true },
      },
    });

    return results.violations.map(({ id, impact, help, nodes }) => ({
      id,
      impact,
      help,
      targets: nodes.map(({ target }) => target.join(" ")),
    }));
  });

  expect(
    violations,
    `Project mosaic label mismatches:\n${JSON.stringify(violations, null, 2)}`,
  ).toEqual([]);
});

test("skip link moves keyboard focus to the Turkish main content", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const skipLink = page.locator('a[href="#_main_content"]').first();

  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/#_main_content$/);
  await expect(page.locator("main#_main_content")).toBeFocused();
});

test("home project video returns focus to its opener after Escape", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const opener = page.locator("[data-mosaic-video-index]").first();

  await opener.focus();
  await page.keyboard.press("Enter");

  const dialog = page.locator("#hero-project-video-dialog");
  await expect(dialog).toHaveAttribute("open", "");
  await expect(dialog.locator("button").first()).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(opener).toBeFocused();
});

test.describe("mobile accessibility", () => {
  test.use({
    viewport: pixel7.viewport,
    userAgent: pixel7.userAgent,
    deviceScaleFactor: pixel7.deviceScaleFactor,
    isMobile: pixel7.isMobile,
    hasTouch: pixel7.hasTouch,
  });

  test("Turkish projects remain a single-main accessible document", async ({ page }) => {
    const response = await page.goto("/projeler", { waitUntil: "domcontentloaded" });
    expect(response?.ok(), `/projeler returned HTTP ${response?.status()}`).toBeTruthy();
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.getByText("Yayımlanmış proje dosyası", { exact: true })).toBeVisible();
    await expect(page.getByText("Toplam tamamlanan proje", { exact: true })).toBeVisible();
    await expect(page.getByText("Müşteri memnuniyeti", { exact: true })).toHaveCount(0);
  });

  for (const route of mobileScrollableRoutes) {
    test(`${route.name} horizontal scrolling remains keyboard-accessible`, async ({
      page,
    }) => {
      const response = await page.goto(route.path, { waitUntil: "domcontentloaded" });
      expect(response, `${route.path} did not return a document response`).not.toBeNull();
      expect(response.ok(), `${route.path} returned HTTP ${response.status()}`).toBeTruthy();
      await page.addScriptTag({ path: axePath });

      const violations = await page.evaluate(async () => {
        const results = await window.axe.run(document, {
          runOnly: {
            type: "rule",
            values: ["scrollable-region-focusable"],
          },
        });

        return results.violations.map(({ id, impact, help, nodes }) => ({
          id,
          impact,
          help,
          targets: nodes.map(({ target }) => target.join(" ")),
        }));
      });

      expect(
        violations,
        `${route.path} keyboard-inaccessible scroll regions:\n${JSON.stringify(violations, null, 2)}`,
      ).toEqual([]);
    });
  }
});
