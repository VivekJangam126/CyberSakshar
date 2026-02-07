import React from 'react';

const ReportHeader = ({ userName, reportDate }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 mb-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <span className="text-3xl">📊</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Personal Cyber Safety Report
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          For: <span className="font-semibold">{userName}</span>
        </p>
        <p className="text-sm text-gray-600">
          Generated on: {reportDate}
        </p>
      </div>
    </div>
  );
};

export default ReportHeader;
