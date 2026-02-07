import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const ComplaintIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 flex flex-col">
      <AppHeader />
      
      <div className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Calm Reassurance */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
              <span className="text-4xl">🤝</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              We're Here to Help
            </h1>
            <p className="text-xl text-gray-600">
              Take a deep breath. Let's handle this together, step by step.
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What CyberSakshar Does
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Guides you calmly</p>
                  <p className="text-gray-600">We'll help you understand what to do next</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Prevents further damage</p>
                  <p className="text-gray-600">Immediate actions to protect yourself</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Prepares your complaint</p>
                  <p className="text-gray-600">Helps you organize information for authorities</p>
                </div>
              </div>
            </div>

            {/* Important Disclaimer */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">ℹ️</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Important to Know</h3>
                  <p className="text-gray-700 mb-2">
                    CyberSakshar helps you prepare and understand the situation.
                  </p>
                  <p className="text-gray-700 font-semibold">
                    Official complaints must be filed on government portals like cybercrime.gov.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              onClick={() => navigate('/complaints/type')}
              className="px-8 py-4 text-lg"
            >
              Start Guidance
            </Button>
            <div className="mt-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="text-gray-600 hover:text-gray-800 text-sm"
              >
                ← Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default ComplaintIntro;
