import { useState, useEffect } from 'react';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import ScenarioCard from './components/ScenarioCard';
import { otpCallScenario } from './data/otpCallScenario';
import { phishingScenario } from './data/phishingScenario';

const SimulationPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Fade in content after mount
    setTimeout(() => setShowContent(true), 100);
  }, []);

  // Mock scenarios - using local data instead of API
  const scenarios = [otpCallScenario, phishingScenario];

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      <div className="flex-1 px-4 py-12">
        <div className={`mx-auto max-w-6xl transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-orange-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Safe Practice Environment
            </div>
            <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Cyber Fraud
              <br />
              <span className="relative inline-block text-orange-600">
                Simulations
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 5 100 2 150 4C200 6 250 8 298 7" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
              Practice handling real-world cyber fraud situations in a safe environment. Build habits, reduce panic, and improve your decision-making.
            </p>
          </div>

          {/* Info Cards */}
          <div className="mb-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border-2 border-blue-100 bg-blue-50/50 p-6 text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-bold text-slate-900">Learn by Doing</h3>
              <p className="text-sm text-slate-600">Practice real scenarios, not theory</p>
            </div>

            <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 p-6 text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-bold text-slate-900">100% Safe</h3>
              <p className="text-sm text-slate-600">No real risk, only learning</p>
            </div>

            <div className="rounded-2xl border-2 border-amber-100 bg-amber-50/50 p-6 text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <svg className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-bold text-slate-900">Instant Feedback</h3>
              <p className="text-sm text-slate-600">Understand why choices matter</p>
            </div>
          </div>

          {/* Important Note */}
          <div className="mb-12 rounded-3xl border-2 border-slate-900 bg-slate-900 p-8 shadow-2xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">This is NOT a test or game</h2>
              <p className="text-lg leading-relaxed text-slate-300">
                These simulations are designed to help you practice correct actions under pressure. There are no penalties, no scores to beat. The goal is to build safe habits that will protect you in real-life situations.
              </p>
              <div className="flex items-center gap-3 rounded-xl border-2 border-orange-500 bg-orange-500/10 p-4">
                <svg className="h-6 w-6 flex-shrink-0 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-semibold text-orange-100">
                  Practice → Build Habits → Stay Safe
                </p>
              </div>
            </div>
          </div>

          {/* Scenarios Grid */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Available Simulations
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {scenarios.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <p className="text-sm font-semibold text-slate-600">
              More simulations coming soon. Practice regularly to stay protected!
            </p>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default SimulationPage;
