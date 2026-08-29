"use client";

import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface AddCardModalProps {
  isOpen: boolean;
  columnTitle: string;
  onClose: () => void;
  onAddCard: (title: string, details: string) => void;
}

export const AddCardModal: React.FC<AddCardModalProps> = ({
  isOpen,
  columnTitle,
  onClose,
  onAddCard,
}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setDetails("");
      setTimeout(() => {
        titleInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;
    onAddCard(trimmedTitle, details.trim());
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-150"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-card-title"
    >
      <div
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3
              id="add-card-title"
              className="text-lg font-semibold text-[#032147]"
            >
              Add New Card
            </h3>
            <p className="text-xs text-[#888888] mt-0.5">
              Adding to column: <span className="font-medium text-[#209dd7]">{columnTitle}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-lg p-1.5 text-[#888888] hover:bg-slate-100 hover:text-[#032147] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label
              htmlFor="card-title-input"
              className="block text-xs font-semibold uppercase tracking-wider text-[#888888] mb-1.5"
            >
              Card Title <span className="text-[#753991]">*</span>
            </label>
            <input
              id="card-title-input"
              ref={titleInputRef}
              type="text"
              required
              placeholder="e.g. Implement OAuth Login"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-[#032147] placeholder-[#888888] focus:border-[#209dd7] focus:outline-hidden focus:ring-2 focus:ring-[#209dd7]/20 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="card-details-input"
              className="block text-xs font-semibold uppercase tracking-wider text-[#888888] mb-1.5"
            >
              Details
            </label>
            <textarea
              id="card-details-input"
              rows={4}
              placeholder="Add additional context or requirements..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-[#032147] placeholder-[#888888] focus:border-[#209dd7] focus:outline-hidden focus:ring-2 focus:ring-[#209dd7]/20 transition-all resize-none"
            />
          </div>

          <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#888888] hover:bg-slate-100 hover:text-[#032147] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim()}
              className="rounded-lg bg-[#753991] px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#622f7a] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Create Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
