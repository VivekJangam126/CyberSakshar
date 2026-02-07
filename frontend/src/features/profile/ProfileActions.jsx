const ProfileActions = ({ onSignOut }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-colors">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white font-fraunces mb-4">
        Account Actions
      </h2>

      <button
        onClick={onSignOut}
        className="w-full sm:w-auto px-6 py-3 bg-red-600 dark:bg-red-700 text-white font-medium rounded-lg hover:bg-red-700 dark:hover:bg-red-800 transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfileActions;
