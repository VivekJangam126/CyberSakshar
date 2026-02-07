import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockApi from '../../../mock/mockApi';
import ReportHeader from '../components/ReportHeader';
import SafetyOverview from '../components/SafetyOverview';
import RiskAreas from '../components/RiskAreas';
import PracticeSummary from '../components/PracticeSummary';
import LearningCoverage from '../components/LearningCoverage';
import ReadinessInsight from '../components/ReadinessInsight';
import NextSteps from '../components/NextSteps';
import ReportDownload from '../components/ReportDownload';
import Button from '../../../components/Button';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';

const SafetyReportPage = () => {
  const navigate = useNavigate();
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const user = mockApi.getCurrentUser();
    if (!user) {
      navigate('/login');
      return;
    }

    // Generate report from mock backend
    const report = mockApi.generateSafetyReport(user.id);
    
    if (!report) {
      navigate('/dashboard');
      return;
    }

    setReportData({
      user: {
        name: report.userName,
        reportDate: new Date(report.generatedAt).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      },
      data: {
        simulations: {
          attempted: report.practiceSummary.length,
          completed: report.practiceSummary.filter(s => s.completed).length,
          scenarios: report.practiceSummary.map(s => ({
            name: s.name || s.id,
            status: s.completed ? 'completed' : 'attempted',
          })),
        },
        learning: {
          completed: report.learningCoverage.filter(l => l.completed).length === report.learningCoverage.length,
          modulesCompleted: report.learningCoverage.filter(l => l.completed).length,
          totalModules: report.learningCoverage.length,
          topics: report.learningCoverage.filter(l => l.completed).map(l => l.name),
        },
      },
      report: {
        safetyLevel: report.riskLevel === 'low' ? 'Advanced' : 
                     report.riskLevel === 'medium' ? 'Intermediate' : 'Beginner',
        riskLevel: report.riskLevel,
        riskAreas: report.riskAreas,
        insight: `Based on your performance, you have achieved a readiness score of ${report.readinessScore}%. ${
          report.readinessScore >= 80 
            ? 'You demonstrate strong cyber safety awareness and are well-prepared to handle digital threats.'
            : report.readinessScore >= 60
            ? 'You have good foundational knowledge but should continue practicing to strengthen your skills.'
            : 'Focus on completing more learning modules and simulations to improve your cyber safety readiness.'
        }`,
        nextSteps: report.nextSteps,
      },
    });
  }, [navigate]);

  if (!reportData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Generating your report...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/50 flex flex-col">
      <AppHeader />
      
      <div className="flex-1 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Report Header */}
          <ReportHeader
            userName={reportData.user.name}
            reportDate={reportData.user.reportDate}
          />

          {/* Safety Overview */}
          <SafetyOverview
            safetyLevel={reportData.report.safetyLevel}
            riskLevel={reportData.report.riskLevel}
          />

          {/* Risk Areas */}
          <RiskAreas areas={reportData.report.riskAreas} />

          {/* Practice Summary */}
          <PracticeSummary simulations={reportData.data.simulations} />

          {/* Learning Coverage */}
          <LearningCoverage learning={reportData.data.learning} />

          {/* Readiness Insight */}
          <ReadinessInsight insight={reportData.report.insight} />

          {/* Next Steps */}
          <NextSteps steps={reportData.report.nextSteps} />

          {/* Download Report */}
          <ReportDownload reportData={reportData} />

          {/* Back to Dashboard */}
          <div className="text-center mt-8">
            <Button
              onClick={() => navigate('/dashboard')}
              variant="secondary"
              className="px-8 py-3"
            >
              Return to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default SafetyReportPage;
