import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import mockApi from '../../../mock/mockApi';
import { generateCertificatePDF } from '../pdfGenerator';
import CertificateLayout from '../components/CertificateLayout';
import CertificateCard from '../components/CertificateCard';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const CertificateDownload = () => {
  const navigate = useNavigate();
  const [certificateData, setCertificateData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const certificateRef = useRef(null);

  useEffect(() => {
    const user = mockApi.getCurrentUser();
    if (!user) {
      navigate('/login');
      return;
    }

    const { eligible } = mockApi.isCertificateEligible(user.id);
    
    if (!eligible) {
      navigate('/certificate/status');
      return;
    }

    const cert = mockApi.getCertificateStatus(user.id);
    if (!cert.issued) {
      navigate('/certificate/preview');
      return;
    }

    const data = {
      programName: 'CyberSakshar',
      certificateTitle: 'Certificate of Completion',
      userName: user.name,
      completionDate: new Date(cert.issuedAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      certificateId: cert.certificateId,
      issueDate: new Date(cert.issuedAt),
      signatures: [
        {
          title: 'Program Director',
          name: 'CyberSakshar Team',
        },
        {
          title: 'Chief Security Officer',
          name: 'Digital Safety Initiative',
        },
      ],
    };
    setCertificateData(data);
  }, [navigate]);

  const handleDownload = async () => {
    if (!certificateRef.current || isGenerating) return;

    setIsGenerating(true);
    try {
      await generateCertificatePDF(certificateData, certificateRef.current);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!certificateData) {
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
        <div className="max-w-4xl mx-auto">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <svg
              className="w-10 h-10 text-green-600"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Certificate Generated Successfully
          </h1>
          <p className="text-lg text-gray-600">
            Your official CyberSakshar certificate is ready
          </p>
        </div>

        {/* Certificate Info Card */}
        <CertificateCard className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {certificateData.certificateTitle}
            </h2>
            <p className="text-gray-600">
              Issued to <span className="font-semibold">{certificateData.userName}</span>
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-gray-600 mb-1">Program</dt>
                <dd className="font-medium text-gray-900">{certificateData.programName}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600 mb-1">Completion Date</dt>
                <dd className="font-medium text-gray-900">{certificateData.completionDate}</dd>
              </div>
              <div className="md:col-span-2">
                <dt className="text-sm text-gray-600 mb-1">Certificate ID</dt>
                <dd className="font-mono text-sm text-gray-900">{certificateData.certificateId}</dd>
              </div>
            </dl>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleDownload}
              disabled={isGenerating}
              className="px-8 py-3"
            >
              {isGenerating ? 'Generating PDF...' : 'Download PDF'}
            </Button>
            <Button
              onClick={() => navigate('/dashboard')}
              variant="secondary"
              className="px-8 py-3"
            >
              Return to Dashboard
            </Button>
          </div>
        </CertificateCard>

        {/* Additional Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">
            About Your Certificate
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              This certificate is printable and suitable for official use
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certificate ID can be used for verification purposes
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Download and save your certificate for your records
            </li>
          </ul>
        </div>

        {/* Hidden Certificate for PDF Generation */}
        <div className="fixed -left-[9999px] top-0">
          <CertificateLayout
            ref={certificateRef}
            certificateData={certificateData}
          />
        </div>
      </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default CertificateDownload;
