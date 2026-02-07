import React from 'react';

const Badge = ({ badge, earned = false }) => {
  return (
    <div
      className={`relative p-4 rounded-lg border-2 transition-all ${
        earned
          ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-yellow-100'
          : 'border-gray-300 bg-gray-100 opacity-50'
      }`}
    >
      <div className="flex flex-col items-center">
        <div
          className={`text-5xl mb-2 ${
            earned ? 'animate-bounce' : 'grayscale'
          }`}
        >
          {badge.icon}
        </div>
        <h4 className="font-bold text-center">{badge.name}</h4>
        <p className="text-xs text-gray-600 text-center mt-1">
          {badge.description}
        </p>
        {earned && badge.earnedDate && (
          <span className="text-xs text-gray-500 mt-2">
            Earned: {new Date(badge.earnedDate).toLocaleDateString()}
          </span>
        )}
        {!earned && badge.requirement && (
          <span className="text-xs text-gray-500 mt-2">
            {badge.requirement}
          </span>
        )}
      </div>
      {earned && (
        <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          ✓
        </div>
      )}
    </div>
  );
};

export default Badge;
