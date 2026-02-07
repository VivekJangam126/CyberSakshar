// CompletionBanner - Celebrate learning completion

const CompletionBanner = ({ completion }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 p-8 shadow-2xl">
      {/* Decorative elements */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-200/30" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-green-200/30" />

      {/* Content */}
      <div className="relative text-center">
        {/* Success icon */}
        <div className="mb-4 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-4xl shadow-lg">
            ✓
          </div>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-3xl font-black text-slate-900">
          Learning Complete!
        </h2>

        {/* Message */}
        <p className="mb-6 text-lg font-semibold text-slate-700">
          {completion.message}
        </p>

        {/* XP Gained */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 shadow-lg">
          <span className="text-2xl">⭐</span>
          <span className="text-xl font-black text-white">
            +{completion.xpGained} XP
          </span>
        </div>

        {/* Next action */}
        {completion.nextAction && (
          <div className="rounded-2xl bg-white/80 p-4">
            <p className="text-sm font-bold text-slate-700">
              <span className="text-emerald-600">Next Step: </span>
              {completion.nextAction}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompletionBanner;
