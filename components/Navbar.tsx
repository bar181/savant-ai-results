
import React, { useState } from 'react';

interface NavbarProps {
  activePage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    // 'Home' removed as requested (Logo acts as Home)
    { id: 'system', label: 'Agentic System' },
    { id: 'coordination', label: 'Agents & Memory' },
    { id: 'personas', label: 'Savant AI' },
    { id: 'results', label: 'Savant Tests' },
    { id: 'paper', label: 'Research Paper' }, // Renamed from AISP Paper
  ];

  const handleNavClick = (pageId: string) => {
    setPage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 h-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/20 transition-all">
            <span className="font-space font-bold text-white text-lg">B</span>
          </div>
          <span className="font-space font-bold text-xl tracking-tight text-slate-200 group-hover:text-white transition-colors">
            Bradley<span className="text-indigo-400">.academy</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/50 p-1 rounded-full border border-slate-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activePage === item.id
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Mobile Toggle */}
        <button 
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-slate-950 border-b border-slate-800 p-4 lg:hidden flex flex-col gap-2 animate-fade-in shadow-2xl z-50">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                            activePage === item.id
                                ? 'bg-slate-800 text-white border border-slate-700'
                                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
