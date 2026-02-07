import React from 'react';
import Card from '../../components/Card';

const StepsGuide = ({ onClose }) => {
  const steps = [
    {
      number: 1,
      title: 'Gather Evidence',
      description: 'Collect all relevant information including screenshots, emails, messages, and transaction details.',
    },
    {
      number: 2,
      title: 'Fill the Form',
      description: 'Provide accurate details about the incident including date, time, and what happened.',
    },
    {
      number: 3,
      title: 'Submit to Authorities',
      description: 'Your complaint will be forwarded to the appropriate cybercrime authorities.',
    },
    {
      number: 4,
      title: 'Track Progress',
      description: 'You will receive updates via email and can track your complaint status in your dashboard.',
    },
  ];

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">How to Report Cybercrime</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              {step.number}
            </div>
            <div>
              <h3 className="font-bold mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
        <strong>Important:</strong> All information provided will be kept confidential and
        used only for investigation purposes.
      </div>
    </Card>
  );
};

export default StepsGuide;
