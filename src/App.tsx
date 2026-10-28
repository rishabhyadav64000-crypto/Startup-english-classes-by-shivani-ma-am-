import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BannerGraphic from './components/BannerGraphic';
import InteractivePracticeLab from './components/InteractivePracticeLab';
import CoursesSection from './components/CoursesSection';
import HowToJoin from './components/HowToJoin';
import CenterVisit from './components/CenterVisit';
import AdmissionForm from './components/AdmissionForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<string>('Spoken English');
  const [selectedLevel, setSelectedLevel] = useState<string>('Beginner');

  return (
    <div className="min-h-screen bg-[#0b1325] text-slate-100 flex flex-col font-['Hind',sans-serif]">
      {/* Top Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero with interactive dialogue simulator */}
        <Hero />

        {/* 2. Banner graphic, founder intro & 6 life dimensions */}
        <BannerGraphic />

        {/* 3. Interactive Student Speaking Lab (Vocab, Idioms, Level Quiz) */}
        <InteractivePracticeLab 
          onSelectLevelForAdmission={(level) => setSelectedLevel(level)} 
        />

        {/* 4. Structured Courses Section */}
        <CoursesSection 
          onSelectCourse={(courseTitle) => setSelectedCourse(courseTitle)} 
        />

        {/* 5. 4-Step Admission Roadmap */}
        <HowToJoin />

        {/* 6. Offline Centre & Google Map Location */}
        <CenterVisit />

        {/* 7. Interactive Admission Form with direct WhatsApp trigger */}
        <AdmissionForm 
          preselectedCourse={selectedCourse}
          preselectedLevel={selectedLevel}
        />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
