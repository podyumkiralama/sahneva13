import { tmpdir } from "node:os";
import path from "node:path";
import { chromium } from "@playwright/test";

const url = "http://127.0.0.1:3043/led-ekran-kiralama";
const browser = await chromium.launch({ headless: true });

async function verifyPage(name, viewport, openIndex) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  const response = await page.goto(url, { waitUntil: "networkidle" });
  const gallery = page.locator("#galeri");
  await gallery.scrollIntoViewIfNeeded();
  await page.waitForTimeout(350);

  const triggers = gallery.locator("[data-lightbox-index]");
  const triggerCount = await triggers.count();
  const overlayCount = await page
    .locator("[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay")
    .count();

  await triggers.nth(openIndex).click();
  const dialog = page.getByRole("dialog", { name: "LED ekran kurulum galerisi" });
  await dialog.waitFor({ state: "visible" });
  const initialAlt = await dialog.locator("img").getAttribute("alt");
  const initialFocus = await page.evaluate(() => document.activeElement?.getAttribute("aria-label"));
  const inertBackgroundCount = await page.locator("body > [inert]").count();

  await page.keyboard.press("Alt+ArrowRight");
  const altAfterModifiedArrow = await dialog.locator("img").getAttribute("alt");

  await page.keyboard.press("ArrowRight");
  const nextAlt = await dialog.locator("img").getAttribute("alt");
  const counter = (await dialog.locator("[data-lightbox-counter] [aria-hidden='true']").innerText()).trim();
  const liveAnnouncement = (await dialog.locator("[data-lightbox-counter]").innerText()).trim();

  const screenshot = path.join(tmpdir(), `sahneva-${name}-led-lightbox.png`);
  await page.screenshot({ path: screenshot, fullPage: false });

  await page.keyboard.press("Escape");
  await dialog.waitFor({ state: "detached" });
  const restoredIndex = await page.evaluate(() =>
    document.activeElement?.getAttribute("data-lightbox-index")
  );
  const hasContent = Boolean((await gallery.textContent())?.trim());

  await page.close();
  return {
    status: response?.status(),
    hasContent,
    overlayCount,
    triggerCount,
    initialAlt,
    nextAlt,
    altAfterModifiedArrow,
    counter,
    liveAnnouncement,
    initialFocus,
    inertBackgroundCount,
    restoredIndex,
    errors,
    screenshot,
  };
}

try {
  const desktop = await verifyPage("desktop", { width: 1440, height: 1000 }, 0);
  const mobile = await verifyPage("mobile", { width: 390, height: 844 }, 3);
  console.log(JSON.stringify({ desktop, mobile }, null, 2));
} finally {
  await browser.close();
}
