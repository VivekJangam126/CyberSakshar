// Initial demo data for CyberSakshar platform
// This data is loaded on first app initialization

export const DEMO_USERS = [
  {
    id: 'user_1',
    email: 'student@demo.com',
    password: 'student123',
    name: 'Priya Sharma',
    role: 'student',
    avatar: null,
    createdAt: '2024-01-15T10:00:00Z',
    preferences: {
      theme: 'light',
      language: 'en',
      notifications: true,
    },
  },
  {
    id: 'user_2',
    email: 'citizen@demo.com',
    password: 'citizen123',
    name: 'Rajesh Kumar',
    role: 'citizen',
    avatar: null,
    createdAt: '2024-02-01T10:00:00Z',
    preferences: {
      theme: 'light',
      language: 'en',
      notifications: true,
    },
  },
  {
    id: 'user_3',
    email: 'teacher@demo.com',
    password: 'teacher123',
    name: 'Anjali Verma',
    role: 'teacher',
    avatar: null,
    createdAt: '2023-12-10T10:00:00Z',
    preferences: {
      theme: 'dark',
      language: 'hi',
      notifications: true,
    },
  },
];

export const DEMO_QUIZ_RESULTS = {
  user_1: {
    completed: true,
    completedAt: '2024-02-05T14:30:00Z',
    score: 75,
    totalQuestions: 10,
    correctAnswers: 7,
    riskLevel: 'medium',
    riskScore: 45,
    safetyLevel: 'Intermediate',
    weakAreas: ['phishing', 'social_engineering'],
    strongAreas: ['password_security'],
    answers: [],
    highRiskCount: 2,
    mediumRiskCount: 1,
    lowRiskCount: 7,
  },
  user_2: {
    completed: true,
    completedAt: '2024-02-06T09:15:00Z',
    score: 60,
    totalQuestions: 10,
    correctAnswers: 6,
    riskLevel: 'high',
    riskScore: 65,
    safetyLevel: 'Beginner',
    weakAreas: ['otp_security', 'phishing', 'upi_fraud'],
    strongAreas: [],
    answers: [],
    highRiskCount: 4,
    mediumRiskCount: 0,
    lowRiskCount: 6,
  },
  user_3: {
    completed: true,
    completedAt: '2024-01-20T16:45:00Z',
    score: 90,
    totalQuestions: 10,
    correctAnswers: 9,
    riskLevel: 'low',
    riskScore: 20,
    safetyLevel: 'Advanced',
    weakAreas: [],
    strongAreas: ['phishing', 'password_security', 'otp_security'],
    answers: [],
    highRiskCount: 0,
    mediumRiskCount: 1,
    lowRiskCount: 9,
  },
};

export const DEMO_SIMULATIONS = {
  user_1: {
    completed: ['phishing_email', 'otp_call'],
    inProgress: null,
    results: {
      phishing_email: {
        completedAt: '2024-02-06T10:00:00Z',
        score: 80,
        correctDecisions: 4,
        totalDecisions: 5,
        timeTaken: 180,
      },
      otp_call: {
        completedAt: '2024-02-07T11:30:00Z',
        score: 70,
        correctDecisions: 3,
        totalDecisions: 5,
        timeTaken: 240,
      },
    },
  },
  user_2: {
    completed: ['phishing_email'],
    inProgress: null,
    results: {
      phishing_email: {
        completedAt: '2024-02-07T14:20:00Z',
        score: 60,
        correctDecisions: 3,
        totalDecisions: 5,
        timeTaken: 300,
      },
    },
  },
  user_3: {
    completed: ['phishing_email', 'otp_call', 'fake_app'],
    inProgress: null,
    results: {
      phishing_email: {
        completedAt: '2024-01-25T09:00:00Z',
        score: 100,
        correctDecisions: 5,
        totalDecisions: 5,
        timeTaken: 150,
      },
      otp_call: {
        completedAt: '2024-01-26T10:00:00Z',
        score: 90,
        correctDecisions: 4,
        totalDecisions: 5,
        timeTaken: 160,
      },
      fake_app: {
        completedAt: '2024-01-27T11:00:00Z',
        score: 85,
        correctDecisions: 4,
        totalDecisions: 5,
        timeTaken: 200,
      },
    },
  },
};

export const DEMO_LEARNING = {
  user_1: {
    modulesCompleted: ['otp_safety', 'phishing_links'],
    modulesInProgress: ['urgency_scam'],
    progress: {
      otp_safety: {
        completed: true,
        completedAt: '2024-02-04T15:00:00Z',
        stepsCompleted: 5,
        totalSteps: 5,
      },
      phishing_links: {
        completed: true,
        completedAt: '2024-02-05T16:00:00Z',
        stepsCompleted: 6,
        totalSteps: 6,
      },
      urgency_scam: {
        completed: false,
        completedAt: null,
        stepsCompleted: 2,
        totalSteps: 5,
      },
    },
  },
  user_2: {
    modulesCompleted: ['otp_safety'],
    modulesInProgress: null,
    progress: {
      otp_safety: {
        completed: true,
        completedAt: '2024-02-06T12:00:00Z',
        stepsCompleted: 5,
        totalSteps: 5,
      },
    },
  },
  user_3: {
    modulesCompleted: ['otp_safety', 'phishing_links', 'urgency_scam'],
    modulesInProgress: null,
    progress: {
      otp_safety: {
        completed: true,
        completedAt: '2024-01-15T10:00:00Z',
        stepsCompleted: 5,
        totalSteps: 5,
      },
      phishing_links: {
        completed: true,
        completedAt: '2024-01-16T11:00:00Z',
        stepsCompleted: 6,
        totalSteps: 6,
      },
      urgency_scam: {
        completed: true,
        completedAt: '2024-01-17T12:00:00Z',
        stepsCompleted: 5,
        totalSteps: 5,
      },
    },
  },
};

export const DEMO_CERTIFICATES = {
  user_1: {
    eligible: false,
    issued: false,
    certificateId: null,
    issuedAt: null,
    requirements: {
      quizCompleted: true,
      simulationsCompleted: 2,
      learningCompleted: 2,
      minimumScore: 75,
    },
  },
  user_2: {
    eligible: false,
    issued: false,
    certificateId: null,
    issuedAt: null,
    requirements: {
      quizCompleted: true,
      simulationsCompleted: 1,
      learningCompleted: 1,
      minimumScore: 60,
    },
  },
  user_3: {
    eligible: true,
    issued: true,
    certificateId: 'CERT-2024-001',
    issuedAt: '2024-01-28T10:00:00Z',
    requirements: {
      quizCompleted: true,
      simulationsCompleted: 3,
      learningCompleted: 3,
      minimumScore: 90,
    },
  },
};

export const DEMO_ACTIVITY = {
  user_1: [
    {
      id: 'act_1',
      type: 'simulation',
      title: 'Completed OTP Call Simulation',
      timestamp: '2024-02-07T11:30:00Z',
      icon: '🎭',
    },
    {
      id: 'act_2',
      type: 'simulation',
      title: 'Completed Phishing Email Simulation',
      timestamp: '2024-02-06T10:00:00Z',
      icon: '🎭',
    },
    {
      id: 'act_3',
      type: 'learning',
      title: 'Completed Phishing Links Module',
      timestamp: '2024-02-05T16:00:00Z',
      icon: '📚',
    },
    {
      id: 'act_4',
      type: 'quiz',
      title: 'Completed Safety Assessment',
      timestamp: '2024-02-05T14:30:00Z',
      icon: '✅',
    },
  ],
  user_2: [
    {
      id: 'act_5',
      type: 'simulation',
      title: 'Completed Phishing Email Simulation',
      timestamp: '2024-02-07T14:20:00Z',
      icon: '🎭',
    },
    {
      id: 'act_6',
      type: 'quiz',
      title: 'Completed Safety Assessment',
      timestamp: '2024-02-06T09:15:00Z',
      icon: '✅',
    },
    {
      id: 'act_7',
      type: 'learning',
      title: 'Completed OTP Safety Module',
      timestamp: '2024-02-06T12:00:00Z',
      icon: '📚',
    },
  ],
  user_3: [
    {
      id: 'act_8',
      type: 'certificate',
      title: 'Certificate Issued',
      timestamp: '2024-01-28T10:00:00Z',
      icon: '🏆',
    },
    {
      id: 'act_9',
      type: 'simulation',
      title: 'Completed Fake App Simulation',
      timestamp: '2024-01-27T11:00:00Z',
      icon: '🎭',
    },
    {
      id: 'act_10',
      type: 'learning',
      title: 'Completed Urgency Scam Module',
      timestamp: '2024-01-17T12:00:00Z',
      icon: '📚',
    },
  ],
};

export const INITIAL_DB_STATE = {
  users: DEMO_USERS,
  quizResults: DEMO_QUIZ_RESULTS,
  simulations: DEMO_SIMULATIONS,
  learning: DEMO_LEARNING,
  certificates: DEMO_CERTIFICATES,
  activity: DEMO_ACTIVITY,
  version: '1.0.0',
  initializedAt: new Date().toISOString(),
};
