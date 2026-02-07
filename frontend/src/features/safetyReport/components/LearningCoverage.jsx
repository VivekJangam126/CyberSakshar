import React from 'react';

const LearningCoverage = ({ learning }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Coverage</h2>
      
      <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
        <div className="flex items-start gap-4">
          <span className="text-3xl">💡</span>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Micro Learning Progress
            </h3>
            <p className="text-gray-700 mb-4">
              {learning.completed 
                ? `You have completed all micro learning modules covering ${learning.topics.join(', ')}.`
                : `You have completed ${learning.modulesCompleted} out of ${learning.totalModules} modules.`
              }
            </p>
            
            {learning.topics.length > 0 && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Concepts Covered:</p>
                <div className="flex flex-wrap gap-2">
                  {learning.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-purple-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCoverage;
