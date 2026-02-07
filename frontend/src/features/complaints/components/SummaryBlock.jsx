import React from 'react';

const SummaryBlock = ({ title, content, icon }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="text-gray-700 whitespace-pre-wrap">
        {content}
      </div>
    </div>
  );
};

export default SummaryBlock;
