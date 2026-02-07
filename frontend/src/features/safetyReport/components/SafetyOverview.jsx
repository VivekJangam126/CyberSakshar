import React from 'react';

const SafetyOverview = ({ safetyLevel, riskLevel }) => {
  const getLevelColor = (level) => {
    if (level === 'Advanced' || level === 'Low') return 'from-green-50 to-emerald-50 border-green-200';
    if (level === 'Intermediate' || level === 'Medium') return 'from-yellow-50 to-amber-50 border-yellow-200';
    return 'from-blue-50 to-cyan-50 border-blue-200';
  };

  const getLevelBadge = (level, type) => {
    let bgColor = 'bg-blue-100 text-blue-800';
    if (level === 'Advanced' || level === 'Low') bgColor = 'bg-green-100 text-green-800';
    if (level === 'Intermediate' || level === 'Medium') bgColor = 'bg-yellow-100 text-yellow-800';
    if (level === 'High') bgColor = 'bg-orange-100 text-orange-800';

    return (
      <span className={`px-4 py-2 rounded-full font-bold text-lg ${bgColor}`}>
        {level}
      </span>
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Safety Level */}
        <div className={`bg-gradient-to-br ${getLevelColor(safetyLevel)} rounded-xl p-6 border-2`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🛡️</span>
            <h3 className="text-lg font-semibold text-gray-900">
              Overall Safety Level
            </h3>
          </div>
          <div className="flex justify-center">
            {getLevelBadge(safetyLevel, 'safety')}
          </div>
        </div>

        {/* Risk Level */}
        <div className={`bg-gradient-to-br ${getLevelColor(riskLevel)} rounded-xl p-6 border-2`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">⚠️</span>
            <h3 className="text-lg font-semibold text-gray-900">
              Current Risk Level
            </h3>
          </div>
          <div className="flex justify-center">
            {getLevelBadge(riskLevel, 'risk')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyOverview;
