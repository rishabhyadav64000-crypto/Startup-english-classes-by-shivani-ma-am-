import React from 'react';
import { Check, Clock, Users, ArrowRight } from 'lucide-react';
import { COURSES, Course } from '../data/courses';

interface Props {
  onSelectCourse?: (courseTitle: string) => void;
}

export default function CoursesSection({ onSelectCourse }: Props) {
  const handleSelect = (courseTitleEn: string) => {
    if (onSelectCourse) {
      onSelectCourse(courseTitleEn);
    }
    const el = document.getElementById('admission');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-16 bg-[#0e172e] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Structured Classroom Learning
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Baloo_2']">
            हमारे Popular Courses
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            अपनी ज़रूरत और स्तर के अनुसार सही कोर्स चुनें। सभी क्लासेस ऑफलाइन सेंटर पर आमने-सामने आयोजित की जाती हैं।
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-[#131f3d] border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-xl transition-all relative group"
            >
              <div>
                {/* Clean unboxed tag */}
                <div className="flex items-center justify-between gap-2 text-xs font-semibold text-sky-400 mb-3">
                  <span>{course.tag}</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Baloo_2'] leading-snug">
                  {course.titleEn}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  {course.description}
                </p>

                {/* Bullets */}
                <div className="mt-5 pt-5 border-t border-slate-800/80 space-y-2.5">
                  {course.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-tight">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                <div className="text-[11px] text-slate-400">
                  <span className="text-slate-500">उपयुक्त: </span>
                  <span>{course.recommendedFor}</span>
                </div>

                <button
                  onClick={() => handleSelect(course.titleEn)}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 group-hover:bg-amber-500 group-hover:text-slate-950"
                >
                  <span>यह Course चुनें</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Fees and Batches */}
        <div className="mt-10 p-5 rounded-xl bg-[#121c35] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">
              नए बैचेस हर सोमवार से शुरू होते हैं (Morning, Afternoon & Evening)
            </p>
            <p className="text-xs text-slate-400">
              Fees और batch timing की सटीक जानकारी के लिए हमें सीधे Call या WhatsApp करें।
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919794473004"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold rounded-lg transition-colors"
            >
              Call: 097944 73004
            </a>
            <a
              href="https://wa.me/919794473004"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold rounded-lg transition-colors"
            >
              WhatsApp करें
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
