import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mockApi from '../mock/mockApi';

const ProfileMenu = ({ onClose }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = mockApi.getCurrentUser();
    setUser(currentUser);
  }, []);

  const userName = user?.name || 'User';

  const handleSignOut = () => {
    mockApi.logout();
    // Dispatch custom event to notify contexts
    window.dispatchEvent(new Event('auth-changed'));
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
        className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 z-50"
        onMouseLeave={onClose}
      >
        {/* User Name */}
        <div className="px-4 py-3 border-b border-gray-200 dark:border-slate-700">
          <p className="text-sm font-semibold text-gray-800 dark:text-white">{userName}</p>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          <button
            onClick={() => handleNavigation('/profile')}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
          >
            My Profile
          </button>
          <button
            onClick={() => handleNavigation('/safety-report')}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
          >
            My Safety Report
          </button>
          <button
            onClick={() => handleNavigation('/certificate/status')}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
          >
            My Certificate
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-slate-700"></div>

        {/* Sign Out */}
        <div className="py-2">
          <button
            onClick={handleSignOut}
            className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium"
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
