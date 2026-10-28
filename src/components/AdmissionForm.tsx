import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Copy, Check, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

interface Props {
  preselectedCourse?: string;
  preselectedLevel?: string;
}

export default function AdmissionForm({ preselectedCourse, preselectedLevel }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [course, setCourse] = useState('Spoken English');
  const [level, setLevel] = useState('Beginner');
  const [goal, setGoal] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      if (preselectedCourse.toLowerCase().includes('grammar')) {
        setCourse('Grammar Mastery Course');
      } else if (preselectedCourse.toLowerCase().includes('complete')) {
        setCourse('Spoken English Course');
      } else {
        setCourse('Spoken English');
      }
    }
  }, [preselectedCourse]);

  useEffect(() => {
    if (preselectedLevel) {
      setLevel(preselectedLevel);
    }
  }, [preselectedLevel]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const messageText = 
`नमस्ते, मुझे Startup English Classes में Admission लेना है।
नाम: ${name.trim()}
मोबाइल: ${phone.trim() || 'Not specified'}
शहर / इलाका: ${city.trim() || 'Not specified'}
Course: ${course}
Level: ${level}
Goal: ${goal.trim() || 'English बोलना सीखना है'}`;

    setGeneratedMessage(messageText);
    setSubmitted(true);

    const waUrl = `https://wa.me/919794473004?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="admission" className="py-16 bg-[#0b1325] border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Online Enquiry & Seat Reservation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Baloo_2']">
            Admission Form
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            नीचे अपनी जानकारी भरें। Submit करते ही WhatsApp पर मैसेज स्वतः तैयार हो जाएगा।
          </p>
        </div>

        <div className="bg-[#121c38] border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-slate-200">
                  आपका नाम (Full Name) <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="उदा. राहुल यादव"
                  className="w-full px-4 py-3 rounded-xl bg-[#0b1325] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-slate-200">
                  मोबाइल / WhatsApp नंबर
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="उदा. 9876543210"
                  className="w-full px-4 py-3 rounded-xl bg-[#0b1325] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* City / Area */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-slate-200">
                  शहर / इलाका (City or Area)
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="उदा. आपका शहर / मोहल्ला"
                  className="w-full px-4 py-3 rounded-xl bg-[#0b1325] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              {/* Course Selection */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-slate-200">
                  पसंदीदा Course
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b1325] border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-sm"
                >
                  <option value="Spoken English">Spoken English (Beginner)</option>
                  <option value="Grammar Mastery Course">Grammar Mastery Course (Foundation)</option>
                  <option value="Spoken English Course">Spoken English Course (Complete)</option>
                </select>
              </div>
            </div>

            {/* Level selection */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                आपका English Level
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setLevel(lvl)}
                    className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                      level === lvl
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                        : 'bg-[#0b1325] border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Goal */}
            <div className="space-y-1.5">
              <label className="text-xs sm:text-sm font-semibold text-slate-200">
                आपका मुख्य लक्ष्य (Goal / Need - Optional)
              </label>
              <textarea
                rows={3}
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="उदा. जॉब इंटरव्यू की तैयारी करनी है / कॉलेज में इंग्लिश बोलना सीखना है..."
                className="w-full px-4 py-3 rounded-xl bg-[#0b1325] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm resize-none"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp पर Admission Request भेजें</span>
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                Submit करने पर आपका WhatsApp खुलेगा जिसमें यह जानकारी पहले से लिखी होगी। सिर्फ सेंड बटन दबाएँ।
              </p>
            </div>

          </form>

          {/* Success / Feedback card */}
          {submitted && (
            <div className="mt-6 p-5 rounded-xl bg-[#182645] border border-emerald-500/50 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>WhatsApp खुल रहा है – कृपया संदेश Send कर दें!</span>
              </div>
              <p className="text-xs text-slate-300">
                यदि WhatsApp स्वतः नहीं खुला, तो आप नीचे दिया गया टेक्स्ट कॉपी करके भी 097944 73004 पर भेज सकते हैं:
              </p>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 whitespace-pre-wrap relative">
                {generatedMessage}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 border border-slate-700"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                </button>

                <a
                  href={`https://wa.me/919794473004?text=${encodeURIComponent(generatedMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp फिर से खोलें</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="tel:+919794473004"
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1.5 ml-auto"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>सीधे Call करें</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
