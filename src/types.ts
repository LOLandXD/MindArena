export type View =
  | 'landing'
  | 'dashboard'
  | 'start-debate'
  | 'arena'
  | 'history'
  | 'performance'
  | 'knowledge-base';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  title: string;
  streak: number;
}

export interface DashboardStats {
  logicScore: number;
  averageResponseSeconds: number;
  winRate: number;
  debatesCompleted: number;
}

export interface RecentDebate {
  id: string;
  topic: string;
  opponent: string;
  status: 'Victory' | 'Defeat' | 'Draw' | 'In Progress';
  duration: string;
  tokens: string;
  domain: string;
}

export interface DashboardData {
  heroTitle: string;
  heroSubtitle: string;
  stats: DashboardStats;
  recentDebates: RecentDebate[];
  recommendations: string[];
}

export interface DebateSetup {
  topic: string;
  stance: 'Proponent' | 'Opponent';
  rigor: number;
}

export interface DebateMessage {
  id: string;
  role: 'system' | 'user';
  author: string;
  time: string;
  content: string;
}

export interface ActiveDebate {
  id: string;
  topic: string;
  stance: 'Proponent' | 'Opponent';
  rigor: number;
  stage: string;
  timerLabel: string;
  status: string;
  messages: DebateMessage[];
}

export interface HistoryItem {
  id: string;
  topic: string;
  subject: string;
  date: string;
  level: number;
  status: 'Victory' | 'Defeat' | 'Draw' | 'In Progress';
  score: number;
}

export interface PerformanceMetric {
  label: string;
  value: string;
  trend: string;
  isDown?: boolean;
}

export interface PerformanceData {
  highlights: PerformanceMetric[];
  skillBalance: Array<{ label: string; value: number }>;
  insight: string;
  recommendation: string;
  milestoneProgress: number;
}

export interface KnowledgeModule {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Elite';
  status: 'Active' | 'Locked' | 'Completed';
  progress: number;
}

export interface AppBootstrap {
  session: {
    authenticated: boolean;
    user: UserProfile | null;
  };
  dashboard: DashboardData;
  history: HistoryItem[];
  performance: PerformanceData;
  knowledgeBase: KnowledgeModule[];
  activeDebate: ActiveDebate | null;
}
