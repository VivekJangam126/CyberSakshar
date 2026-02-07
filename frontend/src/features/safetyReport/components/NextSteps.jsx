import React from 'react';
import { useNavigate } from 'react-router-dom';

const NextSteps = ({ steps }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Next Steps</h2>
      
      <div className="space-y-3">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => navigate(step.path)}
            className="w-full text-left p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{step.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NextSteps;
