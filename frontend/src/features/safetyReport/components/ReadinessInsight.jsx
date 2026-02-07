import React from 'react';

const ReadinessInsight = ({ insight }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Readiness Insight</h2>
      
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💭</span>
          <div className="flex-1">
            <p className="text-lg text-gray-800 leading-relaxed">
              {insight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadinessInsight;
