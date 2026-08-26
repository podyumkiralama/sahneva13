import { devices, expect, test } from "@playwright/test";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const axePath = require.resolve("axe-core/axe.min.js");
const pixel7 = devices["Pixel 7"];

const representativeRoutes = [
  { name: "Turkish home", path: "/" },
  { name: "Turkish service", path: "/led-ekran-kiralama" },
  { name: "Turkish blog", path: "/blog" },
  { name: "English home", path: "/en" },
  { name: "English service", path: "/en/led-screen-rental" },
  { name: "Arabic home", path: "/ar" },
  { name: "German home", path: "/de" },
  { name: "Russian home", path: "/ru" },
  { name: "Chinese home", path: "/zh" },
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

    const violations = await page.evaluate(async () => {
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

      return results.violations
        .filter(({ impact }) => impact === "serious" || impact === "critical")
        .map(({ id, impact, help, nodes }) => ({
          id,
          impact,
          help,
          targets: nodes.map(({ target }) => target.join(" ")),
        }));
    });

    expect(
      violations,
      `${route.path} accessibility violations:\n${JSON.stringify(violations, null, 2)}`,
    ).toEqual([]);
    expect(consoleErrors, `${route.path} console errors`).toEqual([]);
    expect(pageErrors, `${route.path} uncaught page errors`).toEqual([]);
  });
}

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
  });
});
