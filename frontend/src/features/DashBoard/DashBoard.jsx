import AppHeader from '../../components/AppHeader';

const Dashboard = () => {
  // Mock user data - replace with actual auth context later
  const userName = 'User Name';
  const userProgress = {
    quizzesCompleted: 12,
    lessonsCompleted: 8,
    certificatesEarned: 2,
    currentStreak: 5,
  };

  const recentActivities = [
    { id: 1, title: 'Completed: Password Security Quiz', date: '2 hours ago', type: 'quiz' },
    { id: 2, title: 'Started: Phishing Awareness', date: '1 day ago', type: 'lesson' },
    { id: 3, title: 'Earned: Cyber Basics Certificate', date: '3 days ago', type: 'certificate' },
  ];

  const quickActions = [
    { name: 'Take a Quiz', path: '/quiz', icon: '📝', color: 'bg-blue-50 text-blue-700' },
    { name: 'Continue Learning', path: '/learn', icon: '📚', color: 'bg-green-50 text-green-700' },
    { name: 'Try Simulation', path: '/simulations', icon: '🎮', color: 'bg-purple-50 text-purple-700' },
    { name: 'Get Help', path: '/help', icon: '❓', color: 'bg-orange-50 text-orange-700' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      
      <main className="max-w-7xl mx-auto px-4 py-6 pb-20 sm:pb-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome back, {userName}!
          </h2>
          <p className="text-gray-600">
            Continue your cybersecurity learning journey
          </p>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-3xl font-bold text-blue-700 mb-1">
              {userProgress.quizzesCompleted}
            </div>
            <div className="text-sm text-gray-600">Quizzes Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-3xl font-bold text-green-700 mb-1">
              {userProgress.lessonsCompleted}
            </div>
            <div className="text-sm text-gray-600">Lessons Completed</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-3xl font-bold text-purple-700 mb-1">
              {userProgress.certificatesEarned}
            </div>
            <div className="text-sm text-gray-600">Certificates</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="text-3xl font-bold text-orange-700 mb-1">
              {userProgress.currentStreak} 🔥
            </div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <a
                key={action.path}
                href={action.path}
                className={`${action.color} rounded-lg p-4 text-center hover:shadow-md transition-shadow`}
              >
                <div className="text-3xl mb-2">{action.icon}</div>
                <div className="text-sm font-medium">{action.name}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="text-2xl">
                  {activity.type === 'quiz' && '📝'}
                  {activity.type === 'lesson' && '📚'}
                  {activity.type === 'certificate' && '🏆'}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
