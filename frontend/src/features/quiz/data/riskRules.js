// Risk assessment rules and scoring logic (mock/static for now)

export const riskLevels = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};

export const safetyLevels = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
};

// Calculate risk score based on answers
export const calculateRiskScore = (answers) => {
  let highRiskCount = 0;
  let mediumRiskCount = 0;
  let lowRiskCount = 0;

  answers.forEach(answer => {
    if (answer.riskLevel === 'high') highRiskCount++;
    else if (answer.riskLevel === 'medium') mediumRiskCount++;
    else if (answer.riskLevel === 'low') lowRiskCount++;
  });

  const totalQuestions = answers.length;
  const riskScore = ((highRiskCount * 3 + mediumRiskCount * 2 + lowRiskCount * 1) / (totalQuestions * 3)) * 100;

  return {
    riskScore: Math.round(riskScore),
    highRiskCount,
    mediumRiskCount,
    lowRiskCount,
    totalQuestions
  };
};

// Determine overall risk level
export const determineRiskLevel = (riskScore) => {
  if (riskScore <= 35) return riskLevels.LOW;
  if (riskScore <= 65) return riskLevels.MEDIUM;
  return riskLevels.HIGH;
};

// Determine safety level (awareness level)
export const determineSafetyLevel = (answers) => {
  const lowRiskAnswers = answers.filter(a => a.riskLevel === 'low').length;
  const percentage = (lowRiskAnswers / answers.length) * 100;

  if (percentage >= 75) return safetyLevels.ADVANCED;
  if (percentage >= 50) return safetyLevels.INTERMEDIATE;
  return safetyLevels.BEGINNER;
};

// Get risk level details
export const getRiskLevelDetails = (riskLevel) => {
  const details = {
    low: {
      title: 'Low Risk',
      color: 'emerald',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      textColor: 'text-emerald-700',
      message: 'You have strong cyber safety awareness! You make safe choices and understand digital threats well.',
      icon: '🛡️'
    },
    medium: {
      title: 'Medium Risk',
      color: 'amber',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-700',
      message: 'You have good basic awareness but could improve in some areas. A few more precautions will make you much safer.',
      icon: '⚠️'
    },
    high: {
      title: 'High Risk',
      color: 'rose',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      textColor: 'text-rose-700',
      message: 'You may be vulnerable to common cyber threats. Learning key safety practices will significantly improve your protection.',
      icon: '🚨'
    }
  };

  return details[riskLevel] || details.medium;
};

// Get safety level details
export const getSafetyLevelDetails = (safetyLevel) => {
  const details = {
    beginner: {
      title: 'Beginner',
      description: 'Building Foundation',
      message: 'You are starting your cyber safety journey. Focus on learning basic protection habits.',
      color: 'orange',
      progress: 25
    },
    intermediate: {
      title: 'Intermediate',
      description: 'Growing Awareness',
      message: 'You understand many cyber threats and make mostly safe choices. Keep learning!',
      color: 'amber',
      progress: 60
    },
    advanced: {
      title: 'Advanced',
      description: 'Strong Protection',
      message: 'You have excellent cyber safety awareness and consistently make secure choices.',
      color: 'emerald',
      progress: 90
    }
  };

  return details[safetyLevel] || details.beginner;
};

// Get personalized recommendations based on weak areas
export const getRecommendations = (answers, questions) => {
  const weakCategories = {};
  
  answers.forEach((answer, index) => {
    if (answer.riskLevel === 'high' || answer.riskLevel === 'medium') {
      const category = questions[index].category;
      weakCategories[category] = (weakCategories[category] || 0) + 1;
    }
  });

  const recommendations = {
    phishing: {
      title: 'Phishing Awareness',
      description: 'Learn to identify and avoid phishing scams',
      lessons: ['Spotting Fake Messages', 'Email Safety Basics'],
      simulations: ['Phishing Email Challenge']
    },
    'network-security': {
      title: 'Network Safety',
      description: 'Secure your internet connections',
      lessons: ['Public WiFi Dangers', 'VPN Basics'],
      simulations: ['Safe Browsing Scenario']
    },
    'device-security': {
      title: 'Device Protection',
      description: 'Keep your devices secure and updated',
      lessons: ['Update Importance', 'Device Security Settings'],
      simulations: ['Device Setup Challenge']
    },
    'password-security': {
      title: 'Password Safety',
      description: 'Create and manage strong passwords',
      lessons: ['Strong Password Creation', 'Password Manager Guide'],
      simulations: ['Password Strength Test']
    },
    'social-engineering': {
      title: 'Social Engineering Defense',
      description: 'Recognize manipulation tactics',
      lessons: ['Common Scam Tactics', 'Verification Methods'],
      simulations: ['Scam Call Scenario']
    },
    'online-safety': {
      title: 'Online Shopping Safety',
      description: 'Shop securely on the internet',
      lessons: ['Secure Website Identification', 'Safe Payment Methods'],
      simulations: ['Online Shopping Challenge']
    }
  };

  // Return top 3 recommendations based on weak areas
  const sortedCategories = Object.entries(weakCategories)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([category]) => recommendations[category]);

  return sortedCategories.length > 0 ? sortedCategories : [
    recommendations.phishing,
    recommendations['password-security'],
    recommendations['online-safety']
  ];
};
