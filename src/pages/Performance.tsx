import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUp, 
  ArrowDown, 
  Search, 
  Settings, 
  Bell, 
  Cpu, 
  Brain, 
  ShieldAlert, 
  Bolt,
  Zap,
  Activity,
  LineChart
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Performance() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-1 leading-tight">Performance Insights</h2>
        <p className="text-secondary text-sm">Real-time analysis of your debating trajectory and cognitive patterns.</p>
      </header>

      {/* Summary Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <HighlightCard label="Win Rate" value="68.4" unit="%" trend="+2.1%" icon={<Activity className="text-primary w-4 h-4" />} />
        <HighlightCard label="Elo Rating" value="1,842" trend="+45" icon={<LineChart className="text-tertiary w-4 h-4" />} />
        <HighlightCard label="Global Rank" value="#254" trend="-12" isDown icon={<GlobeIcon className="text-secondary w-4 h-4" />} />
        <HighlightCard label="Avg Response" value="14.2" unit="s" trend="-0.8s" icon={<Bolt className="text-primary w-4 h-4" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Elo Progress Trend */}
        <div className="lg:col-span-2 bg-surface-container border border-outline-variant rounded-2xl overflow-hidden shadow-2xl flex flex-col">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-high/30">
            <h4 className="font-bold text-on-surface flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" /> Elo Progress Trend
            </h4>
            <div className="flex gap-2 bg-surface-container-lowest p-1 rounded-lg border border-outline-variant">
              {['7D', '30D', 'ALL'].map(tab => (
                <button key={tab} className={cn("text-[9px] font-black px-3 py-1.5 rounded-md transition-all uppercase tracking-widest", tab === '30D' ? 'bg-primary text-on-primary' : 'text-secondary hover:text-on-surface')}>{tab}</button>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-grid relative p-8 h-80 flex items-center justify-center">
            {/* Custom SVG Chart */}
            <svg className="w-full h-full max-h-60" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M0,150 Q100,140 200,100 T400,80 T600,40 T800,20" 
                fill="none" 
                stroke="#a78bfa" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
              <path d="M0,150 Q100,140 200,100 T400,80 T600,40 T800,20 L800,200 L0,200 Z" fill="url(#chart-grad)" />
              
              {[200, 400, 600, 800].map((cx, i) => (
                <circle key={i} cx={cx} cy={[100, 80, 40, 20][i]} r="5" fill="#09090b" stroke="#a78bfa" strokeWidth="2" />
              ))}
            </svg>
            <div className="absolute bottom-6 left-8 right-8 flex justify-between text-[10px] text-secondary font-black uppercase tracking-[0.2em] opacity-40">
              <span>Day 01</span>
              <span>Day 10</span>
              <span>Day 20</span>
              <span>Day 30</span>
            </div>
          </div>
        </div>

        {/* Skill Balance Radar / List */}
        <div className="bg-surface-container border border-outline-variant rounded-2xl p-8 shadow-2xl flex flex-col">
          <h4 className="font-bold text-on-surface mb-8 uppercase tracking-widest text-xs px-1">Skill Balance Radar</h4>
          <div className="space-y-6 flex-1">
            <SkillProgressBar label="Logical Consistency" value={92} />
            <SkillProgressBar label="Rhetorical Flair" value={74} />
            <SkillProgressBar label="Evidence Integration" value={88} />
            <SkillProgressBar label="Response Countering" value={61} />
            <SkillProgressBar label="Emotional Intelligence" value={82} />
          </div>
          <div className="mt-12 pt-8 border-t border-outline-variant">
            <p className="text-[9px] text-secondary font-black uppercase tracking-[0.2em] mb-3">Primary Weakness</p>
            <div className="flex items-center gap-3 text-error text-sm font-bold bg-error/5 border border-error/10 p-4 rounded-xl">
              <ShieldAlert className="w-5 h-5" />
              Ad-Hominem Resilience
            </div>
          </div>
        </div>
      </div>

      {/* AI Feedback Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 bg-surface-container border border-outline-variant rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-4 bg-surface-container-high border-b border-outline-variant flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_#34d399]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">OBSIDIAN_CORE // AI_INSIGHT_ENGINE_v4.2</span>
            </div>
            <span className="text-[9px] font-mono text-secondary font-bold tracking-widest">LAST SYNC: 2m AGO</span>
          </div>
          <div className="p-8 font-mono text-sm space-y-6">
            <div className="flex gap-6">
              <span className="text-primary font-black uppercase tracking-tighter shrink-0 w-24">ANALYSIS:</span>
              <p className="text-zinc-300 leading-[1.6] group">
                Your performance in the <span className="text-on-surface underline decoration-primary decoration-2 underline-offset-4 cursor-help">"Geopolitical Ethics"</span> module shows a significant spike in logical deductive reasoning. You are currently outperforming 94% of users in structured rebuttals.
              </p>
            </div>
            <div className="flex gap-6">
              <span className="text-tertiary font-black uppercase tracking-tighter shrink-0 w-24">SUGGESTION:</span>
              <p className="text-zinc-300 leading-[1.6]">
                Pivot your training toward "Soft Skill Empathy" to bridge the gap in your skill balance. Your high logic scores are being slightly offset by a lack of emotional resonance in concluding statements.
              </p>
            </div>
            <div className="p-6 bg-background/50 border border-outline-variant rounded-xl mt-6">
              <div className="flex items-center justify-between mb-3 text-[10px] font-black tracking-[0.2em] uppercase">
                <span className="text-secondary">Next Milestone</span>
                <span className="text-primary">74% Complete</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "74%" }}
                  className="h-full bg-primary" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary-container p-8 rounded-2xl flex flex-col justify-between group overflow-hidden relative border border-white/10 shadow-2xl shadow-primary/20">
          <Zap className="absolute -right-6 -top-6 w-32 h-32 text-on-primary-container opacity-5 group-hover:scale-110 transition-transform duration-1000" />
          <div className="relative z-10">
            <Bolt className="text-on-primary-container w-8 h-8 mb-6 fill-current" />
            <h5 className="text-on-primary-container font-black text-2xl leading-none mb-3 tracking-tighter">Boost your logic.</h5>
            <p className="text-on-primary-container/80 text-xs leading-relaxed font-medium">Unlock the Advanced Syllogism workshop to improve your consistency scores by an estimated 12%.</p>
          </div>
          <button className="relative z-10 mt-8 bg-on-primary-container text-primary-container font-black py-3 rounded-xl text-xs uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 shadow-xl">
            Start Workshop
          </button>
        </div>
      </div>
    </div>
  );
}

function HighlightCard({ label, value, unit, trend, isDown, icon }: any) {
  return (
    <div className="bg-surface-container border border-outline-variant p-6 rounded-2xl group hover:border-primary/40 transition-all shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-secondary text-[10px] font-bold uppercase tracking-[0.2em]">{label}</p>
        <div className="w-8 h-8 rounded-lg bg-background border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <h3 className="text-4xl font-black text-on-surface tracking-tighter">
          {value}{unit && <span className="text-lg text-secondary ml-0.5">{unit}</span>}
        </h3>
        <span className={cn(
          "text-[10px] font-black tracking-widest flex items-center gap-0.5 px-2 py-1 rounded-md",
          isDown ? "text-error" : "text-tertiary"
        )}>
          {isDown ? <ArrowDown className="w-3 h-3" /> : <ArrowUp className="w-3 h-3" />}
          {trend}
        </span>
      </div>
    </div>
  );
}

function SkillProgressBar({ label, value }: { label: string, value: number }) {
  return (
    <div className="group">
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-3">
        <span className="text-secondary group-hover:text-on-surface transition-colors">{label}</span>
        <span className="text-on-surface">{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className="h-full bg-primary" 
        />
      </div>
    </div>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
