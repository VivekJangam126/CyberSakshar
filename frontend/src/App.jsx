import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './features/DashBoard/DashBoard'
import LandingWithLoading from './features/landing/LandingWithLoading'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import QuizRouter from './features/quiz/QuizRouter'
import SimulationRouter from './features/simulations/SimulationRouter'
import LearningRouter from './features/learning/LearningRouter'
import ComplaintForm from './features/complaints/ComplaintForm'
import CertificateRouter from './features/certificate/CertificateRouter'

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
        <Route path="/complaints" element={<ComplaintForm />} />
        <Route path="/certificate/*" element={<CertificateRouter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
