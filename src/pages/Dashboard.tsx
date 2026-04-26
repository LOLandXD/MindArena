import React from 'react';
import { motion } from 'motion/react';
import { 
  Bolt, 
  TrendingUp, 
  Clock, 
  History as HistoryIcon,
  ChevronRight,
  Brain,
  Globe,
  Scale,
  Plus,
  Trophy,
  Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Dashboard() {
  return (
    <div className="space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Section */}
      <section className="relative h-[320px] rounded-2xl overflow-hidden border border-outline-variant bg-surface-container-low group">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }} 
        />
        <div className="relative z-20 h-full flex flex-col justify-center px-12">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary font-bold tracking-[0.2em] text-[10px] mb-4 uppercase"
          >
            Advanced Neural Engine v4.2
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black tracking-tighter text-on-surface mb-6 max-w-2xl leading-tight"
          >
            Challenge the Intelligence within
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4"
          >
            <button className="bg-primary text-on-primary font-bold px-8 py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
              <Bolt className="w-5 h-5 fill-current" />
              Quick Start
            </button>
            <button className="bg-surface-container-high/50 backdrop-blur-sm border border-outline text-on-surface font-bold px-8 py-3 rounded-lg hover:bg-surface-container-highest transition-all active:scale-95">
              Browse Modules
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bento Layout Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Performance Summary */}
        <div className="md:col-span-8 bg-surface-container border border-outline-variant rounded-2xl p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-on-surface">Performance Summary</h2>
              <p className="text-secondary text-sm">Real-time analytical metrics</p>
            </div>
            <div className="flex bg-surface-container-lowest p-1 rounded-lg border border-outline-variant">
              {['7D', '30D', 'ALL'].map((tab) => (
                <button 
                  key={tab}
                  className={cn(
                    "px-3 py-1 text-[10px] font-bold rounded transition-all",
                    tab === '7D' ? "bg-surface-container-highest text-on-surface" : "text-secondary hover:text-on-surface"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatItem 
              label="Logic Score" 
              value="94.2%" 
              trend="+2.4%" 
              trendLabel="from last session" 
              progress={94} 
              color="primary"
            />
            <StatItem 
              label="Latency" 
              value="1.2s" 
              trend="-0.3s" 
              trendLabel="optimization" 
              progress={82} 
              color="tertiary"
            />
            <StatItem 
              label="Win Rate" 
              value="68/72" 
              trend="+4.2%" 
              trendLabel="consistent" 
              progress={94} 
              color="primary"
            />
          </div>
        </div>

        {/* Master Strategist Card */}
        <div className="md:col-span-4 bg-primary-container border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative group overflow-hidden">
          <Trophy className="absolute -right-6 -top-6 w-40 h-40 text-on-primary-container opacity-5 group-hover:rotate-12 transition-transform duration-700" />
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-on-primary-container leading-tight">Master Strategist</h3>
            <p className="text-on-primary-container/70 text-xs mt-1">Tier 4 Achievement Unlocked</p>
          </div>
          <button className="relative z-10 bg-on-primary-container text-primary-container px-4 py-2 rounded-lg font-bold text-xs w-full hover:brightness-110 active:scale-[0.98] transition-all">
            View Rewards
          </button>
        </div>

        {/* Recent Debates */}
        <div className="md:col-span-12 lg:col-span-9 bg-surface-container border border-outline-variant rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-high/30">
            <h2 className="text-xl font-bold tracking-tight text-on-surface">Recent Debates</h2>
            <button className="text-primary text-xs font-bold flex items-center gap-2 hover:underline group">
              View All History
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="divide-y divide-outline-variant">
            <DebateItem 
              icon={<Brain className="w-5 h-5 text-primary" />} 
              title="The Ethics of Neural Link Systems" 
              opponent="Alpha-Beta-9" 
              status="Victory" 
              time="42 Minutes" 
              tokens="3.4k" 
            />
            <DebateItem 
              icon={<Globe className="w-5 h-5 text-violet-400" />} 
              title="Resource Allocation in Martian Colonies" 
              opponent="GPT-Omni" 
              status="Draw" 
              time="18 Minutes" 
              tokens="1.2k" 
            />
            <DebateItem 
              icon={<Scale className="w-5 h-5 text-emerald-500" />} 
              title="Universal Basic Income vs Energy Credits" 
              opponent="DeepMind-X" 
              status="Victory" 
              time="1h 04m" 
              tokens="5.8k" 
            />
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="md:col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-surface-container border border-outline-variant rounded-2xl p-6">
            <h3 className="text-sm font-bold text-on-surface mb-6 uppercase tracking-widest px-1">Neural Tuning</h3>
            <div className="space-y-4">
              <TuningBar label="Rhetoric" value={82} color="primary" />
              <TuningBar label="Extraction" value={91} color="tertiary" />
              <TuningBar label="Empathy" value={34} color="error" />
            </div>
            <button className="w-full mt-8 py-2.5 border border-outline text-on-surface text-xs font-bold rounded-lg hover:bg-surface-container-highest transition-all">
              Initialize Calibration
            </button>
          </div>

          <div className="bg-surface-container-high/50 border border-outline-variant rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Lightbulb className="w-12 h-12 text-primary" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-on-surface text-sm">Pro Tip</h3>
            </div>
            <p className="text-xs text-secondary leading-relaxed">
              Using <span className="text-on-surface">"Socratic questioning"</span> modules against Alpha-class models increases logic scores by an average of 14.3%.
            </p>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:shadow-primary/40 active:scale-95 transition-all z-50">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}

function StatItem({ label, value, trend, trendLabel, progress, color }: any) {
  return (
    <div className="space-y-2">
      <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{label}</span>
      <div className="text-3xl font-black text-on-surface tracking-tighter">{value}</div>
      <div className={cn("flex items-center gap-1 text-xs font-medium", color === 'primary' ? "text-primary" : "text-tertiary")}>
        <TrendingUp className="w-3 h-3" />
        {trend} <span className="text-secondary font-normal">{trendLabel}</span>
      </div>
      <div className="w-full bg-surface-container-highest h-1 rounded-full mt-4">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className={cn("h-1 rounded-full", color === 'primary' ? "bg-primary" : "bg-tertiary")} 
        />
      </div>
    </div>
  );
}

function TuningBar({ label, value, color }: any) {
  const colorMap = {
    primary: 'bg-primary',
    tertiary: 'bg-tertiary',
    error: 'bg-error'
  };
  const textMap = {
    primary: 'text-primary',
    tertiary: 'text-tertiary',
    error: 'text-error'
  };
  
  return (
    <div>
      <div className="flex justify-between text-[10px] mb-2 uppercase tracking-wider font-bold">
        <span className="text-secondary">{label}</span>
        <span className={textMap[color as keyof typeof textMap]}>{value}%</span>
      </div>
      <div className="w-full bg-surface-container-highest h-1 rounded-full">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className={cn("h-1 rounded-full", colorMap[color as keyof typeof colorMap])} 
        />
      </div>
    </div>
  );
}

function DebateItem({ icon, title, opponent, status, time, tokens }: any) {
  return (
    <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-surface-bright transition-all cursor-pointer group border-l-2 border-transparent hover:border-primary">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-center group-hover:border-primary/50 transition-colors">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-on-surface text-sm group-hover:text-primary transition-colors">{title}</h4>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[10px] text-secondary font-medium">Opponent: {opponent}</span>
            <span className="w-1 h-1 bg-outline rounded-full" />
            <span className={cn(
              "text-[10px] font-black uppercase tracking-widest",
              status === 'Victory' ? "text-tertiary" : "text-secondary"
            )}>{status}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-right hidden sm:block">
          <div className="text-sm font-bold text-on-surface">{time}</div>
          <div className="text-[10px] text-secondary uppercase font-bold tracking-widest">{tokens} Tokens</div>
        </div>
        <ChevronRight className="w-5 h-5 text-secondary group-hover:text-primary transition-all group-hover:translate-x-1" />
      </div>
    </div>
  );
}
