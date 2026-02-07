import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkEligibility } from '../utils/certificateEligibility';
import EligibilityChecklist from '../components/EligibilityChecklist';
import CertificateCard from '../components/CertificateCard';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const CertificateStatus = () => {
  const navigate = useNavigate();
  const [eligibilityData, setEligibilityData] = useState(null);

  useEffect(() => {
    const data = checkEligibility();
    setEligibilityData(data);
  }, []);

  if (!eligibilityData) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <AppHeader />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </div>
        <AppFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AppHeader />
      <div className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Your CyberSakshar Certificate
          </h1>
          <p className="text-lg text-gray-600">
            Official acknowledgment of your cyber safety learning journey
          </p>
        </div>

        {/* Status Card */}
        <CertificateCard className="mb-6">
          <div className="text-center mb-8">
            {eligibilityData.eligible ? (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Certificate Ready
                </h2>
                <p className="text-gray-600">
                  Congratulations! Your certificate is ready to be generated.
                </p>
              </>
            ) : (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Certificate Locked
                </h2>
                <p className="text-gray-600">
                  Complete the required learning to unlock your certificate
                </p>
              </>
            )}
          </div>

          {/* Requirements Checklist */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Requirements
            </h3>
            <EligibilityChecklist requirements={eligibilityData.requirements} />
          </div>

          {/* Action Button */}
          <div className="text-center">
            {eligibilityData.eligible ? (
              <Button
                onClick={() => navigate('/certificate/preview')}
                className="px-8 py-3"
              >
                View Certificate
              </Button>
            ) : (
              <Button
                onClick={() => navigate('/dashboard')}
                variant="secondary"
                className="px-8 py-3"
              >
                Continue Learning
              </Button>
            )}
          </div>
        </CertificateCard>

        {/* Info Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
          <p className="font-medium mb-1">About Your Certificate</p>
          <p>
            This certificate represents your completion and engagement with the
            CyberSakshar program. It certifies that you have assessed cyber
            risks, practiced real-world scenarios, and completed micro learning
            modules.
          </p>
        </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default CertificateStatus;
