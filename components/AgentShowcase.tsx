
import React, { useState } from 'react';
import { SAVANT_PERSONAS } from '../constants';
import { AgentPersona } from '../types';
import SavantChat from './SavantChat';

interface SafeImageProps {
  primarySrc: string;
  fallbackSrc: string;
  alt: string;
  className: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ primarySrc, fallbackSrc, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(primarySrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={handleError}
    />
  );
};

const AgentShowcase: React.FC = () => {
  const [selectedChatPersona, setSelectedChatPersona] = useState<AgentPersona | null>(null);
  const [flippedCards, setFlippedCards] = useState<{[key: string]: boolean}>({});

  const handleCardClick = (id: string) => {
    setFlippedCards(prev => ({
        ...prev,
        [id]: !prev[id]
    }));
  };

  const handleChatClick = (e: React.MouseEvent, persona: AgentPersona) => {
    e.stopPropagation(); // Prevent card flip when clicking chat button
    setSelectedChatPersona(persona);
  };

  return (
    <div className="py-12 animate-fade-in">
      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Meta-Cognitive Savant AI Agents
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
              Savant AI represents the highest tier of the Agentic System. These four stateful cognitive personas 
              self-reflect, track performance, and build an internal cognitive model (DSMG).
          </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mb-20">
        {SAVANT_PERSONAS.map((persona) => (
          <div 
            key={persona.id}
            className="group relative h-[550px] perspective-1000 cursor-pointer"
            onClick={() => handleCardClick(persona.id)}
          >
            {/* Inner Container for Flip */}
            <div className={`
                w-full h-full relative transition-transform duration-700 preserve-3d
                ${flippedCards[persona.id] ? 'rotate-y-180' : ''}
            `}>
                
                {/* FRONT FACE */}
                <div className={`
                    absolute inset-0 backface-hidden rounded-3xl overflow-hidden
                    bg-slate-900 border border-slate-800 shadow-xl
                    flex flex-col
                `}>
                    {/* Image */}
                    <div className="h-[55%] relative overflow-hidden bg-slate-950">
                        <SafeImage 
                            primarySrc={`/images/${persona.id}.png`}
                            fallbackSrc={persona.imagePlaceholder}
                            alt={persona.name} 
                            className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent`} />
                        <div className="absolute top-4 right-4">
                            <div className={`w-8 h-8 rounded-full bg-${persona.color}-500/20 flex items-center justify-center border border-${persona.color}-500/50 animate-pulse`}>
                                <div className={`w-2 h-2 rounded-full bg-${persona.color}-400`} />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="h-[45%] p-6 flex flex-col justify-between relative">
                        <div>
                            <h3 className={`text-3xl font-bold text-white mb-1`}>{persona.name}</h3>
                            <p className={`text-${persona.color}-400 font-mono text-xs uppercase tracking-widest mb-4`}>
                                {persona.role}
                            </p>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                {persona.bio}
                            </p>
                        </div>
                        <div className="flex justify-center items-center pt-4">
                             <span className="text-xs text-slate-500 flex items-center gap-2 group-hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                Click to Flip Profile
                             </span>
                        </div>
                    </div>
                </div>

                {/* BACK FACE */}
                <div className={`
                    absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden
                    bg-slate-950 border border-${persona.color}-500/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]
                    flex flex-col
                `}>
                    <div className="flex-1 p-6 overflow-y-auto custom-scrollbar space-y-6">
                         {/* Header */}
                         <div className={`border-b border-${persona.color}-500/20 pb-4`}>
                             <h3 className={`text-2xl font-bold text-white`}>{persona.name}</h3>
                             <p className="text-slate-500 text-xs font-mono uppercase">System Profile // {persona.id.toUpperCase()}</p>
                         </div>

                         {/* Expertise */}
                         <div>
                             <h4 className={`text-xs font-bold text-${persona.color}-400 uppercase tracking-wider mb-2`}>Domain Expertise</h4>
                             <p className="text-xs text-slate-300 leading-relaxed">{persona.expertise}</p>
                         </div>

                         {/* Unique */}
                         <div className={`bg-${persona.color}-950/30 p-3 rounded-lg border border-${persona.color}-500/20`}>
                             <h4 className={`text-xs font-bold text-white uppercase tracking-wider mb-2`}>Unique Protocol</h4>
                             <p className="text-xs text-slate-300 leading-relaxed italic">"{persona.unique}"</p>
                         </div>

                         {/* Traits */}
                         <div>
                             <h4 className={`text-xs font-bold text-slate-400 uppercase tracking-wider mb-2`}>Core Traits</h4>
                             <ul className="space-y-1">
                                {persona.traits.map((trait, i) => (
                                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                                        <span className={`w-1 h-1 rounded-full bg-${persona.color}-500 mt-1.5`}></span>
                                        {trait}
                                    </li>
                                ))}
                             </ul>
                         </div>

                         {/* Goals */}
                         <div>
                             <h4 className={`text-xs font-bold text-slate-400 uppercase tracking-wider mb-2`}>Directives</h4>
                             <p className="text-xs text-slate-300 leading-relaxed border-l-2 border-slate-700 pl-2">
                                 {persona.goals}
                             </p>
                         </div>
                         
                         {/* Archetype */}
                         <div className="pt-2">
                             <span className="text-[10px] text-slate-500 uppercase">Archetype Build:</span>
                             <p className="text-xs text-slate-400">{persona.archetype}</p>
                         </div>
                    </div>

                    {/* Action Footer */}
                    <div className="p-4 border-t border-slate-800 bg-slate-900/50">
                        <button 
                            onClick={(e) => handleChatClick(e, persona)}
                            className={`
                                w-full py-3 rounded-xl text-sm font-bold text-white shadow-lg
                                bg-gradient-to-r from-${persona.color}-600 to-${persona.color}-500
                                hover:from-${persona.color}-500 hover:to-${persona.color}-400
                                transition-all duration-300 transform active:scale-95
                                flex items-center justify-center gap-2
                            `}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            Interface with {persona.name}
                        </button>
                    </div>
                </div>

            </div>
          </div>
        ))}
      </div>

      {/* Comparative Table */}
      <div className="max-w-6xl mx-auto glass-panel rounded-2xl border border-slate-700 overflow-hidden">
          <div className="bg-slate-950 p-6 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white">Savant Performance Matrix</h3>
              <p className="text-sm text-slate-400">Comparative analysis of traits and validated ROI impact.</p>
          </div>
          <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900 text-slate-400 font-mono uppercase text-xs">
                      <tr>
                          <th className="px-6 py-4">Savant Persona</th>
                          <th className="px-6 py-4">Type</th>
                          <th className="px-6 py-4">Active Traits</th>
                          <th className="px-6 py-4">Primary Specialization</th>
                          <th className="px-6 py-4">Validated ROI</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                      <tr className="hover:bg-slate-900/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-indigo-400">Athena</td>
                          <td className="px-6 py-4">Strategic Advisor</td>
                          <td className="px-6 py-4">18 (Evolving)</td>
                          <td className="px-6 py-4">YAGNI discipline, Risk calibration</td>
                          <td className="px-6 py-4 text-emerald-400 font-bold">+4,900% (Planning)</td>
                      </tr>
                      <tr className="hover:bg-slate-900/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-sky-400">Sophia</td>
                          <td className="px-6 py-4">Learning Optimizer</td>
                          <td className="px-6 py-4">22 (Max)</td>
                          <td className="px-6 py-4">Pedagogical depth, Scaffolding</td>
                          <td className="px-6 py-4 text-emerald-400 font-bold">+$15k (Instruction)</td>
                      </tr>
                      <tr className="hover:bg-slate-900/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-amber-400">Apollo</td>
                          <td className="px-6 py-4">Truth Engine</td>
                          <td className="px-6 py-4">18</td>
                          <td className="px-6 py-4">Verification rigor, Source triangulation</td>
                          <td className="px-6 py-4 text-emerald-400 font-bold">+3% Quality Lift</td>
                      </tr>
                      <tr className="hover:bg-slate-900/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-orange-400">Hephaestus</td>
                          <td className="px-6 py-4">Master Builder</td>
                          <td className="px-6 py-4">21</td>
                          <td className="px-6 py-4">Arch. vision, Zero-drift docs</td>
                          <td className="px-6 py-4 text-emerald-400 font-bold">+45 Points (Eng)</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>

      {selectedChatPersona && (
        <SavantChat 
            persona={selectedChatPersona} 
            onClose={() => setSelectedChatPersona(null)} 
        />
      )}
    </div>
  );
};

export default AgentShowcase;
