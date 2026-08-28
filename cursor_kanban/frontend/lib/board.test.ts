import { describe, expect, it } from "vitest";
import { addCard, deleteCard, moveCard, renameColumn } from "./board";
import { seedBoard } from "./seed";
import type { Board } from "./types";

function boardFixture(): Board {
  return {
    columns: [
      {
        id: "a",
        title: "A",
        cards: [
          { id: "1", title: "One", details: "d1" },
          { id: "2", title: "Two", details: "d2" },
        ],
      },
      { id: "b", title: "B", cards: [] },
      {
        id: "c",
        title: "C",
        cards: [{ id: "3", title: "Three", details: "d3" }],
      },
      { id: "d", title: "D", cards: [] },
      { id: "e", title: "E", cards: [] },
    ],
  };
}

describe("seedBoard", () => {
  it("has exactly five columns", () => {
    expect(seedBoard.columns).toHaveLength(5);
  });
});

describe("renameColumn", () => {
  it("renames the matching column", () => {
    const next = renameColumn(boardFixture(), "b", "Ready");
    expect(next.columns[1].title).toBe("Ready");
    expect(next.columns[0].title).toBe("A");
  });
});

describe("addCard", () => {
  it("appends a card with title and details", () => {
    const next = addCard(boardFixture(), "b", "New", "Notes");
    expect(next.columns[1].cards).toHaveLength(1);
    expect(next.columns[1].cards[0].title).toBe("New");
    expect(next.columns[1].cards[0].details).toBe("Notes");
    expect(next.columns[1].cards[0].id).toBeTruthy();
  });
});

describe("deleteCard", () => {
  it("removes the card from its column", () => {
    const next = deleteCard(boardFixture(), "2");
    expect(next.columns[0].cards.map((card) => card.id)).toEqual(["1"]);
  });
});

describe("moveCard", () => {
  it("reorders within a column", () => {
    const next = moveCard(boardFixture(), "1", "a", 1);
    expect(next.columns[0].cards.map((card) => card.id)).toEqual(["2", "1"]);
  });

  it("moves a card to another column at an index", () => {
    const next = moveCard(boardFixture(), "1", "c", 0);
    expect(next.columns[0].cards.map((card) => card.id)).toEqual(["2"]);
    expect(next.columns[2].cards.map((card) => card.id)).toEqual(["1", "3"]);
  });

  it("drops onto an empty column", () => {
    const next = moveCard(boardFixture(), "3", "b", 0);
    expect(next.columns[2].cards).toEqual([]);
    expect(next.columns[1].cards.map((card) => card.id)).toEqual(["3"]);
  });
});
