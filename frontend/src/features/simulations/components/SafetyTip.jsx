const SafetyTip = ({ tip }) => {
  return (
    <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
          <svg className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-700">
            💡 Safety Tip
          </h3>
          <p className="text-lg font-bold leading-relaxed text-slate-800">
            {tip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyTip;
