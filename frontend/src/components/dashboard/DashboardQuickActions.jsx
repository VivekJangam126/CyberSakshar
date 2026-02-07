import { useNavigate } from 'react-router-dom';

const DashboardQuickActions = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      id: 1,
      title: 'Take Safety Quiz',
      description: 'Check your cyber awareness level',
      path: '/quiz',
      accent: 'border-blue-500 text-blue-400'
    },
    {
      id: 2,
      title: 'Practice Simulations',
      description: 'Handle real-life cyber fraud cases',
      path: '/simulations',
      accent: 'border-purple-500 text-purple-400'
    },
    {
      id: 3,
      title: 'Continue Learning',
      description: 'Learn how to stay safe online',
      path: '/learn',
      accent: 'border-green-500 text-green-400'
    },
    {
      id: 4,
      title: 'Report Cyber Fraud',
      description: 'Get help if you face cyber crime',
      path: '/help',
      accent: 'border-red-500 text-red-400'
    }
  ];

  return (
    <section className="mb-6">
      <h3 className="text-base font-semibold text-white mb-3">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => navigate(action.path)}
            className={`
              bg-gray-900 border ${action.accent}
              rounded-xl p-4 text-left
              transition-all duration-200
              hover:bg-gray-800
              active:scale-95
            `}
          >
            <div className="text-sm font-semibold text-white mb-1">
              {action.title}
            </div>
            <div className="text-xs text-gray-400 leading-snug">
              {action.description}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default DashboardQuickActions;
