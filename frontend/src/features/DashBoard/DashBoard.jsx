import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import DashboardSafetySummary from '../../components/dashboard/DashboardSafetySummary';
import DashboardQuickActions from '../../components/dashboard/DashboardQuickActions';
import DashboardLearningProgress from '../../components/dashboard/DashboardLearningProgress';
import DashboardRecommendations from '../../components/dashboard/DashboardRecommendations';
import DashboardRecentActivity from '../../components/dashboard/DashboardRecentActivity';

const Dashboard = () => {
  // Mock user data (replace with API / auth context later)
  const safetyData = {
    level: 'Beginner',
    riskScore: 'Medium',
    riskPercentage: 55,
    message:
      'You are protected from basic scams but should learn about phishing and password safety.',
  };

  const progress = {
    modulesCompleted: 3,
    totalModules: 8,
    percentage: 38,
    xpEarned: 120,
    badges: 2,
  };

  const recommendations = [
    {
      id: 1,
      title: 'Next Recommended Lesson',
      subtitle: 'Phishing Awareness',
      action: 'Start',
      path: '/learn/phishing',
    },
    {
      id: 2,
      title: 'Try Simulation',
      subtitle: 'Fake Bank Call',
      action: 'Practice',
      path: '/simulations/bank-call',
    },
  ];

  const recentActivity = [
    { id: 1, title: 'Password Security Quiz', detail: 'Score: 6/10', time: '2 hours ago' },
    { id: 2, title: 'OTP Fraud Simulation', detail: 'Completed', time: '1 day ago' },
    { id: 3, title: 'Cyber Basics Certificate', detail: 'Earned', time: '3 days ago' },
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 flex flex-col"
      style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}
    >
      {/* Premium decorative background elements - subtle and sophisticated */}
      <div className="fixed -top-96 -right-48 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl -z-10" />
      <div className="fixed -bottom-96 -left-48 w-96 h-96 rounded-full bg-blue-200/15 blur-3xl -z-10" />
      <div className="fixed top-1/2 right-0 w-80 h-80 rounded-full bg-orange-200/10 blur-3xl -z-10" />

      <AppHeader />

      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 w-full">
        <DashboardSafetySummary safetyData={safetyData} />
        <DashboardQuickActions />
        <DashboardLearningProgress progress={progress} />
        <DashboardRecommendations recommendations={recommendations} />
        <DashboardRecentActivity activities={recentActivity} />
      </main>

      <AppFooter />
    </div>
  );
};

export default Dashboard;
