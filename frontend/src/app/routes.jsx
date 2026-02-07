import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../features/landing/Landing';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';
import Dashboard from '../features/DashBoard/DashBoard';
import QuizRouter from '../features/quiz/QuizRouter';
import SimulationPage from '../features/simulations/SimulationPage';
import Lessons from '../features/learning/Lessons';
import ComplaintForm from '../features/complaints/ComplaintForm';
import Certificate from '../features/certificate/Certificate';

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
        path: 'lessons',
        element: <Lessons />,
      },
      {
        path: 'complaints',
        element: <ComplaintForm />,
      },
      {
        path: 'certificate',
        element: <Certificate />,
      },
    ],
  },
]);
