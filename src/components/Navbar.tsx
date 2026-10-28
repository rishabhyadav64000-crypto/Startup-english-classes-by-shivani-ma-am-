import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#0b1325]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="text-lg md:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 font-['Baloo_2'] flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-slate-950 font-black text-sm">
            SE
          </span>
          <span>Startup English Classes</span>
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            हमारे बारे में
          </a>
          <a href="#courses" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Courses
          </a>
          <a href="#practice-lab" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Speaking Lab
          </a>
          <a href="#visit" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            सेंटर & Map
          </a>
          <a href="#admission" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            Admission
          </a>
        </div>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+919794473004"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-slate-950 bg-amber-500 rounded-lg hover:bg-amber-400 transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-amber-500/20"
          >
            <Phone className="w-4 h-4" />
            <span>097944 73004</span>
          </a>

          <a
            href="https://wa.me/919794473004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors whitespace-nowrap shrink-0"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e172e] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 text-sm font-medium">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400"
          >
            हमारे बारे में (About Us)
          </a>
          <a 
            href="#courses" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400"
          >
            हमारे Courses
          </a>
          <a 
            href="#practice-lab" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400"
          >
            Interactive Speaking Lab
          </a>
          <a 
            href="#visit" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400"
          >
            सेंटर & Google Map
          </a>
          <a 
            href="#admission" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400"
          >
            Admission Form
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+919794473004"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-slate-950 bg-amber-500 rounded-lg font-bold"
            >
              <Phone className="w-4 h-4" />
              <span>Call करें: 097944 73004</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
