import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGuidanceData } from '../utils/complaintFlowEngine';
import ActionChecklist from '../components/ActionChecklist';
import DoDontCard from '../components/DoDontCard';
import HelplineCard from '../components/HelplineCard';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const ImmediateActions = () => {
  const navigate = useNavigate();
  const [guidance, setGuidance] = useState(null);

  useEffect(() => {
    const type = localStorage.getItem('complaintIncidentType');
    if (!type) {
      navigate('/complaints/type');
      return;
    }
    const data = getGuidanceData(type);
    setGuidance(data);
  }, [navigate]);

  if (!guidance) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 flex flex-col">
      <AppHeader />
      
      <div className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Take These Steps Now
            </h1>
            <p className="text-lg text-gray-600">
              Follow these actions to protect yourself and preserve evidence
            </p>
          </div>

          {/* Helpline Card */}
          <div className="mb-8">
            <HelplineCard />
          </div>

          {/* Immediate Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ✅ Immediate Actions
            </h2>
            <ActionChecklist actions={guidance.immediateActions} />
          </div>

          {/* Do's and Don'ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <DoDontCard type="do" items={guidance.doList} />
            <DoDontCard type="dont" items={guidance.dontList} />
          </div>

          {/* Safety Reminders */}
          {guidance.safetyReminders && guidance.safetyReminders.length > 0 && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💡 Remember
              </h3>
              <ul className="space-y-2">
                {guidance.safetyReminders.map((reminder, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{reminder}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/complaints/summary')}
              className="px-8 py-3"
            >
              Continue to Summary
            </Button>
            <Button
              onClick={() => navigate('/complaints/questions')}
              variant="secondary"
              className="px-8 py-3"
            >
              Back
            </Button>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default ImmediateActions;
