import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileMenu from './common/ProfileMenu';

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/home' },
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
        <div className="max-w-7xl mx-auto h-14 px-6 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => navigate('/home')}
            className="text-lg font-semibold text-white tracking-wide hover:text-blue-400"
          >
            CyberSakshar
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium transition-colors pb-1 ${
                  isActive(item.path)
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
              aria-label="Open menu"
            >
              ☰
            </button>

            {/* Profile (Hover Enabled) */}
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
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="flex flex-col px-6 py-4 gap-3">
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
      <div className="h-14"></div>
    </>
  );
};

export default AppHeader;
