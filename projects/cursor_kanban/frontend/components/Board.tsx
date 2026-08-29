"use client";

import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import { useBoard } from "@/hooks/useBoard";
import { findColumnForCard } from "@/lib/board";
import { Column } from "./Column";

export function Board() {
  const { board, onRenameColumn, onAddCard, onDeleteCard, onMoveCard } =
    useBoard();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const activeCard = board.columns
    .flatMap((column) => column.cards)
    .find((card) => card.id === activeId);

  function handleDragEnd(event: DragEndEvent) {
    setActiveId(null);
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const cardId = String(active.id);
    const overId = String(over.id);
    const overColumn =
      board.columns.find((column) => column.id === overId) ??
      board.columns.find((column) =>
        column.cards.some((card) => card.id === overId),
      );

    if (!overColumn) return;

    const toIndex =
      overColumn.id === overId
        ? overColumn.cards.length
        : overColumn.cards.findIndex((card) => card.id === overId);

    const fromColumnId = findColumnForCard(board, cardId);
    if (
      fromColumnId === overColumn.id &&
      overColumn.cards[toIndex]?.id === cardId
    ) {
      return;
    }

    onMoveCard(cardId, overColumn.id, toIndex < 0 ? overColumn.cards.length : toIndex);
  }

  if (!mounted) {
    return <div data-testid="board" className="min-h-screen bg-background" />;
  }

  return (
    <div className="flex h-full min-h-screen flex-col" data-testid="board">
      <header className="border-b border-black/6 bg-surface px-8 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
          Workspace
        </p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-navy">
          Project Board
        </h1>
        <p className="mt-1 text-sm text-muted">
          Five columns. Cards move with a drag.
        </p>
      </header>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={(event) => setActiveId(String(event.active.id))}
        onDragCancel={() => setActiveId(null)}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-1 gap-4 overflow-x-auto p-6">
          {board.columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              onRename={onRenameColumn}
              onAddCard={onAddCard}
              onDeleteCard={onDeleteCard}
            />
          ))}
        </div>
        <DragOverlay>
          {activeCard ? (
            <div className="w-[260px] rounded-xl border border-accent/50 bg-white p-3.5 shadow-xl">
              <p className="text-[15px] font-semibold text-navy">
                {activeCard.title}
              </p>
              {activeCard.details ? (
                <p className="mt-1.5 text-sm text-muted">{activeCard.details}</p>
              ) : null}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
