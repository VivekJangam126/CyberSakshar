import React from 'react';
import Card from '../../components/Card';

const QuestionCard = ({ question, onAnswer, selectedAnswer }) => {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
              selectedAnswer === option
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-blue-300'
            }`}
          >
            <input
              type="radio"
              name={question.id}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswer(question.id, option)}
              className="mr-3"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {question.hint && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
          <strong>Hint:</strong> {question.hint}
        </div>
      )}
    </Card>
  );
};

export default QuestionCard;
