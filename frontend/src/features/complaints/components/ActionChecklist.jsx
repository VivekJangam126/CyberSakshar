import React, { useState } from 'react';

const ActionChecklist = ({ actions }) => {
  const [checked, setChecked] = useState({});

  const toggleCheck = (index) => {
    setChecked(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-50 border-red-200';
      case 'high':
        return 'bg-orange-50 border-orange-200';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-3">
      {actions.map((action, index) => (
        <div
          key={index}
          className={`p-4 rounded-xl border-2 transition-all ${
            checked[index] 
              ? 'bg-green-50 border-green-300' 
              : getPriorityColor(action.priority)
          }`}
        >
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={checked[index] || false}
              onChange={() => toggleCheck(index)}
              className="mt-1 w-5 h-5 text-green-600 rounded focus:ring-green-500"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{action.icon}</span>
                <h4 className="font-bold text-gray-900">{action.action}</h4>
              </div>
              <p className="text-sm text-gray-600">{action.detail}</p>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ActionChecklist;
