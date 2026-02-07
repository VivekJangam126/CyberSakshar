// Development tools for testing mock backend
// Add this component to your app during development

import { useState } from 'react';
import mockApi from './mockApi';

const DevTools = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showData, setShowData] = useState(false);

  const handleReset = () => {
    if (window.confirm('Reset all demo data? This will log you out and reload the page.')) {
      mockApi.resetDemo();
    }
  };

  const handleExport = () => {
    const data = mockApi.exportData();
    console.log('=== MOCK DB EXPORT ===');
    console.log(JSON.stringify(data, null, 2));
    alert('Data exported to console. Press F12 to view.');
  };

  const handleQuickLogin = (email, password) => {
    const result = mockApi.login(email, password);
    if (result.success) {
      window.location.href = '/dashboard';
    }
  };

  const currentUser = mockApi.getCurrentUser();

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-50 text-sm font-semibold"
        title="Open Dev Tools"
      >
        🛠️ Dev
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 z-50 w-80 max-h-96 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-gray-800">Mock Backend Dev Tools</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      {/* Current User */}
      <div className="mb-4 p-2 bg-blue-50 rounded text-sm">
        <strong>Current User:</strong>
        {currentUser ? (
          <div className="mt-1">
            <div>{currentUser.name}</div>
            <div className="text-xs text-gray-600">{currentUser.email}</div>
          </div>
        ) : (
          <div className="text-gray-500 mt-1">Not logged in</div>
        )}
      </div>

      {/* Quick Login */}
      <div className="mb-4">
        <strong className="text-sm text-gray-700">Quick Login:</strong>
        <div className="mt-2 space-y-2">
          <button
            onClick={() => handleQuickLogin('student@demo.com', 'student123')}
            className="w-full text-left px-3 py-2 bg-green-50 hover:bg-green-100 rounded text-sm border border-green-200"
          >
            👨‍🎓 Student (Beginner)
          </button>
          <button
            onClick={() => handleQuickLogin('citizen@demo.com', 'citizen123')}
            className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded text-sm border border-blue-200"
          >
            👤 Citizen (Intermediate)
          </button>
          <button
            onClick={() => handleQuickLogin('teacher@demo.com', 'teacher123')}
            className="w-full text-left px-3 py-2 bg-purple-50 hover:bg-purple-100 rounded text-sm border border-purple-200"
          >
            👩‍🏫 Teacher (Advanced)
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2">
        <button
          onClick={handleExport}
          className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium text-gray-700"
        >
          📊 Export Data to Console
        </button>
        <button
          onClick={() => setShowData(!showData)}
          className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium text-gray-700"
        >
          {showData ? '👁️ Hide' : '👁️ Show'} Current Data
        </button>
        <button
          onClick={handleReset}
          className="w-full px-3 py-2 bg-red-100 hover:bg-red-200 rounded text-sm font-medium text-red-700"
        >
          🔄 Reset All Data
        </button>
      </div>

      {/* Show Data */}
      {showData && currentUser && (
        <div className="mt-4 p-2 bg-gray-50 rounded text-xs overflow-auto max-h-40">
          <pre>{JSON.stringify(mockApi.getDashboardData(currentUser.id), null, 2)}</pre>
        </div>
      )}

      <div className="mt-3 text-xs text-gray-500 text-center">
        Remove this component in production
      </div>
    </div>
  );
};

export default DevTools;
