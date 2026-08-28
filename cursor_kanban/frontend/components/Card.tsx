"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Card as CardType } from "@/lib/types";

type CardProps = {
  card: CardType;
  onDelete: (cardId: string) => void;
};

export function Card({ card, onDelete }: CardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      data-testid={`card-${card.id}`}
      className={`cursor-grab rounded-xl border border-black/6 bg-surface p-3.5 shadow-[0_1px_2px_rgba(3,33,71,0.06)] outline-none ring-accent/0 transition hover:border-blue/30 hover:shadow-[0_8px_20px_rgba(3,33,71,0.08)] focus-visible:ring-2 focus-visible:ring-accent active:cursor-grabbing ${
        isDragging ? "opacity-40" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[15px] font-semibold leading-snug text-navy">
          {card.title}
        </h3>
        <button
          type="button"
          aria-label={`Delete ${card.title}`}
          data-testid={`delete-card-${card.id}`}
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => onDelete(card.id)}
          className="rounded-md px-1.5 py-0.5 text-xs font-medium text-muted transition hover:bg-black/5 hover:text-navy"
        >
          Delete
        </button>
      </div>
      {card.details ? (
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{card.details}</p>
      ) : null}
    </article>
  );
}
