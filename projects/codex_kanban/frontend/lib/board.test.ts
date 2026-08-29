import {
  addCard,
  createInitialBoardState,
  deleteCard,
  moveCard,
  renameColumn,
} from "./board"

describe("board state helpers", () => {
  it("starts with five populated columns", () => {
    const state = createInitialBoardState()
    expect(state.columns).toHaveLength(5)
    expect(state.columns.every((column) => column.cards.length > 0)).toBe(true)
  })

  it("renames a column", () => {
    const state = createInitialBoardState()
    const next = renameColumn(state, "backlog", "Ideas")
    expect(next.columns[0].title).toBe("Ideas")
    expect(state.columns[0].title).toBe("Backlog")
  })

  it("adds a card to the end of a column", () => {
    const state = createInitialBoardState()
    const next = addCard(state, "done", {
      id: "card-x",
      title: "Ship it",
      details: "Release the board.",
    })

    expect(next.columns[4].cards.at(-1)).toEqual({
      id: "card-x",
      title: "Ship it",
      details: "Release the board.",
    })
  })

  it("deletes a card without mutating the original state", () => {
    const state = createInitialBoardState()
    const next = deleteCard(state, "card-1")

    expect(next.columns[0].cards.some((card) => card.id === "card-1")).toBe(false)
    expect(state.columns[0].cards.some((card) => card.id === "card-1")).toBe(true)
  })

  it("moves a card between columns", () => {
    const state = createInitialBoardState()
    const next = moveCard(state, "card-1", "done")

    expect(next.columns[0].cards.some((card) => card.id === "card-1")).toBe(false)
    expect(next.columns[4].cards.at(-1)?.id).toBe("card-1")
  })
})

