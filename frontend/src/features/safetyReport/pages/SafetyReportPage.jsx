import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMockReportData } from '../data/mockReportData';
import { generateReport } from '../utils/reportGenerator';
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
    // Generate report from mock data
    const data = getMockReportData();
    const report = generateReport(data);
    
    setReportData({
      user: data.user,
      data: data,
      report: report,
    });
  }, []);

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
