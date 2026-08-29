export interface KanbanCard {
  id: string;
  title: string;
  details: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  cards: KanbanCard[];
}

export interface KanbanBoard {
  title: string;
  columns: KanbanColumn[];
}
