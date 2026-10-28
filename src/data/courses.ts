export interface Course {
  id: string;
  title: string;
  titleEn: string;
  tag: string;
  level: string;
  description: string;
  duration: string;
  points: string[];
  recommendedFor: string;
}

export const COURSES: Course[] = [
  {
    id: "spoken-basic",
    title: "Spoken English (शुरुआती स्तर)",
    titleEn: "Basic Spoken English",
    tag: "Beginner से शुरू",
    level: "Beginner",
    duration: "2 से 3 महीने",
    description: "यदि आपको English समझने या बोलने में झिझक (hesitation) होती है, तो यह course आपके लिए सबसे उपयुक्त है।",
    points: [
      "रोज़मर्रा की बातचीत (Daily Routine sentences)",
      "Pronunciation practice (सही उच्चारण की ट्रेनिंग)",
      "Daily Practice Lessons (आमने-सामने बातचीत)",
      "डर और झिझक दूर करने के लिए Public Speaking सत्र"
    ],
    recommendedFor: "स्कूल, कॉलेज के विद्यार्थी और जो पहली बार बोलना सीख रहे हैं"
  },
  {
    id: "grammar-mastery",
    title: "Grammar Mastery Course",
    titleEn: "Grammar Mastery Course",
    tag: "Foundation & Rules",
    level: "Foundation / All Levels",
    duration: "2 महीने",
    description: "English Grammar को बिना रटे, सरल और आसान Hindi में समझें ताकि सही वाक्य बनाना सीख सकें।",
    points: [
      "Tenses, Parts of Speech और Sentence Structure",
      "आम गलतियाँ (Common Grammatical Errors) सुधारना",
      "सही English लिखना, पढ़ना और अनुवाद (Translation) करना",
      "हर नियम के साथ ढेर सारे व्यावहारिक उदाहरण"
    ],
    recommendedFor: "Competitive exam aspirants और सही ग्रामर चाहने वाले"
  },
  {
    id: "spoken-complete",
    title: "Complete Spoken English Course",
    titleEn: "Complete Spoken English & Personality",
    tag: "Complete Package",
    level: "Intermediate & Advanced",
    duration: "3 से 4 महीने",
    description: "Vocabulary, Idioms, Fluency और Interview Preparation के साथ सम्पूर्ण व्यक्तित्व विकास।",
    points: [
      "Advanced Vocabulary और Daily Idioms (मुहावरे)",
      "Fluency और Natural Accent development",
      "Group Discussions और Debate sessions",
      "Job Interview skills और professional communication"
    ],
    recommendedFor: "Job seekers, working professionals और fluent speakers बनने के इच्छुक"
  }
];

export const LIFE_DIMENSIONS = [
  {
    name: "Career",
    nameHi: "करियर व नौकरी",
    desc: "अच्छी नौकरी, प्रमोशन और इंटरव्यू क्रैक करने के लिए मजबूत Spoken English आवश्यक है।"
  },
  {
    name: "Mind",
    nameHi: "मानसिक आत्मविश्वास",
    desc: "English बोलने का डर खत्म होने से आपका कॉन्फिडेंस और मानसिक स्तर कई गुना बढ़ता है।"
  },
  {
    name: "Society",
    nameHi: "समाज में सम्मान",
    desc: "समाज और मीटिंग्स में बिना किसी हिचकिचाहट के अपनी बात प्रभावशाली ढंग से रख सकेंगे।"
  },
  {
    name: "Family",
    nameHi: "परिवार की प्रेरणा",
    desc: "अपने बच्चों और परिवार के सदस्यों को बेहतर मार्गदर्शन और प्रेरणा दे सकते हैं।"
  },
  {
    name: "Health",
    nameHi: "तनाव मुक्ति व स्वास्थ्य",
    desc: "भाषा की रुकावट और हीनभावना से मुक्ति पाकर स्वस्थ और खुशहाल जीवन जिएँ।"
  },
  {
    name: "Soul",
    nameHi: "आत्म-संतुष्टि",
    desc: "'Never give up' की सोच से अपने सपनों को साकार करने की असीम संतुष्टि।"
  }
];
