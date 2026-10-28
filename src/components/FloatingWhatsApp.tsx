import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact" className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] z-50">
      <a
        href="https://wa.me/919794473004"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-pulse flex items-center gap-2 px-4 py-3 bg-[#25d366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs sm:text-sm rounded-full shadow-2xl transition-all"
        title="WhatsApp पर बात करें (097944 73004)"
      >
        <MessageCircle className="w-5 h-5 fill-slate-950 text-[#25d366]" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
