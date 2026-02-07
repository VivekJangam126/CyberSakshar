import React from 'react';

const PracticeSummary = ({ simulations }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Summary</h2>
      
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-3xl">🎮</span>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Simulation Practice
            </h3>
            <p className="text-gray-700 mb-4">
              You have practiced handling {simulations.scenarios.map(s => s.name.toLowerCase()).join(' and ')}.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Attempted</p>
                <p className="text-2xl font-bold text-blue-600">{simulations.attempted}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-2xl font-bold text-green-600">{simulations.completed}</p>
              </div>
            </div>
          </div>
        </div>

        {simulations.scenarios.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Scenarios Practiced:</p>
            <ul className="space-y-1">
              {simulations.scenarios.map((scenario, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{scenario.status === 'completed' ? '✓' : '○'}</span>
                  <span>{scenario.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeSummary;
