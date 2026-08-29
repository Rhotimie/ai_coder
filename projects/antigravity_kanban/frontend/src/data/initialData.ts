import { KanbanColumn } from '@/types/kanban';

export const initialColumns: KanbanColumn[] = [
  {
    id: 'col-backlog',
    title: 'Backlog',
    cards: [
      {
        id: 'card-1',
        title: 'Research Cloud Infrastructure',
        details: 'Evaluate AWS vs GCP multi-region deployment costs and latency tradeoffs.',
      },
      {
        id: 'card-2',
        title: 'Audit Accessibility Compliance',
        details: 'Perform WCAG 2.1 AA audit across all primary user workflows and forms.',
      },
    ],
  },
  {
    id: 'col-todo',
    title: 'To Do',
    cards: [
      {
        id: 'card-3',
        title: 'Implement Dark Mode Support',
        details: 'Configure theme tokens and persist user preference in local settings.',
      },
      {
        id: 'card-4',
        title: 'Optimize Core Web Vitals',
        details: 'Improve LCP and CLS scores by optimizing image delivery and lazy loading.',
      },
    ],
  },
  {
    id: 'col-in-progress',
    title: 'In Progress',
    cards: [
      {
        id: 'card-5',
        title: 'Refactor Authentication Flow',
        details: 'Upgrade session management to support PKCE OAuth 2.0 authorization code flow.',
      },
      {
        id: 'card-6',
        title: 'Integrate Analytics Pipeline',
        details: 'Send structured event telemetry with client-side batching and backoff.',
      },
    ],
  },
  {
    id: 'col-review',
    title: 'In Review',
    cards: [
      {
        id: 'card-7',
        title: 'API Rate Limiter Middleware',
        details: 'Token bucket algorithm implemented via Redis cluster with sliding window fallback.',
      },
    ],
  },
  {
    id: 'col-done',
    title: 'Done',
    cards: [
      {
        id: 'card-8',
        title: 'Project Architecture Setup',
        details: 'Configured repository structure, Tailwind color design system, and CI pipeline.',
      },
    ],
  },
];
