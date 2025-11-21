
import React from 'react';

const ResearchPaper: React.FC = () => {
  return (
    <div className="pt-12 space-y-16 animate-fade-in">
      
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto space-y-6">
         <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-indigo-950 border border-indigo-500/30 mb-2">
            <span className="text-indigo-300 text-xs font-mono uppercase tracking-widest">Version 2.0 (Publication-Ready)</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
            <span className="text-slate-400 text-xs font-mono">Nov 21, 2025</span>
         </div>
         <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Trait-Based Bayesian Learning in <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Cognitive AI Agents</span>
         </h1>
         <p className="text-lg text-slate-400">
            An Empirical Evaluation of Meta-Cognitive Reasoning
         </p>
         <div className="flex flex-wrap justify-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
            <span className="bg-slate-900 px-2 py-1 rounded">cs.AI</span>
            <span className="bg-slate-900 px-2 py-1 rounded">cs.SE</span>
            <span className="bg-slate-900 px-2 py-1 rounded">cs.LG</span>
         </div>
      </div>

      {/* Abstract */}
      <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-indigo-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
          <h3 className="text-2xl font-bold text-white mb-4">Abstract</h3>
          <p className="text-slate-300 leading-relaxed text-lg">
              Large language models (LLMs) have democratized code generation, yet they remain stateless and reactive, often producing insecure code or blindly following flawed instructions without strategic challenge. We present <strong className="text-white">Cognitive AI Agents</strong> ("Savants") that utilize trait-based Bayesian learning to maintain persistent judgment and meta-cognitive awareness across tasks. Through an empirical evaluation of five diverse software engineering scenarios, we demonstrate that Savant agents achieve a <strong className="text-white">56% aggregate quality improvement</strong> over standard LLM interactions (87.8 vs 56.2/100).
          </p>
          <p className="text-slate-300 leading-relaxed text-lg mt-4">
              The impact is most pronounced in high-stakes domains: Savants delivered a <strong className="text-white">129% improvement in full-stack implementation</strong>, transforming SQL-injection-vulnerable drafts into production-hardened code, and achieved <strong className="text-white">100% waste reduction</strong> in strategic planning by autonomously applying YAGNI (You Aren't Gonna Need It) analysis to reject unnecessary user prompts—a capability entirely absent in baseline models. Furthermore, when compared against state-of-the-art (SOTA) agentic swarms, Savants maintained a <strong className="text-white">5.3% marginal advantage</strong>, representing the "elite gap" between competent execution and expert mastery through self-reflection. All deliverables were validated via filesystem verification, reducing false completion claims ("task theatre") from 24% to 2%. We conclude that while standard LLMs suffice for rapid prototyping, Cognitive AI provides the necessary rigor, security, and strategic foresight for enterprise-grade engineering.
          </p>
      </div>

      {/* Key Results Grid */}
      <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Empirical Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all group">
                  <div className="text-4xl font-bold text-indigo-400 mb-2 group-hover:scale-110 transition-transform origin-left">56%</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Aggregate Improvement</div>
                  <p className="text-sm text-slate-400">Quality score of 87.8 vs 56.2/100 over direct LLM interaction.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-all group">
                  <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform origin-left">129%</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Security Increase</div>
                  <p className="text-sm text-slate-400">Eliminated critical vulnerabilities in full-stack tasks compared to baseline.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all group">
                  <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform origin-left">100%</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Waste Reduction</div>
                  <p className="text-sm text-slate-400">Autonomously applied YAGNI to prevent unnecessary complexity.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-all group">
                  <div className="text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform origin-left">5.3%</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Elite Marginal Utility</div>
                  <p className="text-sm text-slate-400">The "Olympic Sprinter" gap over SOTA agentic swarms.</p>
              </div>
          </div>
      </section>

      {/* Real World Impact & Animated Paper */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Real-World Impact</h3>
              <div className="space-y-6">
                  <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-sky-900/20 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7" /></svg>
                      </div>
                      <div>
                          <h4 className="text-white font-bold">Strategic Planning</h4>
                          <p className="text-slate-400 text-sm mt-1">
                              Prevented 12 hours of implementation waste ($3,000 value) by recommending SQLite optimization over a requested Redis cluster.
                          </p>
                      </div>
                  </div>
                  
                  <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-rose-900/20 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </div>
                      <div>
                          <h4 className="text-white font-bold">Security</h4>
                          <p className="text-slate-400 text-sm mt-1">
                              Delivered production-ready code with 100% parameterized queries, compared to the SQL-injection-vulnerable output of the baseline.
                          </p>
                      </div>
                  </div>

                  <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      </div>
                      <div>
                          <h4 className="text-white font-bold">Learning Design</h4>
                          <p className="text-slate-400 text-sm mt-1">
                              Transformed a basic outline into an accreditation-ready curriculum, projected to reduce student failure rates by 50%.
                          </p>
                      </div>
                  </div>
                  
                  <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-900/20 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                      </div>
                      <div>
                          <h4 className="text-white font-bold">Database Optimization</h4>
                          <p className="text-slate-400 text-sm mt-1">
                              Prioritized query plan analysis over noisy micro-benchmarks, increasing time-to-incident from 30 days (Baseline) to 90+ days (Savant).
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Animated Paper Visualization */}
          <div className="flex flex-col items-center justify-center py-8">
              <div className="relative group cursor-pointer perspective-1000">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-50 transition duration-700 animate-pulse"></div>
                  
                  {/* The Paper */}
                  <a 
                      href="https://gist.github.com/bar181/3f83f792e4a0343a016f369ad5ff77a4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block w-64 h-80 bg-slate-100 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col p-8 transform transition-all duration-500 group-hover:-translate-y-4 group-hover:rotate-2 group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.3)]"
                  >
                      {/* Paper Header */}
                      <div className="flex justify-between items-start mb-8">
                          <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center text-white font-bold font-serif">B</div>
                          <div className="px-2 py-1 border border-slate-300 rounded text-[8px] font-mono text-slate-400">DRAFT v2.0</div>
                      </div>

                      {/* Paper lines */}
                      <div className="space-y-3 mb-8">
                          <div className="w-full h-3 bg-slate-800 rounded-sm opacity-80"></div>
                          <div className="w-3/4 h-3 bg-slate-800 rounded-sm opacity-80"></div>
                          <div className="w-full h-2 bg-slate-300 rounded-sm mt-6"></div>
                          <div className="w-full h-2 bg-slate-300 rounded-sm"></div>
                          <div className="w-5/6 h-2 bg-slate-300 rounded-sm"></div>
                          <div className="w-full h-2 bg-slate-300 rounded-sm"></div>
                          <div className="w-4/5 h-2 bg-slate-300 rounded-sm"></div>
                      </div>
                      
                      {/* Center CTA */}
                      <div className="mt-auto flex justify-center">
                          <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm group-hover:scale-105 transition-transform">
                              Read on Gist
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </div>
                      </div>
                  </a>
              </div>

              <div className="text-center mt-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <h4 className="text-white font-bold text-lg mb-2">Feedback Welcome</h4>
                  <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                      This research is currently in pre-print. We welcome analysis, reproduction attempts, and theoretical challenges from the community.
                  </p>
              </div>
          </div>
      </section>

      {/* Footer / Keywords */}
      <div className="border-t border-slate-800 pt-8 pb-12">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Keywords</h4>
          <div className="flex flex-wrap gap-2">
              {['Cognitive AI', 'Bayesian Learning', 'Meta-Cognitive Reasoning', 'Software Engineering', 'LLM Agents', 'Code Generation'].map(kw => (
                  <span key={kw} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs text-slate-400">
                      {kw}
                  </span>
              ))}
          </div>
      </div>

    </div>
  );
};

export default ResearchPaper;
