const ProfileSettings = ({ settings, onSettingsChange }) => {
  const handleLanguageChange = (e) => {
    onSettingsChange({ ...settings, language: e.target.value });
  };

  const handleNotificationsToggle = () => {
    onSettingsChange({ ...settings, notifications: !settings.notifications });
  };

  const handleThemeToggle = () => {
    const newTheme = settings.theme === 'light' ? 'dark' : 'light';
    onSettingsChange({ ...settings, theme: newTheme });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 font-fraunces mb-4">
        Settings
      </h2>

      <div className="space-y-4">
        {/* Language */}
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <p className="font-medium text-gray-900">Language</p>
            <p className="text-sm text-gray-500">Choose your preferred language</p>
          </div>
          <select
            value={settings.language}
            onChange={handleLanguageChange}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी (Hindi)</option>
            <option value="mr">मराठी (Marathi)</option>
            <option value="ta">தமிழ் (Tamil)</option>
          </select>
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between py-3 border-b border-gray-200">
          <div>
            <p className="font-medium text-gray-900">Notifications</p>
            <p className="text-sm text-gray-500">Receive updates and reminders</p>
          </div>
          <button
            onClick={handleNotificationsToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.notifications ? 'bg-amber-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.notifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Theme */}
        <div className="flex items-center justify-between py-3">
          <div>
            <p className="font-medium text-gray-900">Theme Preference</p>
            <p className="text-sm text-gray-500">Light or dark mode</p>
          </div>
          <button
            onClick={handleThemeToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.theme === 'dark' ? 'bg-gray-700' : 'bg-amber-600'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500 italic">
        Note: Settings are saved locally and will take effect in future updates.
      </p>
    </div>
  );
};

export default ProfileSettings;
