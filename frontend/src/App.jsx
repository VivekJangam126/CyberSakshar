import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './features/DashBoard/DashBoard'
import LandingWithLoading from './features/landing/LandingWithLoading'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import QuizRouter from './features/quiz/QuizRouter'
import SimulationRouter from './features/simulations/SimulationRouter'
import LearningRouter from './features/learning/LearningRouter'
import ComplaintRouter from './features/complaints/ComplaintRouter'
import CertificateRouter from './features/certificate/CertificateRouter'
import SafetyReportRouter from './features/safetyReport/SafetyReportRouter'
import ProfilePage from './features/profile/ProfilePage'
import DevTools from './mock/DevTools'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingWithLoading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz/*" element={<QuizRouter />} />
        <Route path="/simulations/*" element={<SimulationRouter />} />
        <Route path="/learn/*" element={<LearningRouter />} />
        <Route path="/learning/*" element={<LearningRouter />} />
        <Route path="/complaints/*" element={<ComplaintRouter />} />
        <Route path="/certificate/*" element={<CertificateRouter />} />
        <Route path="/safety-report/*" element={<SafetyReportRouter />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      
      {/* Dev Tools - only in development */}
      {import.meta.env.DEV && <DevTools />}
    </BrowserRouter>
  )
}

export default App
