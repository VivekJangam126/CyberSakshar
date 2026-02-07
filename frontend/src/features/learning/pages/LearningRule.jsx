// LearningRule - Display ONE safety rule (memory anchor)

import { useNavigate, useParams } from 'react-router-dom';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import Button from '../../../components/Button';
import SafetyRuleCard from '../components/SafetyRuleCard';
import LearningProgress from '../components/LearningProgress';
import { otpSafetyModule } from '../data/otpSafetyModule';
import { phishingLinksModule } from '../data/phishingLinksModule';
import { urgencyScamModule } from '../data/urgencyScamModule';

const modules = {
  'otp-safety': otpSafetyModule,
  'phishing-links': phishingLinksModule,
  'urgency-scams': urgencyScamModule,
};

const LearningRule = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const module = modules[moduleId];

  if (!module) {
    navigate('/learning');
    return null;
  }

  const handleComplete = () => {
    navigate(`/learning/${moduleId}/complete`);
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      
      <div className="flex-1 px-4 py-8">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 text-4xl">
              {module.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-black text-slate-900">
                {module.title}
              </h1>
              <p className="text-sm text-slate-600">{module.category}</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <LearningProgress
              current={3}
              total={3}
              title="Module Progress"
            />
          </div>

          {/* Introduction */}
          <div className="mb-8 rounded-2xl border-2 border-slate-200 bg-white p-6 text-center">
            <h2 className="mb-3 text-2xl font-black text-slate-900">
              Remember This One Rule
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              This is the most important takeaway from this lesson. 
              Memorize it. Practice it. Share it with others.
            </p>
          </div>

          {/* Safety rule - LARGE and PROMINENT */}
          <div className="mb-8">
            <SafetyRuleCard safetyRule={module.safetyRule} />
          </div>

          {/* Reinforcement */}
          <div className="mb-8 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-2xl">
                🎯
              </div>
              <div>
                <h3 className="mb-2 text-lg font-black text-slate-900">
                  Make It a Habit
                </h3>
                <p className="text-base leading-relaxed text-slate-700">
                  The best way to stay safe is to make this rule automatic. 
                  Every time you encounter a similar situation, this rule should come to mind instantly.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between rounded-2xl border-2 border-slate-200 bg-white p-6">
            <button
              onClick={() => navigate(`/learning/${moduleId}/psychology`)}
              className="text-sm font-semibold text-slate-600 hover:text-orange-600"
            >
              ← Back
            </button>
            <Button
              onClick={handleComplete}
              className="px-8 py-3"
            >
              Complete Module
            </Button>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default LearningRule;
