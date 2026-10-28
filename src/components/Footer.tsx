import React from 'react';
import { Phone, MessageCircle, Mail, Youtube, Instagram, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070d1a] border-t border-slate-900 text-slate-400 text-xs sm:text-sm pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-slate-950 font-black text-sm">
                SE
              </span>
              <span className="text-lg font-bold text-white font-['Baloo_2']">
                Startup English Classes
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Hindi बोलने वाले विद्यार्थियों को आत्मविश्वास और सहजता से Spoken English, Grammar और Vocabulary सिखाने का समर्पित ऑफलाइन संस्थान।
            </p>

            <div className="text-xs text-slate-300">
              <p>Founder: <strong className="text-white">Miss Shivani</strong></p>
              <p>Co-Founder: <strong className="text-white">Mr Rahul</strong></p>
              <p className="text-amber-400 font-semibold mt-1">मोटो: "Never give up."</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              नेविगेशन लिंक्स
            </h4>
            <div className="space-y-1.5 text-xs">
              <div><a href="#about" className="hover:text-amber-400 transition-colors">हमारे बारे में</a></div>
              <div><a href="#courses" className="hover:text-amber-400 transition-colors">Popular Courses</a></div>
              <div><a href="#practice-lab" className="hover:text-amber-400 transition-colors">Interactive Speaking Lab</a></div>
              <div><a href="#how-to-join" className="hover:text-amber-400 transition-colors">Admission कैसे लें</a></div>
              <div><a href="#visit" className="hover:text-amber-400 transition-colors">सेंटर & Google Map</a></div>
              <div><a href="#admission" className="hover:text-amber-400 transition-colors">Admission Form</a></div>
              <div><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></div>
            </div>
          </div>

          {/* Official Social & Connect Channels */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              हमसे जुड़िए (Connect With Us)
            </h4>

            <div className="flex flex-col gap-2 text-xs">
              <a
                href="tel:+919794473004"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-200 transition-colors border border-slate-800"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: 097944 73004</span>
              </a>

              <a
                href="https://wa.me/919794473004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-200 transition-colors border border-slate-800"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: 097944 73004</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shivani13298@gmail.com&su=Admission%20Enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-200 transition-colors border border-slate-800"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Email: shivani13298@gmail.com</span>
              </a>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://youtube.com/@startupenglishclasse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-900/40 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://www.instagram.com/englishwithshivanimaam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-pink-950/40 hover:bg-pink-900/60 text-pink-400 border border-pink-900/40 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://maps.app.goo.gl/3YJt1fiMyXWgGX2k9?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-sky-950/40 hover:bg-sky-900/60 text-sky-400 border border-sky-900/40 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Map</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Startup English Classes By Shivani. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Offline Centre dedicated to Hindi speaking learners</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-400">Never give up.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
