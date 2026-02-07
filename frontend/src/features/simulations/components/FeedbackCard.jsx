const FeedbackCard = ({ isCorrect, explanation, whatScammersDo, correctAction }) => {
  return (
    <div className="mb-6 rounded-3xl border-2 border-slate-200 bg-white/90 p-8 shadow-2xl ring-1 ring-white/70 backdrop-blur-sm sm:p-10">
      <div className="space-y-6">
        {/* Explanation */}
        <div className="rounded-2xl border-2 border-blue-100 bg-blue-50 p-6">
          <div className="mb-3 flex items-center gap-2">
            <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700">
              Why This Matters
            </h3>
          </div>
          <p className="leading-relaxed text-slate-800">
            {explanation}
          </p>
        </div>

        {/* What Scammers Do */}
        <div className="rounded-2xl border-2 border-rose-100 bg-rose-50 p-6">
          <div className="mb-3 flex items-center gap-2">
            <svg className="h-5 w-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-700">
              What Scammers Do
            </h3>
          </div>
          <p className="leading-relaxed text-slate-800">
            {whatScammersDo}
          </p>
        </div>

        {/* Correct Action */}
        <div className={`rounded-2xl border-2 p-6 ${
          isCorrect 
            ? 'border-emerald-100 bg-emerald-50' 
            : 'border-amber-100 bg-amber-50'
        }`}>
          <div className="mb-3 flex items-center gap-2">
            <svg className={`h-5 w-5 ${isCorrect ? 'text-emerald-600' : 'text-amber-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className={`text-sm font-bold uppercase tracking-wider ${
              isCorrect ? 'text-emerald-700' : 'text-amber-700'
            }`}>
              {isCorrect ? 'Keep Doing This' : 'What You Should Do Instead'}
            </h3>
          </div>
          <p className="leading-relaxed text-slate-800">
            {correctAction}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
