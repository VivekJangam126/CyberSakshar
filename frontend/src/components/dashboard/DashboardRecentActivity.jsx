const DashboardRecentActivity = ({ activities = [] }) => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50/20 to-white border-2 border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-300 relative overflow-hidden">
      {/* Decorative corner element */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-cyan-100/30 rounded-br-[100px]" />
      
      {/* Premium Header */}
      <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b-2 border-slate-200 relative z-10">
        <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1 sm:mb-1.5">
          📋 Recent Activity
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 font-semibold">
          Your learning journey timeline
        </p>
      </div>

      {/* Empty State - Premium */}
      {activities.length === 0 && (
        <div className="text-center py-12 sm:py-16 bg-gradient-to-br from-slate-100/50 via-blue-50/30 to-slate-100/50 rounded-2xl sm:rounded-3xl border-2 border-dashed border-slate-300 relative z-10">
          <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">📝</div>
          <p className="text-sm sm:text-base text-slate-800 font-black mb-2">
            No activity yet
          </p>
          <p className="text-xs sm:text-sm text-slate-600 font-semibold">
            Start a quiz or simulation to begin tracking your progress
          </p>
        </div>
      )}

      {/* Activity List - Premium */}
      {activities.length > 0 && (
        <div className="space-y-3 sm:space-y-4 relative z-10">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="
                flex items-start gap-3 sm:gap-5
                p-4 sm:p-6 rounded-xl sm:rounded-2xl
                bg-gradient-to-br from-slate-50 via-white to-slate-50
                border-2 border-slate-200
                hover:border-orange-300 hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* Timeline Dot with enhanced styling */}
              <div className="relative pt-0.5">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg ring-2 ring-white flex-shrink-0" />
                {index < activities.length - 1 && (
                  <div className="absolute top-3 sm:top-4 left-1.5 sm:left-2 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-orange-400 via-orange-300 to-transparent" />
                )}
              </div>

              {/* Activity Content */}
              <div className="flex-1 min-w-0 pt-0.5">
                <p className="text-sm sm:text-base font-black text-slate-900">
                  {activity.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-bold mt-1">
                  {activity.detail}
                </p>
              </div>

              {/* Time Badge with gradient */}
              <div className="text-xs font-black text-orange-600 whitespace-nowrap bg-gradient-to-br from-orange-50 to-amber-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border-2 border-orange-200 shadow-md flex-shrink-0">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default DashboardRecentActivity;
