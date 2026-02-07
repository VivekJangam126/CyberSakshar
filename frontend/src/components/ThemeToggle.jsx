import { useEffect, useState } from 'react';

const ThemeToggle = ({ isDarkMode, onThemeChange }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-slate-100 border-2 border-slate-300" />
    );
  }

  const toggleTheme = () => {
    if (onThemeChange) {
      onThemeChange(!isDarkMode);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative inline-flex items-center h-8 w-14 rounded-full transition-all duration-300 border-2 shadow-md hover:shadow-lg focus:outline-none"
      style={{
        backgroundColor: isDarkMode ? '#334155' : '#ffffff',
        borderColor: isDarkMode ? '#64748b' : '#cbd5e1'
      }}
      aria-label="Toggle theme"
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Animated toggle knob */}
      <div
        className="absolute w-6 h-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-base border"
        style={{
          backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
          borderColor: isDarkMode ? '#94a3b8' : '#cbd5e1',
          right: isDarkMode ? '4px' : 'auto',
          left: isDarkMode ? 'auto' : '4px'
        }}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </div>
    </button>
  );
};

// Standalone version for use outside of Landing
const ThemeToggleStandalone = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('cybersakshar_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    
    setIsDark(shouldBeDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
      localStorage.setItem('cybersakshar_theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('cybersakshar_theme', 'light');
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    setIsDark(prevState => !prevState);
  };

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-slate-100 border-2 border-slate-300" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative inline-flex items-center h-8 w-14 rounded-full transition-all duration-300 border-2 shadow-md hover:shadow-lg focus:outline-none bg-white"
      style={isDark ? { backgroundColor: '#334155', borderColor: '#64748b' } : {}}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Animated toggle knob */}
      <div
        className="absolute w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center text-base border border-slate-300"
        style={isDark 
          ? { 
              right: '4px', 
              left: 'auto',
              backgroundColor: '#334155',
              borderColor: '#64748b'
            } 
          : { 
              left: '4px',
              right: 'auto'
            }
        }
      >
        {isDark ? '🌙' : '☀️'}
      </div>
    </button>
  );
};

export { ThemeToggleStandalone };
export default ThemeToggle;
