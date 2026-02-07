import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkEligibility, generateCertificateData } from '../utils/certificateEligibility';
import CertificateLayout from '../components/CertificateLayout';
import CertificateCard from '../components/CertificateCard';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const CertificatePreview = () => {
  const navigate = useNavigate();
  const [certificateData, setCertificateData] = useState(null);
  const [isEligible, setIsEligible] = useState(false);
  const certificateRef = useRef(null);

  useEffect(() => {
    const { eligible } = checkEligibility();
    
    if (!eligible) {
      navigate('/certificate/status');
      return;
    }

    setIsEligible(true);
    // Get user name from localStorage or use default
    const userName = localStorage.getItem('userName') || 'Student';
    const data = generateCertificateData(userName);
    setCertificateData(data);
  }, [navigate]);

  if (!isEligible || !certificateData) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <AppHeader />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600">Loading certificate...</p>
        </div>
        <AppFooter />
      </div>
    );
  }

  const handleGenerate = () => {
    navigate('/certificate/download');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      <div className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Certificate Preview
          </h1>
          <p className="text-lg text-gray-600">
            Review your certificate before generating
          </p>
        </div>

        {/* Certificate Preview */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden" style={{ maxWidth: '100%' }}>
            <div className="transform scale-75 origin-top">
              <CertificateLayout
                ref={certificateRef}
                certificateData={certificateData}
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center space-y-4">
          <Button
            onClick={handleGenerate}
            className="px-8 py-3"
          >
            Generate Certificate
          </Button>
          <div>
            <button
              onClick={() => navigate('/certificate/status')}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              ← Back to Status
            </button>
          </div>
        </div>

        {/* Certificate Details */}
        <CertificateCard className="mt-8 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Certificate Details
          </h3>
          <dl className="space-y-3">
            <div className="flex justify-between">
              <dt className="text-gray-600">Recipient:</dt>
              <dd className="font-medium text-gray-900">{certificateData.userName}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Program:</dt>
              <dd className="font-medium text-gray-900">{certificateData.programName}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Completion Date:</dt>
              <dd className="font-medium text-gray-900">{certificateData.completionDate}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Certificate ID:</dt>
              <dd className="font-mono text-sm text-gray-900">{certificateData.certificateId}</dd>
            </div>
          </dl>
        </CertificateCard>
      </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default CertificatePreview;
