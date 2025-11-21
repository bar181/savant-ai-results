
import React, { useState, useEffect } from 'react';

const Coordination: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      id: 0,
      title: 'Parallel Swarm',
      subtitle: 'Divergent Exploration',
      description: 'Tasks are broadcast to a triad or pentad of specialized agents. They work in parallel, exploring different reasoning paths simultaneously to avoid local optima.',
      color: 'sky',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
      )
    },
    {
      id: 1,
      title: 'Consensus Step',
      subtitle: 'Convergent Reasoning',
      description: 'The swarm submits diverse outputs. A "Synthesizer" agent reviews arguments, weighing evidence strength against the plan, merging the best insights into a single candidate.',
      color: 'indigo',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
      )
    },
    {
      id: 2,
      title: 'Verification',
      subtitle: 'Constraint Enforcement',
      description: 'The candidate solution is passed to "Validator" agents. They run hard checks: security rules, syntax validity, and YAGNI constraints. If it fails, it loops back.',
      color: 'rose',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      id: 3,
      title: 'Learning Update',
      subtitle: 'Bayesian Integration',
      description: 'Success or failure is recorded in learning.db. Pattern confidence scores are updated, ensuring the swarm is smarter for the next iteration.',
      color: 'emerald',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
      )
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <div className="pt-12 space-y-24 animate-fade-in">
      
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center space-y-6 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>
         <span className="inline-block py-1 px-3 rounded-full bg-indigo-950 border border-indigo-500/30 text-indigo-400 font-mono text-xs tracking-widest uppercase mb-4">
            Architecture Deep Dive
         </span>
         <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Agents, Coordination <br/> & Memory
         </h1>
         <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
             A look inside the machine: How 30+ specialized agents collaborate through parallel swarms, consensus protocols, and strict verification loops.
         </p>
      </div>

      {/* Interactive Coordination Loop */}
      <section className="relative">
        <div className="glass-panel rounded-3xl border border-slate-700 overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[600px]">
            
            {/* Left: Controls & List */}
            <div className="w-full lg:w-1/3 border-r border-slate-800 bg-slate-950/50 p-6 flex flex-col">
                <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">Coordination Loop</h3>
                    <button 
                        onClick={() => setIsPaused(!isPaused)}
                        className="text-xs font-mono text-slate-500 hover:text-white transition-colors flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-800"
                    >
                        {isPaused ? (
                            <><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6 4l10 6-10 6V4z"/></svg> RESUME</>
                        ) : (
                            <><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg> PAUSE</>
                        )}
                    </button>
                </div>
                
                <div className="flex-1 space-y-2 relative">
                    {/* Progress Line */}
                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-800 -z-10"></div>
                    
                    {steps.map((step, index) => (
                        <div 
                            key={step.id}
                            onClick={() => { setActiveStep(index); setIsPaused(true); }}
                            className={`
                                relative p-4 rounded-xl cursor-pointer transition-all duration-300 border
                                ${activeStep === index 
                                    ? `bg-slate-800 border-${step.color}-500/50 shadow-lg` 
                                    : 'bg-transparent border-transparent hover:bg-slate-900 hover:border-slate-700'
                                }
                            `}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`
                                    w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-500
                                    ${activeStep === index 
                                        ? `bg-${step.color}-500 text-white border-${step.color}-400 scale-110` 
                                        : `bg-slate-900 text-slate-500 border-slate-700`
                                    }
                                `}>
                                    {index + 1}
                                </div>
                                <div>
                                    <h4 className={`text-sm font-bold transition-colors ${activeStep === index ? 'text-white' : 'text-slate-400'}`}>
                                        {step.title}
                                    </h4>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{step.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Visualization Stage */}
            <div className="w-full lg:w-2/3 bg-slate-900/50 relative p-8 md:p-12 flex flex-col justify-center items-center text-center overflow-hidden">
                 {/* Background Grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none"></div>

                 {/* Animated Central Element */}
                 <div className="relative z-10 mb-8 h-48 flex items-center justify-center">
                     {activeStep === 0 && (
                         <div className="relative">
                             {/* Swarm Animation */}
                             <div className="absolute inset-0 animate-ping opacity-20 rounded-full bg-sky-500"></div>
                             <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-sky-500 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                                 {steps[0].icon}
                             </div>
                             {/* Satellites */}
                             {[...Array(5)].map((_, i) => (
                                 <div key={i} 
                                    className="absolute w-3 h-3 bg-sky-400 rounded-full animate-float"
                                    style={{
                                        top: `${50 + 40 * Math.sin(i * 1.2)}%`,
                                        left: `${50 + 40 * Math.cos(i * 1.2)}%`,
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                 ></div>
                             ))}
                         </div>
                     )}
                     {activeStep === 1 && (
                         <div className="relative">
                              <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                                 {steps[1].icon}
                             </div>
                             {/* Converging Arrows */}
                             {[0, 90, 180, 270].map((deg, i) => (
                                 <div key={i} 
                                     className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-indigo-500 origin-left"
                                     style={{ transform: `rotate(${deg}deg) translate(40px, 0)` }}
                                 >
                                     <div className="absolute right-0 -top-1 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
                                 </div>
                             ))}
                         </div>
                     )}
                     {activeStep === 2 && (
                         <div className="relative">
                             <div className="absolute inset-0 bg-rose-500/10 blur-xl rounded-full animate-pulse"></div>
                             <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-rose-500 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(244,63,94,0.3)]">
                                 {steps[2].icon}
                             </div>
                             {/* Scanning Line */}
                             <div className="absolute top-0 left-0 w-full h-1 bg-rose-400 shadow-[0_0_10px_#fb7185] animate-[float_2s_ease-in-out_infinite]"></div>
                         </div>
                     )}
                     {activeStep === 3 && (
                         <div className="relative">
                             <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                 {steps[3].icon}
                             </div>
                             {/* Data Upload Particles */}
                             {[...Array(6)].map((_, i) => (
                                 <div key={i} className="absolute bottom-0 left-1/2 w-1 h-1 bg-emerald-400 rounded-full animate-[fade-in_1s_ease-out_infinite]"
                                      style={{ animationDelay: `${i * 0.15}s`, transform: `translateX(${(i-3)*10}px)` }}>
                                 </div>
                             ))}
                         </div>
                     )}
                 </div>

                 <div className={`transition-opacity duration-500 ${isPaused ? 'opacity-100' : 'opacity-90'}`}>
                     <h3 className={`text-2xl font-bold mb-2 text-${steps[activeStep].color}-400`}>
                         {steps[activeStep].title}
                     </h3>
                     <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
                         {steps[activeStep].description}
                     </p>
                 </div>

                 {/* Progress Indicators */}
                 <div className="absolute bottom-8 flex gap-2">
                     {steps.map((_, i) => (
                         <div key={i} className={`h-1 rounded-full transition-all duration-300 ${activeStep === i ? `w-8 bg-${steps[activeStep].color}-500` : 'w-2 bg-slate-700'}`}></div>
                     ))}
                 </div>
            </div>
        </div>
      </section>

      {/* The 3 Database Engines */}
      <section className="space-y-8">
          <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-700"></div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Core Memory Engines</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-700"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Learning DB */}
              <div className="group bg-slate-900/50 border border-sky-900/30 p-8 rounded-2xl relative overflow-hidden hover:border-sky-500/50 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-sky-900/20">
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all duration-700"></div>
                  <div className="w-12 h-12 bg-sky-950 rounded-lg border border-sky-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-xl font-mono font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">learning.db</h3>
                  <p className="text-xs text-sky-500 uppercase tracking-wide mb-4 font-bold">Pattern Evolution</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                      Captures successful patterns. When a solution works, it is generalized and stored here. 
                      <br/><br/>
                      <span className="text-slate-500 text-xs border-l-2 border-sky-900 pl-2 block">
                        QUERY: "SELECT pattern FROM success_history WHERE task_type = 'API_MIGRATION'"
                      </span>
                  </p>
              </div>

              {/* Memory DB */}
              <div className="group bg-slate-900/50 border border-purple-900/30 p-8 rounded-2xl relative overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-purple-900/20">
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
                  <div className="w-12 h-12 bg-purple-950 rounded-lg border border-purple-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <h3 className="text-xl font-mono font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">memory.db</h3>
                  <p className="text-xs text-purple-500 uppercase tracking-wide mb-4 font-bold">State Synchronization</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                      The source of truth. Synchronizes context across 30+ agents so the 'Coder' knows exactly what the 'Architect' planned.
                      <br/><br/>
                      <span className="text-slate-500 text-xs border-l-2 border-purple-900 pl-2 block">
                        STATUS: LOCKED_SYNC [45kb State]
                      </span>
                  </p>
              </div>

              {/* DSMG DB */}
              <div className="group bg-slate-900/50 border border-amber-900/30 p-8 rounded-2xl relative overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-amber-900/20">
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
                  <div className="w-12 h-12 bg-amber-950 rounded-lg border border-amber-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                  </div>
                  <h3 className="text-xl font-mono font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">dsmg.db</h3>
                  <p className="text-xs text-amber-500 uppercase tracking-wide mb-4 font-bold">Cognitive Structure</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                      Dynamic Self-Model Graph. Tracks the emerging cognitive structure, allowing the swarm to organize its hierarchy based on complexity.
                      <br/><br/>
                      <span className="text-slate-500 text-xs border-l-2 border-amber-900 pl-2 block">
                        GROWTH: +14 Nodes / Session
                      </span>
                  </p>
              </div>
          </div>
      </section>

      {/* Agent Roles Summary */}
      <section className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="space-y-3">
                   <h4 className="text-white font-bold flex items-center gap-2">
                       <span className="w-2 h-2 bg-indigo-500 rounded-full"></span> Planners
                   </h4>
                   <p className="text-xs text-slate-400">Create structured task plans, identify missing info, and define safety constraints.</p>
                   <ul className="text-[10px] font-mono text-slate-500 space-y-1">
                       <li>&gt; planner-primary</li>
                       <li>&gt; de-risk-planner</li>
                       <li>&gt; scenario-mapper</li>
                   </ul>
               </div>
               <div className="space-y-3">
                   <h4 className="text-white font-bold flex items-center gap-2">
                       <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Builders
                   </h4>
                   <p className="text-xs text-slate-400">Produce code, documentation, or artifacts aligned with the plan.</p>
                   <ul className="text-[10px] font-mono text-slate-500 space-y-1">
                       <li>&gt; fullstack-writer</li>
                       <li>&gt; doc-writer</li>
                       <li>&gt; api-writer</li>
                   </ul>
               </div>
               <div className="space-y-3">
                   <h4 className="text-white font-bold flex items-center gap-2">
                       <span className="w-2 h-2 bg-rose-500 rounded-full"></span> Validators
                   </h4>
                   <p className="text-xs text-slate-400">Apply strict checks: security, logic, consistency, and factual accuracy.</p>
                   <ul className="text-[10px] font-mono text-slate-500 space-y-1">
                       <li>&gt; cli-security</li>
                       <li>&gt; cli-reviewer</li>
                       <li>&gt; cli-assessor</li>
                   </ul>
               </div>
               <div className="space-y-3">
                   <h4 className="text-white font-bold flex items-center gap-2">
                       <span className="w-2 h-2 bg-amber-500 rounded-full"></span> Strategists
                   </h4>
                   <p className="text-xs text-slate-400">Ask high-level questions, challenge assumptions, and run YAGNI analysis.</p>
                   <ul className="text-[10px] font-mono text-slate-500 space-y-1">
                       <li>&gt; strategic-advisor</li>
                       <li>&gt; system-optimizer</li>
                   </ul>
               </div>
          </div>
      </section>

    </div>
  );
};

export default Coordination;
