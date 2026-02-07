/**
 * Mock Report Data
 * Simulates data from across the platform
 */

export const getMockReportData = () => {
  // In real app, this would aggregate from localStorage, Redux, or API
  return {
    user: {
      name: localStorage.getItem('userName') || 'Student',
      reportDate: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    },

    quiz: {
      completed: localStorage.getItem('quizCompleted') === 'true',
      riskLevel: localStorage.getItem('quizRiskLevel') || 'Medium',
      weakAreas: ['OTP handling', 'Phishing links'],
      strongAreas: ['Password security'],
    },

    simulations: {
      attempted: 2,
      completed: localStorage.getItem('simulationsCompleted') === 'true' ? 2 : 1,
      scenarios: [
        { name: 'OTP Fraud Call', status: 'completed' },
        { name: 'Phishing Email', status: 'attempted' },
      ],
    },

    learning: {
      completed: localStorage.getItem('learningCompleted') === 'true',
      modulesCompleted: 2,
      totalModules: 3,
      topics: ['OTP Safety', 'Phishing Awareness'],
    },

    certificate: {
      eligible: localStorage.getItem('quizCompleted') === 'true' &&
                localStorage.getItem('simulationsCompleted') === 'true' &&
                localStorage.getItem('learningCompleted') === 'true',
      issued: false,
    },
  };
};

export const getRiskAreas = (data) => {
  const areas = [];

  // OTP Handling
  const otpPracticed = data.simulations.scenarios.some(s => 
    s.name.includes('OTP') && s.status === 'completed'
  );
  const otpLearned = data.learning.topics.includes('OTP Safety');
  
  areas.push({
    id: 'otp',
    name: 'OTP Handling',
    status: (otpPracticed && otpLearned) ? 'well-covered' : 
            (otpPracticed || otpLearned) ? 'moderately-safe' : 'needs-attention',
  });

  // Phishing Awareness
  const phishingPracticed = data.simulations.scenarios.some(s => 
    s.name.includes('Phishing') && s.status === 'completed'
  );
  const phishingLearned = data.learning.topics.includes('Phishing Awareness');
  
  areas.push({
    id: 'phishing',
    name: 'Phishing Awareness',
    status: (phishingPracticed && phishingLearned) ? 'well-covered' : 
            (phishingPracticed || phishingLearned) ? 'moderately-safe' : 'needs-attention',
  });

  // Urgency-based Scams
  areas.push({
    id: 'urgency',
    name: 'Urgency-based Scams',
    status: data.learning.completed ? 'moderately-safe' : 'needs-attention',
  });

  // App Trust & Verification
  areas.push({
    id: 'app-trust',
    name: 'App Trust & Verification',
    status: data.quiz.completed ? 'moderately-safe' : 'needs-attention',
  });

  return areas;
};
