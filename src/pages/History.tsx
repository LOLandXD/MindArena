import React from 'react';
import { 
  Trophy, 
  ChevronLeft, 
  ChevronRight, 
  Brain, 
  Globe, 
  Scale, 
  Search,
  ArrowUpRight,
  Target,
  Rocket,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function History() {
  const data = [
    { id: 1, topic: 'Ethics of AI Sentience', subject: 'Applied Philosophy', date: 'Oct 24, 2023', level: 3, status: 'Victory', score: 94, icon: <Brain className="text-primary" /> },
    { id: 2, topic: 'Universal Basic Income', subject: 'Economics / Policy', date: 'Oct 21, 2023', level: 5, status: 'Defeat', score: 78, icon: <Scale className="text-secondary" /> },
    { id: 3, topic: 'Mars Colonization', subject: 'Space / Environment', date: 'Oct 18, 2023', level: 2, status: 'Victory', score: 89, icon: <Rocket className="text-primary" /> },
    { id: 4, topic: 'Standardized Testing', subject: 'Social / Education', date: 'Oct 15, 2023', level: 4, status: 'Victory', score: 91, icon: <Target className="text-primary" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface">Debate History</h1>
          <p className="text-secondary text-sm">Track your intellectual victories and philosophical evolutions.</p>
        </div>
        <div className="flex gap-4">
          <StatBox value="42" label="Victories" color="tertiary" />
          <StatBox value="18" label="Defeats" color="error" />
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low/50">
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Topic & Subject</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Level</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary text-center">Status</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary text-center">Score</th>
                <th className="px-6 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {data.map((row) => (
                <tr key={row.id} className="group hover:bg-surface-container-high transition-all cursor-pointer">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant flex items-center justify-center group-hover:border-primary transition-all">
                        {React.cloneElement(row.icon as React.ReactElement, { className: cn("w-5 h-5", (row.icon as React.ReactElement).props.className) })}
                      </div>
                      <div>
                        <div className="font-bold text-on-surface group-hover:text-primary transition-colors">{row.topic}</div>
                        <div className="text-xs text-secondary mt-0.5">{row.subject}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-mono text-xs text-secondary">
                    <div className="flex items-center gap-2">
                       <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((lvl) => (
                          <div key={lvl} className={cn("w-3 h-1 rounded-full", lvl <= row.level ? "bg-primary" : "bg-outline-variant")} />
                        ))}
                       </div>
                       LVL 0{row.level}
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <div className="flex justify-center">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border flex items-center gap-1.5",
                        row.status === 'Victory' 
                          ? "bg-tertiary-container/20 text-tertiary border-tertiary/20" 
                          : "bg-error-container/20 text-error border-error/20"
                      )}>
                        <span className={cn("w-1.5 h-1.5 rounded-full", row.status === 'Victory' ? "bg-tertiary shadow-[0_0_8px_#34d399]" : "bg-error")} />
                        {row.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center font-mono text-lg font-bold text-on-surface">
                    {row.score}<span className="text-[10px] text-secondary ml-1 font-normal">/100</span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="text-sm font-bold text-on-surface">{row.date}</div>
                    <div className="text-[9px] text-secondary font-mono tracking-widest mt-1 uppercase">14:42 UTC</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center bg-surface-container-low/30 gap-4">
          <div className="text-[10px] font-bold text-secondary uppercase tracking-widest">
            Showing <span className="text-on-surface">1-4</span> of <span className="text-on-surface">60</span> recorded debates
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-secondary hover:bg-surface-container-high transition-all"><ChevronLeft className="w-5 h-5" /></button>
            <button className="px-4 h-10 rounded-lg border border-outline-variant text-[10px] font-bold text-on-surface bg-surface-container-highest uppercase tracking-widest">1</button>
            <button className="px-4 h-10 rounded-lg border border-outline-variant text-[10px] font-bold text-secondary hover:bg-surface-container-high transition-all uppercase tracking-widest">2</button>
            <button className="px-4 h-10 rounded-lg border border-outline-variant text-[10px] font-bold text-secondary hover:bg-surface-container-high transition-all uppercase tracking-widest">3</button>
            <button className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-secondary hover:bg-surface-container-high transition-all"><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>

      {/* Featured Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InsightCard icon={<TrendingUp className="text-tertiary" />} label="Win Streak" value="3 Sessions" sub="Highest lvl victory: LVL 04" />
        <InsightCard icon={<Brain className="text-primary" />} label="Strongest Domain" value="Philosophy" sub="Avg Score: 92% across 12 sessions" />
        <InsightCard icon={<ArrowUpRight className="text-secondary" />} label="Improvement Area" value="Economics" sub="Focus on quantitative citations" />
      </div>
    </div>
  );
}

function StatBox({ value, label, color }: any) {
  return (
    <div className="bg-surface-container border border-outline-variant px-8 py-5 rounded-2xl flex flex-col items-center min-w-[140px] shadow-xl">
      <span className={cn("text-3xl font-black tracking-tighter", color === 'tertiary' ? "text-tertiary" : "text-error")}>{value}</span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mt-1">{label}</span>
    </div>
  );
}

function InsightCard({ icon, label, value, sub }: any) {
  return (
    <div className="bg-surface-container border border-outline-variant p-6 rounded-2xl flex flex-col gap-4 group hover:border-primary/30 transition-all">
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 rounded-xl bg-background border border-outline-variant flex items-center justify-center group-hover:scale-110 transition-transform">
          {React.cloneElement(icon, { className: "w-5 h-5" })}
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary">{label}</span>
      </div>
      <div>
        <div className="text-2xl font-bold text-on-surface">{value}</div>
        <p className="text-[10px] text-secondary font-medium tracking-tight mt-1">{sub}</p>
      </div>
    </div>
  );
}
