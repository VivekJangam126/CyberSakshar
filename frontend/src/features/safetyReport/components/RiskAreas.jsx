import React from 'react';

const RiskAreas = ({ areas }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'well-covered':
        return {
          label: 'Well Covered',
          color: 'bg-green-50 border-green-200 text-green-800',
          icon: '✓',
        };
      case 'moderately-safe':
        return {
          label: 'Moderately Safe',
          color: 'bg-yellow-50 border-yellow-200 text-yellow-800',
          icon: '○',
        };
      case 'needs-attention':
        return {
          label: 'Needs Attention',
          color: 'bg-orange-50 border-orange-200 text-orange-800',
          icon: '!',
        };
      default:
        return {
          label: 'Unknown',
          color: 'bg-gray-50 border-gray-200 text-gray-800',
          icon: '?',
        };
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk Areas</h2>
      
      <div className="space-y-3">
        {areas.map((area) => {
          const config = getStatusConfig(area.status);
          return (
            <div
              key={area.id}
              className={`p-4 rounded-xl border-2 ${config.color}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold">{config.icon}</span>
                  <span className="font-semibold text-gray-900">{area.name}</span>
                </div>
                <span className="text-sm font-medium">{config.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RiskAreas;
