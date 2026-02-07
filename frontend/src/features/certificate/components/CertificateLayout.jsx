import React from 'react';

const CertificateLayout = React.forwardRef(({ certificateData }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white p-16 relative"
      style={{
        width: '297mm',
        height: '210mm',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Border */}
      <div className="absolute inset-8 border-4 border-blue-800"></div>
      <div className="absolute inset-10 border border-blue-600"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-blue-900 mb-2">
            {certificateData.programName}
          </h1>
          <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Certificate Title */}
        <h2 className="text-3xl text-gray-700 mb-12">
          {certificateData.certificateTitle}
        </h2>

        {/* Recipient */}
        <div className="mb-12">
          <p className="text-xl text-gray-600 mb-4">This is to certify that</p>
          <h3 className="text-5xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2 px-8">
            {certificateData.userName}
          </h3>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl">
            has successfully completed the cyber safety awareness program,
            demonstrating commitment to digital security through assessment,
            practice, and learning.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto w-full">
          <div className="flex justify-between items-end mb-8">
            {certificateData.signatures.map((sig, index) => (
              <div key={index} className="text-center">
                <div className="w-48 border-t-2 border-gray-400 mb-2"></div>
                <p className="text-sm font-medium text-gray-700">{sig.title}</p>
                <p className="text-xs text-gray-500">{sig.name}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <p>Date: {certificateData.completionDate}</p>
            <p>Certificate ID: {certificateData.certificateId}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

CertificateLayout.displayName = 'CertificateLayout';

export default CertificateLayout;
