import React, { useState } from 'react';
import { Box, Text } from 'ink';
import { Difficulty, QuizMode } from './types/index.js';
import { LanguageProvider } from './contexts/LanguageContext.js';
import WelcomeScreen from './components/WelcomeScreen.js';
import DifficultySelection from './components/DifficultySelection.js';
import ModeSelection from './components/ModeSelection.js';
import Quiz from './components/Quiz.js';
import Result from './components/Result.js';

type Screen = 'welcome' | 'difficulty' | 'mode' | 'quiz' | 'result';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [mode, setMode] = useState<QuizMode | null>(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleStart = () => {
    setCurrentScreen('difficulty');
  };

  const handleDifficultySelect = (selected: Difficulty) => {
    setDifficulty(selected);
    setCurrentScreen('mode');
  };

  const handleModeSelect = (selected: QuizMode) => {
    setMode(selected);
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (finalScore: number, total: number) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setCurrentScreen('result');
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setDifficulty(null);
    setMode(null);
    setScore(0);
    setTotalQuestions(0);
  };

  return (
    <LanguageProvider>
      <Box flexDirection="column" padding={1}>
        {currentScreen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
        {currentScreen === 'difficulty' && (
          <DifficultySelection onSelect={handleDifficultySelect} />
        )}
        {currentScreen === 'mode' && <ModeSelection onSelect={handleModeSelect} />}
        {currentScreen === 'quiz' && difficulty && mode && (
          <Quiz difficulty={difficulty} mode={mode} onComplete={handleQuizComplete} />
        )}
        {currentScreen === 'result' && (
          <Result score={score} total={totalQuestions} onRestart={handleRestart} />
        )}
      </Box>
    </LanguageProvider>
  );
};

export default App;
