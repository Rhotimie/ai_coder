import type { Board, Card } from "./types";

export function renameColumn(
  board: Board,
  columnId: string,
  title: string,
): Board {
  return {
    columns: board.columns.map((column) =>
      column.id === columnId ? { ...column, title } : column,
    ),
  };
}

export function addCard(
  board: Board,
  columnId: string,
  title: string,
  details: string,
): Board {
  const card: Card = {
    id: crypto.randomUUID(),
    title,
    details,
  };

  return {
    columns: board.columns.map((column) =>
      column.id === columnId
        ? { ...column, cards: [...column.cards, card] }
        : column,
    ),
  };
}

export function deleteCard(board: Board, cardId: string): Board {
  return {
    columns: board.columns.map((column) => ({
      ...column,
      cards: column.cards.filter((card) => card.id !== cardId),
    })),
  };
}

export function findColumnForCard(
  board: Board,
  cardId: string,
): string | undefined {
  return board.columns.find((column) =>
    column.cards.some((card) => card.id === cardId),
  )?.id;
}

export function moveCard(
  board: Board,
  cardId: string,
  toColumnId: string,
  toIndex: number,
): Board {
  const fromColumn = board.columns.find((column) =>
    column.cards.some((card) => card.id === cardId),
  );
  if (!fromColumn) return board;

  const fromIndex = fromColumn.cards.findIndex((card) => card.id === cardId);
  const card = fromColumn.cards[fromIndex];

  if (fromColumn.id === toColumnId) {
    const cards = [...fromColumn.cards];
    cards.splice(fromIndex, 1);
    const insertAt = Math.max(0, Math.min(toIndex, cards.length));
    cards.splice(insertAt, 0, card);
    return {
      columns: board.columns.map((column) =>
        column.id === fromColumn.id ? { ...column, cards } : column,
      ),
    };
  }

  return {
    columns: board.columns.map((column) => {
      if (column.id === fromColumn.id) {
        return {
          ...column,
          cards: column.cards.filter((item) => item.id !== cardId),
        };
      }
      if (column.id === toColumnId) {
        const cards = [...column.cards];
        const insertAt = Math.max(0, Math.min(toIndex, cards.length));
        cards.splice(insertAt, 0, card);
        return { ...column, cards };
      }
      return column;
    }),
  };
}
