import React from 'react';

const RiskIndicator = ({ level, score, showScore = true }) => {
  const getLevelConfig = () => {
    switch (level) {
      case 'low':
        return {
          label: 'Low Risk',
          color: 'emerald',
          bgGradient: 'from-emerald-500 to-green-600',
          bgLight: 'bg-emerald-50',
          borderColor: 'border-emerald-200',
          textColor: 'text-emerald-700',
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        };
      case 'medium':
        return {
          label: 'Medium Risk',
          color: 'amber',
          bgGradient: 'from-amber-500 to-orange-500',
          bgLight: 'bg-amber-50',
          borderColor: 'border-amber-200',
          textColor: 'text-amber-700',
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )
        };
      case 'high':
        return {
          label: 'High Risk',
          color: 'rose',
          bgGradient: 'from-rose-500 to-red-600',
          bgLight: 'bg-rose-50',
          borderColor: 'border-rose-200',
          textColor: 'text-rose-700',
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        };
      default:
        return {
          label: 'Unknown',
          color: 'slate',
          bgGradient: 'from-slate-500 to-slate-600',
          bgLight: 'bg-slate-50',
          borderColor: 'border-slate-200',
          textColor: 'text-slate-700',
          icon: null
        };
    }
  };

  const config = getLevelConfig();

  return (
    <div className={`inline-flex items-center gap-3 rounded-2xl border-2 ${config.borderColor} ${config.bgLight} px-5 py-3 shadow-sm`}>
      <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${config.bgGradient} text-white shadow-md`}>
        {config.icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Risk Level</p>
        <p className={`text-lg font-black ${config.textColor}`}>{config.label}</p>
      </div>
      {showScore && score !== undefined && (
        <div className="ml-2 flex items-center gap-1">
          <div className="h-8 w-px bg-slate-300" />
          <span className={`ml-2 text-2xl font-black ${config.textColor}`}>{score}%</span>
        </div>
      )}
    </div>
  );
};

export default RiskIndicator;
