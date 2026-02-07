import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './features/DashBoard/DashBoard'
import LandingWithLoading from './features/landing/LandingWithLoading'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import Dashboard from './features/landing/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingWithLoading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
