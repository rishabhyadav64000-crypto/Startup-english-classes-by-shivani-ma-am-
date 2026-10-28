import React, { useState } from 'react';
import { BookOpen, Volume2, HelpCircle, Check, Sparkles, BookMarked, MessageSquare } from 'lucide-react';
import { VOCABULARY_LIST, IDIOMS_LIST, DIAGNOSTIC_QUIZ } from '../data/curriculum';
import { speakEnglish } from '../utils/speech';

interface Props {
  onSelectLevelForAdmission?: (level: string) => void;
}

export default function InteractivePracticeLab({ onSelectLevelForAdmission }: Props) {
  const [activeTab, setActiveTab] = useState<'vocab' | 'idioms' | 'quiz'>('vocab');
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const handlePlayAudio = (text: string) => {
    setPlayingWord(text);
    speakEnglish(text, () => {
      setPlayingWord(null);
    });
  };

  const handleSelectOption = (optionIndex: number) => {
    if (selectedAnswers[currentQuestion] !== undefined) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < DIAGNOSTIC_QUIZ.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setQuizFinished(false);
  };

  const calculateScore = () => {
    let score = 0;
    selectedAnswers.forEach((ans, idx) => {
      if (ans === DIAGNOSTIC_QUIZ[idx].correctIndex) {
        score++;
      }
    });
    return score;
  };

  const getRecommendedLevel = (score: number) => {
    if (score <= 1) return 'Beginner';
    if (score === 2) return 'Intermediate';
    return 'Advanced';
  };

  return (
    <section id="practice-lab" className="py-16 bg-[#0b1325] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: आप क्या सीखेंगे */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            Complete Curriculum Overview
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Baloo_2']">
            आप सेंटर में क्या सीखेंगे
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            हम theoretical नहीं, practical English सिखाते हैं। नीचे दिए गए 5 मुख्य स्तम्भों के साथ खुद अभ्यास करके देखें:
          </p>
        </div>

        {/* 5 Core Learning Pillars Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          <div className="bg-[#121f3d] border border-slate-800 p-5 rounded-xl hover:border-amber-500/50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Baloo_2']">Grammar</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Tenses, sentence बनाना, prepositions और आम गलतियाँ बिना रटे आसान Hindi में समझना।
            </p>
          </div>

          <div className="bg-[#121f3d] border border-slate-800 p-5 rounded-xl hover:border-amber-500/50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
              <BookMarked className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Baloo_2']">Vocabulary</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              रोज़ काम आने वाले ज़रूरी शब्द, उनके पर्यायवाची और वाक्यों में उनका सही प्राकृतिक इस्तेमाल।
            </p>
          </div>

          <div className="bg-[#121f3d] border border-slate-800 p-5 rounded-xl hover:border-amber-500/50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Baloo_2']">Idioms</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              इम्प्रेसिव और नेचुरल English बोलने के लिए लोकप्रिय मुहावरे और फ्रेजेस का प्रयोग।
            </p>
          </div>

          <div className="bg-[#121f3d] border border-slate-800 p-5 rounded-xl hover:border-amber-500/50 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Baloo_2']">Pronunciation</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              शब्दों का साफ़ और शुद्ध उच्चारण। सही एक्सेन्ट और बोली का flow सुधारने की तकनीक।
            </p>
          </div>

          <div className="bg-[#121f3d] border border-slate-800 p-5 rounded-xl hover:border-amber-500/50 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-['Baloo_2']">Daily Practice</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              सेंटर में हर रोज़ बोलने और सुनने की आमने-सामने practice, ताकि स्टेज फीयर खत्म हो।
            </p>
          </div>
        </div>

        {/* Interactive Practice Box */}
        <div className="bg-[#101b35] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-['Baloo_2'] flex items-center gap-2">
                <span>Interactive Student Learning Lab</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Live Preview
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                क्लास रूम में सिखाई जाने वाली वोकैबुलरी, इडियम्स और खुद का लेवल टेस्ट करें
              </p>
            </div>

            {/* Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('vocab')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'vocab'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Vocabulary & Audio
              </button>
              <button
                onClick={() => setActiveTab('idioms')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'idioms'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Idioms (मुहावरे)
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === 'quiz'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Level Test (क्विज़)
              </button>
            </div>
          </div>

          {/* Tab 1: Vocabulary & Audio */}
          {activeTab === 'vocab' && (
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {VOCABULARY_LIST.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#142347] border border-slate-700/80 rounded-xl p-4 flex flex-col justify-between hover:border-slate-600 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-white tracking-wide">
                          {item.word}
                        </span>
                        <span className="text-xs text-sky-300">
                          [{item.pronunciation}]
                        </span>
                      </div>
                      <button
                        onClick={() => handlePlayAudio(item.word)}
                        className={`p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 transition-colors ${
                          playingWord === item.word ? 'animate-pulse' : ''
                        }`}
                        title="उच्चारण सुनें"
                        aria-label={`Listen to ${item.word}`}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-amber-300/90 font-medium mt-1">
                      अर्थ: {item.meaning}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-700/60 text-xs">
                    <p className="text-slate-200 font-medium">"{item.exampleEn}"</p>
                    <p className="text-slate-400 mt-0.5">{item.exampleHi}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Idioms & Phrases */}
          {activeTab === 'idioms' && (
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {IDIOMS_LIST.map((idiom, idx) => (
                <div
                  key={idx}
                  className="bg-[#142347] border border-slate-700/80 rounded-xl p-4 flex flex-col justify-between hover:border-slate-600 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-amber-400 font-['Baloo_2']">
                        "{idiom.phrase}"
                      </span>
                      <button
                        onClick={() => handlePlayAudio(idiom.phrase)}
                        className={`p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 transition-colors ${
                          playingWord === idiom.phrase ? 'animate-pulse' : ''
                        }`}
                        title="Listen idiom"
                        aria-label={`Listen to ${idiom.phrase}`}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-white mt-1">
                      {idiom.meaningHi}
                    </p>
                    <p className="text-xs text-slate-400">
                      Meaning: {idiom.meaningEn}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-700/60 text-xs text-slate-300">
                    <span className="text-slate-400">Example: </span>
                    <span>"{idiom.exampleEn}"</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Level Diagnostic Quiz */}
          {activeTab === 'quiz' && (
            <div className="pt-6 max-w-2xl mx-auto">
              {!quizFinished ? (
                <div className="bg-[#142347] border border-slate-700/80 rounded-xl p-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-2 border-b border-slate-700">
                    <span>प्रश्न {currentQuestion + 1} of {DIAGNOSTIC_QUIZ.length}</span>
                    <span className="text-amber-400 font-semibold">Test Your English Level</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-4">
                    {DIAGNOSTIC_QUIZ[currentQuestion].question}
                  </h4>

                  <div className="space-y-2.5">
                    {DIAGNOSTIC_QUIZ[currentQuestion].options.map((option, optIdx) => {
                      const isSelected = selectedAnswers[currentQuestion] === optIdx;
                      const hasAnswered = selectedAnswers[currentQuestion] !== undefined;
                      const isCorrect = optIdx === DIAGNOSTIC_QUIZ[currentQuestion].correctIndex;

                      let btnStyle = 'bg-slate-900/70 border-slate-700 text-slate-200 hover:border-amber-400';
                      if (hasAnswered) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
                        } else if (isSelected) {
                          btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                        } else {
                          btnStyle = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={hasAnswered}
                          onClick={() => handleSelectOption(optIdx)}
                          className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{option}</span>
                          {hasAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-400" />}
                        </button>
                      );
                    })}
                  </div>

                  {selectedAnswers[currentQuestion] !== undefined && (
                    <div className="mt-4 p-3 bg-slate-900/80 rounded-lg text-xs text-slate-300 border border-slate-800">
                      <span className="font-semibold text-amber-400">Explanation: </span>
                      {DIAGNOSTIC_QUIZ[currentQuestion].explanation}
                    </div>
                  )}

                  <div className="mt-6 flex justify-end">
                    <button
                      disabled={selectedAnswers[currentQuestion] === undefined}
                      onClick={handleNextQuestion}
                      className="px-5 py-2 bg-amber-500 disabled:opacity-40 disabled:hover:bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-lg transition-colors"
                    >
                      {currentQuestion < DIAGNOSTIC_QUIZ.length - 1 ? 'Next Question' : 'View Result'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-[#142347] border border-slate-700/80 rounded-xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto">
                    <HelpCircle className="w-7 h-7" />
                  </div>

                  <h4 className="text-2xl font-extrabold text-white font-['Baloo_2']">
                    आपका स्कोर: {calculateScore()} / {DIAGNOSTIC_QUIZ.length}
                  </h4>

                  <div className="p-4 bg-slate-900/80 rounded-xl max-w-md mx-auto border border-slate-800 text-sm">
                    <p className="text-slate-300">
                      आपके लिए सुझाई गई श्रेणी:{' '}
                      <span className="font-bold text-amber-400 text-base">
                        {getRecommendedLevel(calculateScore())} Level
                      </span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      चिंता न करें, Shivani Ma'am हर student को उनके current level के अनुसार पर्सनल गाइडेंस देती हैं।
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    {onSelectLevelForAdmission && (
                      <button
                        onClick={() => {
                          onSelectLevelForAdmission(getRecommendedLevel(calculateScore()));
                          const el = document.getElementById('admission');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-lg"
                      >
                        इस Level से Admission Form भरें
                      </button>
                    )}
                    <button
                      onClick={handleResetQuiz}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm rounded-lg border border-slate-700"
                    >
                      फिर से टेस्ट दें
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
