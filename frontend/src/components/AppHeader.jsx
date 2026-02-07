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
      <header className="relative z-20 border-b-2 border-slate-300 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Left: Hamburger (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-slate-900 text-2xl transition-colors font-bold hover:bg-slate-100 rounded-lg p-2"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Left: Logo (Desktop) */}
          <button
            onClick={() => navigate('/dashboard')}
            className="hidden md:block text-xl font-black text-slate-900 tracking-tight hover:text-orange-600 transition-colors"
          >
            CyberSakshar
          </button>

          {/* Center: Logo (Mobile) */}
          <button
            onClick={() => navigate('/dashboard')}
            className="md:hidden text-lg font-black text-slate-900 tracking-tight"
          >
            CyberSakshar
          </button>

          {/* Center Nav (Desktop) */}
          <nav className="hidden md:flex gap-9">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-sm font-bold pb-2 border-b-2 transition-all ${
                  isActive(item.path)
                    ? 'text-orange-600 border-orange-600'
                    : 'text-slate-700 border-transparent hover:text-orange-600 hover:border-orange-300'
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
              className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center hover:shadow-xl hover:from-orange-600 hover:to-amber-600 focus:outline-none transition-all font-bold border-2 border-orange-600 shadow-lg"
              aria-label="Profile"
            >
              U
            </button>

            {showProfileMenu && (
              <ProfileMenu onClose={() => setShowProfileMenu(false)} />
            )}
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 border-t-2 border-slate-300 backdrop-blur-sm shadow-md">
            <div className="flex flex-col px-4 py-4 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-bold py-3 px-4 rounded-lg border-2 transition-all ${
                    isActive(item.path)
                      ? 'text-orange-700 bg-orange-100 border-orange-300'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-transparent'
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
      <div className="h-16" />
    </>
  );
};

export default AppHeader;
