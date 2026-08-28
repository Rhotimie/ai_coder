"use client"

import React, { useMemo, useRef, useState } from "react"
import {
  addCard,
  createInitialBoardState,
  deleteCard,
  moveCard,
  renameColumn,
  type BoardState,
  type Card,
  type Column,
} from "../lib/board"

function createCardId() {
  return `card-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function ColumnPanel({
  column,
  draggedCardIdRef,
  onRename,
  onAddCard,
  onDeleteCard,
  onDragStart,
  onDragEnd,
  onDropCard,
}: {
  column: Column
  draggedCardIdRef: React.RefObject<string | null>
  onRename: (columnId: string, title: string) => void
  onAddCard: (columnId: string, title: string, details: string) => void
  onDeleteCard: (cardId: string) => void
  onDragStart: (cardId: string) => void
  onDragEnd: () => void
  onDropCard: (cardId: string, columnId: string) => void
}) {
  const [isComposerOpen, setComposerOpen] = useState(false)
  const [draftTitle, setDraftTitle] = useState("")
  const [draftDetails, setDraftDetails] = useState("")
  const [isOver, setIsOver] = useState(false)

  return (
    <section
      className={`column ${isOver ? "column--over" : ""}`}
      data-column-id={column.id}
      onDragOver={(event) => {
        event.preventDefault()
        setIsOver(true)
      }}
      onDragLeave={() => setIsOver(false)}
      onDrop={(event) => {
        event.preventDefault()
        setIsOver(false)
        const cardId = draggedCardIdRef.current ?? event.dataTransfer.getData("text/plain")
        if (cardId) {
          onDropCard(cardId, column.id)
        }
      }}
    >
      <div className="column__header">
        <input
          className="column__title"
          aria-label="Column name"
          value={column.title}
          onChange={(event) => onRename(column.id, event.target.value)}
        />
        <span className="column__count">{column.cards.length}</span>
      </div>

      <div className="column__cards">
        {column.cards.map((card) => (
          <article
            className="card"
            key={card.id}
            draggable
            onDragStart={(event) => {
              draggedCardIdRef.current = card.id
              event.dataTransfer.effectAllowed = "move"
              event.dataTransfer.setData("text/plain", card.id)
              onDragStart(card.id)
            }}
            onDragEnd={onDragEnd}
          >
            <div className="card__topline" />
            <div className="card__body">
              <h3 className="card__title">{card.title}</h3>
              <p className="card__details">{card.details}</p>
            </div>
            <button
              className="card__delete"
              type="button"
              onClick={() => onDeleteCard(card.id)}
            >
              Delete
            </button>
          </article>
        ))}
      </div>

      {isComposerOpen ? (
        <form
          className="composer"
          onSubmit={(event) => {
            event.preventDefault()
            const title = draftTitle.trim()
            const details = draftDetails.trim()
            if (!title || !details) {
              return
            }
            onAddCard(column.id, title, details)
            setDraftTitle("")
            setDraftDetails("")
            setComposerOpen(false)
          }}
        >
          <label className="composer__field">
            <span>Title</span>
            <input
              aria-label="New card title"
              value={draftTitle}
              onChange={(event) => setDraftTitle(event.target.value)}
              placeholder="New card title"
            />
          </label>
          <label className="composer__field">
            <span>Details</span>
            <textarea
              aria-label="New card details"
              value={draftDetails}
              onChange={(event) => setDraftDetails(event.target.value)}
              placeholder="Short card details"
              rows={4}
            />
          </label>
          <div className="composer__actions">
            <button className="button button--secondary" type="button" onClick={() => setComposerOpen(false)}>
              Cancel
            </button>
            <button className="button button--primary" type="submit">
              Add card
            </button>
          </div>
        </form>
      ) : (
        <button className="button button--ghost" type="button" onClick={() => setComposerOpen(true)}>
          + Add card
        </button>
      )}
    </section>
  )
}

export function KanbanBoard() {
  const [board, setBoard] = useState<BoardState>(() => createInitialBoardState())
  const draggedCardIdRef = useRef<string | null>(null)

  const totalCards = useMemo(
    () => board.columns.reduce((count, column) => count + column.cards.length, 0),
    [board],
  )

  function handleRename(columnId: string, title: string) {
    setBoard((current) => renameColumn(current, columnId, title))
  }

  function handleAddCard(columnId: string, title: string, details: string) {
    const card: Card = { id: createCardId(), title, details }
    setBoard((current) => addCard(current, columnId, card))
  }

  function handleDeleteCard(cardId: string) {
    setBoard((current) => deleteCard(current, cardId))
  }

  function handleDropCard(cardId: string, columnId: string) {
    setBoard((current) => moveCard(current, cardId, columnId))
  }

  return (
    <main className="shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Single board workspace</p>
          <h1>Kanban that feels sharp, focused, and simple.</h1>
          <p className="lede">
            One board. Five renameable columns. Fast card movement, no extra clutter.
          </p>
        </div>
        <div className="hero__stats" aria-label="board summary">
          <div>
            <strong>{board.columns.length}</strong>
            <span>Columns</span>
          </div>
          <div>
            <strong>{totalCards}</strong>
            <span>Cards</span>
          </div>
        </div>
      </section>

      <section className="board" aria-label="Kanban board">
        {board.columns.map((column) => (
          <ColumnPanel
            key={column.id}
            column={column}
            draggedCardIdRef={draggedCardIdRef}
            onRename={handleRename}
            onAddCard={handleAddCard}
            onDeleteCard={handleDeleteCard}
            onDragStart={(cardId) => {
              draggedCardIdRef.current = cardId
            }}
            onDragEnd={() => {
              draggedCardIdRef.current = null
            }}
            onDropCard={handleDropCard}
          />
        ))}
      </section>
    </main>
  )
}
