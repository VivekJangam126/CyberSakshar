// SafetyRuleCard - Display the ONE safety rule prominently

const SafetyRuleCard = ({ safetyRule }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border-4 border-orange-500 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 p-8 shadow-2xl">
      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orange-200/30" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-amber-200/30" />

      {/* Content */}
      <div className="relative">
        {/* Icon and label */}
        <div className="mb-4 flex items-center justify-center">
          <div className="rounded-full bg-orange-500 px-6 py-2">
            <span className="text-sm font-bold uppercase tracking-wider text-white">
              🛡️ Safety Rule
            </span>
          </div>
        </div>

        {/* Main rule - LARGE and BOLD */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
            {safetyRule.rule}
          </h2>
        </div>

        {/* Explanation */}
        <div className="mb-4 rounded-2xl bg-white/80 p-4 text-center">
          <p className="text-lg font-semibold text-slate-700">
            {safetyRule.explanation}
          </p>
        </div>

        {/* Action */}
        <div className="rounded-2xl bg-slate-900 p-4 text-center">
          <p className="text-base font-bold text-white">
            <span className="text-orange-400">What to do: </span>
            {safetyRule.action}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyRuleCard;
