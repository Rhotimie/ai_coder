"use client";

import { KeyboardEvent, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import type { Column as ColumnType } from "@/lib/types";
import { AddCardForm } from "./AddCardForm";
import { Card } from "./Card";

type ColumnProps = {
  column: ColumnType;
  onRename: (columnId: string, title: string) => void;
  onAddCard: (columnId: string, title: string, details: string) => void;
  onDeleteCard: (cardId: string) => void;
};

export function Column({
  column,
  onRename,
  onAddCard,
  onDeleteCard,
}: ColumnProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(column.title);
  const { setNodeRef, isOver } = useDroppable({ id: column.id });

  function commit() {
    const next = draft.trim();
    onRename(column.id, next || column.title);
    if (!next) setDraft(column.title);
    setEditing(false);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      commit();
    }
    if (event.key === "Escape") {
      setDraft(column.title);
      setEditing(false);
    }
  }

  return (
    <section
      data-testid={`column-${column.id}`}
      className={`flex min-h-0 min-w-[260px] flex-1 flex-col rounded-2xl bg-[#eaf1f6]/80 p-3 ${
        isOver ? "ring-2 ring-accent/70" : ""
      }`}
    >
      <header className="mb-3 border-b-2 border-accent pb-2">
        {editing ? (
          <input
            autoFocus
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={commit}
            onKeyDown={onKeyDown}
            aria-label="Column title"
            data-testid={`column-title-input-${column.id}`}
            className="w-full rounded-md border border-accent bg-white px-2 py-1 text-sm font-semibold text-navy outline-none focus:ring-2 focus:ring-accent/40"
          />
        ) : (
          <button
            type="button"
            data-testid={`column-title-${column.id}`}
            onClick={() => {
              setDraft(column.title);
              setEditing(true);
            }}
            className="w-full text-left text-[15px] font-semibold tracking-tight text-navy"
          >
            {column.title}
          </button>
        )}
        <p className="mt-0.5 text-xs font-medium text-muted">
          {column.cards.length} {column.cards.length === 1 ? "card" : "cards"}
        </p>
      </header>

      <div
        ref={setNodeRef}
        data-testid={`column-drop-${column.id}`}
        className="flex min-h-[120px] flex-1 flex-col gap-2 overflow-y-auto pr-0.5"
      >
        <SortableContext
          items={column.cards.map((card) => card.id)}
          strategy={verticalListSortingStrategy}
        >
          {column.cards.map((card) => (
            <Card key={card.id} card={card} onDelete={onDeleteCard} />
          ))}
        </SortableContext>
      </div>

      <AddCardForm columnId={column.id} onAdd={onAddCard} />
    </section>
  );
}
