import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import i18n from '../app/i18n';
import mockApi from '../mock/mockApi';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

// Apply language to i18n immediately
const applyLanguageToI18n = (language) => {
  if (i18n && typeof i18n.changeLanguage === 'function') {
    i18n.changeLanguage(language);
  }
};

// Get language from user preferences (single source of truth)
const getLanguageFromUser = () => {
  const currentUser = mockApi.getCurrentUser();
  if (currentUser) {
    const preferences = mockApi.getUserPreferences(currentUser.id);
    return preferences?.language || 'en';
  }
  return 'en'; // Default for non-authenticated users
};

export const LanguageProvider = ({ children }) => {
  // Initialize with actual user preference (not default)
  const [language, setLanguage] = useState(() => {
    const userLanguage = getLanguageFromUser();
    // Apply immediately
    applyLanguageToI18n(userLanguage);
    return userLanguage;
  });

  // Reload language from user preferences
  const reloadLanguage = useCallback(() => {
    const userLanguage = getLanguageFromUser();
    setLanguage(userLanguage);
    applyLanguageToI18n(userLanguage);
  }, []);

  // Listen for auth changes
  useEffect(() => {
    const handleAuthChange = () => {
      reloadLanguage();
    };

    window.addEventListener('auth-changed', handleAuthChange);
    return () => window.removeEventListener('auth-changed', handleAuthChange);
  }, [reloadLanguage]);

  const changeLanguage = useCallback((newLanguage) => {
    const currentUser = mockApi.getCurrentUser();
    if (!currentUser) return;

    // Update DB first (single source of truth)
    mockApi.updateUserPreferences(currentUser.id, { language: newLanguage });
    
    // Then update UI
    setLanguage(newLanguage);
    applyLanguageToI18n(newLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
