import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const SimulationComplete = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scenario, decisions } = location.state || {};
  
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Fade in content after mount
    setTimeout(() => setShowContent(true), 100);
  }, []);

  if (!scenario) {
    navigate('/simulations');
    return null;
  }

  const completion = scenario.completion;
  const safeChoicesCount = decisions?.filter(d => d.isSafe).length || 0;
  const totalChoices = decisions?.length || 0;

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      <div className="flex-1 px-4 py-12">
        <div className={`mx-auto max-w-4xl transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-bold uppercase tracking-wider text-emerald-700">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              Simulation Complete
            </div>
            <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              {completion.title}
            </h1>
          </div>

          {/* Micro Progress Feedback - Confidence Building */}
          <div className="mb-6 rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-slate-900 mb-1">
                  You're now safer against {scenario.category.toLowerCase()} scams.
                </p>
                <p className="text-sm font-semibold text-slate-700">
                  You've practiced real-world scenarios and learned how to protect yourself.
                </p>
              </div>
            </div>
          </div>

          {/* Completion Message */}
          <div className="mb-6 rounded-3xl border-2 border-slate-200 bg-white/90 p-8 shadow-2xl ring-1 ring-white/70 backdrop-blur-sm sm:p-10">
            <div className="space-y-8">
              {/* Main Message */}
              <div className="text-center">
                <p className="text-xl leading-relaxed text-slate-700">
                  {completion.message}
                </p>
              </div>

              {/* XP Reward */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-8 py-4 shadow-lg">
                  <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
                      XP Earned
                    </p>
                    <p className="text-3xl font-black text-emerald-700">
                      +{scenario.xpReward} XP
                    </p>
                  </div>
                </div>
              </div>

              {/* Performance Summary */}
              <div className="rounded-2xl border-2 border-blue-100 bg-blue-50 p-6">
                <h3 className="mb-4 text-center text-lg font-bold text-slate-900">
                  Your Performance
                </h3>
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-black text-emerald-700">
                      {safeChoicesCount}
                    </div>
                    <p className="text-sm font-bold text-slate-700">Safe Choices</p>
                  </div>
                  <div className="text-4xl font-bold text-slate-300">/</div>
                  <div className="text-center">
                    <div className="mb-2 text-4xl font-black text-slate-700">
                      {totalChoices}
                    </div>
                    <p className="text-sm font-bold text-slate-700">Total Decisions</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t-2 border-slate-200" />

              {/* Key Safety Rules */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  Key Safety Rules to Remember:
                </h3>
                <div className="space-y-3">
                  {completion.keySafetyRules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3 rounded-xl border-2 border-slate-100 bg-slate-50 p-4">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="flex-1 font-semibold text-slate-800">
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Real World Impact */}
          <div className="mb-6 rounded-3xl border-2 border-rose-200 bg-rose-50 p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-100">
                <svg className="h-7 w-7 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Real World Impact
                </h3>
                <p className="font-semibold leading-relaxed text-slate-700">
                  {completion.realWorldImpact}
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-6 rounded-3xl border-2 border-slate-900 bg-slate-900 p-8 shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold text-white">
              What You Can Do Next:
            </h3>
            <div className="space-y-3">
              {completion.nextSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="font-medium leading-relaxed text-slate-300">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={() => navigate('/simulations')}
              className="px-10 py-4 text-lg font-bold shadow-2xl shadow-orange-500/30"
            >
              Try Another Simulation
            </Button>
            <button
              onClick={() => navigate('/dashboard')}
              className="rounded-2xl border-2 border-slate-200 bg-white px-10 py-4 text-lg font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              Return to Dashboard
            </button>
          </div>

          {/* Bottom Message */}
          <div className="mt-8 text-center">
            <p className="text-lg font-bold text-slate-800">
              You're now better prepared to handle real cyber fraud situations!
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Practice makes perfect. Share this knowledge with others.
            </p>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default SimulationComplete;
