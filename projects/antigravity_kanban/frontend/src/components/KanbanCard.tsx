"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Trash2, GripVertical } from "lucide-react";
import { KanbanCard as KanbanCardType } from "@/types/kanban";

interface KanbanCardProps {
  card: KanbanCardType;
  columnId: string;
  onDelete: (cardId: string) => void;
  isOverlay?: boolean;
}

export const KanbanCard: React.FC<KanbanCardProps> = ({
  card,
  columnId,
  onDelete,
  isOverlay = false,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
    data: {
      type: "Card",
      card,
      columnId,
    },
    disabled: isOverlay,
  });

  const style: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(card.id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group relative rounded-lg border bg-white p-4 shadow-xs transition-all ${
        isDragging
          ? "opacity-30 border-dashed border-[#209dd7] bg-blue-50/20"
          : isOverlay
          ? "rotate-2 shadow-xl border-[#209dd7] ring-2 ring-[#209dd7]/20 scale-105 cursor-grabbing"
          : "border-slate-200/80 hover:border-slate-300 hover:shadow-md"
      }`}
      data-testid={`kanban-card-${card.id}`}
      data-card-id={card.id}
    >
      {/* Top Accent Strip */}
      <div className="absolute top-0 left-3 right-3 h-[3px] rounded-b bg-[#ecad0a]/70" />

      <div className="flex items-start justify-between gap-2 pt-1">
        <div className="flex items-start gap-2 flex-1 min-w-0">
          <button
            type="button"
            className="mt-0.5 text-slate-300 group-hover:text-slate-400 cursor-grab active:cursor-grabbing p-0.5 rounded touch-none"
            aria-label="Drag card"
            {...attributes}
            {...listeners}
          >
            <GripVertical className="h-4 w-4" />
          </button>

          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-[#032147] break-words leading-snug">
              {card.title}
            </h4>
            {card.details && (
              <p className="mt-1.5 text-xs text-[#888888] break-words whitespace-pre-wrap leading-relaxed">
                {card.details}
              </p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleDelete}
          aria-label={`Delete card ${card.title}`}
          title="Delete card"
          className="shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100 p-1.5 rounded-md text-[#888888] hover:text-red-600 hover:bg-red-50 transition-all"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
