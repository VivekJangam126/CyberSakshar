const DashboardLearningProgress = ({ progress }) => {
  const percentage = Math.min(progress.percentage, 100);

  return (
    <section className="bg-gradient-to-br from-white via-orange-50/30 to-white border-2 border-orange-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 mb-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-orange-300 relative overflow-hidden">
      {/* Decorative corner gradient */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-orange-200/40 via-amber-200/30 to-transparent rounded-full blur-2xl" />
      
      {/* Premium Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b-2 border-orange-200 relative z-10 gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-1.5">
            📚 Learning Progress
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-semibold">
            Track your cyber safety education journey
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-100 to-amber-100 text-orange-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-xs sm:text-sm border-2 border-orange-300 shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-nowrap">
          {percentage}% Done
        </div>
      </div>

      {/* Progress Tracker */}
      <div className="mb-6 sm:mb-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-3 mb-4">
          <div>
            <label className="text-xs sm:text-sm font-bold text-slate-700">Progress Tracker</label>
            <p className="text-xs text-slate-500 font-semibold mt-1">
              {progress.modulesCompleted} of {progress.totalModules} modules completed
            </p>
          </div>
          <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">{percentage}%</span>
        </div>

        <div className="relative w-full h-5 bg-gradient-to-r from-slate-200 to-slate-100 rounded-full overflow-hidden border-2 border-slate-300 shadow-inner">
          <div
            className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 h-5 rounded-full transition-all duration-700 shadow-xl relative"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute right-0 top-0 w-3 h-5 bg-white/60 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      {/* Premium Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mb-6 sm:mb-8 relative z-10">
        
        <div className="bg-gradient-to-br from-orange-100 via-amber-50 to-orange-50 rounded-2xl sm:rounded-3xl py-5 sm:py-7 px-5 sm:px-6 border-2 border-orange-300 hover:border-orange-400 hover:shadow-xl transition-all duration-300 cursor-default transform hover:-translate-y-1">
          <div className="text-xs text-orange-700 font-black mb-2 sm:mb-3 uppercase tracking-widest">Completed</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-br from-orange-600 to-amber-600 bg-clip-text text-transparent leading-none">
            {progress.modulesCompleted}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50 rounded-2xl sm:rounded-3xl py-5 sm:py-7 px-5 sm:px-6 border-2 border-blue-300 hover:border-blue-400 hover:shadow-xl transition-all duration-300 cursor-default transform hover:-translate-y-1">
          <div className="text-xs text-blue-700 font-black mb-2 sm:mb-3 uppercase tracking-widest">XP Earned</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-none">
            {progress.xpEarned}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 rounded-2xl sm:rounded-3xl py-5 sm:py-7 px-5 sm:px-6 border-2 border-purple-300 hover:border-purple-400 hover:shadow-xl transition-all duration-300 cursor-default transform hover:-translate-y-1">
          <div className="text-xs text-purple-700 font-black mb-2 sm:mb-3 uppercase tracking-widest">Badges</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent leading-none">
            {progress.badges}
          </div>
        </div>

      </div>

      {/* Motivational Message */}
      <div className="bg-gradient-to-r from-amber-100/80 via-orange-100/60 to-amber-100/80 border-2 border-amber-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm hover:border-amber-400 transition-all shadow-md hover:shadow-lg relative z-10">
        <p className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed">
          🏆 <span className="font-black text-orange-700">Keep up the excellent work!</span> Each module you complete strengthens your cyber safety skills and boosts your protection score.
        </p>
      </div>
    </section>
  );
};

export default DashboardLearningProgress;
