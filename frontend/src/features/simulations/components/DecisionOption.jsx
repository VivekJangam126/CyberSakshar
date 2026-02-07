const DecisionOption = ({ decision, index, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(decision)}
      className="group w-full rounded-2xl border-2 border-slate-200 bg-white p-6 text-left shadow-lg transition-all hover:border-orange-300 hover:bg-orange-50 hover:shadow-xl"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-slate-300 bg-slate-100 text-xl font-black text-slate-700 transition-all group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
          {String.fromCharCode(65 + index)}
        </div>
        <p className="flex-1 text-lg font-semibold text-slate-800 group-hover:text-slate-900">
          {decision.text}
        </p>
        <svg 
          className="h-6 w-6 text-slate-400 transition-all group-hover:text-orange-600" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default DecisionOption;
