import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Compass, ExternalLink } from 'lucide-react';

export default function CenterVisit() {
  return (
    <section id="visit" className="py-16 bg-[#0e172e] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Information & Map CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Offline Physical Centre Location
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Baloo_2']">
              सेंटर पर आइए और रूबरू मिलिए
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              हमारा सेंटर Google Maps पर लिस्टेड है। आप सीधे मैप खोलकर अपने स्थान से सेंटर का रास्ता और दूरी देख सकते हैं। क्लासरूम का माहौल देखने और शिवानी मैम से मिलने के लिए किसी भी दिन पधारें।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-[#131f3d] border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>सेंटर खुलने का समय</span>
                </div>
                <p className="text-slate-300 text-xs">
                  सोमवार से शनिवार: सुबह 7:30 AM से शाम 7:30 PM तक
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#131f3d] border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <Compass className="w-4 h-4 text-sky-400" />
                  <span>सुविधाजनक बैच टाइमिंग्स</span>
                </div>
                <p className="text-slate-300 text-xs">
                  छात्रों व कामकाजी लोगों के लिए अलग-अलग स्लॉट्स
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://maps.app.goo.gl/3YJt1fiMyXWgGX2k9?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-md shadow-amber-500/20 flex items-center gap-2 text-sm sm:text-base"
              >
                <Navigation className="w-4 h-4" />
                <span>Google Map में रास्ता देखें</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href="tel:+919794473004"
                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl border border-slate-700 transition-colors flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: 097944 73004</span>
              </a>
            </div>
          </div>

          {/* Right Column: Centre Card Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#121c38] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-['Baloo_2']">
                    Startup English Classes By Shivani
                  </h3>
                  <span className="text-xs text-sky-400">Offline English Coaching Centre</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                सेंटर का रास्ता, फ़ोन परामर्श और WhatsApp चैट नीचे दिए गए बटन्स से तुरंत खोलें। सेंटर विज़िट करने से पहले एक बार कॉल या WhatsApp अवश्य कर लें।
              </p>

              <div className="space-y-3">
                <a
                  href="https://maps.app.goo.gl/3YJt1fiMyXWgGX2k9?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Google Map में खोलें</span>
                </a>

                <a
                  href="https://wa.me/919794473004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp पर लोकेशन मंगवाएँ</span>
                </a>

                <a
                  href="tel:+919794473004"
                  className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>097944 73004 पर कॉल करें</span>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 text-center">
                Founder: Miss Shivani · Co-Founder: Mr Rahul
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
