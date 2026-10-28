import React, { useState } from 'react';
import { Volume2, ArrowRight, MapPin, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import { DIALOGUE_SCENARIOS } from '../data/curriculum';
import { speakEnglish } from '../utils/speech';

export default function Hero() {
  const [activeScenarioId, setActiveScenarioId] = useState('greetings');
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null);

  const currentScenario = DIALOGUE_SCENARIOS.find(s => s.id === activeScenarioId) || DIALOGUE_SCENARIOS[0];

  const handleSpeak = (text: string, index: number) => {
    setSpeakingIndex(index);
    speakEnglish(text, () => {
      setSpeakingIndex(null);
    });
  };

  return (
    <header className="relative bg-gradient-to-b from-[#0b1325] via-[#111e3b] to-[#0b1325] pt-12 pb-20 border-b border-slate-800/80 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed kicker metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-sky-400">
              <span>Offline English Centre</span>
              <span aria-hidden="true">·</span>
              <span>Face-to-Face Learning</span>
              <span aria-hidden="true">·</span>
              <span>By Shivani Ma'am & Mr Rahul</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-['Baloo_2']">
              सेंटर में आइए, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">
                English बोलना सीखिए
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Hindi बोलने वाले students के लिए Spoken English, Grammar, Vocabulary और Pronunciation की आमने-सामने offline classes – Shivani Ma’am के साथ। आपके personal और professional goal के लिए।
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero level से आसान Hindi में समझें</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily Speaking & Stage Fear Removal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Individual student attention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Job Interview & GD Preparation</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#admission"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Admission लें (WhatsApp)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#visit"
                className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium rounded-xl border border-slate-700 transition-all flex items-center gap-2 text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>सेंटर पर आइए (Map)</span>
              </a>
            </div>

            {/* Sub-note */}
            <p className="text-xs text-slate-400">
              फोन परामर्श या पूछताछ के लिए कॉल करें: <a href="tel:+919794473004" className="text-amber-400 font-semibold underline underline-offset-2">097944 73004</a>
            </p>
          </div>

          {/* Right Column: Interactive Spoken Dialogue Simulator */}
          <div className="lg:col-span-5">
            <div className="bg-[#121d38] border border-slate-800 rounded-2xl p-5 shadow-2xl relative">
              {/* Header inside simulator */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Interactive Speaking Practice</span>
                </div>
                <span className="text-[11px] text-slate-400">Tap audio to listen</span>
              </div>

              {/* Scenario selector tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 rounded-lg mb-4 text-xs font-medium">
                {DIALOGUE_SCENARIOS.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setActiveScenarioId(sc.id)}
                    className={`flex-1 py-1.5 px-2 rounded-md transition-colors text-center truncate ${
                      activeScenarioId === sc.id
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {sc.id === 'greetings' ? 'Greeting' : sc.id === 'interview' ? 'Interview' : 'Guidance'}
                  </button>
                ))}
              </div>

              {/* Chat bubbles */}
              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                {currentScenario.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${item.isMe ? 'items-end' : 'items-start'}`}
                  >
                    <span className="text-[11px] font-semibold text-slate-400 mb-1 px-1">
                      {item.speaker}
                    </span>
                    <div
                      className={`relative max-w-[92%] p-3.5 rounded-2xl transition-all shadow-md ${
                        item.isMe
                          ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 rounded-br-xs'
                          : 'bg-[#1a284e] text-white border border-slate-700/80 rounded-bl-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold leading-snug">
                          {item.en}
                        </p>
                        <button
                          onClick={() => handleSpeak(item.en, idx)}
                          title="Listen pronunciation"
                          className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                            item.isMe
                              ? 'bg-amber-600/30 hover:bg-amber-600/50 text-slate-900'
                              : 'bg-slate-700/60 hover:bg-slate-700 text-amber-400'
                          } ${speakingIndex === idx ? 'animate-pulse' : ''}`}
                          aria-label={`Listen: ${item.en}`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p
                        className={`text-xs mt-1.5 pt-1.5 border-t ${
                          item.isMe
                            ? 'text-slate-800 border-amber-600/20'
                            : 'text-slate-300 border-slate-700/60'
                        }`}
                      >
                        {item.hi}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom hint */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>ऐसे ही सैकड़ों वाक्य सेंटर में बोलकर सिखाए जाते हैं</span>
                <span className="text-amber-400 font-medium">Daily Lessons</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
