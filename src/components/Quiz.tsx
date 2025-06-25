import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { Difficulty, QuizMode, Question } from '../types/index.js';
import { generateQuestions } from '../utils/quiz.js';
import { getQuestionCount } from '../data/statusCodes.js';
import { useLanguage } from '../contexts/LanguageContext.js';
import { useLanguageToggle } from '../hooks/useLanguageToggle.js';

interface Props {
  difficulty: Difficulty;
  mode: QuizMode;
  onComplete: (score: number, total: number) => void;
}

const Quiz: React.FC<Props> = ({ difficulty, mode, onComplete }) => {
  const { t } = useLanguage();
  useLanguageToggle(false); // Disable language toggle during quiz

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string>('');

  useEffect(() => {
    const generatedQuestions = generateQuestions(difficulty, mode);
    setQuestions(generatedQuestions);
  }, [difficulty, mode]);

  if (questions.length === 0) {
    return <Text>{t.quiz.loading}</Text>;
  }

  const currentQuestion = questions[currentIndex];
  const totalQuestions = getQuestionCount(difficulty);

  const handleAnswer = (item: { value: string }) => {
    const answer = item.value;
    setUserAnswer(answer);

    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setShowFeedback(true);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setShowFeedback(false);
        setUserAnswer('');
      } else {
        onComplete(score + (answer === currentQuestion.correctAnswer ? 1 : 0), totalQuestions);
      }
    }, 3000);
  };

  const getQuestionText = () => {
    if (mode === 'codeToMeaning') {
      return `${t.quiz.whatDoes} ${currentQuestion.statusCode.code} ${t.quiz.mean}`;
    } else {
      return `${t.quiz.whatsTheCode} "${currentQuestion.statusCode.meaning}"?`;
    }
  };

  const items = currentQuestion.options.map(option => ({
    label: option,
    value: option,
  }));

  return (
    <Box flexDirection="column" width="100%">
      <Box borderStyle="single" borderColor="white" paddingX={2} paddingY={1}>
        <Box flexDirection="column" width="100%">
          <Box justifyContent="space-between" marginBottom={1}>
            <Text>
              {t.quiz.question} {currentIndex + 1}/{totalQuestions}
            </Text>
            <Text>
              {t.quiz.score}: {score}
            </Text>
          </Box>

          <Box borderStyle="double" borderColor="yellow" paddingX={2} paddingY={1} marginBottom={1}>
            <Text bold color="yellow">
              {mode === 'codeToMeaning'
                ? `Status: ${currentQuestion.statusCode.code}`
                : currentQuestion.statusCode.meaning}
            </Text>
          </Box>

          <Box marginBottom={1}>
            <Text>{getQuestionText()}</Text>
          </Box>

          {!showFeedback && <SelectInput items={items} onSelect={handleAnswer} />}

          {showFeedback && (
            <Box flexDirection="column">
              <Box marginBottom={1}>
                {userAnswer === currentQuestion.correctAnswer ? (
                  <Text color="green" bold>
                    {t.quiz.correct}
                  </Text>
                ) : (
                  <Box flexDirection="column">
                    <Text color="red" bold>
                      {t.quiz.incorrect}
                    </Text>
                    <Text color="yellow">
                      {t.quiz.correctAnswer} {currentQuestion.correctAnswer}
                    </Text>
                  </Box>
                )}
              </Box>

              <Box borderStyle="single" borderColor="cyan" padding={1}>
                <Text color="cyan">{currentQuestion.statusCode.description}</Text>
              </Box>
            </Box>
          )}

          {!showFeedback && (
            <Box marginTop={1}>
              <Text dimColor>{t.quiz.controls}</Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Quiz;
