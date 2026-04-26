import React from 'react';
import { 
  Home, 
  Swords, 
  History, 
  BarChart2, 
  Library, 
  Settings, 
  Bell, 
  LogOut,
  HelpCircle,
  Terminal,
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ROUTES, type View } from '@/constants';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 bottom-0 flex flex-col pt-14 bg-surface-container-lowest h-screen w-64 border-r border-outline-variant z-40">
      <div className="p-6 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
            <Terminal className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xl font-black text-on-surface leading-none tracking-tighter">MindArena</p>
            <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">Pro Mode Active</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-3 space-y-1">
        {ROUTES.map((route) => {
          const Icon = {
            Home,
            Swords,
            History,
            BarChart2,
            Library
          }[route.icon] || Home;

          const isActive = currentView === route.id;

          return (
            <button
              key={route.id}
              onClick={() => onViewChange(route.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 transition-all active:scale-[0.98] font-sans text-sm tracking-tight rounded-lg",
                isActive 
                  ? "bg-surface-container-highest text-primary border-r-2 border-primary" 
                  : "text-secondary hover:bg-surface-container-high/50 hover:text-on-surface"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "fill-primary/10" : "")} />
              {route.label}
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t border-outline-variant space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high/50 hover:text-on-surface transition-all rounded-lg font-sans text-sm tracking-tight">
          <HelpCircle className="w-5 h-5" /> Help
        </button>
        <button 
          onClick={() => onViewChange('landing')}
          className="w-full flex items-center gap-3 px-4 py-3 text-secondary hover:bg-surface-container-high/50 hover:text-on-surface transition-all rounded-lg font-sans text-sm tracking-tight"
        >
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>
    </aside>
  );
}

interface TopBarProps {
  onSearch?: (query: string) => void;
}

export function TopBar({ onSearch }: TopBarProps) {
  return (
    <header className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-outline-variant flex justify-between items-center w-full px-6 h-14">
      <div className="flex items-center gap-8">
        <h1 className="text-lg font-bold tracking-tighter text-on-surface hidden md:block">MindArena</h1>
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-4 h-4 transition-colors group-focus-within:text-primary" />
          <input 
            type="text" 
            placeholder="Search insights..."
            className="bg-surface-container-low border border-outline-variant rounded-full py-1.5 pl-10 pr-4 text-xs w-48 md:w-64 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface placeholder:text-secondary/50"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-secondary hover:bg-surface-container-high hover:text-on-surface rounded-full transition-all">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 text-secondary hover:bg-surface-container-high hover:text-on-surface rounded-full transition-all">
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full border border-outline-variant overflow-hidden cursor-pointer hover:ring-2 ring-primary/20 transition-all">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFy36gZy2buvfNGLbbk3xnp_wA_urFScA2R63O9eHhJr9g14zrtuceAHfMaal2nmE8IWzmvOj_UIjDhApOyw6tZDqzUrksrDP7AxcJYdMFKhweqbEevmA4RWxCEeqwuLq7okOwl1S65z0xtl0dfHQ4rFFBrStyvYcDtLY0ML_l9xBF-C_vtdFLM6j0ydmZmvDElRdOVkfz8r8JnH6GHakb6gp4mLxK0JLQ0rfkZ5PXfUhKhPv2rFeRdlHRqkJd8uwd3erKYmqQP1A" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
