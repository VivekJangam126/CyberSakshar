import React from 'react';

const QuestionCard = ({ question, value, onChange }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <label className="block mb-4">
        <span className="text-lg font-semibold text-gray-900 mb-2 block">
          {question.question}
        </span>
        {question.optional && (
          <span className="text-sm text-gray-500">(Optional - you can skip)</span>
        )}
      </label>

      {question.type === 'select' && (
        <select
          value={value || ''}
          onChange={(e) => onChange(question.id, e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
        >
          <option value="">Select an option...</option>
          {question.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {question.type === 'radio' && (
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={value === option}
                onChange={(e) => onChange(question.id, e.target.value)}
                className="w-4 h-4 text-amber-600 focus:ring-amber-500"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      )}

      {question.type === 'text' && (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(question.id, e.target.value)}
          placeholder={question.placeholder || ''}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      )}
    </div>
  );
};

export default QuestionCard;
