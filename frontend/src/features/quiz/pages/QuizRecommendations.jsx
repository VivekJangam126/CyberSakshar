import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import { getRecommendations } from '../data/riskRules';
import { quizQuestions } from '../data/quizQuestions';

const QuizRecommendations = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const answers = location.state?.answers || [];

  const recommendations = getRecommendations(answers, quizQuestions);

  return (
    <div
      className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 via-white to-blue-50/30"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      <AppHeader />
      <div className="flex-1 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-purple-200 bg-purple-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-purple-700">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Personalized for You
          </div>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Your Learning Path
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Based on your assessment, here are the areas that will help you improve your cyber safety the most.
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="mb-8 space-y-6">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="group rounded-3xl border-2 border-slate-200 bg-white/90 p-6 shadow-xl ring-1 ring-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-xl font-black text-white shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-black text-slate-900">{rec.title}</h2>
                    <p className="mt-1 text-slate-600">{rec.description}</p>
                  </div>
                </div>

                {/* Lessons */}
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Recommended Lessons
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {rec.lessons.map((lesson, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-xl border-2 border-emerald-100 bg-emerald-50/50 p-3 transition-all hover:border-emerald-200 hover:bg-emerald-50"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <span className="font-semibold text-slate-700">{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulations */}
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Practice Simulations
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {rec.simulations.map((sim, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-xl border-2 border-blue-100 bg-blue-50/50 p-3 transition-all hover:border-blue-200 hover:bg-blue-50"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500 text-white">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="font-semibold text-slate-700">{sim}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => navigate('/lessons')}
                    className="w-full rounded-2xl border-2 border-orange-200 bg-orange-50 py-3 font-bold text-orange-700 transition-all hover:border-orange-300 hover:bg-orange-100 sm:w-auto sm:px-8"
                  >
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why These Recommendations */}
        <div className="mb-8 rounded-3xl border-2 border-slate-900 bg-slate-900 p-8 shadow-2xl">
          <h3 className="mb-4 text-2xl font-bold text-white">Why these recommendations?</h3>
          <p className="mb-4 leading-relaxed text-slate-300">
            We analyzed your responses and identified the areas where improving your knowledge will have the biggest impact on your digital safety. These recommendations are prioritized based on:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="font-medium">Your current awareness gaps</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="font-medium">Most common cyber threats in India</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="font-medium">Quick wins for better protection</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-xl">
          <h3 className="mb-4 text-2xl font-black text-slate-900">Ready to improve your safety?</h3>
          <p className="mb-6 text-lg leading-relaxed text-slate-700">
            Start with just one lesson today. Small steps lead to big improvements in your digital protection.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={() => navigate('/lessons')}
              className="px-8 py-3 font-bold shadow-lg shadow-orange-500/25"
            >
              Browse All Lessons
            </Button>
            <button
              onClick={() => navigate('/simulations')}
              className="rounded-2xl border-2 border-slate-200 bg-white px-8 py-3 font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              Try Simulations
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="rounded-2xl border-2 border-slate-200 bg-white px-8 py-3 font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              Dashboard
            </button>
          </div>
        </div>

        {/* Motivational Note */}
        <div className="mt-8 text-center">
          <p className="text-sm font-semibold text-slate-600">
            You've taken the first step towards better cyber safety. Keep going!
          </p>
        </div>
      </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default QuizRecommendations;
