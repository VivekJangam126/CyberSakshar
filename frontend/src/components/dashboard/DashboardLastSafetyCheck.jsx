import { useNavigate } from 'react-router-dom';

const DashboardLastSafetyCheck = ({ level = 'Intermediate', risk = 'Medium', date = '2 hours ago' }) => {
  const navigate = useNavigate();

  // Get level styling
  const getLevelStyle = () => {
    switch (level) {
      case 'Advanced':
        return {
          bgColor: 'bg-emerald-50',
          borderColor: 'border-emerald-200',
          textColor: 'text-emerald-700',
          badgeBg: 'bg-emerald-100',
          badgeText: 'text-emerald-700'
        };
      case 'Intermediate':
        return {
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200',
          textColor: 'text-amber-700',
          badgeBg: 'bg-amber-100',
          badgeText: 'text-amber-700'
        };
      case 'Beginner':
      default:
        return {
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200',
          textColor: 'text-orange-700',
          badgeBg: 'bg-orange-100',
          badgeText: 'text-orange-700'
        };
    }
  };

  // Get risk styling
  const getRiskStyle = () => {
    switch (risk) {
      case 'Low':
        return {
          bgColor: 'bg-emerald-100',
          textColor: 'text-emerald-700',
          icon: '🛡️'
        };
      case 'Medium':
        return {
          bgColor: 'bg-amber-100',
          textColor: 'text-amber-700',
          icon: '⚠️'
        };
      case 'High':
      default:
        return {
          bgColor: 'bg-rose-100',
          textColor: 'text-rose-700',
          icon: '🚨'
        };
    }
  };

  const levelStyle = getLevelStyle();
  const riskStyle = getRiskStyle();

  return (
    <section className="mb-6">
      <h3 className="mb-3 text-base font-semibold text-white">Last Safety Check</h3>

      <div className="rounded-2xl border-2 border-orange-500/30 bg-gradient-to-br from-gray-900 to-gray-800 p-5 shadow-lg">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-400">Based on your last safety assessment</p>
              <p className="mt-1 text-xs text-gray-500">Taken {date}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-xl">
              🔍
            </div>
          </div>

          {/* Safety Level & Risk */}
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Safety Level */}
            <div className={`rounded-xl border-2 ${levelStyle.borderColor} ${levelStyle.bgColor} p-3`}>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-600">Safety Level</p>
              <div className="flex items-center gap-2">
                <span className={`rounded-lg ${levelStyle.badgeBg} px-2 py-1 text-sm font-black ${levelStyle.badgeText}`}>
                  {level}
                </span>
              </div>
            </div>

            {/* Risk Level */}
            <div className={`rounded-xl border-2 border-${risk === 'Low' ? 'emerald' : risk === 'Medium' ? 'amber' : 'rose'}-200 ${riskStyle.bgColor} p-3`}>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-gray-600">Risk Level</p>
              <div className="flex items-center gap-2">
                <span className="text-lg">{riskStyle.icon}</span>
                <span className={`text-sm font-black ${riskStyle.textColor}`}>{risk} Risk</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-2 sm:flex-row">
            <button
              onClick={() => navigate('/quiz')}
              className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:from-orange-600 hover:to-orange-700 hover:shadow-lg"
            >
              Recheck Safety
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex-1 rounded-xl border-2 border-gray-700 bg-gray-800 px-4 py-2.5 text-sm font-bold text-gray-300 transition-all hover:border-gray-600 hover:bg-gray-700"
            >
              View Details
            </button>
          </div>

          {/* Info Note */}
          <div className="rounded-lg bg-blue-500/10 p-3 ring-1 ring-blue-500/20">
            <p className="text-xs font-medium leading-relaxed text-blue-300">
              Regular safety checks help you stay protected. We recommend retaking every month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLastSafetyCheck;
