const DashboardSafetySummary = ({ safetyData }) => {
  const getRiskStyles = (risk) => {
    if (risk === 'Low') {
      return {
        text: 'text-green-400',
        badge: 'bg-green-900/40 text-green-400',
        bar: 'bg-green-500'
      };
    }
    if (risk === 'Medium') {
      return {
        text: 'text-yellow-400',
        badge: 'bg-yellow-900/40 text-yellow-400',
        bar: 'bg-yellow-500'
      };
    }
    return {
      text: 'text-red-400',
      badge: 'bg-red-900/40 text-red-400',
      bar: 'bg-red-500'
    };
  };

  const styles = getRiskStyles(safetyData.riskScore);
  const percentage = Math.min(safetyData.riskPercentage, 100);

  return (
    <section className="bg-gray-900 border border-gray-800 rounded-xl p-5 md:p-6 mb-6">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-base font-semibold text-white mb-1">
            Cyber Safety Overview
          </h2>
          <p className="text-sm text-gray-400">
            Safety Level: <span className="text-white">{safetyData.level}</span>
          </p>
        </div>

        <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${styles.badge}`}>
          {safetyData.riskScore} Risk
        </div>
      </div>

      {/* Safety Meter */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>Safety Score</span>
          <span>{percentage}%</span>
        </div>

        <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ${styles.bar}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Guidance Message */}
      <p className="text-sm text-gray-300 leading-relaxed">
        {safetyData.message}
      </p>
    </section>
  );
};

export default DashboardSafetySummary;
