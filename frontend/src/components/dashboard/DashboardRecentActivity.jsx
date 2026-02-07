const DashboardRecentActivity = ({ activities = [] }) => {
  return (
    <section className="bg-gray-900 border border-gray-800 rounded-xl p-5 md:p-6">
      
      {/* Header */}
      <h3 className="text-base font-semibold text-white mb-4">
        Recent Activity
      </h3>

      {/* Empty State */}
      {activities.length === 0 && (
        <p className="text-sm text-gray-400">
          No recent activity yet. Start with a quiz or simulation.
        </p>
      )}

      {/* Activity List */}
      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="
              flex items-start gap-3
              p-3 rounded-lg
              bg-gray-800 hover:bg-gray-700
              transition-colors
            "
          >
            {/* Indicator */}
            <div className="w-2 h-2 mt-2 rounded-full bg-blue-400 shrink-0" />

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                {activity.title}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                {activity.detail}
              </p>
            </div>

            {/* Time */}
            <div className="text-[11px] text-gray-500 whitespace-nowrap">
              {activity.time}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardRecentActivity;
