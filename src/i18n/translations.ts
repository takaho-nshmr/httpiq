export type Language = 'en' | 'ja';

export const translations = {
  en: {
    // Welcome Screen
    welcome: {
      title: 'HTTP Status Code Quiz 📡',
      subtitle: 'Test your knowledge of HTTP status codes!',
      startQuiz: 'Start Quiz',
      exit: 'Exit',
    },
    // Difficulty Selection
    difficulty: {
      title: 'Select Difficulty',
      subtitle: 'Choose your challenge level:',
      beginner: 'Beginner (5 questions) - Daily status codes',
      intermediate: 'Intermediate (10 questions) - Developer codes',
      advanced: 'Advanced (20 questions) - Rare codes',
    },
    // Mode Selection
    mode: {
      title: 'Select Quiz Mode',
      subtitle: 'Choose how you want to be tested:',
      codeToMeaning: 'Code → Meaning',
      codeToMeaningExample: '(e.g., 404 → Not Found)',
      meaningToCode: 'Meaning → Code',
      meaningToCodeExample: '(e.g., Not Found → 404)',
    },
    // Quiz Screen
    quiz: {
      loading: 'Loading questions...',
      question: 'Question',
      score: 'Score',
      whatsTheCode: "What's the code for",
      whatDoes: 'What does',
      mean: 'mean',
      correct: '✓ Correct!',
      incorrect: '✗ Incorrect',
      correctAnswer: 'Correct answer:',
      controls: '[↑/↓] Select  [Enter] Confirm',
    },
    // Result Screen
    result: {
      title: 'Quiz Complete! 🎉',
      yourScore: 'Your Score:',
      rank: 'Rank:',
      perfect: "Perfect score! You're an HTTP status code master! 🏆",
      excellent: 'Excellent work! You really know your status codes! 🌟',
      good: 'Good job! You have a solid understanding! 👍',
      keepPracticing: "Keep practicing! You'll get better! 💪",
      tryAgain: "Don't give up! Try again! 🔄",
      playAgain: 'Play Again',
      exit: 'Exit',
    },
    // Language Indicator
    languageIndicator: {
      switchLanguage: '[Shift+Tab]',
      currentEnglish: 'EN',
      currentJapanese: 'JA',
      arrow: '→',
    },
  },
  ja: {
    // Welcome Screen
    welcome: {
      title: 'HTTPステータスコードクイズ 📡',
      subtitle: 'HTTPステータスコードの知識をテストしよう！',
      startQuiz: 'クイズを開始',
      exit: '終了',
    },
    // Difficulty Selection
    difficulty: {
      title: '難易度を選択',
      subtitle: 'チャレンジレベルを選んでください：',
      beginner: '初級 (5問) - よく使うステータスコード',
      intermediate: '中級 (10問) - 開発者向けコード',
      advanced: '上級 (20問) - レアなコード',
    },
    // Mode Selection
    mode: {
      title: 'クイズモードを選択',
      subtitle: 'テスト方法を選んでください：',
      codeToMeaning: 'コード → 意味',
      codeToMeaningExample: '(例: 404 → Not Found)',
      meaningToCode: '意味 → コード',
      meaningToCodeExample: '(例: Not Found → 404)',
    },
    // Quiz Screen
    quiz: {
      loading: '問題を読み込み中...',
      question: '問題',
      score: 'スコア',
      whatsTheCode: '次の意味を持つコードは？',
      whatDoes: 'コード',
      mean: 'の意味は？',
      correct: '✓ 正解！',
      incorrect: '✗ 不正解',
      correctAnswer: '正しくは：',
      controls: '[↑/↓] 選択  [Enter] 決定',
    },
    // Result Screen
    result: {
      title: 'クイズ完了！ 🎉',
      yourScore: 'あなたのスコア：',
      rank: 'ランク：',
      perfect: 'パーフェクト！HTTPステータスコードマスターです！ 🏆',
      excellent: '素晴らしい！ステータスコードをよく理解しています！ 🌟',
      good: 'よくできました！しっかり理解しています！ 👍',
      keepPracticing: '練習を続けましょう！きっと上達します！ 💪',
      tryAgain: '諦めないで！もう一度挑戦しよう！ 🔄',
      playAgain: 'もう一度',
      exit: '終了',
    },
    // Language Indicator
    languageIndicator: {
      switchLanguage: '[Shift+Tab]',
      currentEnglish: 'EN',
      currentJapanese: 'JA',
      arrow: '←',
    },
  },
} as const;

export function getTranslation(language: Language) {
  return translations[language];
}
