import React from 'react';

const QuizOption = ({ option, isSelected, onSelect, showFeedback, disabled }) => {
  const getOptionStyle = () => {
    if (showFeedback && isSelected) {
      if (option.riskLevel === 'low') {
        return 'border-emerald-400 bg-emerald-50 ring-2 ring-emerald-200';
      } else if (option.riskLevel === 'high') {
        return 'border-rose-400 bg-rose-50 ring-2 ring-rose-200';
      } else {
        return 'border-amber-400 bg-amber-50 ring-2 ring-amber-200';
      }
    }
    
    if (isSelected) {
      return 'border-orange-400 bg-orange-50 ring-2 ring-orange-200';
    }
    
    return 'border-slate-200 bg-white hover:border-orange-300 hover:bg-orange-50/50';
  };

  return (
    <button
      onClick={() => !disabled && onSelect(option)}
      disabled={disabled}
      className={`group w-full rounded-2xl border-2 p-5 text-left transition-all duration-200 ${getOptionStyle()} ${
        disabled ? 'cursor-not-allowed opacity-75' : 'cursor-pointer hover:shadow-lg'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 font-bold transition-all ${
          isSelected 
            ? 'border-orange-500 bg-orange-500 text-white' 
            : 'border-slate-300 bg-white text-slate-400 group-hover:border-orange-400'
        }`}>
          {option.id.toUpperCase()}
        </div>
        <div className="flex-1">
          <p className="font-semibold leading-relaxed text-slate-800">{option.text}</p>
          
          {showFeedback && isSelected && (
            <div className="mt-3 rounded-xl border-2 border-slate-200 bg-white/80 p-3">
              <div className="flex items-start gap-2">
                {option.riskLevel === 'low' ? (
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : option.riskLevel === 'high' ? (
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <p className="text-sm font-medium leading-relaxed text-slate-700">{option.feedback}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default QuizOption;
