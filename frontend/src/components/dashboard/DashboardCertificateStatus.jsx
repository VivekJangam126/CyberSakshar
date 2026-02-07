import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkEligibility } from '../../features/certificate/utils/certificateEligibility';
import Card from '../Card';
import Button from '../Button';

const DashboardCertificateStatus = () => {
  const navigate = useNavigate();
  const [eligibilityData, setEligibilityData] = useState(null);

  useEffect(() => {
    const data = checkEligibility();
    setEligibilityData(data);
  }, []);

  if (!eligibilityData) return null;

  const completedCount = eligibilityData.requirements.filter(r => r.completed).length;
  const totalCount = eligibilityData.requirements.length;

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              eligibilityData.eligible 
                ? 'bg-green-100' 
                : 'bg-blue-100'
            }`}>
              {eligibilityData.eligible ? (
                <svg
                  className="w-6 h-6 text-green-600"
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
              ) : (
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                CyberSakshar Certificate
              </h3>
              <p className="text-sm text-gray-600">
                {eligibilityData.eligible 
                  ? 'Your certificate is ready' 
                  : `${completedCount}/${totalCount} requirements completed`
                }
              </p>
            </div>
          </div>

          {!eligibilityData.eligible && (
            <div className="space-y-2 mb-4">
              {eligibilityData.requirements.map((req) => (
                <div key={req.id} className="flex items-center gap-2 text-sm">
                  {req.completed ? (
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className={req.completed ? 'text-gray-700' : 'text-gray-500'}>
                    {req.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <Button
            onClick={() => navigate('/certificate/status')}
            variant={eligibilityData.eligible ? 'primary' : 'secondary'}
            className="w-full sm:w-auto"
          >
            {eligibilityData.eligible ? 'View Certificate' : 'View Status'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DashboardCertificateStatus;
