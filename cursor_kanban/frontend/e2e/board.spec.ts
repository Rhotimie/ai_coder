import { expect, test } from "@playwright/test";

test.describe("Kanban board", () => {
  test("loads five columns and seeded cards", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByTestId("board")).toBeVisible();
    await expect(page.getByTestId("column-col-backlog")).toBeVisible();
    await expect(page.getByTestId("column-col-todo")).toBeVisible();
    await expect(page.getByTestId("column-col-progress")).toBeVisible();
    await expect(page.getByTestId("column-col-review")).toBeVisible();
    await expect(page.getByTestId("column-col-done")).toBeVisible();
    await expect(page.getByText("Write project brief")).toBeVisible();
    await expect(page.getByText("Seed dummy data")).toBeVisible();
  });

  test("renames a column", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("column-title-col-backlog").click();
    const input = page.getByTestId("column-title-input-col-backlog");
    await input.fill("Ideas");
    await input.press("Enter");
    await expect(page.getByTestId("column-title-col-backlog")).toHaveText(
      "Ideas",
    );
  });

  test("adds a card to a column", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("add-card-title-col-done").fill("Ship MVP");
    await page
      .getByTestId("add-card-details-col-done")
      .fill("Hand the board to the team.");
    await page.getByTestId("add-card-submit-col-done").click();
    await expect(page.getByText("Ship MVP")).toBeVisible();
    await expect(page.getByText("Hand the board to the team.")).toBeVisible();
  });

  test("deletes a card", async ({ page }) => {
    await page.goto("/");
    const card = page.getByTestId("card-card-seed");
    await expect(card).toBeVisible();
    await card.hover();
    await page.getByTestId("delete-card-card-seed").click();
    await expect(card).toHaveCount(0);
  });

  test("drags a card to another column", async ({ page }) => {
    await page.goto("/");
    const card = page.getByTestId("card-card-brief");
    const target = page.getByTestId("column-drop-col-done");
    await expect(card).toBeVisible();
    await expect(target).toBeVisible();

    const cardBox = await card.boundingBox();
    const targetBox = await target.boundingBox();
    if (!cardBox || !targetBox) {
      throw new Error("Missing drag source or drop target");
    }

    await page.mouse.move(
      cardBox.x + cardBox.width / 2,
      cardBox.y + cardBox.height / 2,
    );
    await page.mouse.down();
    await page.mouse.move(
      targetBox.x + targetBox.width / 2,
      targetBox.y + Math.min(40, targetBox.height / 2),
      { steps: 20 },
    );
    await page.mouse.up();

    await expect(page.getByTestId("column-col-done")).toContainText(
      "Write project brief",
    );
    await expect(page.getByTestId("column-col-backlog")).not.toContainText(
      "Write project brief",
    );
  });
});
