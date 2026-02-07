import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ComplaintIntro from './pages/ComplaintIntro';
import ComplaintTypeSelect from './pages/ComplaintTypeSelect';
import ComplaintQuestions from './pages/ComplaintQuestions';
import ImmediateActions from './pages/ImmediateActions';
import ComplaintSummary from './pages/ComplaintSummary';
import OfficialRedirection from './pages/OfficialRedirection';

const ComplaintRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/complaints/intro" replace />} />
      <Route path="/intro" element={<ComplaintIntro />} />
      <Route path="/type" element={<ComplaintTypeSelect />} />
      <Route path="/questions" element={<ComplaintQuestions />} />
      <Route path="/actions" element={<ImmediateActions />} />
      <Route path="/summary" element={<ComplaintSummary />} />
      <Route path="/official" element={<OfficialRedirection />} />
    </Routes>
  );
};

export default ComplaintRouter;
