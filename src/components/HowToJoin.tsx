import React from 'react';
import { FileText, Send, PhoneCall, MapPin, ArrowRight } from 'lucide-react';

export default function HowToJoin() {
  const steps = [
    {
      num: "01",
      icon: <FileText className="w-5 h-5 text-amber-400" />,
      title: "Admission Form भरें",
      desc: "नीचे अपना नाम, संपर्क नंबर, शहर और अपनी आवश्यकतानुसार पसंदीदा course व level चुनें।"
    },
    {
      num: "02",
      icon: <Send className="w-5 h-5 text-emerald-400" />,
      title: "WhatsApp पर भेजें",
      desc: "Submit दबाते ही आपकी पूरी जानकारी के साथ प्री-फॉर्मेट WhatsApp मैसेज तैयार हो जाएगा – उसे सेंड कर दें।"
    },
    {
      num: "03",
      icon: <PhoneCall className="w-5 h-5 text-sky-400" />,
      title: "हम आपसे संपर्क करेंगे",
      desc: "हमारी टीम आपको कॉल या मैसेज कर नया बैच, समय (Timing), फीस और शुरू होने की तारीख बताएगी।"
    },
    {
      num: "04",
      icon: <MapPin className="w-5 h-5 text-orange-400" />,
      title: "सेंटर पर आइए",
      desc: "Google Map से सेंटर की सटीक लोकेशन देखें, Shivani Ma'am से मिलें और अपनी क्लासेस शुरू करें।"
    }
  ];

  return (
    <section id="how-to-join" className="py-16 bg-[#0b1325] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Baloo_2']">
            Admission कैसे लें
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            ऑनलाइन फॉर्म भरें और बिना किसी परेशानी के कुछ ही मिनटों में अपनी सीट बुक करें:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={st.num}
              className="bg-[#121f3d] border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Baloo_2'] font-black text-2xl text-amber-400/90">
                    {st.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    {st.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-['Baloo_2']">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#admission"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md shadow-amber-500/20"
          >
            <span>अभी Admission Form भरें</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
