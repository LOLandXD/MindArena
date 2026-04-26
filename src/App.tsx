import React, { useState } from 'react';
import { Sidebar, TopBar } from './components/Navigation';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { StartDebate } from './pages/StartDebate';
import { Arena } from './pages/Arena';
import { History } from './pages/History';
import { Performance } from './pages/Performance';
import { KnowledgeBase } from './pages/KnowledgeBase';
import type { View } from './constants';

function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('landing');
  };

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <Landing onLogin={handleLogin} />;
      case 'dashboard':
        return <Dashboard />;
      case 'start-debate':
        return <StartDebate />;
      case 'arena':
        return <Arena />;
      case 'history':
        return <History />;
      case 'performance':
        return <Performance />;
      case 'knowledge-base':
        return <KnowledgeBase />;
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated || currentView === 'landing') {
    return <Landing onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background flex text-on-background font-sans overflow-x-hidden">
      {/* Sidebar - Desktop Only for now as per design */}
      <Sidebar 
        currentView={currentView} 
        onViewChange={(view) => {
          if (view === 'landing') {
            handleLogout();
          } else {
            setCurrentView(view);
          }
        }} 
      />

      <div className="flex-1 ml-0 md:ml-64 flex flex-col min-w-0">
        <TopBar onSearch={(q) => console.log('Searching:', q)} />
        
        <main className="flex-1 mt-14 px-6 py-8 overflow-y-auto">
          {renderView()}
        </main>

        <footer className="px-6 py-4 border-t border-outline-variant flex justify-between items-center bg-surface-container-low/30">
          <p className="text-[10px] uppercase font-bold tracking-widest text-secondary/40">MindArena Neural Network v4.2.0-stable</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-2 text-[10px] font-bold text-tertiary uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-tertiary" /> System Optimal
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
