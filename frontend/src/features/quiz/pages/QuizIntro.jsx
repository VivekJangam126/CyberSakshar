import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const QuizIntro = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      <div className="flex-1 px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-orange-700">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Cyber Safety Assessment
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            How Safe Are You in the
            <br />
            <span className="relative inline-block text-orange-600">
              Digital World?
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C50 5 100 2 150 4C200 6 250 8 298 7" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border-2 border-slate-200 bg-white/90 p-8 shadow-2xl ring-1 ring-white/70 backdrop-blur-sm sm:p-10">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900">What is this assessment?</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                This is a quick cyber safety check to understand your current awareness level and identify areas where you can improve your digital protection.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">No Right or Wrong</h3>
                  <p className="text-sm text-slate-600">This is not a test. We're here to help you learn.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border-2 border-blue-100 bg-blue-50/50 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Takes 5 Minutes</h3>
                  <p className="text-sm text-slate-600">Quick scenarios from everyday digital life.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border-2 border-amber-100 bg-amber-50/50 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Get Your Safety Level</h3>
                  <p className="text-sm text-slate-600">Understand your cyber awareness and risk.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border-2 border-purple-100 bg-purple-50/50 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Personalized Guidance</h3>
                  <p className="text-sm text-slate-600">Get recommendations tailored to you.</p>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="rounded-2xl border-2 border-slate-900 bg-slate-900 p-6 shadow-xl">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">What you'll discover:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">1</span>
                    <span className="font-medium">Your current cyber safety awareness level</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">2</span>
                    <span className="font-medium">Areas where you're already doing great</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">3</span>
                    <span className="font-medium">Specific areas to improve for better protection</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">4</span>
                    <span className="font-medium">Personalized learning path to stay safe online</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100">
              <p className="text-sm font-semibold leading-relaxed text-slate-700">
                <span className="font-black text-blue-700">Your Privacy: </span>
                Your responses are used only to provide personalized recommendations. We never share your data.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <Button
                onClick={() => navigate('/quiz/assessment')}
                className="px-12 py-4 text-lg font-bold shadow-2xl shadow-orange-500/30 transition-all hover:shadow-orange-500/40"
              >
                Start Safety Check
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 text-center">
          <p className="text-sm font-semibold text-slate-600">
            Remember: This is about learning, not judging. Everyone starts somewhere!
          </p>
        </div>
      </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default QuizIntro;
