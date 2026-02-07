import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGuidanceData } from '../utils/complaintFlowEngine';
import QuestionCard from '../components/QuestionCard';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const ComplaintQuestions = () => {
  const navigate = useNavigate();
  const [incidentType, setIncidentType] = useState(null);
  const [guidance, setGuidance] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const type = localStorage.getItem('complaintIncidentType');
    if (!type) {
      navigate('/complaints/type');
      return;
    }
    setIncidentType(type);
    const data = getGuidanceData(type);
    setGuidance(data);
  }, [navigate]);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleContinue = () => {
    // Store answers
    localStorage.setItem('complaintAnswers', JSON.stringify(answers));
    navigate('/complaints/actions');
  };

  const handleSkip = () => {
    localStorage.setItem('complaintAnswers', JSON.stringify({}));
    navigate('/complaints/actions');
  };

  if (!guidance) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 flex flex-col">
      <AppHeader />
      
      <div className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Help Us Understand
            </h1>
            <p className="text-lg text-gray-600">
              These questions are optional. Answer what you're comfortable with.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-4 mb-8">
            {guidance.questions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                value={answers[question.id]}
                onChange={handleAnswerChange}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleContinue}
              className="px-8 py-3"
            >
              Continue
            </Button>
            <Button
              onClick={handleSkip}
              variant="secondary"
              className="px-8 py-3"
            >
              Skip Questions
            </Button>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default ComplaintQuestions;
