const DashboardLastSimulation = () => {
  // Mock data - in production, this would come from user's simulation history
  const lastSimulation = {
    name: 'Fake Bank OTP Call',
    completedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    safetyOutcome: 'You practiced a real cyber fraud scenario.',
  };

  // Calculate time ago
  const getTimeAgo = (date) => {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return 'Today';
    if (diffHours < 24) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return 'Recently';
  };

  return (
    <section className="bg-gradient-to-br from-white via-amber-50/20 to-white border-2 border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-amber-300 relative overflow-hidden">
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100/40 to-orange-100/30 rounded-bl-[80px]" />
      
      {/* Header */}
      <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-slate-200 relative z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex-shrink-0">
            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              Last Simulation
            </h3>
            <p className="text-xs text-slate-600 font-semibold">
              Practice completed
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-3 sm:space-y-4">
        {/* Simulation Name */}
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm sm:text-base font-bold text-slate-900">
              {lastSimulation.name}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-xs font-bold text-emerald-700">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                Completed
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {getTimeAgo(lastSimulation.completedAt)}
              </span>
            </div>
          </div>
        </div>

        {/* Safety Outcome */}
        <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-3 sm:p-4">
          <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
            {lastSimulation.safetyOutcome}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardLastSimulation;
