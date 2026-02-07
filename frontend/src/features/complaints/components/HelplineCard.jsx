import React from 'react';

const HelplineCard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
      <div className="flex items-start gap-4">
        <div className="text-4xl">📞</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Need Immediate Help?
          </h3>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-600">National Cyber Crime Helpline</p>
              <a 
                href="tel:1930" 
                className="text-2xl font-bold text-blue-600 hover:text-blue-700"
              >
                1930
              </a>
            </div>
            <p className="text-sm text-gray-600">
              Available 24x7 for cyber fraud reporting and guidance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelplineCard;
