export const calculateScore = (questions, answers) => {
  let correct = 0;
  questions.forEach((question) => {
    if (answers[question.id] === question.correctAnswer) {
      correct++;
    }
  });
  return Math.round((correct / questions.length) * 100);
};

export const getNextQuestion = (currentIndex, totalQuestions) => {
  if (currentIndex < totalQuestions - 1) {
    return currentIndex + 1;
  }
  return null;
};

export const validateAnswers = (questions, answers) => {
  return questions.every((question) => answers[question.id] !== undefined);
};

export const getDifficulty = (score) => {
  if (score >= 80) return 'advanced';
  if (score >= 50) return 'intermediate';
  return 'beginner';
};
