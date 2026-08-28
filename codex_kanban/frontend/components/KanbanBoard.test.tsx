import React from "react"
import { render, screen } from "@testing-library/react"
import { KanbanBoard } from "./KanbanBoard"

describe("KanbanBoard", () => {
  it("renders the board with dummy data", () => {
    render(<KanbanBoard />)

    expect(screen.getByText("Kanban that feels sharp, focused, and simple.")).toBeInTheDocument()
    expect(screen.getAllByRole("button", { name: /add card/i })).toHaveLength(5)
    expect(screen.getByDisplayValue("Backlog")).toBeInTheDocument()
  })
})
