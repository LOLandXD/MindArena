import type { KnowledgeModule } from '@/types';

interface KnowledgeBaseProps {
  modules: KnowledgeModule[];
}

export function KnowledgeBase({ modules }: KnowledgeBaseProps) {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-4xl font-bold tracking-tight text-on-surface">Knowledge Base</h2>
        <p className="mt-2 text-secondary">Structured frameworks, argument patterns, and practice modules.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {modules.map((module) => (
          <article key={module.id} className="rounded-3xl border border-outline-variant bg-surface-container p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-on-surface">{module.title}</p>
                <p className="mt-1 text-sm text-secondary">{module.category}</p>
              </div>
              <span className="rounded-full border border-outline-variant px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                {module.difficulty}
              </span>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary">{module.status}</span>
                <span className="font-bold text-on-surface">{module.progress}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-surface-container-lowest overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${module.progress}%` }} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
