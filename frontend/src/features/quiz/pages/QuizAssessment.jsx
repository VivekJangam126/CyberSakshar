import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizQuestionCard from '../components/QuizQuestionCard';
import QuizOption from '../components/QuizOption';
import QuizProgress from '../components/QuizProgress';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import { quizQuestions } from '../data/quizQuestions';

const QuizAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showAdaptiveMessage, setShowAdaptiveMessage] = useState(false);
  const [adaptiveMessage, setAdaptiveMessage] = useState('');

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  // Adaptive messages that create AI perception
  const adaptiveMessages = [
    "Analyzing your response pattern...",
    "Adjusting difficulty based on your answers...",
    "Identifying risk areas...",
    "Updating your safety profile...",
    "Evaluating your cyber awareness...",
    "Calibrating next question...",
    "Processing your decision pattern...",
    "Assessing threat recognition..."
  ];

  useEffect(() => {
    // Reset selection when question changes
    setSelectedOption(null);
    setShowFeedback(false);
    setShowAdaptiveMessage(false);
  }, [currentQuestionIndex]);

  const handleOptionSelect = (option) => {
    if (showFeedback) return; // Prevent changing answer after selection
    
    setSelectedOption(option);
    
    // Show adaptive message first (creates AI perception)
    const randomMessage = adaptiveMessages[Math.floor(Math.random() * adaptiveMessages.length)];
    setAdaptiveMessage(randomMessage);
    setShowAdaptiveMessage(true);

    // After 800ms, show feedback and hide adaptive message
    setTimeout(() => {
      setShowFeedback(true);
      setShowAdaptiveMessage(false);
    }, 800);

    // Save answer
    const newAnswer = {
      questionId: currentQuestion.id,
      selectedOption: option.id,
      riskLevel: option.riskLevel,
      category: currentQuestion.category
    };

    setAnswers([...answers, newAnswer]);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Navigate to analyzing page with answers
      navigate('/quiz/analyzing', { state: { answers } });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      // Remove last answer
      setAnswers(answers.slice(0, -1));
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 via-white to-amber-50/30"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      <div className="flex-1 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        {/* Header with Progress */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black text-slate-900">Cyber Safety Assessment</h1>
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to exit? Your progress will be lost.')) {
                  navigate('/dashboard');
                }
              }}
              className="rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              Exit
            </button>
          </div>
          <QuizProgress current={currentQuestionIndex + 1} total={quizQuestions.length} />
        </div>

        {/* Question Card */}
        <QuizQuestionCard question={currentQuestion}>
          {currentQuestion.options.map((option) => (
            <QuizOption
              key={option.id}
              option={option}
              isSelected={selectedOption?.id === option.id}
              onSelect={handleOptionSelect}
              showFeedback={showFeedback}
              disabled={showFeedback || showAdaptiveMessage}
            />
          ))}
        </QuizQuestionCard>

        {/* Adaptive AI Message - appears after selection */}
        {showAdaptiveMessage && (
          <div className="mt-6 flex items-center justify-center">
            <div className="animate-pulse rounded-2xl border-2 border-orange-200 bg-orange-50/80 px-6 py-3 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
                <p className="text-xs font-semibold text-orange-700">
                  {adaptiveMessage}
                </p>
                <div className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="rounded-2xl border-2 border-slate-200 bg-white px-6 py-3 font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {showFeedback && (
            <Button
              onClick={handleNext}
              className="px-8 py-3 font-bold shadow-lg shadow-orange-500/25"
            >
              {isLastQuestion ? 'View Results' : 'Next Question'}
            </Button>
          )}
        </div>

        {/* Helper Text */}
        {!showFeedback && (
          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-slate-500">
              Select an option to see feedback and continue
            </p>
          </div>
        )}
      </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default QuizAssessment;
