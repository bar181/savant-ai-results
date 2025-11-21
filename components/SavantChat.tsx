import React, { useState, useRef, useEffect } from 'react';
import { AgentPersona, ChatMessage } from '../types';
import { generatePersonaResponse } from '../services/geminiService';

interface SavantChatProps {
  persona: AgentPersona;
  onClose: () => void;
}

const SavantChat: React.FC<SavantChatProps> = ({ persona, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `I am ${persona.name}. ${persona.role}. How may I assist in your meta-cognitive inquiries?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Convert internal message format to API format
    const historyHistory = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const responseText = await generatePersonaResponse(persona, userMsg.text, historyHistory);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4">
      <div className={`w-full max-w-3xl h-[80vh] flex flex-col glass-panel rounded-2xl border border-${persona.color}-500/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden`}>
        
        {/* Header */}
        <div className={`p-4 border-b border-slate-700 bg-${persona.color}-950/30 flex justify-between items-center`}>
          <div className="flex items-center gap-3">
             <div className={`w-10 h-10 rounded-full overflow-hidden border-2 border-${persona.color}-400`}>
                <img src={persona.imagePlaceholder} alt={persona.name} className="w-full h-full object-cover" />
             </div>
             <div>
                <h3 className={`text-lg font-bold text-${persona.color}-300`}>{persona.name}</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider">{persona.role}</p>
             </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-900/50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-4 ${
                msg.role === 'user' 
                  ? 'bg-slate-700 text-white rounded-br-none' 
                  : `bg-slate-800/80 border border-${persona.color}-500/20 text-slate-100 rounded-bl-none`
              }`}>
                <div className="whitespace-pre-wrap text-sm leading-relaxed font-light">
                    {msg.text}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
                <div className={`bg-slate-800/80 border border-${persona.color}-500/20 rounded-2xl rounded-bl-none p-4 flex items-center gap-2`}>
                    <div className={`w-2 h-2 bg-${persona.color}-400 rounded-full animate-bounce`}></div>
                    <div className={`w-2 h-2 bg-${persona.color}-400 rounded-full animate-bounce delay-75`}></div>
                    <div className={`w-2 h-2 bg-${persona.color}-400 rounded-full animate-bounce delay-150`}></div>
                    <span className={`text-xs text-${persona.color}-400 ml-2 animate-pulse`}>Engaging Meta-Cognition...</span>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-700 bg-slate-900">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={`Ask ${persona.name} about its thought process...`}
              className="flex-1 bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-white transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                !input.trim() || isLoading 
                ? 'bg-slate-800 text-slate-600 cursor-not-allowed' 
                : `bg-${persona.color}-600 hover:bg-${persona.color}-500 text-white shadow-lg shadow-${persona.color}-500/25`
              }`}
            >
              Send
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SavantChat;
