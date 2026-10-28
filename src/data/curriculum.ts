export interface DialogueItem {
  speaker: string;
  en: string;
  hi: string;
  isMe?: boolean;
}

export interface DialogueScenario {
  id: string;
  title: string;
  items: DialogueItem[];
}

export const DIALOGUE_SCENARIOS: DialogueScenario[] = [
  {
    id: "greetings",
    title: "1. Basic Greeting & Intro",
    items: [
      { speaker: "Teacher", en: "Hello! How are you doing today?", hi: "नमस्ते! आज आप कैसे हैं?" },
      { speaker: "Student", en: "I am fine, thank you! Glad to meet you.", hi: "मैं ठीक हूँ, धन्यवाद! आपसे मिलकर खुशी हुई।", isMe: true },
      { speaker: "Teacher", en: "Where do you want to reach in your career?", hi: "आप अपने करियर में कहाँ पहुँचना चाहते हैं?" },
      { speaker: "Student", en: "I want to speak English fluently and grow with confidence!", hi: "मुझे fluently English बोलनी है और आत्मविश्वास से आगे बढ़ना है!", isMe: true }
    ]
  },
  {
    id: "interview",
    title: "2. Job Interview Practice",
    items: [
      { speaker: "Interviewer", en: "Could you please introduce yourself briefly?", hi: "क्या आप कृपया संक्षेप में अपना परिचय दे सकते हैं?" },
      { speaker: "Candidate", en: "Sure! My name is Rahul. I am enthusiastic and eager to contribute.", hi: "ज़रूर! मेरा नाम राहुल है। मैं उत्साही हूँ और योगदान देने के लिए उत्सुक हूँ।", isMe: true },
      { speaker: "Interviewer", en: "What makes you passionate about this role?", hi: "इस पद के लिए आपको क्या प्रेरित करता है?" },
      { speaker: "Candidate", en: "My communication skills and dedication to continuous learning.", hi: "मेरा संवाद कौशल और निरंतर सीखने का समर्पण।", isMe: true }
    ]
  },
  {
    id: "daily-life",
    title: "3. Asking for Guidance",
    items: [
      { speaker: "Shivani Ma'am", en: "Don't be afraid of making mistakes while speaking.", hi: "बोलते समय गलतियाँ करने से बिल्कुल मत डरिए।" },
      { speaker: "Student", en: "Ma'am, I understand English, but I hesitate to speak.", hi: "मैम, मैं इंग्लिश समझ लेता हूँ लेकिन बोलने में हिचकिचाता हूँ।", isMe: true },
      { speaker: "Shivani Ma'am", en: "With our daily offline practice at the centre, your hesitation will vanish!", hi: "सेंटर में हमारी रोज़ाना प्रैक्टिस से आपकी हिचकिचाहट दूर हो जाएगी!" },
      { speaker: "Student", en: "Thank you Ma'am, I will never give up!", hi: "धन्यवाद मैम, मैं कभी हार नहीं मानूँगा!", isMe: true }
    ]
  }
];

export interface PracticeWord {
  word: string;
  pronunciation: string;
  meaning: string;
  exampleEn: string;
  exampleHi: string;
}

export const VOCABULARY_LIST: PracticeWord[] = [
  {
    word: "Fluency",
    pronunciation: "फ्लूएंसी",
    meaning: "धाराप्रवाह बोलना (बिना रुके सहजता से)",
    exampleEn: "Daily practice at the offline centre brings natural fluency.",
    exampleHi: "सेंटर पर रोज़ाना अभ्यास से सहज फ्लूएंसी आती है।"
  },
  {
    word: "Hesitation",
    pronunciation: "हेज़िटेशन",
    meaning: "झिझक / हिचकिचाहट",
    exampleEn: "Speak without hesitation; mistakes are part of learning.",
    exampleHi: "बिना झिझक के बोलिए; गलतियाँ सीखने का हिस्सा हैं।"
  },
  {
    word: "Determination",
    pronunciation: "डिटरमिनेशन",
    meaning: "दृढ़ संकल्प / पक्का इरादा",
    exampleEn: "Our core motto is determination: Never give up.",
    exampleHi: "हमारा मुख्य सिद्धांत दृढ़ संकल्प है: कभी हार न मानें।"
  },
  {
    word: "Confidence",
    pronunciation: "कॉन्फिडेंस",
    meaning: "आत्मविश्वास / खुद पर भरोसा",
    exampleEn: "Face-to-face classes boost your speaking confidence quickly.",
    exampleHi: "आमने-सामने की क्लासेस आपके बोलने के आत्मविश्वास को तेज़ी से बढ़ाती हैं।"
  }
];

export interface IdiomItem {
  phrase: string;
  meaningHi: string;
  meaningEn: string;
  exampleEn: string;
}

export const IDIOMS_LIST: IdiomItem[] = [
  {
    phrase: "Piece of cake",
    meaningHi: "बहुत आसान काम (बच्चों का खेल)",
    meaningEn: "Something very easy to accomplish",
    exampleEn: "With Shivani Ma'am's guidance, grammar became a piece of cake."
  },
  {
    phrase: "Break the ice",
    meaningHi: "बातचीत की शुरुआत करना / झिझक तोड़ना",
    meaningEn: "To initiate conversation and relieve tension",
    exampleEn: "In our first offline class, we broke the ice through fun intros."
  },
  {
    phrase: "Practice makes perfect",
    meaningHi: "अभ्यास से ही पूर्णता आती है",
    meaningEn: "Regular practice leads to proficiency",
    exampleEn: "Practice makes perfect when you speak daily at the centre."
  },
  {
    phrase: "Never give up",
    meaningHi: "कभी हार मत मानो",
    meaningEn: "Continue fighting against all odds",
    exampleEn: "Believe in yourself and never give up on your dreams."
  }
];

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const DIAGNOSTIC_QUIZ: QuizQuestion[] = [
  {
    question: "Choose the correct sentence: 'वह रोज़ English बोलता है।' ",
    options: [
      "He speak English daily.",
      "He speaks English daily.",
      "He is speak English daily.",
      "He speaking English daily."
    ],
    correctIndex: 1,
    explanation: "Present Simple Tense में He/She/It के साथ verb में 's' या 'es' लगता है (He speaks)."
  },
  {
    question: "जब कोई आपसे पूछे 'How are you?', तो सबसे उपयुक्त उत्तर क्या है?",
    options: [
      "I am eating food.",
      "I am fine, thank you. What about you?",
      "Yes, I know.",
      "My name is Amit."
    ],
    correctIndex: 1,
    explanation: "शिष्ट और व्यावहारिक जवाब 'I am fine, thank you. What about you?' होता है।"
  },
  {
    question: "'I _______ to the market yesterday.' (कल मैं बाज़ार गया था)",
    options: [
      "go",
      "went",
      "gone",
      "going"
    ],
    correctIndex: 1,
    explanation: "Past Simple Tense (बीते हुए कल) के लिए 'go' का second form 'went' इस्तेमाल होता है।"
  }
];
