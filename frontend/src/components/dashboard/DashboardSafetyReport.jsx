import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card';
import Button from '../Button';

const DashboardSafetyReport = () => {
  const navigate = useNavigate();

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Personal Cyber Safety Report
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            View your comprehensive cyber safety status and get personalized recommendations
          </p>
          <Button
            onClick={() => navigate('/safety-report')}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            View My Report
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DashboardSafetyReport;
