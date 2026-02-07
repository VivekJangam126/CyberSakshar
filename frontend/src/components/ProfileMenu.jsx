import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({ onClose }) => {
  const navigate = useNavigate();

  // Mock user data - replace with actual auth context later
  const userName = 'User Name';

  const handleSignOut = () => {
    // Clear auth token (placeholder logic)
    localStorage.removeItem('authToken');
    
    // Redirect to login
    navigate('/login');
    onClose();
  };

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className="fixed inset-0 z-40 sm:hidden"
        onClick={onClose}
      ></div>

      {/* Profile Dropdown */}
      <div
        className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
        onMouseLeave={onClose}
      >
        {/* User Name */}
        <div className="px-4 py-3 border-b border-gray-200">
          <p className="text-sm font-semibold text-gray-800">{userName}</p>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          <button
            onClick={() => handleNavigation('/profile')}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            My Profile
          </button>
          <button
            onClick={() => handleNavigation('/safety-report')}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            My Safety Report
          </button>
          <button
            onClick={() => handleNavigation('/certificate/status')}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            My Certificate
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Sign Out */}
        <div className="py-2">
          <button
            onClick={handleSignOut}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
