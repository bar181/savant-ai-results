import React from 'react';
import NetworkViz from './NetworkViz';

const AgenticSystem: React.FC = () => {
  return (
    <div className="pt-12 space-y-24 animate-fade-in">

      {/* Hero Section */}
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          The Agentic System
        </h1>
        <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
          A coordinated, database-backed intelligence framework. Instead of depending on a single model,
          it deploys <span className="text-indigo-400 font-bold">30+ specialized agents</span> that collaborate,
          review, and refine each other’s work.
        </p>
      </div>

      {/* Section 1: Agent Coordination */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 h-[500px] glass-panel rounded-2xl border border-indigo-500/20 overflow-hidden relative shadow-2xl shadow-indigo-900/20">
            <div className="absolute top-4 left-4 z-10">
                <span className="text-xs font-mono text-indigo-400 bg-indigo-950/80 backdrop-blur px-2 py-1 rounded border border-indigo-500/30">LIVE SWARM TOPOLOGY</span>
            </div>
            <NetworkViz scenarioId="swarm" />
        </div>

        <div className="order-1 lg:order-2 space-y-8">
            <div>
                <h2 className="text-3xl font-bold text-white mb-4">Agent Coordination</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                    Tasks are executed through parallel swarms—triads or pentads—following a strict <span className="text-white font-mono bg-slate-800 px-2 py-0.5 rounded text-sm">plan → write → verify</span> loop. This reduces blind spots and prevents single-model overconfidence.
                </p>
                <p className="text-slate-400 text-sm">
                    Every agent has a defined role (Planner, Validator, Researcher) and access to shared context that carries across tasks.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-colors">
                    <div className="text-4xl font-bold text-indigo-400 mb-1">2.7x</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide font-bold">Execution Speedup</div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">5-agent swarms vs sequential runs.</p>
                </div>
                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
                    <div className="text-4xl font-bold text-emerald-400 mb-1">45%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide font-bold">Error Reduction</div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">Decrease in divergent errors across scenario tests.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Section 2: Learning System */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/10 to-transparent rounded-3xl pointer-events-none"></div>
        <div className="glass-panel border border-sky-500/20 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></div>
                        <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Active Learning Engine</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white">Bayesian Pattern Evolution</h2>
                    <p className="text-slate-300 leading-relaxed">
                        Where most AI resets between tasks, this system learns. The <code className="text-sky-300 bg-sky-950/50 px-1 py-0.5 rounded border border-sky-500/20">learning.db</code> tracks task patterns, error types, and trait evolution, applying Bayesian updates after every success or failure.
                    </p>
                    <p className="text-slate-400 text-sm">
                        Patterns that work gain confidence; those that fail are suppressed or capped.
                    </p>
                    <div className="pt-6">
                         <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                             <div className="h-full bg-gradient-to-r from-sky-600 to-sky-400 w-[89%] relative">
                                 <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50"></div>
                             </div>
                         </div>
                         <div className="flex justify-between text-xs mt-3 font-mono text-sky-400">
                             <span>AVG CONFIDENCE</span>
                             <span className="text-white">0.896</span>
                         </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center hover:bg-slate-900 transition-colors">
                        <span className="text-4xl font-bold text-white block mb-2">319</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Patterns Evolved</span>
                    </div>
                    <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center hover:bg-slate-900 transition-colors">
                         <span className="text-4xl font-bold text-white block mb-2">127</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Max Confidence</span>
                    </div>
                    <div className="col-span-2 bg-gradient-to-r from-sky-950/50 to-slate-900 border border-sky-500/20 p-6 rounded-2xl flex items-center justify-between group">
                        <div>
                            <span className="text-3xl font-bold text-sky-400">+19.5%</span>
                            <span className="text-xs text-sky-300/70 block uppercase font-bold mt-1">System Improvement</span>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-sky-900/30 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                            <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Section 3: Memory & Context */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 space-y-6">
              <h2 className="text-3xl font-bold text-white">Memory & Context Engine</h2>
              <p className="text-slate-400 leading-relaxed">
                  <code className="text-purple-400 font-bold">memory.db</code> provides cross-agent context, enabling collaboration on multi-step work without "amnesia".
              </p>
              <p className="text-sm text-slate-500">
                  This efficiency makes the agentic loop feel responsive while staying deeply structured.
              </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl text-center hover:border-purple-500/50 transition-all group">
                  <div className="text-3xl font-mono font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{'<'}5ms</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Query Speed</div>
              </div>
               <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl text-center hover:border-purple-500/50 transition-all group">
                  <div className="text-3xl font-mono font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">0.26ms</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Bootstrap Time</div>
              </div>
               <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl text-center hover:border-purple-500/50 transition-all group">
                  <div className="text-3xl font-mono font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">45KB</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">State Size</div>
              </div>
          </div>
      </section>

      {/* Section 4: Why It Matters */}
      <section className="text-center pt-16 pb-8 border-t border-slate-800/50">
          <h2 className="text-2xl font-bold text-white mb-12">Why It Matters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                  { label: 'Reliability', desc: 'Procedural Control', color: 'emerald' },
                  { label: 'Flexibility', desc: 'Multiple Agents', color: 'indigo' },
                  { label: 'Learning', desc: 'Database-Backed', color: 'sky' },
                  { label: 'Transparency', desc: 'Verifiable Paths', color: 'amber' }
              ].map((item) => (
                  <div key={item.label} className={`p-6 rounded-xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900 hover:border-${item.color}-500/50 transition-all duration-300 group`}>
                      <h3 className={`text-lg font-bold text-white group-hover:text-${item.color}-400 mb-2 transition-colors`}>{item.label}</h3>
                      <p className="text-xs text-slate-500 group-hover:text-slate-400">{item.desc}</p>
                  </div>
              ))}
          </div>
      </section>

    </div>
  );
};

export default AgenticSystem;