import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, Phone } from 'lucide-react';
import { FAQS } from '../data/faq';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-[#0e172e] border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            Clear Answers
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Baloo_2']">
            अक्सर पूछे जाने वाले सवाल
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            यदि आपके मन में कोई भी संकोच या सवाल है, तो नीचे दिए गए उत्तर देखें:
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#131f3d] border border-slate-800 rounded-xl overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white font-['Baloo_2']">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-8 p-5 bg-[#121c38] border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">
              क्या आपका कोई अन्य सवाल है?
            </p>
            <p className="text-xs text-slate-400">
              हमारी काउंसलर टीम से सीधे बात करें या ईमेल भेजें:
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919794473004"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>097944 73004</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shivani13298@gmail.com&su=Admission%20Enquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 border border-slate-700"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>shivani13298@gmail.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
