import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { generateCertificatePDF } from './pdfGenerator';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Certificate = () => {
  const user = useSelector((state) => state.auth.user);
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const certificateRef = useRef(null);

  useEffect(() => {
    loadCertificateData();
  }, []);

  const loadCertificateData = async () => {
    // In a real app, this would fetch from API
    const data = {
      userName: user?.name || 'Student',
      courseName: 'Cybersecurity Awareness',
      completionDate: new Date().toLocaleDateString(),
      certificateId: `CS-${Date.now()}`,
      instructor: 'CyberSakshar Team',
    };
    setCertificateData(data);
    setLoading(false);
  };

  const handleDownload = () => {
    generateCertificatePDF(certificateData, certificateRef.current);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My CyberSakshar Certificate',
        text: `I completed the ${certificateData.courseName} course on CyberSakshar!`,
        url: window.location.href,
      });
    } else {
      alert('Sharing not supported on this device');
    }
  };

  if (loading) return <div className="text-center p-8">Loading certificate...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Certificate</h1>
        
        <Card>
          <div
            ref={certificateRef}
            className="certificate-container bg-white p-12 border-8 border-double border-blue-600 relative"
            style={{ minHeight: '600px' }}
          >
            <div className="text-center">
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-blue-800 mb-2">
                  CERTIFICATE
                </h2>
                <p className="text-xl text-gray-600">of Completion</p>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 mb-2">This is to certify that</p>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">
                  {certificateData.userName}
                </h3>
                <p className="text-gray-600 mb-4">has successfully completed</p>
                <h4 className="text-2xl font-semibold text-blue-700">
                  {certificateData.courseName}
                </h4>
              </div>

              <div className="flex justify-between items-end px-12 mt-12">
                <div className="text-left">
                  <p className="text-gray-600 mb-2">Date</p>
                  <p className="font-medium border-t-2 border-gray-400 pt-2">
                    {certificateData.completionDate}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 mb-2">Instructor</p>
                  <p className="font-medium border-t-2 border-gray-400 pt-2">
                    {certificateData.instructor}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs text-gray-500">
                  Certificate ID: {certificateData.certificateId}
                </p>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-gold-500"></div>
            <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-gold-500"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-gold-500"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-gold-500"></div>
          </div>

          <div className="flex gap-4 mt-6 justify-center">
            <Button onClick={handleDownload}>
              Download PDF
            </Button>
            <Button onClick={handleShare} variant="secondary">
              Share
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Certificate;
