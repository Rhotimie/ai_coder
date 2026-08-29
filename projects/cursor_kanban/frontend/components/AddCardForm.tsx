"use client";

import { FormEvent, useState } from "react";

type AddCardFormProps = {
  columnId: string;
  onAdd: (columnId: string, title: string, details: string) => void;
};

export function AddCardForm({ columnId, onAdd }: AddCardFormProps) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(columnId, trimmed, details.trim());
    setTitle("");
    setDetails("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-auto flex flex-col gap-2 border-t border-black/5 pt-3"
      data-testid={`add-card-form-${columnId}`}
    >
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Card title"
        aria-label="Card title"
        data-testid={`add-card-title-${columnId}`}
        className="w-full rounded-lg border border-black/8 bg-white px-3 py-2 text-sm text-navy outline-none placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
      <textarea
        value={details}
        onChange={(event) => setDetails(event.target.value)}
        placeholder="Details"
        aria-label="Card details"
        rows={2}
        data-testid={`add-card-details-${columnId}`}
        className="w-full resize-none rounded-lg border border-black/8 bg-white px-3 py-2 text-sm text-navy outline-none placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
      <button
        type="submit"
        data-testid={`add-card-submit-${columnId}`}
        className="rounded-lg bg-purple px-3 py-2 text-sm font-medium text-white transition hover:brightness-110"
      >
        Add card
      </button>
    </form>
  );
}
