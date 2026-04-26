import React from 'react';
import { motion } from 'motion/react';
import { 
  Settings, 
  Bolt, 
  ShieldCheck, 
  ShieldAlert, 
  Users,
  Trophy,
  ArrowRight,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function StartDebate() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-2">Initialize New Sequence</h2>
        <p className="text-secondary text-sm">Define the parameters for your next ideological confrontation.</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Form */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="bg-surface-container border border-outline-variant rounded-2xl p-8 space-y-8 shadow-2xl shadow-black/40">
            {/* Topic Definition */}
            <div>
              <label className="block text-[10px] font-bold text-secondary mb-3 uppercase tracking-[0.2em]">The Core Proposition</label>
              <textarea 
                className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/40 rounded-xl p-4 text-on-surface placeholder:text-secondary/30 min-h-[140px] transition-all resize-none outline-none font-sans"
                placeholder="Example: Artificial General Intelligence constitutes an existential risk to carbon-based civilizations..."
              />
              <div className="mt-3 flex gap-2">
                <button className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/20 transition-all flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> Generate Random Prompt
                </button>
                <button className="text-[10px] font-bold text-secondary bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-outline-variant hover:text-on-surface transition-all">
                  Browse Templates
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Role Selection */}
              <div>
                <label className="block text-[10px] font-bold text-secondary mb-3 uppercase tracking-[0.2em]">Your Assigned Role</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center justify-center p-4 border-2 border-primary bg-primary/5 rounded-xl transition-all group ring-4 ring-primary/5">
                    <ShieldCheck className="w-5 h-5 text-primary mb-2 fill-primary/10" />
                    <span className="text-xs font-bold text-on-surface">Proponent</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 border border-outline-variant bg-surface-container-lowest rounded-xl hover:border-outline hover:bg-surface-container-low transition-all group">
                    <ShieldAlert className="w-5 h-5 text-secondary group-hover:text-on-surface mb-2" />
                    <span className="text-xs font-medium text-secondary group-hover:text-on-surface">Opponent</span>
                  </button>
                </div>
              </div>

              {/* Rigor Level */}
              <div>
                <label className="block text-[10px] font-bold text-secondary mb-3 uppercase tracking-[0.2em]">System Rigor</label>
                <div className="space-y-4 pt-2">
                  <input 
                    type="range" 
                    min="1" 
                    max="5" 
                    defaultValue="4"
                    className="w-full h-1.5 bg-surface-container-lowest rounded-full appearance-none cursor-pointer accent-primary" 
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-secondary font-bold">CASUAL</span>
                    <div className="text-center">
                      <span className="text-[10px] font-bold text-primary block uppercase tracking-wider">Socratic Master</span>
                      <span className="text-[8px] text-secondary/60 uppercase font-bold tracking-widest mt-0.5">Fallacies strictly penalized</span>
                    </div>
                    <span className="text-[10px] font-mono text-secondary font-bold">ELITE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Neural Engine Standby • 12ms</span>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-6 py-3 border border-outline-variant text-on-surface text-sm font-bold rounded-xl hover:bg-background transition-all flex items-center justify-center gap-2 active:scale-95">
                  <Settings className="w-4 h-4" /> Advanced
                </button>
                <button className="flex-1 md:flex-none px-10 py-3 bg-primary text-on-primary font-black rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/30">
                  Quick Start <Bolt className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          </div>

          {/* Recommended Domains */}
          <section>
            <h3 className="text-[10px] font-bold text-secondary mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
              <div className="w-8 h-[1px] bg-primary/30" /> Recommended Domains
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DomainCard 
                title="Deep Tech" 
                count="1.2k" 
                img="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
              />
              <DomainCard 
                title="Bio-Ethics" 
                count="843" 
                img="https://images.unsplash.com/photo-1532187863486-abf51ad5441d?q=80&w=2070&auto=format&fit=crop" 
                color="tertiary"
              />
              <DomainCard 
                title="Meta-Econ" 
                count="2.5k" 
                img="https://images.unsplash.com/photo-1611974714405-b0d874558500?q=80&w=2070&auto=format&fit=crop" 
              />
            </div>
          </section>
        </div>

        {/* Right Column: Stats & Competitions */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container border border-outline-variant rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[10px] font-bold text-on-surface uppercase tracking-[0.2em] px-1">Live Competitions</h3>
              <span className="flex h-2 w-2 rounded-full bg-error animate-pulse shadow-[0_0_8px_#ef4444]" />
            </div>
            <div className="space-y-4">
              <CompetitionCard 
                title="Grand Prix #402" 
                topic="UBI Efficacy" 
                round="3/5" 
                pool="$400" 
                progress={65} 
                isLive
              />
              <CompetitionCard 
                title="Daily Clash" 
                topic="Neural Link Morality" 
                round="IN 45M" 
                pool="REP" 
                progress={0} 
              />
            </div>
            <button className="w-full mt-6 text-[10px] font-bold text-secondary hover:text-primary transition-colors flex items-center justify-center gap-1 uppercase tracking-widest group">
              Global Arenas <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="bg-primary-container/20 border border-primary/30 rounded-2xl p-6 relative group overflow-hidden">
            <Trophy className="absolute -right-6 -bottom-6 w-32 h-32 text-primary opacity-5 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">Your Standings</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[8px] text-secondary uppercase font-bold tracking-widest">Elo Rating</p>
                  <p className="text-3xl font-black text-on-surface tracking-tighter">2,482</p>
                </div>
                <div>
                  <p className="text-[8px] text-secondary uppercase font-bold tracking-widest">Global Rank</p>
                  <p className="text-3xl font-black text-on-surface tracking-tighter">#14</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] text-tertiary font-bold">
                <TrendingUp className="w-3 h-3" /> +12 pts since last session
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DomainCard({ title, count, img, color }: any) {
  return (
    <button className="group relative aspect-video bg-surface-container border border-outline-variant rounded-xl overflow-hidden cursor-pointer active:scale-[0.98] transition-all">
      <img src={img} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-4 flex flex-col justify-end">
        <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">{count} debates</p>
      </div>
    </button>
  );
}

function CompetitionCard({ title, topic, round, pool, progress, isLive }: any) {
  return (
    <div className="p-4 bg-surface-container-low border border-outline-variant rounded-xl hover:border-primary/40 transition-all cursor-pointer group">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className={cn("text-[8px] font-black mb-1 uppercase tracking-widest", isLive ? "text-primary" : "text-secondary")}>{title}</p>
          <h4 className="font-bold text-xs text-on-surface group-hover:text-primary transition-colors">{topic}</h4>
        </div>
        <div className="bg-surface-container-highest px-2 py-0.5 rounded text-[8px] font-mono font-bold text-secondary">
          {isLive ? 'LIVE' : round}
        </div>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-3 h-3 text-secondary" />
        <span className="text-[8px] text-secondary font-bold uppercase tracking-widest">Active participation</span>
      </div>
      <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
        <div 
          className={cn("h-full transition-all duration-1000", isLive ? "bg-tertiary" : "bg-primary/20")} 
          style={{ width: `${progress}%` }} 
        />
      </div>
      {isLive && (
        <div className="mt-2 flex justify-between text-[8px] font-mono font-bold text-secondary">
          <span>{round}</span>
          <span>{pool} POOL</span>
        </div>
      )}
      {!isLive && (
        <button className="w-full mt-3 py-2 bg-surface-container-highest border border-outline-variant text-[8px] font-black text-on-surface rounded-lg hover:brightness-125 transition-all uppercase tracking-widest">
          Register Now
        </button>
      )}
    </div>
  );
}
