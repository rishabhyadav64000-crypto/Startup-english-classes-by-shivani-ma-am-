import React, { useState } from 'react';
import { Award, Heart, Briefcase, Brain, Users, Sparkles, Target } from 'lucide-react';
import { LIFE_DIMENSIONS } from '../data/courses';

export default function BannerGraphic() {
  const [selectedDimension, setSelectedDimension] = useState(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Career': return <Briefcase className="w-4 h-4" />;
      case 'Mind': return <Brain className="w-4 h-4" />;
      case 'Society': return <Users className="w-4 h-4" />;
      case 'Family': return <Heart className="w-4 h-4" />;
      case 'Health': return <Target className="w-4 h-4" />;
      case 'Soul': return <Sparkles className="w-4 h-4" />;
      default: return <Award className="w-4 h-4" />;
    }
  };

  return (
    <section id="about" className="py-16 bg-[#0e172e] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Banner Visual Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-gradient-to-r from-[#0b1325] via-[#142347] to-[#0b1325] p-6 sm:p-10 mb-14 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Offline English Learning Academy</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Baloo_2']">
                Startup English Classes <br />
                <span className="text-amber-400 text-xl sm:text-2xl font-bold">
                  By Shivani – Offline English Centre
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                हमारा मिशन है Hindi बोलने वाले students को English सिखाकर उनके personal और professional goal में सफल बनाना। सेंटर में हम सिखाते हैं Grammar, Vocabulary, Daily Practice, Idioms और Pronunciation – ताकि आप English confidently और fluently बोल सकें।
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-slate-300">
                <div>
                  <span className="text-slate-400">Founder: </span>
                  <span className="font-bold text-white">Miss Shivani</span>
                </div>
                <div className="hidden sm:block text-slate-600">·</div>
                <div>
                  <span className="text-slate-400">Co-Founder: </span>
                  <span className="font-bold text-white">Mr Rahul</span>
                </div>
                <div className="hidden sm:block text-slate-600">·</div>
                <div className="text-amber-400 font-bold">
                  मोटो: "Never give up."
                </div>
              </div>
            </div>

            {/* Right side graphic card with pillars */}
            <div className="md:col-span-4 bg-[#182645]/90 border border-slate-700 rounded-xl p-5 text-center shadow-lg">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                Classroom Subjects
              </div>
              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-sm font-semibold text-amber-300">
                  Basic English
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-sm font-semibold text-sky-300">
                  Spoken English
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-sm font-semibold text-emerald-300">
                  English Grammar & Vocab
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400">
                Offline Physical Centre · Regular Batches
              </div>
            </div>

          </div>
        </div>

        {/* 6 Dimensions of Life Section */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Baloo_2']">
              जीवन के 6 मुख्य क्षेत्रों का विकास
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              हम केवल भाषा नहीं सिखाते, बल्कि आपके सम्पूर्ण व्यक्तित्व और जीवन के इन छह क्षेत्रों का ध्यान रखते हैं:
            </p>
          </div>

          {/* Dimension Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {LIFE_DIMENSIONS.map((dim, idx) => (
              <button
                key={dim.name}
                onClick={() => setSelectedDimension(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedDimension === idx
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-[#15213b] text-slate-300 hover:bg-[#1c2c4d] border border-slate-800'
                }`}
              >
                {getIcon(dim.name)}
                <span>{dim.name}</span>
              </button>
            ))}
          </div>

          {/* Active Dimension Highlight Box */}
          <div className="bg-[#131f3b] border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                {getIcon(LIFE_DIMENSIONS[selectedDimension].name)}
              </span>
              <div>
                <h4 className="text-lg font-bold text-white">
                  {LIFE_DIMENSIONS[selectedDimension].name} ({LIFE_DIMENSIONS[selectedDimension].nameHi})
                </h4>
                <span className="text-xs text-sky-400 font-medium">Startup English Life Impact</span>
              </div>
            </div>
            <p className="text-base text-slate-200 leading-relaxed">
              {LIFE_DIMENSIONS[selectedDimension].desc}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Personal Mentorship by Shivani Ma'am</span>
              <span className="text-amber-400 font-semibold">Never give up.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
