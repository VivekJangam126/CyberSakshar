import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import RiskIndicator from '../components/RiskIndicator';
import {
  calculateRiskScore,
  determineRiskLevel,
  determineSafetyLevel,
  getRiskLevelDetails,
  getSafetyLevelDetails
} from '../data/riskRules';

const QuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const answers = location.state?.answers || [];
  
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Fade in content after mount
    setTimeout(() => setShowContent(true), 100);
  }, []);

  // Calculate results
  const { riskScore, highRiskCount, mediumRiskCount, lowRiskCount, totalQuestions } = calculateRiskScore(answers);
  const riskLevel = determineRiskLevel(riskScore);
  const safetyLevel = determineSafetyLevel(answers);
  const riskDetails = getRiskLevelDetails(riskLevel);
  const safetyDetails = getSafetyLevelDetails(safetyLevel);

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      <div className="flex-1 px-4 py-12">
      <div className={`mx-auto max-w-4xl transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-emerald-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            Assessment Complete
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Your Cyber Safety Report
          </h1>
        </div>

        {/* Main Results Card */}
        <div className="mb-6 rounded-3xl border-2 border-slate-200 bg-white/90 p-8 shadow-2xl ring-1 ring-white/70 backdrop-blur-sm sm:p-10">
          <div className="space-y-8">
            {/* Safety Level */}
            <div className="text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500">
                Your Cyber Safety Level
              </p>
              <div className="mb-4 flex justify-center">
                <div className={`inline-flex items-center gap-4 rounded-2xl border-2 border-${safetyDetails.color}-200 bg-${safetyDetails.color}-50 px-8 py-4 shadow-lg`}>
                  <div>
                    <h2 className={`text-4xl font-black text-${safetyDetails.color}-700`}>
                      {safetyDetails.title}
                    </h2>
                    <p className={`text-sm font-bold text-${safetyDetails.color}-600`}>
                      {safetyDetails.description}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
                {safetyDetails.message}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                <span>Awareness Progress</span>
                <span>{safetyDetails.progress}%</span>
              </div>
              <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`h-full rounded-full bg-gradient-to-r from-${safetyDetails.color}-500 to-${safetyDetails.color}-600 transition-all duration-1000 ease-out`}
                  style={{ width: `${safetyDetails.progress}%` }}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t-2 border-slate-200" />

            {/* Risk Assessment */}
            <div>
              <p className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-slate-500">
                Risk Assessment
              </p>
              <div className="flex justify-center">
                <RiskIndicator level={riskLevel} score={riskScore} />
              </div>
              <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-slate-600">
                {riskDetails.message}
              </p>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 p-5 text-center">
                <div className="mb-2 text-3xl font-black text-emerald-700">{lowRiskCount}</div>
                <p className="text-sm font-bold text-slate-700">Safe Choices</p>
                <p className="text-xs text-slate-600">Strong awareness</p>
              </div>
              
              <div className="rounded-2xl border-2 border-amber-100 bg-amber-50/50 p-5 text-center">
                <div className="mb-2 text-3xl font-black text-amber-700">{mediumRiskCount}</div>
                <p className="text-sm font-bold text-slate-700">Moderate Choices</p>
                <p className="text-xs text-slate-600">Room to improve</p>
              </div>
              
              <div className="rounded-2xl border-2 border-rose-100 bg-rose-50/50 p-5 text-center">
                <div className="mb-2 text-3xl font-black text-rose-700">{highRiskCount}</div>
                <p className="text-sm font-bold text-slate-700">Risky Choices</p>
                <p className="text-xs text-slate-600">Needs attention</p>
              </div>
            </div>
          </div>
        </div>

        {/* What This Means */}
        <div className="mb-6 rounded-3xl border-2 border-slate-900 bg-slate-900 p-8 shadow-2xl">
          <h3 className="mb-4 text-2xl font-bold text-white">What does this mean?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                1
              </div>
              <p className="font-medium leading-relaxed text-slate-300">
                You answered {totalQuestions} real-world cyber safety scenarios
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                2
              </div>
              <p className="font-medium leading-relaxed text-slate-300">
                Your choices show you're at the <span className="font-bold text-white">{safetyDetails.title}</span> level of cyber awareness
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                3
              </div>
              <p className="font-medium leading-relaxed text-slate-300">
                We've identified specific areas where you can improve your digital safety
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={() => navigate('/quiz/recommendations', { state: { answers } })}
            className="px-10 py-4 text-lg font-bold shadow-2xl shadow-orange-500/30"
          >
            View Recommendations
          </Button>
          <button
            onClick={() => navigate('/dashboard')}
            className="rounded-2xl border-2 border-slate-200 bg-white px-10 py-4 text-lg font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            Go to Dashboard
          </button>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-sm font-semibold text-slate-600">
            Remember: Everyone can improve their cyber safety. Let's build your protection together!
          </p>
        </div>
      </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default QuizResult;
