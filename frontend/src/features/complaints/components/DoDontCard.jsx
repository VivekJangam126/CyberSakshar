import React from 'react';

const DoDontCard = ({ type, items }) => {
  const isDo = type === 'do';
  
  return (
    <div className={`rounded-xl p-6 border-2 ${
      isDo 
        ? 'bg-green-50 border-green-200' 
        : 'bg-red-50 border-red-200'
    }`}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{isDo ? '✅' : '❌'}</span>
        <h3 className="text-xl font-bold text-gray-900">
          {isDo ? 'What to DO' : 'What NOT to do'}
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className={`mt-1 ${isDo ? 'text-green-600' : 'text-red-600'}`}>
              {isDo ? '•' : '×'}
            </span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoDontCard;
