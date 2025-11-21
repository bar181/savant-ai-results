
import React, { useState } from 'react';

// Primary URLs
const bradPixarImg = 'https://aisp-quantum-leap.lovable.app/assets/bradley-avatar-BysABVcW.png';
const harvardBradImg = 'https://aisp-quantum-leap.lovable.app/assets/bradley-instructor-BUsaIL52.jpg'; // Use local path for the real photo

interface HomeProps {
  setPage: (page: string) => void;
}

const SafeImage = ({ src, alt, className, fallbackSrc }: { src: string, alt: string, className: string, fallbackSrc: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // If primary fails, try fallback
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
      // Removed crossOrigin="anonymous" to allow loading images from servers that don't send CORS headers
    />
  );
};

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="space-y-24 pt-12 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center space-y-6 px-4 flex flex-col justify-center items-center min-h-[60vh]">
         
         {/* Bradley Cartoon Avatar */}
         <div className="relative group mb-4 z-10">
            <div className="absolute inset-0 bg-indigo-600 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full -z-10"></div>
            <SafeImage 
                src={bradPixarImg} 
                // Fallback chain: External URL -> Local File -> DiceBear API
                fallbackSrc="/images/brad_pixar.png"
                alt="Bradley Ross AI Avatar" 
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-slate-800 shadow-2xl object-cover hover:scale-105 transition-transform duration-500 bg-slate-800"
            />
             <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full border-4 border-slate-950 shadow-lg tracking-wider uppercase z-20">
                AI Architect
            </div>
         </div>

         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/40 border border-indigo-500/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-bold text-indigo-300 tracking-wider uppercase">Bradley.academy</span>
          </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
          Research, Teaching, and <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 animate-gradient-x">
            The Future of Agentic AI
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Bradley.academy is the public home for research into agentic systems, symbolic languages, Savant AI cognition, and the next generation of AI-assisted work.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button 
            onClick={() => setPage('system')}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/25"
          >
            Explore The Agentic System
          </button>
          <button 
            onClick={() => setPage('results')}
            className="px-8 py-4 bg-transparent text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white rounded-xl font-semibold transition-all"
          >
            View Validation Results
          </button>
        </div>
      </section>

      {/* About Bradley */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
            {/* Bradley Real Photo */}
            <div className="w-64 h-64 relative mb-8 group perspective-1000 z-10">
                <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity rounded-full -z-10"></div>
                <SafeImage 
                    src={harvardBradImg} 
                    // Fallback: Local File -> Generic Professional Image
                    fallbackSrc="https://aisp-quantum-leap.lovable.app/assets/bradley-instructor-BUsaIL52.jpg"
                    alt="Bradley Ross" 
                    className="relative w-full h-full object-cover rounded-3xl border-4 border-slate-800 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500 ease-out bg-slate-800"
                />
            </div>
            <h3 className="text-3xl font-bold text-white">Bradley Ross</h3>
            <p className="text-indigo-400 font-medium mt-1">Agentic Engineer & Course Designer</p>
        </div>
        <div className="w-full lg:w-2/3 space-y-6 text-slate-300 leading-relaxed text-lg">
            <p>
                Bradley Ross is an AI course designer, researcher, and Agentic Engineer with two decades of experience in predictive analytics and software architecture. He designs multi-agent systems that turn human intent into working software, and teaches practical AI to business professionals, engineers, and emerging developers.
            </p>
            <p>
                He is completing a <strong>Harvard ALM Master’s capstone</strong> focused on <strong>AI-First Documentation</strong> and <strong>AISP (AI Symbolic Protocol)</strong>, a structured reasoning language built to remove ambiguity and give AI systems a shared, formal way to understand instructions.
            </p>
            <div className="p-6 bg-indigo-950/30 border border-indigo-500/20 rounded-2xl">
                <p className="text-base italic text-indigo-200">
                    "This work is grounded in the belief that AI should be structured, teachable, and accountable — not stateless or unpredictable."
                </p>
            </div>
        </div>
      </section>

      {/* The Agentic System Overview */}
      <section className="space-y-8">
         <div className="text-center max-w-4xl mx-auto mb-12">
             <h2 className="text-3xl font-bold text-white mb-4">The Agentic System</h2>
             <p className="text-slate-400">
                 High-level overview of the multi-agent, memory-driven architecture.
             </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel p-6 rounded-xl border-t-4 border-sky-500 hover:bg-slate-800/50 transition-colors cursor-default">
                <h4 className="font-bold text-white mb-2">Coordination</h4>
                <p className="text-sm text-slate-400">
                    Coordination across 30+ specialized agents that act like an expert team rather than a single model.
                </p>
            </div>
            <div className="glass-panel p-6 rounded-xl border-t-4 border-purple-500 hover:bg-slate-800/50 transition-colors cursor-default">
                <h4 className="font-bold text-white mb-2">Shared Memory</h4>
                <p className="text-sm text-slate-400">
                    Shared memory that carries context across tasks via <code>memory.db</code> and <code>dsmg.db</code>.
                </p>
            </div>
            <div className="glass-panel p-6 rounded-xl border-t-4 border-emerald-500 hover:bg-slate-800/50 transition-colors cursor-default">
                <h4 className="font-bold text-white mb-2">Persistent Learning</h4>
                <p className="text-sm text-slate-400">
                    A <code>learning.db</code> that tracks success, failure, and pattern evolution using Bayesian updates.
                </p>
            </div>
            <div className="glass-panel p-6 rounded-xl border-t-4 border-indigo-500 hover:bg-slate-800/50 transition-colors cursor-default">
                <h4 className="font-bold text-white mb-2">Savant AI</h4>
                <p className="text-sm text-slate-400">
                    Meta-cognitive Savant AI able to self-reflect, improve, and optimize the system itself.
                </p>
            </div>
         </div>
      </section>

      {/* Verified Through Real Testing */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
             <h2 className="text-3xl font-bold text-white">Verified Through Real Testing</h2>
             <p className="text-slate-400 leading-relaxed">
                 Five high-complexity scenarios were completed using three modes: <strong>Baseline</strong>, <strong>Standard Agents</strong>, and <strong>Savant AI</strong>. Tests covered strategic planning, instructional design, research validation, full-stack engineering, and database security.
             </p>
             
             <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                     <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-xl font-bold text-white">90+</div>
                     <div>
                         <h5 className="font-bold text-white">Elite Performance</h5>
                         <p className="text-xs text-slate-400">Savant AI delivered 3–5% improvement at the 90+ performance level.</p>
                     </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                     <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-xl font-bold text-white">ROI</div>
                     <div>
                         <h5 className="font-bold text-white">Massive Gains</h5>
                         <p className="text-xs text-slate-400">Large ROI gains in strategic and security-critical tasks.</p>
                     </div>
                 </div>
             </div>

             <p className="text-xs text-slate-500">
                 Results were validated through multi-agent review, the Four Pillars scoring system, confidence-capped evaluations, and enforcement-controlled protocols.
             </p>
          </div>
          
          <div className="glass-panel p-8 rounded-3xl border border-slate-700 flex flex-col justify-center items-center text-center">
             <div className="w-full bg-slate-950 rounded-xl p-6 mb-6 border border-slate-800">
                 <h4 className="text-slate-400 text-sm uppercase tracking-wider mb-2">Comparison Mode</h4>
                 <div className="flex justify-between items-end h-32 gap-4">
                     <div className="w-1/3 bg-slate-800 rounded-t-lg h-[40%] relative group">
                         <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">Base</span>
                     </div>
                     <div className="w-1/3 bg-sky-600 rounded-t-lg h-[75%] relative group">
                         <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-sky-400">Swarm</span>
                     </div>
                     <div className="w-1/3 bg-indigo-500 rounded-t-lg h-[98%] relative group shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                         <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-indigo-300 font-bold">Savant</span>
                     </div>
                 </div>
             </div>
             <button 
                onClick={() => setPage('results')}
                className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm flex items-center gap-2"
             >
                 See Full Data Breakdown <span aria-hidden="true">→</span>
             </button>
          </div>
      </section>

      {/* Early Access Sponsorship */}
      <section className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-6 md:w-2/3">
                  <h2 className="text-3xl font-bold text-white">Early Access Sponsorship</h2>
                  <p className="text-slate-300 leading-relaxed">
                      Bradley.academy is opening a small number of sponsorship opportunities for organizations seeking to stay ahead of the curve. Sponsors gain priority access to pre-release capabilities shaped directly by Bradley’s Harvard capstone and ongoing agentic development.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Early access to AISP-Human', 'AI-First Documentation Platform', 'Savant AI Previews', 'Influence on Future Research', 'Workshops & Team Training', 'Evaluation Tools'].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-indigo-200">
                              <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                              {item}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                  <a 
                    href="https://www.linkedin.com/in/bradaross/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-indigo-900 hover:bg-slate-100 rounded-xl font-bold transition-all shadow-xl hover:scale-105 inline-block text-center"
                  >
                      Become a Sponsor
                  </a>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
