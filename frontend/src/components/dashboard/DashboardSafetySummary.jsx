const DashboardSafetySummary = ({ safetyData }) => {
  const getRiskStyles = (risk) => {
    if (risk === 'Low') {
      return {
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        badgeBg: 'bg-emerald-50/50',
        bar: 'bg-gradient-to-r from-emerald-500 to-teal-500',
        borderAccent: 'border-emerald-200',
        accentBg: 'bg-emerald-50/30',
        dotColor: 'bg-emerald-500'
      };
    }
    if (risk === 'Medium') {
      return {
        badge: 'bg-amber-50 text-amber-700 border-amber-200',
        badgeBg: 'bg-amber-50/50',
        bar: 'bg-gradient-to-r from-amber-500 to-orange-500',
        borderAccent: 'border-amber-200',
        accentBg: 'bg-amber-50/30',
        dotColor: 'bg-amber-500'
      };
    }
    return {
      badge: 'bg-rose-50 text-rose-700 border-rose-200',
      badgeBg: 'bg-rose-50/50',
      bar: 'bg-gradient-to-r from-rose-500 to-pink-500',
      borderAccent: 'border-rose-200',
      accentBg: 'bg-rose-50/30',
      dotColor: 'bg-rose-500'
    };
  };

  const styles = getRiskStyles(safetyData.riskScore);
  const percentage = Math.min(safetyData.riskPercentage, 100);

  return (
    <section className="bg-gradient-to-br from-white via-slate-50/50 to-white border-2 border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 mb-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-300 relative overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/50 to-orange-100/30 rounded-bl-[100px] -z-0" />
      
      {/* Premium Header with Accent Dot */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b-2 border-slate-200 relative z-10 gap-4">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full mt-1 sm:mt-1.5 ${styles.dotColor} shadow-lg ring-2 ring-white flex-shrink-0`} />
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-1 sm:mb-1.5 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
              🔐 Safety Overview
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold">
              Level: <span className="text-orange-600 font-bold">{safetyData.level}</span>
            </p>
          </div>
        </div>

        <div className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs font-extrabold border-2 ${styles.badge} ${styles.badgeBg} shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-nowrap`}>
          {safetyData.riskScore} Risk
        </div>
      </div>

      {/* Safety Meter - Premium Look */}
      <div className="mb-6 sm:mb-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <label className="text-xs sm:text-sm font-bold text-slate-700">Safety Score</label>
          <div className="text-right">
            <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">{percentage}%</div>
            <p className="text-xs text-slate-500 font-semibold mt-0.5">maximum protection</p>
          </div>
        </div>

        <div className="relative w-full h-4 bg-slate-200 rounded-full overflow-hidden border-2 border-slate-300 shadow-inner">
          <div
            className={`h-4 rounded-full transition-all duration-700 ${styles.bar} shadow-lg relative`}
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute right-0 top-0 w-2 h-4 bg-white/50 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Guidance Message - Premium Info Box */}
      <div className={`${styles.accentBg} border-2 ${styles.borderAccent} rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow relative z-10`}>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
          💡 {safetyData.message}
        </p>
      </div>
    </section>
  );
};

export default DashboardSafetySummary;
