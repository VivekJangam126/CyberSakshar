import React from 'react';

const CertificateCard = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      <div className="p-8">
        {children}
      </div>
    </div>
  );
};

export default CertificateCard;
