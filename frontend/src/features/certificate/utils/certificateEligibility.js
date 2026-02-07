/**
 * Certificate Eligibility Logic
 * Mock implementation - checks completion flags only
 * NO scores, NO percentages, NO grading
 */

export const checkEligibility = () => {
  // Mock completion flags - in real app, would come from Redux/API
  const completionStatus = {
    quizCompleted: localStorage.getItem('quizCompleted') === 'true',
    simulationsCompleted: localStorage.getItem('simulationsCompleted') === 'true',
    learningCompleted: localStorage.getItem('learningCompleted') === 'true',
  };

  const eligible = 
    completionStatus.quizCompleted &&
    completionStatus.simulationsCompleted &&
    completionStatus.learningCompleted;

  return {
    eligible,
    requirements: [
      {
        id: 'quiz',
        label: 'Cyber Risk Assessment',
        completed: completionStatus.quizCompleted,
        description: 'Complete the cyber safety quiz',
      },
      {
        id: 'simulations',
        label: 'Real-World Scenarios',
        completed: completionStatus.simulationsCompleted,
        description: 'Practice with interactive simulations',
      },
      {
        id: 'learning',
        label: 'Micro Learning Modules',
        completed: completionStatus.learningCompleted,
        description: 'Complete all learning modules',
      },
    ],
  };
};

export const generateCertificateData = (userName = 'Student') => {
  const now = new Date();
  const certificateId = `CS-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
  
  return {
    userName,
    programName: 'CyberSakshar',
    certificateTitle: 'Certificate of Cyber Safety Awareness',
    completionDate: now.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    certificateId,
    issueDate: now.toISOString(),
    signatures: [
      { title: 'Founder', name: 'CyberSakshar' },
      { title: 'Co-Founder', name: 'CyberSakshar' },
    ],
  };
};
