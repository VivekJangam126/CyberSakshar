import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProfileMenu from './ProfileMenu';
import mockApi from '../mock/mockApi';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = mockApi.getCurrentUser();
    setUser(currentUser);
  }, []);

  const userInitial = user?.name?.charAt(0).toUpperCase() || 'U';

  const navItems = [
    { name: t('dashboard'), path: '/dashboard' },
    { name: 'Learn', path: '/learn' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Simulations', path: '/simulations' },
    { name: 'Report Fraud', path: '/complaints' },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  const handleLanguageToggle = () => {
    const newLang = language === 'en' ? 'hi' : 'en';
    changeLanguage(newLang);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <>
      {/* Top Navbar */}
      <header className="relative z-20 border-b-2 border-slate-300 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Left: Hamburger (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white text-2xl transition-colors font-bold hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg p-2"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Left: Logo (Desktop) */}
          <button
            onClick={() => navigate('/dashboard')}
            className="hidden md:block text-xl font-black text-slate-900 dark:text-white tracking-tight hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            CyberSakshar
          </button>

          {/* Center: Logo (Mobile) */}
          <button
            onClick={() => navigate('/dashboard')}
            className="md:hidden text-lg font-black text-slate-900 dark:text-white tracking-tight"
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
                    ? 'text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400'
                    : 'text-slate-700 dark:text-slate-300 border-transparent hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-500'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right: Controls + Profile */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={handleLanguageToggle}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all border border-slate-300 dark:border-slate-600"
              aria-label="Toggle language"
            >
              <span className="text-sm">🌐</span>
              <span>{language === 'en' ? 'EN' : 'हिं'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="hidden sm:flex items-center justify-center w-9 h-9 text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all border border-slate-300 dark:border-slate-600"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Profile */}
            <div
              className="relative"
              onMouseEnter={() => setShowProfileMenu(true)}
              onMouseLeave={() => setShowProfileMenu(false)}
            >
              <button
                className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center hover:shadow-xl hover:from-orange-600 hover:to-amber-600 focus:outline-none transition-all font-bold border-2 border-orange-600 dark:border-orange-500 shadow-lg"
                aria-label="Profile"
              >
                {userInitial}
              </button>

              {showProfileMenu && (
                <ProfileMenu onClose={() => setShowProfileMenu(false)} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-900/95 border-t-2 border-slate-300 dark:border-slate-700 backdrop-blur-sm shadow-md">
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
                      ? 'text-orange-700 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-600'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border-transparent'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Controls */}
              <div className="flex gap-2 mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={handleLanguageToggle}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all border border-slate-300 dark:border-slate-600"
                >
                  <span>🌐</span>
                  <span>{language === 'en' ? 'EN' : 'हिं'}</span>
                </button>

                <button
                  onClick={handleThemeToggle}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all border border-slate-300 dark:border-slate-600"
                >
                  {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                </button>
              </div>
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
