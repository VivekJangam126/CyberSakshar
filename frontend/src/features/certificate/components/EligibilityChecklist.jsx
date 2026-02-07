import React from 'react';

const EligibilityChecklist = ({ requirements }) => {
  return (
    <div className="space-y-3">
      {requirements.map((req) => (
        <div
          key={req.id}
          className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200"
        >
          <div className="flex-shrink-0 mt-0.5">
            {req.completed ? (
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <h3
              className={`font-medium ${
                req.completed ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              {req.label}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{req.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EligibilityChecklist;
