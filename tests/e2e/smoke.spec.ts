import { test, expect } from "@playwright/test";

/**
 * Smoke tests — the minimum that must always be true.
 * Tagged @smoke so they run against both local dev and a deployed URL
 * (npm run test:smoke / test:smoke:local).
 */

test("@smoke homepage renders wordmark and contact form", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("img", { name: "Grafowerk" })).toBeVisible();
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("E-Mail")).toBeVisible();
  await expect(page.getByLabel("Nachricht")).toBeVisible();
  await expect(
    page.getByRole("button", { name: /Nachricht senden/i }),
  ).toBeVisible();
});

test("@smoke contact form requires consent before submitting", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByLabel("Name").fill("Test Person");
  await page.getByLabel("E-Mail").fill("test@example.com");
  await page.getByLabel("Nachricht").fill("Eine Testnachricht.");
  await page.getByRole("button", { name: /Nachricht senden/i }).click();

  // Without the consent checkbox the action returns a validation error.
  await expect(
    page.getByText(/stimmen Sie der Verarbeitung/i),
  ).toBeVisible();
});

test("@smoke legal stub pages load", async ({ page }) => {
  await page.goto("/impressum");
  await expect(
    page.getByRole("heading", { name: "Impressum" }),
  ).toBeVisible();

  await page.goto("/datenschutz");
  await expect(
    page.getByRole("heading", { name: "Datenschutzerklärung" }),
  ).toBeVisible();
});
