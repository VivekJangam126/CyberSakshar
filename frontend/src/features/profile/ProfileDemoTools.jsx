import { useState } from 'react';

const ProfileDemoTools = ({ onReset }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleResetClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmReset = async () => {
    setIsResetting(true);
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onReset();
    setIsResetting(false);
    setShowConfirm(false);
  };

  const handleCancelReset = () => {
    setShowConfirm(false);
  };

  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 transition-colors">
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 text-2xl">🛠️</div>
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white font-fraunces mb-1">
            Demo Tools
          </h2>
          <p className="text-sm text-gray-600 dark:text-slate-400">
            For demo and testing purposes only. These tools will be removed in production.
          </p>
        </div>
      </div>

      {!showConfirm ? (
        <button
          onClick={handleResetClick}
          className="w-full sm:w-auto px-6 py-2 bg-white dark:bg-slate-800 border-2 border-amber-600 dark:border-amber-500 text-amber-700 dark:text-amber-400 font-medium rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors"
        >
          Reset My Journey
        </button>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-amber-300 dark:border-amber-700 transition-colors">
          <p className="text-sm text-gray-700 dark:text-slate-300 mb-4">
            Are you sure you want to reset your progress? This will clear all your quiz results, 
            simulations, learning modules, and certificate status. Your account details and preferences will remain intact.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleConfirmReset}
              disabled={isResetting}
              className="px-4 py-2 bg-red-600 dark:bg-red-700 text-white font-medium rounded-lg hover:bg-red-700 dark:hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isResetting ? 'Resetting...' : 'Yes, Reset'}
            </button>
            <button
              onClick={handleCancelReset}
              disabled={isResetting}
              className="px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDemoTools;
