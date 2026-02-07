import React from 'react';

const IncidentTypeCard = ({ incident, onClick, selected = false }) => {
  return (
    <button
      onClick={() => onClick(incident.id)}
      className={`
        w-full text-left p-6 rounded-2xl border-2 transition-all duration-200
        ${selected 
          ? 'border-amber-500 bg-amber-50 shadow-lg scale-105' 
          : `${incident.border} bg-gradient-to-br ${incident.color} hover:shadow-lg hover:scale-102`
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl">{incident.icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {incident.title}
          </h3>
          <p className="text-sm text-gray-600">
            {incident.description}
          </p>
        </div>
        {selected && (
          <div className="text-amber-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </button>
  );
};

export default IncidentTypeCard;
