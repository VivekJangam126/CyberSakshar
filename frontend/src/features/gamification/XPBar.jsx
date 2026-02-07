import React from 'react';
import { calculateLevel } from './rewardsLogic';

const XPBar = ({ currentXP, level }) => {
  const { nextLevel, xpForNextLevel, xpProgress, percentage } = calculateLevel(currentXP);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-lg font-bold">Level {level}</span>
          <span className="text-sm text-gray-600 ml-2">
            {currentXP} XP
          </span>
        </div>
        <span className="text-sm text-gray-600">
          Next: Level {nextLevel}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500 flex items-center justify-center text-white text-xs font-bold"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 20 && `${xpProgress} / ${xpForNextLevel}`}
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-1 text-right">
        {xpForNextLevel - xpProgress} XP to next level
      </p>
    </div>
  );
};

export default XPBar;
