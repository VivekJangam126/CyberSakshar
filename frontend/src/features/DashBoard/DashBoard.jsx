import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import DashboardSafetySummary from '../../components/dashboard/DashboardSafetySummary';
import DashboardLastSafetyCheck from '../../components/dashboard/DashboardLastSafetyCheck';
import DashboardLastSimulation from '../../components/dashboard/DashboardLastSimulation';
import DashboardQuickActions from '../../components/dashboard/DashboardQuickActions';
import DashboardLearningProgress from '../../components/dashboard/DashboardLearningProgress';
import DashboardRecommendations from '../../components/dashboard/DashboardRecommendations';
import DashboardRecentActivity from '../../components/dashboard/DashboardRecentActivity';
import DashboardCertificateStatus from '../../components/dashboard/DashboardCertificateStatus';
import DashboardSafetyReport from '../../components/dashboard/DashboardSafetyReport';
import mockApi from '../../mock/mockApi';

const Dashboard = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const currentUser = mockApi.getCurrentUser();
    
    if (!currentUser) {
      navigate('/login');
      return;
    }

    // Load dashboard data
    const loadData = () => {
      const data = mockApi.getDashboardData(currentUser.id);
      setDashboardData(data);
      setLoading(false);
    };

    loadData();

    // Refresh data when window gains focus (user returns from another page)
    const handleFocus = () => {
      loadData();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [navigate]);

  if (loading || !dashboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Transform data for components
  const safetyData = {
    level: dashboardData.quiz?.safetyLevel || 'Beginner',
    riskScore: dashboardData.riskLevel === 'low' ? 'Low' :
               dashboardData.riskLevel === 'medium' ? 'Medium' : 'High',
    riskPercentage: dashboardData.riskScore,
    message: dashboardData.quiz?.completed 
      ? `You scored ${dashboardData.quiz.score}% on the safety assessment.`
      : 'Take the safety assessment to understand your risk level.',
  };

  const progress = {
    modulesCompleted: dashboardData.learning.completed,
    totalModules: dashboardData.learning.total,
    percentage: Math.round((dashboardData.learning.completed / dashboardData.learning.total) * 100),
    xpEarned: dashboardData.learning.completed * 50,
    badges: dashboardData.simulations.completed,
  };

  const recommendations = [];
  if (!dashboardData.quiz?.completed) {
    recommendations.push({
      id: 1,
      title: 'Safety Assessment',
      subtitle: 'Identify your risk areas',
      action: 'Start',
      path: '/quiz/intro',
    });
  }
  if (dashboardData.simulations.completed < 2) {
    recommendations.push({
      id: 2,
      title: 'Practice Simulation',
      subtitle: 'Build real-world skills',
      action: 'Practice',
      path: '/simulations',
    });
  }
  if (dashboardData.learning.completed < 2) {
    recommendations.push({
      id: 3,
      title: 'Learning Module',
      subtitle: 'Strengthen your knowledge',
      action: 'Learn',
      path: '/learning',
    });
  }

  const recentActivity = dashboardData.activity
    .filter((act, index, self) => 
      // Remove duplicates by ID
      index === self.findIndex(a => a.id === act.id)
    )
    .map(act => ({
      id: act.id,
      title: act.title,
      detail: act.type === 'quiz' ? `Score: ${dashboardData.quiz?.score || 0}%` : 'Completed',
      time: new Date(act.timestamp).toLocaleDateString(),
    }));

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
        <DashboardSafetyReport />
        <DashboardCertificateStatus />
        <DashboardLastSimulation />
        <DashboardLastSafetyCheck level="Intermediate" risk="Medium" date="2 hours ago" />
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
