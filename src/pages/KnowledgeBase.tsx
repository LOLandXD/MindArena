import React from 'react';
import { motion } from 'motion/react';
import { 
  Library, 
  Search, 
  Filter, 
  BookOpen, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Flame,
  Zap,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function KnowledgeBase() {
  const modules = [
    { title: "Socratic Questioning", category: "Core Strategy", difficulty: "Elite", status: "Active", progress: 100, icon: <Sparkles className="text-secondary" /> },
    { title: "Logical Fallacies v2", category: "Defensive Rhetoric", difficulty: "Beginner", status: "Active", progress: 42, icon: <Lock className="text-primary" /> },
    { title: "Kantian Deontology", category: "Ethics", difficulty: "Advanced", status: "Locked", progress: 0, icon: <BookOpen className="text-secondary" /> },
    { title: "Heuristics & Biases", category: "Cognitive Psychology", difficulty: "Intermediate", status: "Active", progress: 12, icon: <Zap className="text-primary" /> },
    { title: "Game Theory Matrix", category: "Strategy", difficulty: "Elite", status: "Locked", progress: 0, icon: <Globe className="text-secondary" /> },
    { title: "Stoic Resolve", category: "Emotional Intelligence", difficulty: "Beginner", status: "Active", progress: 88, icon: <Flame className="text-error" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="space-y-1">
          <h2 className="text-4xl font-bold tracking-tight text-on-surface">Curated Knowledge Base</h2>
          <p className="text-secondary text-sm">Philosophical frameworks and rhetorical techniques curated by the MindArena Syndicate.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-focus-within:text-primary transition-colors" />
            <input 
              className="bg-surface-container border border-outline-variant h-12 pl-10 pr-4 rounded-xl text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none w-64 text-on-surface placeholder:text-secondary/50" 
              placeholder="Search modules..." 
            />
          </div>
          <button className="h-12 w-12 flex items-center justify-center border border-outline-variant rounded-xl text-secondary hover:bg-surface-container-high transition-all">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Featured Header Card */}
      <div className="relative h-64 rounded-2xl overflow-hidden border border-outline-variant group">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2180&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale" 
          alt="Library"
        />
        <div className="relative z-20 h-full p-10 flex flex-col justify-center max-w-2xl">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary mb-3">Syndicate Exclusive</span>
          <h3 className="text-3xl font-bold text-on-surface mb-4 tracking-tight leading-tight">Aristotelian Rhetoric:<br />The Art of Ethos, Pathos, and Logos</h3>
          <p className="text-secondary text-sm mb-6 max-w-md">Learn the foundational pillars of Western argumentation in this masterclass. 450 scholars currently enrolled.</p>
          <button className="w-fit px-6 py-2.5 bg-primary text-on-primary font-bold text-xs rounded-xl hover:brightness-110 transition-all flex items-center gap-2 active:scale-95 shadow-lg shadow-primary/20">
            Commence Study <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Grid of Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((m, i) => (
          <ModuleCard key={i} {...m} />
        ))}
      </div>

      <div className="mt-12 text-center p-12 border-2 border-dashed border-outline-variant rounded-3xl group cursor-pointer hover:border-primary/40 transition-all">
        <div className="w-16 h-16 bg-surface-container-high rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <BookOpen className="w-8 h-8 text-secondary group-hover:text-primary transition-colors" />
        </div>
        <h4 className="text-xl font-bold text-on-surface mb-2">Missing something?</h4>
        <p className="text-secondary text-sm max-w-sm mx-auto mb-8 tracking-tight">Request a specific philosophical framework or debate technique for our curators to analyze and integrate.</p>
        <button className="px-8 py-3 border border-outline text-on-surface font-bold text-xs rounded-xl hover:bg-surface-container-highest transition-all active:scale-95">
          Submit Request
        </button>
      </div>
    </div>
  );
}

function ModuleCard({ title, category, difficulty, status, progress, icon }: any) {
  const isLocked = status === 'Locked';

  return (
    <div className={cn(
      "bg-surface-container border border-outline-variant rounded-2xl p-6 flex flex-col gap-5 group transition-all hover:bg-surface-container-high",
      isLocked ? "opacity-60" : "hover:border-primary/40 shadow-xl"
    )}>
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-xl bg-background border border-outline-variant flex items-center justify-center group-hover:border-primary/30 transition-all">
          {icon}
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={cn(
            "text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md", 
            difficulty === 'Elite' ? "bg-primary/10 text-primary border border-primary/20" : "bg-surface-container-highest text-secondary border border-outline-variant"
          )}>
            {difficulty}
          </span>
          {isLocked && <Lock className="w-4 h-4 text-secondary/30" />}
          {progress === 100 && <CheckCircle2 className="w-4 h-4 text-tertiary" />}
        </div>
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors mb-1">{title}</h4>
        <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">{category}</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <span className="text-[9px] font-black text-secondary uppercase tracking-[0.2em]">{isLocked ? 'COURSE LOCKED' : 'MASTERY'}</span>
          <span className="text-[10px] font-bold text-on-surface">{progress}%</span>
        </div>
        <div className="h-1 w-full bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className={cn("h-full", progress === 100 ? "bg-tertiary" : "bg-primary")} 
          />
        </div>
      </div>
      
      {!isLocked && (
        <button className="flex items-center justify-center gap-2 text-[10px] font-bold text-on-surface hover:text-primary transition-colors uppercase tracking-[0.2em] pt-2 active:scale-95">
          Proceed to Study <ArrowRight className="w-3 h-3" />
        </button>
      )}
    </div>
  );
}
