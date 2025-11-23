import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-brand-surface border-t border-brand-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-white uppercase tracking-widest">F.A.Q.</h2>
          <p className="text-brand-muted mt-4">Common questions we get asked on the job.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-brand-accent bg-brand-black' : 'border-brand-border bg-transparent hover:border-gray-600'}`}>
              <button 
                onClick={() => toggle(index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left group"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-accent' : 'text-brand-bone group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`rounded-full p-1 transition-colors ${openIndex === index ? 'bg-brand-accent text-brand-black' : 'bg-brand-surface border border-brand-border text-gray-400'}`}>
                   {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8 pt-2 text-brand-muted leading-relaxed font-light">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;