import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const ProfileSettings = () => {
  const { theme, setUserTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setUserTheme(newTheme);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-colors">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white font-fraunces mb-4">
        Settings
      </h2>

      <div className="space-y-4">
        {/* Language */}
        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-slate-700">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Language</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">Choose your preferred language</p>
          </div>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="px-3 py-2 border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी (Hindi)</option>
          </select>
        </div>

        {/* Theme */}
        <div className="flex items-center justify-between py-3">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Theme</p>
            <p className="text-sm text-gray-500 dark:text-slate-400">
              {theme === 'light' ? 'Light mode' : 'Dark mode'}
            </p>
          </div>
          <button
            onClick={handleThemeToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              theme === 'dark' ? 'bg-amber-600' : 'bg-gray-300'
            }`}
            aria-label="Toggle theme"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500 dark:text-slate-400 italic">
        Settings are saved to your account and persist across sessions.
      </p>
    </div>
  );
};

export default ProfileSettings;
