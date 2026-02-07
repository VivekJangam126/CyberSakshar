import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import QuizIntro from './pages/QuizIntro';
import QuizAssessment from './pages/QuizAssessment';
import QuizAnalyzing from './pages/QuizAnalyzing';
import QuizResult from './pages/QuizResult';
import QuizRecommendations from './pages/QuizRecommendations';

const QuizRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizIntro />} />
      <Route path="/assessment" element={<QuizAssessment />} />
      <Route path="/analyzing" element={<QuizAnalyzing />} />
      <Route path="/result" element={<QuizResult />} />
      <Route path="/recommendations" element={<QuizRecommendations />} />
      <Route path="*" element={<Navigate to="/quiz" replace />} />
    </Routes>
  );
};

export default QuizRouter;
