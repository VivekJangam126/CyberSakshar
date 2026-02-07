import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './features/landing/Landing'
import LoadingPage from './features/landing/Loading'
import Login from './features/auth/Login'
import Register from './features/auth/Register'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
