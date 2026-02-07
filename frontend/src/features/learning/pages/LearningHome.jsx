// LearningHome - Show recommended learning modules

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import ModuleCard from '../components/ModuleCard';
import mockApi from '../../../mock/mockApi';
import { otpSafetyModule } from '../data/otpSafetyModule';
import { phishingLinksModule } from '../data/phishingLinksModule';
import { urgencyScamModule } from '../data/urgencyScamModule';

const LearningHome = () => {
  const navigate = useNavigate();
  const [completedModules, setCompletedModules] = useState([]);

  useEffect(() => {
    const user = mockApi.getCurrentUser();
    if (user) {
      const learning = mockApi.getLearningProgress(user.id);
      setCompletedModules(learning.modulesCompleted || []);
    }
  }, []);

  // Check if module is completed
  const isCompleted = (moduleId) => {
    const moduleIdMap = {
      'otp-safety': 'otp_safety',
      'phishing-links': 'phishing_links',
      'urgency-scams': 'urgency_scam',
    };
    const backendId = moduleIdMap[moduleId] || moduleId;
    return completedModules.includes(backendId);
  };

  // Mock: These would come from user's quiz/simulation history
  const allModules = [
    { ...otpSafetyModule, completed: isCompleted('otp-safety') },
    { ...phishingLinksModule, completed: isCompleted('phishing-links') },
    { ...urgencyScamModule, completed: isCompleted('urgency-scams') },
  ];

  const recommendedModules = allModules.filter(m => !m.completed).slice(0, 2);
  const otherModules = allModules.filter(m => !recommendedModules.includes(m));

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      
      <div className="flex-1 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-orange-700">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Micro Learning
            </div>
            <h1 className="mb-3 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              Quick Safety Lessons
            </h1>
            <p className="text-lg text-slate-600">
              2-3 minute focused lessons to build cyber safety habits
            </p>
          </div>

          {/* Info card */}
          <div className="mb-8 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-2xl">
                💡
              </div>
              <div>
                <h3 className="mb-2 text-lg font-black text-slate-900">
                  Why Micro Learning?
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  Short, focused lessons help you remember better. Each module explains one concept, 
                  one scam tactic, and one safety rule. No information overload.
                </p>
              </div>
            </div>
          </div>

          {/* Recommended for you */}
          {recommendedModules.length > 0 && (
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-black text-slate-900">
                <span className="text-orange-600">⭐</span> Recommended For You
              </h2>
              <div className="space-y-4">
                {recommendedModules.map((module) => (
                  <ModuleCard key={module.id} module={module} recommended={true} />
                ))}
              </div>
            </div>
          )}

          {/* Other modules */}
          {otherModules.length > 0 && (
            <div>
              <h2 className="mb-4 text-2xl font-black text-slate-900">
                More Lessons
              </h2>
              <div className="space-y-4">
                {otherModules.map((module) => (
                  <ModuleCard key={module.id} module={module} />
                ))}
              </div>
            </div>
          )}

          {/* Bottom note */}
          <div className="mt-8 rounded-xl bg-slate-100 p-4 text-center">
            <p className="text-sm font-semibold text-slate-600">
              Complete modules to earn XP and improve your cyber safety score
            </p>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default LearningHome;
