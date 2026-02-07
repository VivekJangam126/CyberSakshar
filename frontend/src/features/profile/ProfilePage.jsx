import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockApi from '../../mock/mockApi';
import ProfileHeader from './ProfileHeader';
import ProfileSnapshot from './ProfileSnapshot';
import ProfileSettings from './ProfileSettings';
import ProfileDemoTools from './ProfileDemoTools';
import ProfileActions from './ProfileActions';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [settings, setSettings] = useState({
    language: 'en',
    notifications: true,
    theme: 'light',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = () => {
    const currentUser = mockApi.getCurrentUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }

    const data = mockApi.getDashboardData(currentUser.id);
    setUser(currentUser);
    setDashboardData(data);
    
    // Load settings from localStorage
    const savedSettings = localStorage.getItem(`user_settings_${currentUser.id}`);
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
    
    setLoading(false);
  };

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
    // Persist settings
    if (user) {
      localStorage.setItem(`user_settings_${user.id}`, JSON.stringify(newSettings));
    }
  };

  const handleResetProgress = () => {
    if (user) {
      mockApi.resetUserProgress(user.id);
      // Reload data
      loadProfileData();
    }
  };

  const handleSignOut = () => {
    mockApi.logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user || !dashboardData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <ProfileHeader user={user} />

        {/* Snapshot */}
        <ProfileSnapshot dashboardData={dashboardData} />

        {/* Settings */}
        <ProfileSettings 
          settings={settings} 
          onSettingsChange={handleSettingsChange} 
        />

        {/* Demo Tools */}
        <ProfileDemoTools onReset={handleResetProgress} />

        {/* Actions */}
        <ProfileActions onSignOut={handleSignOut} />
      </div>
    </div>
  );
};

export default ProfilePage;
