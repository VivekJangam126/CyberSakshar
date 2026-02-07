import { useNavigate, useLocation } from 'react-router-dom';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import SimulationProgress from '../components/SimulationProgress';

const SimulationScenario = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scenario, currentStepIndex, decisions } = location.state || {};

  if (!scenario || currentStepIndex === undefined) {
    navigate('/simulations');
    return null;
  }

  const currentStep = scenario.steps[currentStepIndex];
  const totalSteps = scenario.steps.length;

  const handleDecision = (decision) => {
    navigate('/simulations/decision', {
      state: {
        scenario,
        currentStepIndex,
        currentStep,
        selectedDecision: decision,
        decisions,
      },
    });
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      <div className="flex-1 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Progress */}
          <div className="mb-6">
            <SimulationProgress 
              currentStep={currentStepIndex + 1} 
              totalSteps={totalSteps}
              title={scenario.title}
            />
          </div>

          {/* Scenario Card */}
          <div className="mb-6 rounded-3xl border-2 border-slate-200 bg-white/90 p-8 shadow-2xl ring-1 ring-white/70 backdrop-blur-sm sm:p-10">
            <div className="space-y-6">
              {/* Step Title */}
              <div className="text-center">
                <h2 className="text-3xl font-black text-slate-900">
                  {currentStep.title}
                </h2>
              </div>

              {/* Context Badge */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-slate-50 px-4 py-2">
                  <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold text-slate-700">{currentStep.context}</span>
                </div>
              </div>

              {/* Situation - Message Style */}
              <div className="rounded-2xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-bold uppercase tracking-wider text-blue-700">
                    The Situation
                  </span>
                </div>
                <div className="whitespace-pre-line text-lg leading-relaxed text-slate-800">
                  {currentStep.situation}
                </div>
              </div>

              {/* Prompt */}
              <div className="text-center">
                <p className="text-xl font-bold text-slate-900">
                  What would you do?
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Choose the action you would take in this situation
                </p>
              </div>
            </div>
          </div>

          {/* Decision Options */}
          <div className="space-y-4">
            {currentStep.decisions.map((decision, index) => (
              <button
                key={decision.id}
                onClick={() => handleDecision(decision)}
                className="group w-full rounded-2xl border-2 border-slate-200 bg-white p-6 text-left shadow-lg transition-all hover:border-orange-300 hover:bg-orange-50 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-slate-100 text-xl font-black text-slate-700 transition-all group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <p className="flex-1 text-lg font-semibold text-slate-800 group-hover:text-slate-900">
                    {decision.text}
                  </p>
                  <svg 
                    className="h-6 w-6 text-slate-400 transition-all group-hover:text-orange-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-slate-600">
              Take your time. Think about what you would really do in this situation.
            </p>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default SimulationScenario;
