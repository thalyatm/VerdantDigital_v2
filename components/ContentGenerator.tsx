import React, { useState } from 'react';
import { generateTradieContent } from '../services/geminiService';
import { Sparkles, Loader2, Copy, Check, Terminal, Zap, ChevronRight } from 'lucide-react';

const ContentGenerator: React.FC = () => {
  const [trade, setTrade] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ headline: string, bio: string } | null>(null);
  const [copied, setCopied] = useState<'headline' | 'bio' | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trade || !location) return;

    setLoading(true);
    const data = await generateTradieContent(trade, location, 'Professional, Aussie, Trustworthy');
    setResult(data);
    setLoading(false);
  };

  const copyToClipboard = (text: string, field: 'headline' | 'bio') => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="content-generator" className="py-32 bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 text-brand-accent mb-6 px-4 py-1.5 bg-brand-black rounded-full border border-brand-accent/20">
              <Zap size={14} className="fill-current" />
              <span className="text-xs font-bold uppercase tracking-widest">Free AI Tool</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-[0.9]">
              HATE WRITING?<br />
              <span className="text-brand-muted">WE GOT YOU.</span>
            </h2>
            <p className="text-brand-muted text-lg mb-10 max-w-md">
              Most tradies delay their website because they don't know what to say. Use our free tool to generate professional copy in seconds.
            </p>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Your Trade</label>
                  <input
                    type="text"
                    value={trade}
                    onChange={(e) => setTrade(e.target.value)}
                    placeholder="e.g. Plumber"
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-4 outline-none transition-all placeholder-gray-700 font-medium focus:ring-1 focus:ring-brand-accent"
                  />
                </div>
                <div className="space-y-2">
                   <label className="block text-xs font-bold text-brand-accent uppercase tracking-widest ml-1">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Richmond"
                    className="w-full bg-brand-black border border-brand-border focus:border-brand-accent text-white rounded-lg p-4 outline-none transition-all placeholder-gray-700 font-medium focus:ring-1 focus:ring-brand-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading || !trade || !location}
                className="w-full bg-brand-accent hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed text-brand-black font-extrabold text-lg py-4 rounded-lg shadow-[0_4px_14px_rgba(0,255,157,0.4)] hover:shadow-[0_6px_20px_rgba(0,255,157,0.6)] transition-all flex items-center justify-center gap-3 group"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                GENERATE COPY
                {!loading && <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />}
              </button>
            </form>
          </div>

          {/* Terminal Output UI */}
          <div className="relative group">
             <div className="absolute -inset-1 bg-brand-accent rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
             <div className="relative bg-[#0a0a0a] border border-brand-border rounded-xl overflow-hidden shadow-2xl font-mono text-sm">
               {/* Terminal Header */}
               <div className="bg-[#1a1a1a] px-4 py-3 border-b border-[#333] flex items-center gap-3">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                 </div>
                 <span className="text-gray-500 text-xs tracking-widest ml-2">bash -- verdant-ai-v2.0</span>
               </div>

               {/* Content Area */}
               <div className="p-8 min-h-[380px] flex flex-col font-mono">
                 {!result && !loading && (
                   <div className="flex-grow flex flex-col items-center justify-center text-gray-700 space-y-4">
                     <Terminal size={48} className="text-gray-800 mb-4" />
                     <p className="text-xs text-center opacity-50">
                       <span className="text-brand-accent">root@verdant:~$</span> waiting for input...<br/>
                     </p>
                   </div>
                 )}

                 {loading && (
                   <div className="flex-grow flex flex-col items-center justify-center space-y-4">
                     <Loader2 className="animate-spin text-brand-accent w-10 h-10" />
                     <div className="text-brand-accent text-xs animate-pulse space-y-1">
                       <p>> Analyzing local competitors...</p>
                       <p>> Extracting keywords...</p>
                       <p>> Compiling response...</p>
                     </div>
                   </div>
                 )}

                 {result && !loading && (
                   <div className="space-y-8 animate-fade-in-up">
                     <div className="group relative">
                       <div className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest">>> Generated Headline</div>
                       <div className="text-brand-accent font-bold text-lg md:text-xl leading-snug border-l-2 border-brand-accent pl-4">
                         "{result.headline}"
                       </div>
                       <button 
                          onClick={() => copyToClipboard(result.headline, 'headline')}
                          className="absolute right-0 top-0 text-gray-500 hover:text-brand-accent transition-colors"
                        >
                          {copied === 'headline' ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                     </div>

                     <div className="group relative">
                       <div className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest">>> Generated Bio</div>
                       <div className="text-gray-300 text-sm leading-relaxed border-l-2 border-[#333] pl-4">
                         {result.bio}
                       </div>
                        <button 
                          onClick={() => copyToClipboard(result.bio, 'bio')}
                          className="absolute right-0 top-0 text-gray-500 hover:text-brand-accent transition-colors"
                        >
                          {copied === 'bio' ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                     </div>
                     
                     <div className="mt-auto pt-6 border-t border-[#222] text-[10px] text-gray-600 flex justify-between uppercase tracking-wider">
                        <span>Execution Time: 0.45s</span>
                        <span className="text-brand-accent">Done</span>
                     </div>
                   </div>
                 )}
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentGenerator;