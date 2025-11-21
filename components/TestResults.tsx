
import React from 'react';
import { TEST_SCENARIOS, OVERALL_RESULTS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const TestResults: React.FC = () => {
  const summaryData = [
    { name: 'Mode 1: Baseline', score: OVERALL_RESULTS.baseline, color: '#94a3b8' },
    { name: 'Mode 2: Standard', score: OVERALL_RESULTS.standard, color: '#38bdf8' },
    { name: 'Mode 3: Savant', score: OVERALL_RESULTS.savant, color: '#a855f7' },
  ];

  return (
    <div className="pt-12 space-y-20 animate-fade-in">
        
      {/* Header Section */}
      <div className="text-center space-y-8">
        <div className="inline-block px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-mono uppercase tracking-widest mb-2">
            Validation Complete
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
            System Validation
        </h1>
        <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Five high-complexity scenarios. Three modes. One clear pattern. <br/>
            Savant AI consistently outperforms standard agents, delivering massive ROI in strategic and safety-critical tasks.
        </p>
      </div>

      {/* Executive Summary & The Gap */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-panel p-8 rounded-3xl border border-slate-700">
               <h3 className="text-2xl font-bold text-white mb-6">Overall Average Scores</h3>
               <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={summaryData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                             <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#334155" />
                             <XAxis type="number" domain={[0, 100]} hide />
                             <YAxis type="category" dataKey="name" width={120} tick={{fill: '#94a3b8', fontSize: 12}} />
                             <Tooltip 
                                cursor={{fill: 'transparent'}}
                                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }}
                             />
                             <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={32}>
                                {summaryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                             </Bar>
                        </BarChart>
                    </ResponsiveContainer>
               </div>
          </div>
          
          <div className="space-y-8">
              <div>
                  <h3 className="text-3xl font-bold text-white mb-4">The Honest Gap vs. The Practical Gap</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                      Looking purely at the numbers, Savant AI shows a <span className="text-white font-bold">3–5% advantage</span> at elite performance levels (90+). This "Honest Gap" might seem small on paper.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                      However, the "Practical Gap" is massive. In high-stakes scenarios, that 5% difference is the gap between a <span className="text-rose-400">security vulnerability</span> and a <span className="text-emerald-400">safe deployment</span>, or between wasting weeks on over-engineering vs. identifying a YAGNI opportunity immediately.
                  </p>
              </div>
              <div className="flex gap-4">
                  <div className="flex-1 bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-center">
                      <span className="block text-3xl font-bold text-white mb-1">87.8</span>
                      <span className="text-xs text-slate-500 uppercase tracking-wider">Avg Savant Score</span>
                  </div>
                  <div className="flex-1 bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-center">
                      <span className="block text-3xl font-bold text-emerald-400 mb-1">ROI</span>
                      <span className="text-xs text-slate-500 uppercase tracking-wider">Primary Driver</span>
                  </div>
              </div>
          </div>
      </section>

      {/* Detailed Scenarios List */}
      <section className="space-y-8">
          <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">Five High-Complexity Scenarios</h3>
          
          <div className="grid grid-cols-1 gap-8">
              {TEST_SCENARIOS.map((scenario) => (
                  <div key={scenario.id} className="glass-panel rounded-2xl overflow-hidden border border-slate-800 group hover:border-indigo-500/40 transition-all duration-500">
                      {/* Card Header */}
                      <div className="p-6 bg-slate-950 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                              <div className="flex items-center gap-3 mb-2">
                                  <span className="text-xs font-mono text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded uppercase">
                                      Scenario 0{scenario.id}
                                  </span>
                                  <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                                      {scenario.domain}
                                  </span>
                              </div>
                              <h4 className="text-xl md:text-2xl font-bold text-white">{scenario.title}</h4>
                              <p className="text-sm text-slate-400 mt-1">Task: {scenario.task}</p>
                          </div>
                          <div className="flex items-center gap-4">
                              <div className="text-right hidden md:block">
                                  <span className="text-xs text-slate-500 block">HIGHEST IMPACT</span>
                                  <span className="text-emerald-400 font-bold">{scenario.roiHighlight}</span>
                              </div>
                              <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white font-bold shadow-inner">
                                  {scenario.scores.savant}
                              </div>
                          </div>
                      </div>

                      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                          
                          {/* Scores Visualization */}
                          <div className="lg:col-span-5 space-y-5">
                              <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Performance Scores</h5>
                              
                              {/* Baseline */}
                              <div className="space-y-1">
                                  <div className="flex justify-between text-xs text-slate-500">
                                      <span>Mode 1: Baseline</span>
                                      <span>{scenario.scores.baseline}/100</span>
                                  </div>
                                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                                      <div className="h-full bg-slate-600 rounded-full" style={{ width: `${scenario.scores.baseline}%` }}></div>
                                  </div>
                              </div>

                              {/* Standard */}
                              <div className="space-y-1">
                                  <div className="flex justify-between text-xs text-sky-400">
                                      <span>Mode 2: Standard Agents</span>
                                      <span>{scenario.scores.standard}/100</span>
                                  </div>
                                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                                      <div className="h-full bg-sky-500 rounded-full" style={{ width: `${scenario.scores.standard}%` }}></div>
                                  </div>
                              </div>

                              {/* Savant */}
                              <div className="space-y-1 relative">
                                  <div className="flex justify-between text-xs text-purple-400 font-bold">
                                      <span>Mode 3: Savant AI</span>
                                      <span>{scenario.scores.savant}/100</span>
                                  </div>
                                  <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                                      <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full relative" style={{ width: `${scenario.scores.savant}%` }}>
                                          <div className="absolute top-0 bottom-0 right-0 w-1 bg-white/50 animate-pulse"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          {/* Key Stats */}
                          <div className="lg:col-span-3 space-y-4">
                              <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Key Stats</h5>
                              <ul className="space-y-3">
                                  {scenario.keyStats.map((stat, i) => (
                                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                                          <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                          {stat}
                                      </li>
                                  ))}
                              </ul>
                          </div>

                          {/* Savant Improvements Log */}
                          <div className="lg:col-span-4 bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs relative overflow-hidden">
                              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                              <h5 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                  SAVANT SELF-IMPROVEMENT
                              </h5>
                              <div className="space-y-3 text-slate-400">
                                  <div>
                                      <span className="text-slate-600 block">TRAIT UPDATE</span>
                                      <span className="text-slate-300">{scenario.savantImprovements.trait}</span> 
                                      <span className="text-emerald-400 ml-2">{scenario.savantImprovements.value}</span>
                                  </div>
                                  {scenario.savantImprovements.pattern && (
                                      <div>
                                          <span className="text-slate-600 block">PATTERN ADDED</span>
                                          <span className="text-sky-300">"{scenario.savantImprovements.pattern}"</span>
                                      </div>
                                  )}
                                  <div>
                                      <span className="text-slate-600 block">DSMG UPDATE</span>
                                      <span className="text-amber-300">"{scenario.savantImprovements.dsmg}"</span>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              ))}
          </div>
      </section>

    </div>
  );
};

export default TestResults;
