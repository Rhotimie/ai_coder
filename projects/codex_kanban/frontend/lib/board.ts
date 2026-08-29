export type Card = {
  id: string
  title: string
  details: string
}

export type Column = {
  id: string
  title: string
  cards: Card[]
}

export type BoardState = {
  columns: Column[]
}

export const COLUMN_ORDER = [
  "backlog",
  "planned",
  "in-progress",
  "review",
  "done",
] as const

export type ColumnId = (typeof COLUMN_ORDER)[number]

const starterColumns: Column[] = [
  {
    id: "backlog",
    title: "Backlog",
    cards: [
      {
        id: "card-1",
        title: "Shape the hero panel",
        details: "Make the single-board landing area feel premium and focused.",
      },
      {
        id: "card-2",
        title: "Define the card layout",
        details: "Keep cards compact, readable, and easy to drag.",
      },
    ],
  },
  {
    id: "planned",
    title: "Planned",
    cards: [
      {
        id: "card-3",
        title: "Lock the five-column structure",
        details: "The board stays fixed to one surface with renameable columns.",
      },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    cards: [
      {
        id: "card-4",
        title: "Build the drag and drop path",
        details: "Keep the interaction simple and reliable.",
      },
    ],
  },
  {
    id: "review",
    title: "Review",
    cards: [
      {
        id: "card-5",
        title: "Polish spacing and contrast",
        details: "Tune the final UI so the dashboard feels deliberate.",
      },
    ],
  },
  {
    id: "done",
    title: "Done",
    cards: [
      {
        id: "card-6",
        title: "Seed the app with starter content",
        details: "The board opens populated and ready to use.",
      },
    ],
  },
]

export function createInitialBoardState(): BoardState {
  return {
    columns: starterColumns.map((column) => ({
      ...column,
      cards: column.cards.map((card) => ({ ...card })),
    })),
  }
}

function cloneState(state: BoardState): BoardState {
  return {
    columns: state.columns.map((column) => ({
      ...column,
      cards: column.cards.map((card) => ({ ...card })),
    })),
  }
}

export function renameColumn(
  state: BoardState,
  columnId: string,
  title: string,
): BoardState {
  const trimmed = title.trim()
  if (!trimmed) {
    return state
  }

  return {
    columns: state.columns.map((column) =>
      column.id === columnId ? { ...column, title: trimmed } : column,
    ),
  }
}

export function addCard(
  state: BoardState,
  columnId: string,
  card: Card,
): BoardState {
  const next = cloneState(state)
  const column = next.columns.find((item) => item.id === columnId)
  if (!column) {
    return state
  }

  column.cards.push({ ...card })
  return next
}

export function deleteCard(state: BoardState, cardId: string): BoardState {
  const next = cloneState(state)
  let found = false

  next.columns = next.columns.map((column) => {
    const cards = column.cards.filter((card) => card.id !== cardId)
    if (cards.length !== column.cards.length) {
      found = true
    }
    return { ...column, cards }
  })

  return found ? next : state
}

export function moveCard(
  state: BoardState,
  cardId: string,
  targetColumnId: string,
): BoardState {
  const sourceColumn = state.columns.find((column) =>
    column.cards.some((card) => card.id === cardId),
  )
  const targetColumn = state.columns.find((column) => column.id === targetColumnId)

  if (!sourceColumn || !targetColumn || sourceColumn.id === targetColumn.id) {
    return state
  }

  const card = sourceColumn.cards.find((item) => item.id === cardId)
  if (!card) {
    return state
  }

  return {
    columns: state.columns.map((column) => {
      if (column.id === sourceColumn.id) {
        return {
          ...column,
          cards: column.cards.filter((item) => item.id !== cardId),
        }
      }

      if (column.id === targetColumn.id) {
        return {
          ...column,
          cards: [...column.cards, card],
        }
      }

      return column
    }),
  }
}

