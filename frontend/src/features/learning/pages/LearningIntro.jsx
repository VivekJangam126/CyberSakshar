// LearningIntro - Contextual entry to learning module

import { useNavigate, useParams } from 'react-router-dom';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import Button from '../../../components/Button';
import { otpSafetyModule } from '../data/otpSafetyModule';
import { phishingLinksModule } from '../data/phishingLinksModule';
import { urgencyScamModule } from '../data/urgencyScamModule';

const modules = {
  'otp-safety': otpSafetyModule,
  'phishing-links': phishingLinksModule,
  'urgency-scams': urgencyScamModule,
};

const LearningIntro = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const module = modules[moduleId];

  if (!module) {
    navigate('/learning');
    return null;
  }

  const handleStart = () => {
    navigate(`/learning/${moduleId}/content`);
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      
      <div className="flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          {/* Module icon and title */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-amber-100 text-6xl shadow-lg">
                {module.icon}
              </div>
            </div>
            <h1 className="mb-2 text-4xl font-black text-slate-900">
              {module.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {module.duration}
              </span>
              <span>•</span>
              <span>{module.category}</span>
            </div>
          </div>

          {/* Context card */}
          <div className="mb-8 rounded-3xl border-2 border-slate-200 bg-white/90 p-8 shadow-xl">
            <div className="mb-6 space-y-4">
              <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
                <p className="text-lg font-semibold leading-relaxed text-slate-800">
                  {module.context.message}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-black text-slate-900">
                  What you'll learn:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      Why this cyber threat is dangerous
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      How scammers manipulate people emotionally
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      One clear safety rule to remember
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Reassurance */}
            <div className="mb-6 rounded-xl bg-amber-50 p-4 ring-1 ring-amber-200">
              <p className="text-sm font-semibold text-slate-700">
                <span className="font-black text-amber-700">Remember: </span>
                This is about building awareness, not testing you. Take your time and learn at your pace.
              </p>
            </div>

            {/* Start button */}
            <div className="flex justify-center">
              <Button
                onClick={handleStart}
                className="px-12 py-4 text-lg font-bold shadow-xl"
              >
                Start Learning
              </Button>
            </div>
          </div>

          {/* Back link */}
          <div className="text-center">
            <button
              onClick={() => navigate('/learning')}
              className="text-sm font-semibold text-slate-600 hover:text-orange-600"
            >
              ← Back to Learning Home
            </button>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default LearningIntro;
