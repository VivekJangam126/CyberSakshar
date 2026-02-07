// LearningComplete - Close the learning loop

import { useNavigate, useParams } from 'react-router-dom';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import Button from '../../../components/Button';
import CompletionBanner from '../components/CompletionBanner';
import { otpSafetyModule } from '../data/otpSafetyModule';
import { phishingLinksModule } from '../data/phishingLinksModule';
import { urgencyScamModule } from '../data/urgencyScamModule';

const modules = {
  'otp-safety': otpSafetyModule,
  'phishing-links': phishingLinksModule,
  'urgency-scams': urgencyScamModule,
};

const LearningComplete = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const module = modules[moduleId];

  if (!module) {
    navigate('/learning');
    return null;
  }

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      
      <div className="flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          {/* Completion banner */}
          <div className="mb-8">
            <CompletionBanner completion={module.completion} />
          </div>

          {/* Quick recap */}
          <div className="mb-8 rounded-2xl border-2 border-slate-200 bg-white p-6">
            <h2 className="mb-4 text-2xl font-black text-slate-900">
              Quick Recap
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl bg-blue-50 p-4">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-700">
                  What You Learned:
                </h3>
                <p className="text-sm font-semibold text-slate-700">
                  {module.title} - Understanding the threat and how to protect yourself
                </p>
              </div>
              <div className="rounded-xl bg-purple-50 p-4">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-purple-700">
                  Psychology Insight:
                </h3>
                <p className="text-sm font-semibold text-slate-700">
                  {module.psychology.insight}
                </p>
              </div>
              <div className="rounded-xl bg-orange-50 p-4">
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-orange-700">
                  Safety Rule:
                </h3>
                <p className="text-sm font-black text-slate-900">
                  {module.safetyRule.rule}
                </p>
              </div>
            </div>
          </div>

          {/* Progress update (mock) */}
          <div className="mb-8 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-2xl">
                📊
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-black text-slate-900">
                  Your Progress Updated
                </h3>
                <p className="mb-3 text-sm text-slate-700">
                  This module contributes to your overall cyber safety learning journey.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="rounded-full bg-white px-3 py-1 font-bold text-emerald-700">
                    Learning Progress: +10%
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 font-bold text-amber-700">
                    Certificate Eligibility: Improved
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => navigate('/dashboard')}
                className="flex-1 py-4 text-base font-bold"
              >
                Return to Dashboard
              </Button>
              <Button
                onClick={() => navigate('/learning')}
                variant="secondary"
                className="flex-1 py-4 text-base font-bold"
              >
                Continue Learning
              </Button>
            </div>
          </div>

          {/* Share encouragement */}
          <div className="mt-8 rounded-xl bg-slate-100 p-4 text-center">
            <p className="text-sm font-semibold text-slate-700">
              <span className="text-orange-600">💬 </span>
              Share what you learned with family and friends to help them stay safe too!
            </p>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default LearningComplete;
