import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import FeedbackCard from '../components/FeedbackCard';
import SafetyTip from '../components/SafetyTip';

const SimulationFeedback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scenario, currentStepIndex, selectedDecision, decisions } = location.state || {};
  
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Fade in content after mount
    setTimeout(() => setShowContent(true), 100);
  }, []);

  if (!scenario || !selectedDecision) {
    navigate('/simulations');
    return null;
  }

  const feedback = scenario.feedback[selectedDecision.nextStep];
  const isLastStep = currentStepIndex >= scenario.steps.length - 1;

  const handleContinue = () => {
    if (isLastStep || selectedDecision.nextStep === 'complete') {
      // Go to completion page
      navigate('/simulations/complete', {
        state: {
          scenario,
          decisions,
        },
      });
    } else {
      // Go to next scenario step
      navigate('/simulations/scenario', {
        state: {
          scenario,
          currentStepIndex: currentStepIndex + 1,
          decisions,
        },
      });
    }
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      <div className="flex-1 px-4 py-8">
        <div className={`mx-auto max-w-4xl transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Result Header */}
          <div className="mb-6 text-center">
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-bold uppercase tracking-wider ${
              feedback.isCorrect 
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700' 
                : 'border-amber-200 bg-amber-50 text-amber-700'
            }`}>
              {feedback.isCorrect ? (
                <>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  Safe Choice
                </>
              ) : (
                <>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Risky Choice
                </>
              )}
            </div>
            <h1 className="text-4xl font-black text-slate-900">
              {feedback.title}
            </h1>
          </div>

          {/* Main Feedback Card */}
          <FeedbackCard
            isCorrect={feedback.isCorrect}
            explanation={feedback.explanation}
            whatScammersDo={feedback.whatScammersDo}
            correctAction={feedback.correctAction}
          />

          {/* Safety Tip */}
          <div className="mb-6">
            <SafetyTip tip={feedback.safetyTip} />
          </div>

          {/* One-Line Real-World Safety Rule Highlight */}
          <div className="mb-6 rounded-2xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-6 sm:p-8 shadow-xl relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500" />
            
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-300">
                <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                  Remember This
                </p>
                <p className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  {feedback.safetyTip}
                </p>
              </div>
            </div>
          </div>

          {/* Your Decision Recap */}
          <div className="mb-6 rounded-2xl border-2 border-slate-200 bg-white/80 p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100">
                <svg className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">
                  Your Decision
                </p>
                <p className="text-lg font-semibold text-slate-800">
                  "{selectedDecision.text}"
                </p>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleContinue}
              className="px-12 py-4 text-lg font-bold shadow-2xl shadow-orange-500/30 transition-all hover:shadow-orange-500/40"
            >
              {isLastStep || selectedDecision.nextStep === 'complete' ? 'Complete Simulation' : 'Continue'}
            </Button>
          </div>

          {/* Encouragement */}
          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-slate-600">
              {feedback.isCorrect 
                ? 'Great job! You\'re building safe habits.' 
                : 'Learning from mistakes makes you stronger. Keep going!'}
            </p>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default SimulationFeedback;
