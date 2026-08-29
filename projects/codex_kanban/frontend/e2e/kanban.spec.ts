import { expect, test } from "@playwright/test"

test("core kanban flow", async ({ page }) => {
  await page.goto("/")

  await expect(page.getByText("Single board workspace")).toBeVisible()
  await expect(page.locator(".column")).toHaveCount(5)

  const backlogColumn = page.locator('[data-column-id="backlog"]')
  await backlogColumn.getByRole("button", { name: "+ Add card" }).click()
  await backlogColumn.getByLabel("New card title").fill("Draft release notes")
  await backlogColumn.getByLabel("New card details").fill("Capture the MVP scope in one place.")
  await backlogColumn.getByRole("button", { name: "Add card" }).click()
  await expect(backlogColumn.getByText("Draft release notes")).toBeVisible()

  const reviewTitle = page
    .locator('[data-column-id="review"]')
    .getByLabel("Column name")
  await reviewTitle.fill("QA")
  await expect(reviewTitle).toHaveValue("QA")

  const card = backlogColumn.locator(".card").filter({ hasText: "Draft release notes" })
  const doneCards = page
    .locator('[data-column-id="done"]')
    .locator(".column__cards")
  const dataTransfer = await page.evaluateHandle(() => new DataTransfer())
  await card.dispatchEvent("dragstart", { dataTransfer })
  await doneCards.dispatchEvent("dragover", { dataTransfer })
  await doneCards.dispatchEvent("drop", { dataTransfer })
  await expect(doneCards.getByText("Draft release notes")).toBeVisible()

  await doneCards
    .locator(".card")
    .filter({ hasText: "Draft release notes" })
    .getByRole("button", { name: "Delete" })
    .click()
  await expect(doneCards.getByText("Draft release notes")).toHaveCount(0)
})
