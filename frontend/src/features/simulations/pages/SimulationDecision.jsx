import { useNavigate, useLocation } from 'react-router-dom';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const SimulationDecision = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scenario, currentStepIndex, currentStep, selectedDecision, decisions } = location.state || {};

  if (!scenario || !selectedDecision) {
    navigate('/simulations');
    return null;
  }

  // Show decision confirmation briefly before moving to feedback
  const handleContinue = () => {
    navigate('/simulations/feedback', {
      state: {
        scenario,
        currentStepIndex,
        currentStep,
        selectedDecision,
        decisions: [...decisions, selectedDecision],
      },
    });
  };

  // Auto-continue after showing the decision
  setTimeout(handleContinue, 1500);

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      <div className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="w-full rounded-3xl border-2 border-slate-200 bg-white/90 p-10 text-center shadow-2xl ring-1 ring-white/70 backdrop-blur-sm">
              <div className="space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-200 bg-blue-50">
                    <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h2 className="mb-3 text-2xl font-black text-slate-900">
                    You chose:
                  </h2>
                  <p className="text-xl font-semibold text-slate-700">
                    "{selectedDecision.text}"
                  </p>
                </div>

                {/* Loading indicator */}
                <div className="flex justify-center">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 animate-bounce rounded-full bg-orange-500" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-3 w-3 animate-bounce rounded-full bg-orange-500" style={{ animationDelay: '150ms' }}></div>
                    <div className="h-3 w-3 animate-bounce rounded-full bg-orange-500" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>

                <p className="text-sm font-semibold text-slate-600">
                  Analyzing your decision...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default SimulationDecision;
