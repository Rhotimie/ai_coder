"use client";

import { useCallback, useState } from "react";
import { addCard, deleteCard, moveCard, renameColumn } from "@/lib/board";
import { seedBoard } from "@/lib/seed";
import type { Board } from "@/lib/types";

export function useBoard() {
  const [board, setBoard] = useState<Board>(seedBoard);

  const onRenameColumn = useCallback((columnId: string, title: string) => {
    setBoard((current) => renameColumn(current, columnId, title));
  }, []);

  const onAddCard = useCallback(
    (columnId: string, title: string, details: string) => {
      setBoard((current) => addCard(current, columnId, title, details));
    },
    [],
  );

  const onDeleteCard = useCallback((cardId: string) => {
    setBoard((current) => deleteCard(current, cardId));
  }, []);

  const onMoveCard = useCallback(
    (cardId: string, toColumnId: string, toIndex: number) => {
      setBoard((current) => moveCard(current, cardId, toColumnId, toIndex));
    },
    [],
  );

  return { board, onRenameColumn, onAddCard, onDeleteCard, onMoveCard };
}
