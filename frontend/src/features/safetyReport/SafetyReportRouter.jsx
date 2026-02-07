import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SafetyReportPage from './pages/SafetyReportPage';

const SafetyReportRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SafetyReportPage />} />
      <Route path="*" element={<Navigate to="/safety-report" replace />} />
    </Routes>
  );
};

export default SafetyReportRouter;
