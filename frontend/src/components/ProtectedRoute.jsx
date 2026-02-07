// Protected route wrapper - redirects to login if not authenticated
import { Navigate } from 'react-router-dom';
import mockApi from '../mock/mockApi';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = mockApi.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
