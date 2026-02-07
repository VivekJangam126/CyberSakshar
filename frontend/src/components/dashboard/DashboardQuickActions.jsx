import { useNavigate } from 'react-router-dom';

const DashboardQuickActions = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      id: 1,
      title: 'Take Safety Quiz',
      description: 'Evaluate your cyber awareness',
      path: '/quiz',
      icon: '🎯',
      gradient: 'from-blue-50/80 to-cyan-50/80',
      border: 'border-blue-200',
      text: 'text-blue-700',
      dot: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Practice Simulations',
      description: 'Respond to real cyber threats',
      path: '/simulations',
      icon: '🎮',
      gradient: 'from-purple-50/80 to-pink-50/80',
      border: 'border-purple-200',
      text: 'text-purple-700',
      dot: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'Micro Learning',
      description: 'Quick 2-3 min safety lessons',
      path: '/learning',
      icon: '💡',
      gradient: 'from-emerald-50/80 to-teal-50/80',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
      dot: 'bg-emerald-500'
    },
    {
      id: 4,
      title: 'Report Cyber Fraud',
      description: 'Get expert assistance',
      path: '/help',
      icon: '🚨',
      gradient: 'from-rose-50/80 to-red-50/80',
      border: 'border-rose-200',
      text: 'text-rose-700',
      dot: 'bg-rose-500'
    }
  ];

  return (
    <section className="mb-6">
      <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-5 sm:mb-6 flex items-center gap-2 sm:gap-3">
        <span className="inline-block text-xl sm:text-2xl">⚡</span> Quick Actions
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-7">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => navigate(action.path)}
            className={`
              relative overflow-hidden
              bg-gradient-to-br ${action.gradient}
              border-2 ${action.border}
              rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-left
              transition-all duration-300
              hover:shadow-2xl hover:border-slate-400 hover:-translate-y-2
              hover:scale-105
              active:scale-95
              group
              shadow-lg
            `}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Accent dot with ring */}
            <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${action.dot} shadow-lg ring-2 ring-white`} />
            
            {/* Icon with enhanced hover effect */}
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-5 group-hover:scale-125 transition-transform duration-300 inline-block group-hover:rotate-6 relative z-10">
              {action.icon}
            </div>
            
            {/* Content */}
            <div className={`text-sm sm:text-base font-black ${action.text} mb-2 leading-tight relative z-10`}>
              {action.title}
            </div>
            <div className="text-xs text-slate-700 leading-relaxed font-bold relative z-10">
              {action.description}
            </div>
            
            {/* Arrow indicator with enhanced styling */}
            <div className="mt-3 sm:mt-4 text-slate-500 text-xs sm:text-sm font-black group-hover:text-slate-800 transition-colors flex items-center gap-2 relative z-10">
              <span className="group-hover:translate-x-1 transition-transform">→</span> Get Started
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default DashboardQuickActions;
