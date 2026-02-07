// LearningRouter - Routes for micro learning feature

import { Routes, Route, Navigate } from 'react-router-dom';
import LearningHome from './pages/LearningHome';
import LearningIntro from './pages/LearningIntro';
import LearningContent from './pages/LearningContent';
import LearningPsychology from './pages/LearningPsychology';
import LearningRule from './pages/LearningRule';
import LearningComplete from './pages/LearningComplete';

const LearningRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LearningHome />} />
      <Route path="/:moduleId/intro" element={<LearningIntro />} />
      <Route path="/:moduleId/content" element={<LearningContent />} />
      <Route path="/:moduleId/psychology" element={<LearningPsychology />} />
      <Route path="/:moduleId/rule" element={<LearningRule />} />
      <Route path="/:moduleId/complete" element={<LearningComplete />} />
      <Route path="*" element={<Navigate to="/learning" replace />} />
    </Routes>
  );
};

export default LearningRouter;
