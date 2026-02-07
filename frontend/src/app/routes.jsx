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
        element: <Dashboard />,
      },
      {
        path: 'quiz/*',
        element: <QuizRouter />,
      },
      {
        path: 'simulations',
        element: <SimulationPage />,
      },
      {
        path: 'learning/*',
        element: <LearningRouter />,
      },
      {
        path: 'learn/*',
        element: <LearningRouter />,
      },
      {
        path: 'lessons',
        element: <Lessons />,
      },
      {
        path: 'complaints',
        element: <ComplaintForm />,
      },
      {
        path: 'certificate/*',
        element: <CertificateRouter />,
      },
    ],
  },
]);
