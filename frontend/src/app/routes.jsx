import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../features/landing/Landing';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import Dashboard from '../features/DashBoard/DashBoard';
import QuizRouter from '../features/quiz/QuizRouter';
import SimulationPage from '../features/simulations/SimulationPage';
import LearningRouter from '../features/learning/LearningRouter';
import Lessons from '../features/learning/Lessons';
import ComplaintForm from '../features/complaints/ComplaintForm';
import CertificateRouter from '../features/certificate/CertificateRouter';
import ProfilePage from '../features/profile/ProfilePage';
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'dashboard',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      },
      {
        path: 'quiz/*',
        element: <ProtectedRoute><QuizRouter /></ProtectedRoute>,
      },
      {
        path: 'simulations',
        element: <ProtectedRoute><SimulationPage /></ProtectedRoute>,
      },
      {
        path: 'learning/*',
        element: <ProtectedRoute><LearningRouter /></ProtectedRoute>,
      },
      {
        path: 'learn/*',
        element: <ProtectedRoute><LearningRouter /></ProtectedRoute>,
      },
      {
        path: 'lessons',
        element: <ProtectedRoute><Lessons /></ProtectedRoute>,
      },
      {
        path: 'complaints',
        element: <ProtectedRoute><ComplaintForm /></ProtectedRoute>,
      },
      {
        path: 'certificate/*',
        element: <ProtectedRoute><CertificateRouter /></ProtectedRoute>,
      },
      {
        path: 'profile',
        element: <ProtectedRoute><ProfilePage /></ProtectedRoute>,
      },
    ],
  },
]);
