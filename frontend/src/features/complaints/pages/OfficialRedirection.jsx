import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getGuidanceData } from '../utils/complaintFlowEngine';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const OfficialRedirection = () => {
  const navigate = useNavigate();
  const [guidance, setGuidance] = React.useState(null);

  useEffect(() => {
    const type = localStorage.getItem('complaintIncidentType');
    if (type) {
      const data = getGuidanceData(type);
      setGuidance(data);
    }
  }, []);

  const handleComplete = () => {
    // Clear complaint flow data
    localStorage.removeItem('complaintIncidentType');
    localStorage.removeItem('complaintAnswers');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 flex flex-col">
      <AppHeader />
      
      <div className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
              <span className="text-4xl">🏛️</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              File Official Complaint
            </h1>
            <p className="text-lg text-gray-600">
              Now it's time to report to the authorities
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚠️</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Important
                </h2>
                <p className="text-lg text-gray-700 mb-2">
                  CyberSakshar does not file complaints on your behalf.
                </p>
                <p className="text-gray-700">
                  You must file your complaint on official government portals to take legal action.
                </p>
              </div>
            </div>
          </div>

          {/* Official Resources */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Official Resources
            </h2>
            
            <div className="space-y-4">
              {/* National Cyber Crime Portal */}
              <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  National Cyber Crime Portal
                </h3>
                <p className="text-gray-600 mb-4">
                  Official government portal for filing cybercrime complaints
                </p>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Visit Portal
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Helpline */}
              <div className="p-6 bg-green-50 border-2 border-green-200 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Cyber Crime Helpline
                </h3>
                <p className="text-gray-600 mb-4">
                  24x7 helpline for immediate assistance
                </p>
                <a
                  href="tel:1930"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-xl"
                >
                  📞 Call 1930
                </a>
              </div>

              {/* Additional Resources */}
              {guidance && guidance.officialLinks && guidance.officialLinks.length > 0 && (
                <div className="p-6 bg-gray-50 border-2 border-gray-200 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Additional Resources
                  </h3>
                  <ul className="space-y-3">
                    {guidance.officialLinks.map((link, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <div>
                          <p className="font-semibold text-gray-900">{link.name}</p>
                          <p className="text-sm text-gray-600">{link.description}</p>
                          {link.url && (
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:text-blue-700"
                            >
                              {link.url}
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              You're Prepared
            </h3>
            <p className="text-gray-700">
              You've taken the right steps. Now file your complaint officially and stay safe online.
            </p>
          </div>

          {/* Actions */}
          <div className="text-center">
            <Button
              onClick={handleComplete}
              className="px-8 py-3"
            >
              Return to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default OfficialRedirection;
