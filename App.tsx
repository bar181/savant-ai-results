
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AgenticSystem from './components/AgenticSystem';
import Coordination from './components/Coordination';
import AgentShowcase from './components/AgentShowcase';
import TestResults from './components/TestResults';
import ResearchPaper from './components/ResearchPaper';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Home setPage={setActivePage} />;
      case 'system':
        return <AgenticSystem />;
      case 'coordination':
        return <Coordination />;
      case 'personas':
        return <AgentShowcase />;
      case 'results':
        return <TestResults />;
      case 'paper':
        return <ResearchPaper />;
      default:
        return <Home setPage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      <Navbar activePage={activePage} setPage={setActivePage} />
      <main className="max-w-7xl mx-auto px-6 pb-20 pt-8">
        {renderContent()}

        {/* Global Sponsorship CTA - Appears on all pages EXCEPT Home (which has its own large section) */}
        {activePage !== 'home' && (
            <section className="mt-24 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Partner with Bradley.academy</h3>
                    <p className="text-slate-300 max-w-xl">
                        Join the research frontier. Connect for sponsorship, early access to Savant AI tools, and specialized team training.
                    </p>
                </div>
                <a 
                    href="https://www.linkedin.com/in/bradaross/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-indigo-900 hover:bg-slate-100 rounded-xl font-bold transition-all shadow-lg hover:scale-105 whitespace-nowrap"
                >
                    Connect on LinkedIn
                </a>
            </section>
        )}
      </main>

      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center text-slate-600 text-sm">
        <p>© 2025 Bradley Ross & Savant AI Research. Powered by Gemini 2.5 Flash.</p>
        <p className="mt-2 text-xs text-slate-700">
            Meta-cognitive architecture validated by multi-agent consensus.
        </p>
      </footer>
    </div>
  );
};

export default App;
