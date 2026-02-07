import React from 'react';

const QuizQuestionCard = ({ question, children }) => {
  return (
    <div className="w-full max-w-3xl space-y-6">
      {/* Question Card */}
      <div className="rounded-3xl border-2 border-slate-200 bg-white/90 p-6 shadow-xl ring-1 ring-slate-100 backdrop-blur-sm sm:p-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
            {question.question}
          </h2>
          
          {question.scenario && (
            <div className="rounded-2xl border-2 border-amber-100 bg-amber-50/50 p-4">
              <p className="text-sm font-semibold leading-relaxed text-slate-700">
                <span className="font-black text-amber-700">Scenario: </span>
                {question.scenario}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
};

export default QuizQuestionCard;
