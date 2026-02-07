import React, { useState, useEffect } from 'react';
import { quizAPI } from './quizAPI';
import QuestionCard from './QuestionCard';
import { calculateScore, getNextQuestion } from './quizLogic';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuiz();
  }, []);

  const loadQuiz = async () => {
    try {
      const data = await quizAPI.getQuiz();
      setQuiz(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load quiz:', error);
      setLoading(false);
    }
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    if (quiz && currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      submitQuiz();
    }
  };

  const submitQuiz = async () => {
    const finalScore = calculateScore(quiz.questions, answers);
    setScore(finalScore);
    setCompleted(true);
    
    try {
      await quizAPI.submitQuiz({ quizId: quiz.id, answers, score: finalScore });
    } catch (error) {
      console.error('Failed to submit quiz:', error);
    }
  };

  if (loading) return <div className="text-center p-8">Loading quiz...</div>;
  if (!quiz) return <div className="text-center p-8">Quiz not found</div>;

  if (completed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-4">Your Score: {score}%</p>
          <Button onClick={() => window.location.href = '/dashboard'}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
        <ProgressBar progress={progress} label={`Question ${currentQuestion + 1} of ${quiz.questions.length}`} />
        <div className="mt-6">
          <QuestionCard
            question={quiz.questions[currentQuestion]}
            onAnswer={handleAnswer}
            selectedAnswer={answers[quiz.questions[currentQuestion].id]}
          />
        </div>
        <div className="flex justify-end mt-6">
          <Button onClick={handleNext}>
            {currentQuestion < quiz.questions.length - 1 ? 'Next' : 'Submit'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
