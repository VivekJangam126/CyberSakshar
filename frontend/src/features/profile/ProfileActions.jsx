const ProfileActions = ({ onSignOut }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 font-fraunces mb-4">
        Account Actions
      </h2>

      <button
        onClick={onSignOut}
        className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfileActions;
