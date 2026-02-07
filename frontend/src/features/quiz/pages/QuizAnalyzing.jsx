import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const QuizAnalyzing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const answers = location.state?.answers || [];

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/quiz/result', { state: { answers } });
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate, answers]);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50/50 via-white to-blue-50/30 px-4"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-200 p-8 text-center">
        
        {/* Animated Indicator */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer rotating ring */}
            <div className="h-32 w-32 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />

            {/* Inner pulsing core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 animate-pulse rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-2xl shadow-orange-500/40" />
            </div>

            {/* Center shield icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
            Analyzing Your Responses
          </h1>

          <p className="text-lg font-semibold text-slate-600">
            Our system is evaluating your cyber safety awareness.
          </p>

          {/* Progress Steps */}
          <div className="mx-auto max-w-md space-y-3 pt-4">
            
            <div className="flex items-center gap-3 rounded-xl bg-white/90 p-3 shadow-sm border border-slate-200">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-slate-600">
                Reviewing your choices
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/90 p-3 shadow-sm border border-slate-200">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
                <div className="h-2 w-2 animate-pulse rounded-full bg-white" />
              </div>
              <span className="text-sm font-semibold text-slate-600">
                Calculating risk level
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/90 p-3 shadow-sm border border-slate-200">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-300">
                <div className="h-2 w-2 rounded-full bg-slate-300" />
              </div>
              <span className="text-sm font-semibold text-slate-400">
                Preparing recommendations
              </span>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="pt-6">
            <p className="text-sm font-semibold text-slate-500">
              This will only take a moment…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizAnalyzing;
