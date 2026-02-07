const ProfileHeader = ({ user }) => {
  // Get user initials for avatar
  const getInitials = (name) => {
    if (!name) return 'U';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  const initials = getInitials(user.name);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-colors">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-2xl font-bold font-fraunces">
            {initials}
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-fraunces">
              {user.name}
            </h1>
            <span className="px-2 py-1 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded">
              Demo Account
            </span>
          </div>
          <p className="text-gray-600 dark:text-slate-300 mb-1">{user.email}</p>
          <p className="text-sm text-gray-500 dark:text-slate-400 capitalize">
            Role: <span className="font-medium">{user.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
