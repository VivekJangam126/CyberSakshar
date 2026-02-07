import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import mockApi from '../mock/mockApi';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// Apply theme to HTML element immediately (before React renders)
const applyThemeToDOM = (theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Get theme from user preferences (single source of truth)
const getThemeFromUser = () => {
  const currentUser = mockApi.getCurrentUser();
  if (currentUser) {
    const preferences = mockApi.getUserPreferences(currentUser.id);
    return preferences?.theme || 'light';
  }
  return 'light'; // Default for non-authenticated users
};

export const ThemeProvider = ({ children }) => {
  // Initialize with actual user preference (not default)
  const [theme, setTheme] = useState(() => {
    const userTheme = getThemeFromUser();
    // Apply immediately to prevent flash
    applyThemeToDOM(userTheme);
    return userTheme;
  });

  // Reload theme from user preferences
  const reloadTheme = useCallback(() => {
    const userTheme = getThemeFromUser();
    setTheme(userTheme);
    applyThemeToDOM(userTheme);
  }, []);

  // Listen for auth changes
  useEffect(() => {
    const handleAuthChange = () => {
      reloadTheme();
    };

    window.addEventListener('auth-changed', handleAuthChange);
    return () => window.removeEventListener('auth-changed', handleAuthChange);
  }, [reloadTheme]);

  const toggleTheme = useCallback(() => {
    const currentUser = mockApi.getCurrentUser();
    if (!currentUser) return;

    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Update DB first (single source of truth)
    mockApi.updateUserPreferences(currentUser.id, { theme: newTheme });
    
    // Then update UI
    setTheme(newTheme);
    applyThemeToDOM(newTheme);
  }, [theme]);

  const setUserTheme = useCallback((newTheme) => {
    const currentUser = mockApi.getCurrentUser();
    if (!currentUser) return;

    // Update DB first (single source of truth)
    mockApi.updateUserPreferences(currentUser.id, { theme: newTheme });
    
    // Then update UI
    setTheme(newTheme);
    applyThemeToDOM(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setUserTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
