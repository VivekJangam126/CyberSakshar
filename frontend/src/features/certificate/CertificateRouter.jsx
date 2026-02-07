import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CertificateStatus from './pages/CertificateStatus';
import CertificatePreview from './pages/CertificatePreview';
import CertificateDownload from './pages/CertificateDownload';

const CertificateRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/certificate/status" replace />} />
      <Route path="/status" element={<CertificateStatus />} />
      <Route path="/preview" element={<CertificatePreview />} />
      <Route path="/download" element={<CertificateDownload />} />
    </Routes>
  );
};

export default CertificateRouter;
