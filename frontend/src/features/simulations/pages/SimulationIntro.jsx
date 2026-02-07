import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const SimulationIntro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scenario = location.state?.scenario;

  if (!scenario) {
    navigate('/simulations');
    return null;
  }

  const handleStart = () => {
    navigate('/simulations/scenario', { 
      state: { 
        scenario,
        currentStepIndex: 0,
        decisions: []
      } 
    });
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      <div className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Safe Practice Environment
            </div>
            <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              {scenario.intro.title}
            </h1>
          </div>

          {/* Main Card */}
          <div className="mb-6 rounded-3xl border-2 border-slate-200 bg-white/90 p-8 shadow-2xl ring-1 ring-white/70 backdrop-blur-sm sm:p-10">
            <div className="space-y-8">
              {/* Scenario Info */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-2">
                  <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="font-bold text-slate-700">{scenario.category}</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border-2 border-amber-200 bg-amber-50 px-4 py-2">
                  <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-bold text-amber-700">{scenario.estimatedTime}</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border-2 border-emerald-200 bg-emerald-50 px-4 py-2">
                  <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-bold text-emerald-700">+{scenario.xpReward} XP</span>
                </div>
              </div>

              {/* Main Message */}
              <div className="space-y-4">
                <p className="text-xl leading-relaxed text-slate-700">
                  {scenario.intro.message}
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  {scenario.intro.instruction}
                </p>
              </div>

              {/* Important Note */}
              <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900">Important Safety Note</h3>
                    <p className="font-semibold leading-relaxed text-slate-700">
                      {scenario.intro.safetyNote}
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">What to Expect:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      1
                    </div>
                    <p className="font-medium text-slate-700">
                      You'll experience a real-life cyber fraud situation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      2
                    </div>
                    <p className="font-medium text-slate-700">
                      At each step, you'll choose what you would do
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      3
                    </div>
                    <p className="font-medium text-slate-700">
                      You'll receive immediate feedback explaining why each choice is safe or risky
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      4
                    </div>
                    <p className="font-medium text-slate-700">
                      You'll learn what scammers do and how to protect yourself
                    </p>
                  </div>
                </div>
              </div>

              {/* Reassurance */}
              <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6 text-center">
                <p className="text-lg font-bold text-slate-800">
                  This is NOT a test. This is NOT a game.
                </p>
                <p className="mt-2 font-semibold text-slate-700">
                  This is a safe space to practice and build habits that will protect you in real life.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center pt-4">
                <Button
                  onClick={handleStart}
                  className="px-12 py-4 text-lg font-bold shadow-2xl shadow-orange-500/30 transition-all hover:shadow-orange-500/40"
                >
                  Start Simulation
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-600">
              Take your time. Think carefully. Learn safely.
            </p>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default SimulationIntro;
