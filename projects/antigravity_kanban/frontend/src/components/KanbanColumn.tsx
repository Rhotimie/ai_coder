"use client";

import React, { useState, useRef, useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Plus, Edit2, Check, X } from "lucide-react";
import { KanbanColumn as KanbanColumnType } from "@/types/kanban";
import { KanbanCard } from "./KanbanCard";

interface KanbanColumnProps {
  column: KanbanColumnType;
  onRenameColumn: (columnId: string, newTitle: string) => void;
  onOpenAddModal: (columnId: string) => void;
  onDeleteCard: (cardId: string) => void;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
  column,
  onRenameColumn,
  onOpenAddModal,
  onDeleteCard,
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleText, setTitleText] = useState(column.title);
  const titleInputRef = useRef<HTMLInputElement>(null);

  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });

  useEffect(() => {
    setTitleText(column.title);
  }, [column.title]);

  useEffect(() => {
    if (isEditingTitle) {
      titleInputRef.current?.focus();
      titleInputRef.current?.select();
    }
  }, [isEditingTitle]);

  const handleSaveTitle = () => {
    const trimmed = titleText.trim();
    if (trimmed && trimmed !== column.title) {
      onRenameColumn(column.id, trimmed);
    } else {
      setTitleText(column.title);
    }
    setIsEditingTitle(false);
  };

  const handleCancelTitle = () => {
    setTitleText(column.title);
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSaveTitle();
    } else if (e.key === "Escape") {
      handleCancelTitle();
    }
  };

  return (
    <div
      ref={setNodeRef}
      className={`flex h-full min-w-[280px] w-80 max-w-sm shrink-0 flex-col rounded-xl border bg-slate-100/70 p-3.5 transition-colors ${
        isOver
          ? "border-[#209dd7] bg-blue-50/40 ring-2 ring-[#209dd7]/20"
          : "border-slate-200"
      }`}
      data-testid={`kanban-column-${column.id}`}
      data-column-id={column.id}
    >
      {/* Column Header */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="h-2.5 w-2.5 rounded-full bg-[#209dd7] shrink-0" />

          {isEditingTitle ? (
            <div className="flex items-center gap-1 flex-1 min-w-0">
              <input
                ref={titleInputRef}
                type="text"
                value={titleText}
                onChange={(e) => setTitleText(e.target.value)}
                onBlur={handleSaveTitle}
                onKeyDown={handleTitleKeyDown}
                className="w-full rounded bg-white px-2 py-0.5 text-sm font-semibold text-[#032147] border border-[#209dd7] focus:outline-hidden ring-2 ring-[#209dd7]/20"
                data-testid={`rename-input-${column.id}`}
              />
              <button
                type="button"
                onMouseDown={handleSaveTitle}
                aria-label="Save title"
                className="p-1 rounded text-green-700 hover:bg-green-100 transition-colors shrink-0"
              >
                <Check className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onMouseDown={handleCancelTitle}
                aria-label="Cancel rename"
                className="p-1 rounded text-red-600 hover:bg-red-100 transition-colors shrink-0"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 flex-1 min-w-0 group">
              <h3
                onClick={() => setIsEditingTitle(true)}
                title="Click to rename"
                className="text-sm font-bold text-[#032147] truncate cursor-pointer hover:text-[#209dd7] transition-colors"
                data-testid={`column-title-${column.id}`}
              >
                {column.title}
              </h3>
              <button
                type="button"
                onClick={() => setIsEditingTitle(true)}
                aria-label={`Rename column ${column.title}`}
                title="Rename column"
                className="opacity-0 group-hover:opacity-100 p-1 rounded text-[#888888] hover:text-[#032147] hover:bg-slate-200/60 transition-all"
                data-testid={`rename-btn-${column.id}`}
              >
                <Edit2 className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <span
            className="flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-200 px-1.5 text-xs font-semibold text-[#032147]"
            data-testid={`card-count-${column.id}`}
          >
            {column.cards.length}
          </span>
          <button
            type="button"
            onClick={() => onOpenAddModal(column.id)}
            aria-label={`Add card to ${column.title}`}
            title="Add card"
            className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[#753991] shadow-2xs hover:bg-[#753991] hover:text-white transition-colors"
            data-testid={`add-card-header-btn-${column.id}`}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Cards List */}
      <div className="flex-1 overflow-y-auto pt-3 pb-2 space-y-2.5 min-h-[150px]">
        <SortableContext
          items={column.cards.map((c) => c.id)}
          strategy={verticalListSortingStrategy}
        >
          {column.cards.map((card) => (
            <KanbanCard
              key={card.id}
              card={card}
              columnId={column.id}
              onDelete={onDeleteCard}
            />
          ))}
        </SortableContext>

        {column.cards.length === 0 && (
          <div className="flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 text-center p-4">
            <p className="text-xs font-medium text-[#888888]">No cards yet</p>
            <button
              type="button"
              onClick={() => onOpenAddModal(column.id)}
              className="mt-2 text-xs font-semibold text-[#753991] hover:underline"
            >
              + Add first card
            </button>
          </div>
        )}
      </div>

      {/* Bottom Quick Add Button */}
      <button
        type="button"
        onClick={() => onOpenAddModal(column.id)}
        className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-slate-300 bg-white/70 py-2 text-xs font-semibold text-[#753991] hover:border-[#753991] hover:bg-purple-50/50 transition-colors"
        data-testid={`add-card-btn-${column.id}`}
      >
        <Plus className="h-3.5 w-3.5" />
        Add Card
      </button>
    </div>
  );
};
