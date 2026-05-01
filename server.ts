import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type {
  ActiveDebate,
  AppBootstrap,
  DashboardData,
  HistoryItem,
  KnowledgeModule,
  PerformanceData,
  UserProfile,
} from './src/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(express.json());

const defaultUser: UserProfile = {
  id: 'user-1',
  name: 'Debater',
  email: 'debater@mindarena.app',
  title: 'Logic Apprentice',
  streak: 4,
};

const dashboard: DashboardData = {
  heroTitle: 'Train arguments that hold up under pressure',
  heroSubtitle:
    'Track your debate history, launch a new round, and keep your core practice loop in one place.',
  stats: {
    logicScore: 92,
    averageResponseSeconds: 13.4,
    winRate: 71,
    debatesCompleted: 24,
  },
  recentDebates: [
    {
      id: 'debate-101',
      topic: 'Should cities ban private cars in dense downtown areas?',
      opponent: 'Policy Simulator',
      status: 'Victory',
      duration: '26m',
      tokens: '1.8k',
      domain: 'Public Policy',
    },
    {
      id: 'debate-102',
      topic: 'Is open-source AI safer than closed development?',
      opponent: 'Systems Analyst',
      status: 'Draw',
      duration: '34m',
      tokens: '2.4k',
      domain: 'AI Governance',
    },
    {
      id: 'debate-103',
      topic: 'Should homework be abolished in primary school?',
      opponent: 'Education Council',
      status: 'Defeat',
      duration: '18m',
      tokens: '1.1k',
      domain: 'Education',
    },
  ],
  recommendations: [
    'Focus on counterexamples in policy debates.',
    'Keep closing statements shorter and more concrete.',
    'Use at least one quantitative citation in economic topics.',
  ],
};

const history: HistoryItem[] = [
  {
    id: 'hist-1',
    topic: 'Ethics of AI Sentience',
    subject: 'Applied Philosophy',
    date: '2026-04-28',
    level: 4,
    status: 'Victory',
    score: 94,
  },
  {
    id: 'hist-2',
    topic: 'Universal Basic Income',
    subject: 'Economics / Policy',
    date: '2026-04-24',
    level: 5,
    status: 'Defeat',
    score: 78,
  },
  {
    id: 'hist-3',
    topic: 'Mars Colonization',
    subject: 'Science / Environment',
    date: '2026-04-20',
    level: 3,
    status: 'Victory',
    score: 89,
  },
  {
    id: 'hist-4',
    topic: 'Standardized Testing',
    subject: 'Education',
    date: '2026-04-17',
    level: 2,
    status: 'Victory',
    score: 91,
  },
];

const performance: PerformanceData = {
  highlights: [
    { label: 'Win Rate', value: '71%', trend: '+4.0%' },
    { label: 'Elo Rating', value: '1,842', trend: '+45' },
    { label: 'Global Rank', value: '#254', trend: '-12', isDown: true },
    { label: 'Avg Response', value: '13.4s', trend: '-0.8s' },
  ],
  skillBalance: [
    { label: 'Logical Consistency', value: 92 },
    { label: 'Rhetorical Flair', value: 74 },
    { label: 'Evidence Integration', value: 88 },
    { label: 'Response Countering', value: 61 },
    { label: 'Emotional Intelligence', value: 82 },
  ],
  insight:
    'Your strongest sessions combine structured rebuttals with one or two concise examples instead of long evidence dumps.',
  recommendation:
    'Practice faster openings. Your strongest improvements come when your first response states the claim, the reason, and one example within 20 seconds.',
  milestoneProgress: 74,
};

const knowledgeBase: KnowledgeModule[] = [
  {
    id: 'kb-1',
    title: 'Socratic Questioning',
    category: 'Core Strategy',
    difficulty: 'Elite',
    status: 'Completed',
    progress: 100,
  },
  {
    id: 'kb-2',
    title: 'Logical Fallacies',
    category: 'Defensive Rhetoric',
    difficulty: 'Beginner',
    status: 'Active',
    progress: 42,
  },
  {
    id: 'kb-3',
    title: 'Kantian Deontology',
    category: 'Ethics',
    difficulty: 'Advanced',
    status: 'Locked',
    progress: 0,
  },
  {
    id: 'kb-4',
    title: 'Heuristics and Biases',
    category: 'Cognitive Psychology',
    difficulty: 'Intermediate',
    status: 'Active',
    progress: 12,
  },
  {
    id: 'kb-5',
    title: 'Game Theory Matrix',
    category: 'Strategy',
    difficulty: 'Elite',
    status: 'Locked',
    progress: 0,
  },
  {
    id: 'kb-6',
    title: 'Stoic Resolve',
    category: 'Emotional Intelligence',
    difficulty: 'Beginner',
    status: 'Active',
    progress: 88,
  },
];

let session = {
  authenticated: false,
  user: null as UserProfile | null,
};

let activeDebate: ActiveDebate | null = null;

function buildBootstrap(): AppBootstrap {
  return {
    session,
    dashboard,
    history,
    performance,
    knowledgeBase,
    activeDebate,
  };
}

function nowLabel() {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/bootstrap', (_req, res) => {
  res.json(buildBootstrap());
});

app.post('/api/session/login', (req, res) => {
  const email = String(req.body?.email ?? '').trim();

  if (!email) {
    res.status(400).send('Email is required.');
    return;
  }

  const nameFromEmail = email.split('@')[0]?.replace(/[._-]/g, ' ') || 'Debater';
  const normalizedName = nameFromEmail.replace(/\b\w/g, (letter) => letter.toUpperCase());

  session = {
    authenticated: true,
    user: {
      ...defaultUser,
      name: normalizedName,
      email,
    },
  };

  res.json(session);
});

app.post('/api/session/logout', (_req, res) => {
  session = { authenticated: false, user: null };
  activeDebate = null;
  res.json({ ok: true });
});

app.post('/api/debates', (req, res) => {
  const topic = String(req.body?.topic ?? '').trim();
  const stance = req.body?.stance === 'Opponent' ? 'Opponent' : 'Proponent';
  const rigor = Math.max(1, Math.min(5, Number(req.body?.rigor ?? 3)));

  if (!topic) {
    res.status(400).send('Topic is required.');
    return;
  }

  activeDebate = {
    id: `debate-${Date.now()}`,
    topic,
    stance,
    rigor,
    stage: 'Opening Statements',
    timerLabel: '08:00',
    status: 'Ready',
    messages: [
      {
        id: `msg-${Date.now()}`,
        role: 'system',
        author: 'Moderator',
        time: nowLabel(),
        content: `Debate created. You are arguing as the ${stance.toLowerCase()} side on: "${topic}".`,
      },
    ],
  };

  res.status(201).json(activeDebate);
});

app.post('/api/debates/current/messages', (req, res) => {
  const content = String(req.body?.content ?? '').trim();

  if (!activeDebate) {
    res.status(404).send('No active debate.');
    return;
  }

  if (!content) {
    res.status(400).send('Message cannot be empty.');
    return;
  }

  activeDebate.messages.push({
    id: `msg-user-${Date.now()}`,
    role: 'user',
    author: session.user?.name ?? 'You',
    time: nowLabel(),
    content,
  });

  activeDebate.messages.push({
    id: `msg-system-${Date.now() + 1}`,
    role: 'system',
    author: 'Moderator',
    time: nowLabel(),
    content:
      'Argument recorded. AI rebuttal is intentionally deferred for now, but the round history is being tracked server-side.',
  });

  activeDebate.status = 'In Progress';

  res.json(activeDebate);
});

const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`MindArena server listening on http://localhost:${port}`);
});
