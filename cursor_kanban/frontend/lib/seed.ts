import type { Board } from "./types";

export const seedBoard: Board = {
  columns: [
    {
      id: "col-backlog",
      title: "Backlog",
      cards: [
        {
          id: "card-brief",
          title: "Write project brief",
          details: "Capture goals, audience, and success metrics for the launch.",
        },
        {
          id: "card-research",
          title: "Competitor research",
          details: "Note what similar boards do well and where they feel noisy.",
        },
      ],
    },
    {
      id: "col-todo",
      title: "To Do",
      cards: [
        {
          id: "card-design",
          title: "Design board layout",
          details: "Five equal columns, clear hierarchy, restrained color.",
        },
        {
          id: "card-copy",
          title: "Draft column names",
          details: "Keep labels short so they still read at a glance.",
        },
      ],
    },
    {
      id: "col-progress",
      title: "In Progress",
      cards: [
        {
          id: "card-dnd",
          title: "Build drag and drop",
          details: "Move cards between columns and reorder within a column.",
        },
      ],
    },
    {
      id: "col-review",
      title: "Review",
      cards: [
        {
          id: "card-a11y",
          title: "Accessibility pass",
          details: "Keyboard drag, focus rings, and usable empty columns.",
        },
      ],
    },
    {
      id: "col-done",
      title: "Done",
      cards: [
        {
          id: "card-seed",
          title: "Seed dummy data",
          details: "The board should never open empty.",
        },
      ],
    },
  ],
};
