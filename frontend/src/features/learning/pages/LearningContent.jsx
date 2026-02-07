// LearningContent - Display content blocks (5-7 max)

import { useNavigate, useParams } from 'react-router-dom';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import Button from '../../../components/Button';
import ContentBlock from '../components/ContentBlock';
import LearningProgress from '../components/LearningProgress';
import { otpSafetyModule } from '../data/otpSafetyModule';
import { phishingLinksModule } from '../data/phishingLinksModule';
import { urgencyScamModule } from '../data/urgencyScamModule';

const modules = {
  'otp-safety': otpSafetyModule,
  'phishing-links': phishingLinksModule,
  'urgency-scams': urgencyScamModule,
};

const LearningContent = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const module = modules[moduleId];

  if (!module) {
    navigate('/learning');
    return null;
  }

  const handleContinue = () => {
    navigate(`/learning/${moduleId}/psychology`);
  };

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      
      <div className="flex-1 px-4 py-8">
        <div className="mx-auto max-w-4xl">
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
              current={1}
              total={3}
              title="Module Progress"
            />
          </div>

          {/* Content blocks */}
          <div className="mb-8 space-y-6">
            {module.content.map((block, index) => (
              <ContentBlock key={block.id} block={block} index={index} />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between rounded-2xl border-2 border-slate-200 bg-white p-6">
            <button
              onClick={() => navigate(`/learning/${moduleId}/intro`)}
              className="text-sm font-semibold text-slate-600 hover:text-orange-600"
            >
              ← Back
            </button>
            <Button
              onClick={handleContinue}
              className="px-8 py-3"
            >
              Continue to Psychology
            </Button>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default LearningContent;
