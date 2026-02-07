// Safety report mock API
// Generates comprehensive cyber safety reports

import db from './db.js';

export const reportMock = {
  generateSafetyReport(userId) {
    const user = db.getUserById(userId);
    const quiz = db.getQuizResult(userId);
    const simulations = db.getSimulations(userId);
    const learning = db.getLearningProgress(userId);
    const certificate = db.getCertificate(userId);

    if (!user) {
      return null;
    }

    // Calculate readiness score
    const readinessScore = this.calculateReadinessScore(quiz, simulations, learning);

    // Generate risk areas
    const riskAreas = this.generateRiskAreas(quiz, simulations);

    // Generate learning coverage
    const learningCoverage = this.generateLearningCoverage(learning);

    // Generate practice summary
    const practiceSummary = this.generatePracticeSummary(simulations);

    // Generate recommendations
    const recommendations = this.generateRecommendations(quiz, simulations, learning);

    // Generate next steps
    const nextSteps = this.generateNextSteps(quiz, simulations, learning, certificate);

    return {
      userId: user.id,
      userName: user.name,
      generatedAt: new Date().toISOString(),
      readinessScore,
      riskLevel: quiz?.riskLevel || 'unknown',
      riskScore: quiz?.riskScore || 0,
      overallProgress: this.calculateOverallProgress(quiz, simulations, learning, certificate),
      riskAreas,
      learningCoverage,
      practiceSummary,
      recommendations,
      nextSteps,
      certificate: {
        eligible: certificate?.eligible || false,
        issued: certificate?.issued || false,
        certificateId: certificate?.certificateId || null,
      },
    };
  },

  calculateReadinessScore(quiz, simulations, learning) {
    let score = 0;
    let maxScore = 100;

    // Quiz contribution (40%)
    if (quiz?.completed) {
      score += (quiz.score / 100) * 40;
    }

    // Simulations contribution (30%)
    const simCount = simulations.completed.length;
    const avgSimScore = simCount > 0
      ? simulations.completed.reduce((sum, simId) => {
          return sum + (simulations.results[simId]?.score || 0);
        }, 0) / simCount
      : 0;
    score += (avgSimScore / 100) * 30;

    // Learning contribution (30%)
    const learningCount = learning.modulesCompleted.length;
    const learningScore = Math.min((learningCount / 3) * 100, 100);
    score += (learningScore / 100) * 30;

    return Math.round(score);
  },

  calculateOverallProgress(quiz, simulations, learning, certificate) {
    const totalTasks = 10;
    let completedTasks = 0;

    if (quiz?.completed) completedTasks++;
    completedTasks += Math.min(simulations.completed.length, 3);
    completedTasks += Math.min(learning.modulesCompleted.length, 3);
    if (certificate?.issued) completedTasks++;

    return Math.round((completedTasks / totalTasks) * 100);
  },

  generateRiskAreas(quiz, simulations) {
    const areas = [];

    if (quiz?.weakAreas) {
      quiz.weakAreas.forEach(area => {
        const areaMap = {
          phishing: {
            name: 'Phishing Detection',
            level: 'high',
            description: 'Difficulty identifying fraudulent emails and links',
          },
          otp_security: {
            name: 'OTP Security',
            level: 'high',
            description: 'Vulnerable to OTP sharing scams',
          },
          social_engineering: {
            name: 'Social Engineering',
            level: 'medium',
            description: 'Susceptible to manipulation tactics',
          },
          upi_fraud: {
            name: 'UPI Fraud',
            level: 'high',
            description: 'Risk of payment fraud',
          },
          password_security: {
            name: 'Password Security',
            level: 'medium',
            description: 'Weak password practices',
          },
        };

        if (areaMap[area]) {
          areas.push(areaMap[area]);
        }
      });
    }

    // Add areas from poor simulation performance
    simulations.completed.forEach(simId => {
      const result = simulations.results[simId];
      if (result && result.score < 70) {
        const simMap = {
          phishing_email: {
            name: 'Email Phishing',
            level: 'high',
            description: 'Poor performance in phishing simulation',
          },
          otp_call: {
            name: 'Phone Scams',
            level: 'high',
            description: 'Vulnerable to phone-based attacks',
          },
        };

        if (simMap[simId] && !areas.find(a => a.name === simMap[simId].name)) {
          areas.push(simMap[simId]);
        }
      }
    });

    return areas;
  },

  generateLearningCoverage(learning) {
    const modules = [
      { id: 'otp_safety', name: 'OTP Safety', category: 'Authentication' },
      { id: 'phishing_links', name: 'Phishing Links', category: 'Email Security' },
      { id: 'urgency_scam', name: 'Urgency Scams', category: 'Social Engineering' },
      { id: 'password_security', name: 'Password Security', category: 'Authentication' },
      { id: 'social_engineering', name: 'Social Engineering', category: 'Awareness' },
    ];

    return modules.map(module => {
      const progress = learning.progress[module.id];
      return {
        ...module,
        completed: learning.modulesCompleted.includes(module.id),
        progress: progress ? Math.round((progress.stepsCompleted / progress.totalSteps) * 100) : 0,
      };
    });
  },

  generatePracticeSummary(simulations) {
    const simulationList = [
      { id: 'phishing_email', name: 'Phishing Email', type: 'Email Security' },
      { id: 'otp_call', name: 'OTP Call', type: 'Phone Security' },
      { id: 'fake_app', name: 'Fake App', type: 'App Security' },
      { id: 'upi_fraud', name: 'UPI Fraud', type: 'Payment Security' },
      { id: 'social_media_hack', name: 'Social Media Hack', type: 'Social Media' },
    ];

    return simulationList.map(sim => {
      const result = simulations.results[sim.id];
      return {
        ...sim,
        completed: simulations.completed.includes(sim.id),
        score: result?.score || 0,
        attempts: result ? 1 : 0,
      };
    });
  },

  generateRecommendations(quiz, simulations, learning) {
    const recommendations = [];

    // Based on quiz weak areas
    if (quiz?.weakAreas?.includes('phishing')) {
      recommendations.push({
        priority: 'high',
        title: 'Complete Phishing Links Module',
        description: 'Learn to identify and avoid phishing attacks',
        action: 'learning',
        actionId: 'phishing_links',
      });
    }

    if (quiz?.weakAreas?.includes('otp_security')) {
      recommendations.push({
        priority: 'high',
        title: 'Practice OTP Call Simulation',
        description: 'Build skills to handle OTP scam calls',
        action: 'simulation',
        actionId: 'otp_call',
      });
    }

    // Based on incomplete simulations
    if (!simulations.completed.includes('phishing_email')) {
      recommendations.push({
        priority: 'medium',
        title: 'Try Phishing Email Simulation',
        description: 'Practice identifying fraudulent emails',
        action: 'simulation',
        actionId: 'phishing_email',
      });
    }

    // Based on incomplete learning
    if (!learning.modulesCompleted.includes('urgency_scam')) {
      recommendations.push({
        priority: 'medium',
        title: 'Learn About Urgency Scams',
        description: 'Understand psychological manipulation tactics',
        action: 'learning',
        actionId: 'urgency_scam',
      });
    }

    // General recommendations
    if (recommendations.length < 3) {
      recommendations.push({
        priority: 'low',
        title: 'Review All Learning Modules',
        description: 'Strengthen your overall cyber safety knowledge',
        action: 'learning',
        actionId: null,
      });
    }

    return recommendations.slice(0, 5);
  },

  generateNextSteps(quiz, simulations, learning, certificate) {
    const steps = [];

    // Check what's missing
    if (!quiz?.completed) {
      steps.push({
        title: 'Complete Safety Assessment',
        description: 'Take the quiz to identify your risk areas',
        link: '/quiz',
        icon: '✅',
      });
    }

    if (simulations.completed.length < 2) {
      steps.push({
        title: 'Practice More Simulations',
        description: `Complete ${2 - simulations.completed.length} more simulation(s)`,
        link: '/simulations',
        icon: '🎭',
      });
    }

    if (learning.modulesCompleted.length < 2) {
      steps.push({
        title: 'Complete Learning Modules',
        description: `Finish ${2 - learning.modulesCompleted.length} more module(s)`,
        link: '/learning',
        icon: '📚',
      });
    }

    if (certificate?.eligible && !certificate?.issued) {
      steps.push({
        title: 'Get Your Certificate',
        description: 'You are eligible! Download your certificate now',
        link: '/certificate',
        icon: '🏆',
      });
    }

    if (steps.length === 0) {
      steps.push({
        title: 'Keep Practicing',
        description: 'Continue improving your cyber safety skills',
        link: '/dashboard',
        icon: '🎯',
      });
    }

    return steps;
  },
};
