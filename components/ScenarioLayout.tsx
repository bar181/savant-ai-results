import React from 'react';
import NetworkViz from './NetworkViz';
import { SCENARIO_DETAILS } from '../constants';

interface ScenarioLayoutProps {
  scenarioId: 'baseline' | 'swarm' | 'savant';
}

const ScenarioLayout: React.FC<ScenarioLayoutProps> = ({ scenarioId }) => {
  const details = SCENARIO_DETAILS[scenarioId];
  const isSavant = scenarioId === 'savant';

  return (
    <div className="pt-12 space-y-8 animate-fade-in">
        
      {/* Header */}
      <div className="border-b border-slate-800 pb-8">
        <div className="flex items-center gap-4 mb-2">
            <span className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wide 
                ${scenarioId === 'baseline' ? 'bg-slate-800 text-slate-400' : 
                  scenarioId === 'swarm' ? 'bg-cyan-900/30 text-cyan-400' : 'bg-purple-900/30 text-purple-400'}`}>
                Scenario {scenarioId === 'baseline' ? '01' : scenarioId === 'swarm' ? '02' : '03'}
            </span>
            <h1 className="text-4xl font-bold text-white">{details.title}</h1>
        </div>
        <p className="text-xl text-slate-400 max-w-3xl">{details.description}</p>
      </div>

      {/* Visual & Pros/Cons */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          <div className="lg:col-span-2 glass-panel rounded-2xl border border-slate-700/50 relative overflow-hidden flex flex-col">
             <div className="absolute top-6 left-6 z-10 pointer-events-none">
                <h3 className="text-sm font-mono text-slate-400 uppercase">Architecture Viz</h3>
             </div>
             <div className="flex-1 w-full h-full">
                <NetworkViz scenarioId={scenarioId} />
             </div>
             <div className="p-4 border-t border-slate-800 bg-slate-950/50 backdrop-blur text-xs font-mono flex justify-between text-slate-500">
                <span>NODES: {scenarioId === 'baseline' ? '1' : scenarioId === 'swarm' ? '15' : '4 Core + 10 Sub'}</span>
                <span>LATENCY: {scenarioId === 'baseline' ? 'LOW' : scenarioId === 'swarm' ? 'MED' : 'HIGH (Thinking)'}</span>
                <span>STATUS: ONLINE</span>
             </div>
          </div>

          <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-emerald-500">
                  <h3 className="text-lg font-bold mb-4 text-emerald-400 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Advantages
                  </h3>
                  <ul className="space-y-3">
                      {details.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5"></span>
                              {pro}
                          </li>
                      ))}
                  </ul>
              </div>

              <div className="glass-panel p-6 rounded-2xl border-l-4 border-rose-500">
                  <h3 className="text-lg font-bold mb-4 text-rose-400 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      Limitations
                  </h3>
                  <ul className="space-y-3">
                      {details.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5"></span>
                              {con}
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>

      {/* Test Log */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 font-mono text-sm text-slate-500">Simulation Log #{details.testLog.id}</span>
              </div>
              <div className="text-xs font-bold px-2 py-1 rounded bg-slate-800 text-slate-400">
                  RESULT: <span className={details.testLog.result === 'OPTIMAL' ? 'text-purple-400' : details.testLog.result === 'FAILURE' ? 'text-rose-400' : 'text-yellow-400'}>{details.testLog.result}</span>
              </div>
          </div>
          <div className="p-6 font-mono text-sm space-y-6 overflow-x-auto">
              <div>
                  <span className="text-slate-500 block mb-1">// USER INPUT</span>
                  <p className="text-slate-200">{details.testLog.input}</p>
              </div>
              
              <div className="pl-4 border-l-2 border-slate-700">
                   <span className="text-slate-500 block mb-1">// SYSTEM OUTPUT</span>
                   <p className="text-emerald-300 whitespace-pre-wrap">{details.testLog.output}</p>
              </div>

              <div className="flex gap-8 pt-4 border-t border-slate-800/50">
                  <div>
                      <span className="text-slate-600 text-xs block">CORRECTION RATE</span>
                      <span className="text-xl font-bold text-white">{details.testLog.correctionRate}</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ScenarioLayout;