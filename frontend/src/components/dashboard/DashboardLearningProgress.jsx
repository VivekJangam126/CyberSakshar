const DashboardLearningProgress = ({ progress }) => {
  const percentage = Math.min(progress.percentage, 100);

  return (
    <section className="bg-gray-900 border border-gray-800 rounded-xl p-5 md:p-6 mb-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-white">
          Learning Progress
        </h3>
        <span className="text-xs text-gray-400">
          {percentage}% completed
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-5">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>
            {progress.modulesCompleted} of {progress.totalModules} modules
          </span>
          <span>
            {progress.totalModules - progress.modulesCompleted} remaining
          </span>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        
        <div className="bg-gray-800 rounded-lg py-3">
          <div className="text-xl font-semibold text-blue-400">
            {progress.modulesCompleted}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Completed
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg py-3">
          <div className="text-xl font-semibold text-green-400">
            {progress.xpEarned}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            XP Earned
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg py-3">
          <div className="text-xl font-semibold text-purple-400">
            {progress.badges}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Badges
          </div>
        </div>

      </div>

      {/* Motivation Line */}
      <p className="mt-4 text-xs text-gray-400">
        Keep going — completing more modules improves your cyber safety score.
      </p>
    </section>
  );
};

export default DashboardLearningProgress;
