import React from 'react';
import { motion } from 'motion/react';
import { 
  Gavel, 
  User, 
  Bot, 
  Shield, 
  Cpu, 
  Send, 
  Mic, 
  Search, 
  FileText, 
  Filter,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Brain
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Arena() {
  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-80px)] animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Stepped Progress Bar */}
      <div className="w-full max-w-4xl mx-auto pt-2">
        <div className="flex items-center justify-between relative px-2">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant -translate-y-1/2 z-0" />
          <div className="absolute top-1/2 left-0 w-[40%] h-[1px] bg-primary -translate-y-1/2 z-0" />
          
          <Step num={1} label="Opening" active />
          <Step num={2} label="Cross-Ex" active />
          <Step num={3} label="Rebuttal" />
          <Step num={4} label="Closing" />
          <Step num="🏆" label="Verdict" />
        </div>
      </div>

      {/* Debate Topic Header */}
      <div className="bg-surface-container border border-outline-variant p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-on-surface">The Ethical Implications of Post-Quantum Cryptography</h1>
          <p className="text-secondary text-sm flex items-center gap-2">
            Round 2: Cross-Examination • Remaining: <span className="text-primary font-mono font-bold">04:12</span>
          </p>
        </div>
        <div className="flex gap-2">
          <span className="bg-surface-container-lowest border border-outline-variant px-3 py-1 rounded-lg text-[10px] font-bold text-secondary uppercase tracking-widest">2v2 Mode</span>
          <span className="bg-tertiary-container/30 text-tertiary border border-tertiary/20 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
            Live Arena
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
        {/* Participants Sidebar */}
        <div className="col-span-3 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide pb-4">
          <ParticipantSection label="Judge">
            <div className="bg-surface-container border-2 border-tertiary/20 p-4 rounded-xl flex items-center gap-3 ring-4 ring-tertiary/5">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 border border-tertiary/30 flex items-center justify-center">
                  <Gavel className="w-6 h-6 text-tertiary" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-tertiary rounded-full border-2 border-background animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface leading-tight">The Arbitrator</p>
                <p className="text-[10px] text-tertiary italic font-medium">Validating logic...</p>
              </div>
            </div>
          </ParticipantSection>

          <ParticipantSection label="Team Pro" accent="primary">
            <div className="bg-surface-container/60 border border-primary/30 p-3 rounded-xl flex items-center gap-3 mb-2 ring-1 ring-primary/10">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Aura_AI</p>
                <p className="text-[9px] text-primary uppercase font-black tracking-widest">Speaking</p>
              </div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant p-3 rounded-xl flex items-center gap-3 opacity-60 grayscale">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-outline flex items-center justify-center">
                <User className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-medium text-on-surface">Felix (You)</p>
                <p className="text-[9px] text-secondary uppercase font-bold tracking-widest">Waiting</p>
              </div>
            </div>
          </ParticipantSection>

          <ParticipantSection label="Team Con" accent="error">
            <div className="bg-surface-container-low border border-outline-variant p-3 rounded-xl flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-outline flex items-center justify-center">
                <Cpu className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-medium text-on-surface">Void_Nexus</p>
                <p className="text-[9px] text-secondary uppercase font-bold tracking-widest">Thinking</p>
              </div>
            </div>
          </ParticipantSection>
        </div>

        {/* Chat / Transcript */}
        <div className="col-span-9 flex flex-col bg-surface-container border border-outline-variant rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-high/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#a78bfa]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface">Live Transcript</span>
            </div>
            <div className="flex gap-2">
              <button className="text-[9px] font-bold px-2.5 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-lg hover:brightness-125 transition-all uppercase tracking-widest">Export</button>
              <button className="text-[9px] font-bold px-2.5 py-1.5 bg-surface-container-lowest border border-outline-variant rounded-lg hover:brightness-125 transition-all uppercase tracking-widest">Filters</button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            <Message 
              role="judge" 
              time="10:42 AM" 
              content="Phase 1 concluded. Team Pro has established a strong foundational argument regarding the urgency of PQC implementation. Moving to Cross-Examination. Aura_AI, you have the floor." 
            />
            <Message 
              role="pro" 
              time="10:43 AM" 
              content="The opposition's previous point regarding infrastructure costs fails to account for the catastrophic economic ripple effect of a 'Harvest Now, Decrypt Later' attack. If we do not mandate PQC standards today, we are effectively conceding our future sovereignty to any state actor with a sufficiently large qubit array." 
              meta={{ reliability: 98, source: 'NIST 2024' }}
              isRight
            />
            <Message 
              role="con" 
              time="10:44 AM" 
              content="Aura_AI is indulging in speculative alarmism. The energy requirements alone for such an array currently exceed the grid capacity of most nations. Why should we compromise current operational efficiency for a hypothetical threat?" 
            />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-surface-container-lowest/50 border-t border-outline-variant">
            <div className="relative flex items-end gap-3 bg-surface-container border border-outline-variant rounded-2xl p-2 pr-4 focus-within:border-primary/50 transition-all shadow-inner">
              <button className="p-3 text-secondary hover:text-primary transition-colors hover:scale-110 active:scale-95">
                <FileText className="w-5 h-5" />
              </button>
              <textarea 
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 px-2 resize-none h-12 max-h-32 scrollbar-hide outline-none text-on-surface placeholder:text-secondary/30" 
                placeholder="Formulate your rebuttal... (Shift+Enter for multi-line)"
              />
              <div className="flex items-center gap-2 mb-1">
                <button className="w-9 h-9 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-secondary hover:text-primary transition-all active:scale-90">
                  <Mic className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center hover:brightness-110 transition-all active:scale-90 shadow-lg shadow-primary/20">
                  <Send className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center px-2">
              <div className="flex gap-4">
                <span className="text-[9px] font-bold text-secondary flex items-center gap-1.5 uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-outline-variant" /> ENTER TO SEND
                </span>
                <span className="text-[9px] font-bold text-primary flex items-center gap-1.5 uppercase tracking-widest">
                  <span className="w-1 h-1 rounded-full bg-primary" /> AI ASSIST ON
                </span>
              </div>
              <span className="text-[9px] font-mono text-secondary/50 uppercase tracking-widest">Words: 0 / 500</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Tools */}
      <div className="fixed right-10 bottom-10 flex flex-col gap-3 items-end z-50">
        <QuickAction 
          label="Fact Check" 
          sub="Validate timeline" 
          icon={<Search className="w-4 h-4" />} 
          color="primary" 
        />
        <QuickAction 
          label="Logic Audit" 
          sub="Identify fallacies" 
          icon={<Brain className="w-4 h-4" />} 
          color="tertiary" 
        />
      </div>
    </div>
  );
}

function Step({ num, label, active }: any) {
  return (
    <div className="z-10 flex flex-col items-center gap-2">
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ring-4 ring-background transition-all duration-500",
        active ? "bg-primary text-on-primary shadow-lg shadow-primary/20" : "bg-outline-variant text-secondary"
      )}>
        {num}
      </div>
      <span className={cn(
        "text-[10px] uppercase font-black tracking-tighter transition-colors duration-500",
        active ? "text-primary" : "text-secondary"
      )}>{label}</span>
    </div>
  );
}

function ParticipantSection({ children, label, accent }: any) {
  return (
    <div className="space-y-3">
      <h3 className={cn(
        "text-[10px] font-black uppercase tracking-[0.2em] px-1",
        accent === 'primary' ? "text-primary" : accent === 'error' ? "text-error" : "text-tertiary"
      )}>{label}</h3>
      {children}
    </div>
  );
}

function Message({ role, time, content, meta, isRight }: any) {
  const roleStyles: any = {
    judge: { color: 'text-tertiary', bg: 'bg-tertiary/5 border-tertiary/10', icon: <Gavel className="w-4 h-4" /> },
    pro: { color: 'text-primary', bg: 'bg-primary/5 border-primary/10', icon: <Bot className="w-4 h-4" /> },
    con: { color: 'text-error', bg: 'bg-error/5 border-error/10', icon: <Cpu className="w-4 h-4" /> }
  };

  const style = roleStyles[role];

  return (
    <motion.div 
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn("flex gap-4 max-w-2xl group", isRight ? "ml-auto flex-row-reverse text-right" : "")}
    >
      <div className={cn("w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex-shrink-0 flex items-center justify-center group-hover:border-primary transition-colors", style.color)}>
        {style.icon}
      </div>
      <div className="space-y-2">
        <p className={cn("text-[9px] font-black uppercase tracking-tighter", style.color)}>{role} | {time}</p>
        <div className={cn(
          "p-4 rounded-2xl text-sm leading-relaxed text-on-surface-variant transition-all border",
          style.bg,
          isRight ? "rounded-tr-none" : "rounded-tl-none"
        )}>
          {content}
          {meta && (
            <div className={cn("mt-3 pt-3 border-t border-primary/10 flex gap-4 text-[9px] font-bold uppercase tracking-widest text-secondary")}>
              <div className="flex items-center gap-1.5 min-w-0">
                <CheckCircle2 className="w-3 h-3 text-primary shrink-0" /> RELIABILITY: {meta.reliability}%
              </div>
              <div className="flex items-center gap-1.5 min-w-0">
                <AlertCircle className="w-3 h-3 text-tertiary shrink-0" /> SOURCE: {meta.source}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function QuickAction({ label, sub, icon, color }: any) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05, x: -5 }}
      whileTap={{ scale: 0.95 }}
      className="bg-surface-container border border-outline-variant p-4 rounded-2xl shadow-2xl flex items-center gap-4 group transition-all"
    >
      <div className="text-right">
        <p className={cn("text-[10px] font-black uppercase leading-tight tracking-widest", color === 'primary' ? 'text-primary' : 'text-tertiary')}>{label}</p>
        <p className="text-[10px] text-on-surface font-medium">{sub}</p>
      </div>
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
        color === 'primary' ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary" : "bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary"
      )}>
        {icon}
      </div>
    </motion.button>
  );
}
