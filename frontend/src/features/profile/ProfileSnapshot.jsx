const ProfileSnapshot = ({ dashboardData }) => {
  const { quiz, simulations, learning, certificate, riskLevel, riskScore } = dashboardData;

  // Determine safety level based on quiz score
  const getSafetyLevel = () => {
    if (!quiz?.completed) return 'Not Assessed';
    if (quiz.score >= 80) return 'Advanced';
    if (quiz.score >= 60) return 'Intermediate';
    return 'Beginner';
  };

  // Get risk level display
  const getRiskDisplay = () => {
    if (!quiz?.completed) return { level: 'Unknown', color: 'gray' };
    
    if (riskLevel === 'low') return { level: 'Low Risk', color: 'green' };
    if (riskLevel === 'medium') return { level: 'Medium Risk', color: 'amber' };
    return { level: 'High Risk', color: 'red' };
  };

  const safetyLevel = getSafetyLevel();
  const riskDisplay = getRiskDisplay();

  // Certificate status
  const getCertificateStatus = () => {
    if (certificate.issued) return { text: 'Issued', color: 'green' };
    if (certificate.eligible) return { text: 'Eligible', color: 'amber' };
    return { text: 'Locked', color: 'gray' };
  };

  const certStatus = getCertificateStatus();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transition-colors">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white font-fraunces mb-4">
        Cyber Safety Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Safety Level */}
        <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Safety Level</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{safetyLevel}</p>
        </div>

        {/* Risk Level */}
        <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Risk Level</p>
          <p className={`text-lg font-semibold text-${riskDisplay.color}-600 dark:text-${riskDisplay.color}-400`}>
            {riskDisplay.level}
          </p>
        </div>

        {/* Quiz Status */}
        <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Safety Assessment</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {quiz?.completed ? `Completed (${quiz.score}%)` : 'Not Completed'}
          </p>
        </div>

        {/* Simulations */}
        <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Simulations Completed</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {simulations.completed} / {simulations.total}
          </p>
        </div>

        {/* Learning Modules */}
        <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Learning Modules</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {learning.completed} / {learning.total}
          </p>
        </div>

        {/* Certificate Status */}
        <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Certificate Status</p>
          <p className={`text-lg font-semibold text-${certStatus.color}-600 dark:text-${certStatus.color}-400`}>
            {certStatus.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSnapshot;
