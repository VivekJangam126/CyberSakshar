import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Learn', path: '/learn' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Simulations', path: '/simulations' },
    { name: 'Help', path: '/help' },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto h-14 px-4 flex items-center justify-between">

          {/* Left: Hamburger (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white text-xl"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Left: Logo (Desktop) */}
          <button
            onClick={() => navigate('/dashboard')}
            className="hidden md:block text-lg font-semibold text-white tracking-wide hover:text-blue-400"
          >
            CyberSakshar
          </button>

          {/* Center: Logo (Mobile) */}
          <button
            onClick={() => navigate('/dashboard')}
            className="md:hidden text-base font-semibold text-white tracking-wide"
          >
            CyberSakshar
          </button>

          {/* Center Nav (Desktop) */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium pb-1 transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right: Profile */}
          <div
            className="relative"
            onMouseEnter={() => setShowProfileMenu(true)}
            onMouseLeave={() => setShowProfileMenu(false)}
          >
            <button
              className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 focus:outline-none"
              aria-label="Profile"
            >
              <span className="text-sm font-medium">U</span>
            </button>

            {showProfileMenu && (
              <ProfileMenu onClose={() => setShowProfileMenu(false)} />
            )}
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="flex flex-col px-4 py-4 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-14" />
    </>
  );
};

export default AppHeader;
