import { Routes, Route, Navigate } from 'react-router-dom';
import SimulationPage from './SimulationPage';
import SimulationIntro from './pages/SimulationIntro';
import SimulationScenario from './pages/SimulationScenario';
import SimulationDecision from './pages/SimulationDecision';
import SimulationFeedback from './pages/SimulationFeedback';
import SimulationComplete from './pages/SimulationComplete';

const SimulationRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SimulationPage />} />
      <Route path="/intro" element={<SimulationIntro />} />
      <Route path="/scenario" element={<SimulationScenario />} />
      <Route path="/decision" element={<SimulationDecision />} />
      <Route path="/feedback" element={<SimulationFeedback />} />
      <Route path="/complete" element={<SimulationComplete />} />
      <Route path="*" element={<Navigate to="/simulations" replace />} />
    </Routes>
  );
};

export default SimulationRouter;
