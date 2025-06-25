import { StatusCode, Question, QuizMode, Difficulty } from '../types/index.js';
import { getStatusCodesByDifficulty, getQuestionCount, getQuestionsForDifficulty, statusCodes } from '../data/statusCodes.js';

export const shuffle = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const generateQuestions = (difficulty: Difficulty, mode: QuizMode): Question[] => {
  const selectedCodes = getQuestionsForDifficulty(difficulty);
  const allCodes = statusCodes; // 選択肢生成用に全ステータスコードを使用
  
  return selectedCodes.map(statusCode => {
    if (mode === 'codeToMeaning') {
      return generateCodeToMeaningQuestion(statusCode, allCodes);
    } else {
      return generateMeaningToCodeQuestion(statusCode, allCodes);
    }
  });
};

const generateCodeToMeaningQuestion = (statusCode: StatusCode, allCodes: StatusCode[]): Question => {
  const correctAnswer = statusCode.meaning;
  const otherOptions = allCodes
    .filter(code => code.code !== statusCode.code)
    .map(code => code.meaning);
  
  const options = shuffle([correctAnswer, ...shuffle(otherOptions).slice(0, 3)]);
  
  return {
    statusCode,
    options,
    correctAnswer
  };
};

const generateMeaningToCodeQuestion = (statusCode: StatusCode, allCodes: StatusCode[]): Question => {
  const correctAnswer = statusCode.code.toString();
  const otherOptions = allCodes
    .filter(code => code.code !== statusCode.code)
    .map(code => code.code.toString());
  
  const options = shuffle([correctAnswer, ...shuffle(otherOptions).slice(0, 3)]);
  
  return {
    statusCode,
    options,
    correctAnswer
  };
};