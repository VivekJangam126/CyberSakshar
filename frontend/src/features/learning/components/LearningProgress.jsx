// LearningProgress - Show progress through module

const LearningProgress = ({ current, total, title }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="rounded-xl border-2 border-slate-200 bg-white p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-bold text-slate-600">
          {title || 'Learning Progress'}
        </span>
        <span className="text-sm font-bold text-orange-600">
          {current} of {total}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default LearningProgress;
