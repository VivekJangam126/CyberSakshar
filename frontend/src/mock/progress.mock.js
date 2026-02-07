// Progress tracking mock API
// Handles quiz, simulations, learning, and certificate progress

import db from './db.js';

export const progressMock = {
  // ===== QUIZ =====
  
  getQuizResult(userId) {
    return db.getQuizResult(userId);
  },

  saveQuizResult(userId, resultData) {
    const result = db.saveQuizResult(userId, resultData);
    
    // Add activity
    db.addActivity(userId, {
      type: 'quiz',
      title: 'Completed Safety Assessment',
      icon: '✅',
    });

    // Update certificate eligibility
    this.updateCertificateEligibility(userId);

    return result;
  },

  // ===== SIMULATIONS =====

  getSimulations(userId) {
    return db.getSimulations(userId);
  },

  getSimulationResult(userId, simulationId) {
    const sims = db.getSimulations(userId);
    return sims.results[simulationId] || null;
  },

  startSimulation(userId, simulationId) {
    db.setSimulationInProgress(userId, simulationId);
    return {
      success: true,
      simulationId,
    };
  },

  completeSimulation(userId, simulationId, resultData) {
    const result = db.completeSimulation(userId, simulationId, resultData);
    
    // Add activity
    const simulationNames = {
      phishing_email: 'Phishing Email Simulation',
      otp_call: 'OTP Call Simulation',
      fake_app: 'Fake App Simulation',
      upi_fraud: 'UPI Fraud Simulation',
      social_media_hack: 'Social Media Hack Simulation',
    };

    db.addActivity(userId, {
      type: 'simulation',
      title: `Completed ${simulationNames[simulationId] || simulationId}`,
      icon: '🎭',
    });

    // Update certificate eligibility
    this.updateCertificateEligibility(userId);

    return result;
  },

  // ===== LEARNING =====

  getLearningProgress(userId) {
    return db.getLearningProgress(userId);
  },

  getModuleProgress(userId, moduleId) {
    const learning = db.getLearningProgress(userId);
    return learning.progress[moduleId] || null;
  },

  updateModuleProgress(userId, moduleId, stepData) {
    const result = db.updateLearningProgress(userId, moduleId, stepData);

    // Add activity if module completed
    if (stepData.completed) {
      const moduleNames = {
        otp_safety: 'OTP Safety Module',
        phishing_links: 'Phishing Links Module',
        urgency_scam: 'Urgency Scam Module',
        password_security: 'Password Security Module',
        social_engineering: 'Social Engineering Module',
      };

      db.addActivity(userId, {
        type: 'learning',
        title: `Completed ${moduleNames[moduleId] || moduleId}`,
        icon: '📚',
      });

      // Update certificate eligibility
      this.updateCertificateEligibility(userId);
    }

    return result;
  },

  completeModule(userId, moduleId, totalSteps) {
    return this.updateModuleProgress(userId, moduleId, {
      completed: true,
      stepsCompleted: totalSteps,
      totalSteps,
    });
  },

  // ===== CERTIFICATE =====

  getCertificateStatus(userId) {
    return db.getCertificate(userId);
  },

  isCertificateEligible(userId) {
    const quiz = db.getQuizResult(userId);
    const simulations = db.getSimulations(userId);
    const learning = db.getLearningProgress(userId);

    const requirements = {
      quizCompleted: quiz?.completed || false,
      quizScore: quiz?.score || 0,
      simulationsCompleted: simulations.completed.length,
      learningCompleted: learning.modulesCompleted.length,
      minimumScore: quiz?.score || 0,
    };

    // Eligibility criteria:
    // - Quiz completed with score >= 70
    // - At least 2 simulations completed
    // - At least 2 learning modules completed
    const eligible = 
      requirements.quizCompleted &&
      requirements.quizScore >= 70 &&
      requirements.simulationsCompleted >= 2 &&
      requirements.learningCompleted >= 2;

    return {
      eligible,
      requirements,
    };
  },

  updateCertificateEligibility(userId) {
    const { eligible, requirements } = this.isCertificateEligible(userId);
    return db.updateCertificateEligibility(userId, eligible, requirements);
  },

  issueCertificate(userId) {
    const { eligible } = this.isCertificateEligible(userId);

    if (!eligible) {
      return {
        success: false,
        error: 'User does not meet certificate requirements',
        certificate: null,
      };
    }

    const certificate = db.issueCertificate(userId);

    // Add activity
    db.addActivity(userId, {
      type: 'certificate',
      title: 'Certificate Issued',
      icon: '🏆',
    });

    return {
      success: true,
      error: null,
      certificate,
    };
  },

  // ===== ACTIVITY =====

  getRecentActivity(userId, limit = 10) {
    const activity = db.getActivity(userId);
    return activity.slice(0, limit);
  },

  // ===== DASHBOARD DATA =====

  getDashboardData(userId) {
    const quiz = db.getQuizResult(userId);
    const simulations = db.getSimulations(userId);
    const learning = db.getLearningProgress(userId);
    const certificate = db.getCertificate(userId);
    const activity = db.getActivity(userId);

    // Calculate overall progress
    const totalTasks = 10; // Quiz + 3 simulations + 3 learning modules + certificate
    let completedTasks = 0;

    if (quiz?.completed) completedTasks++;
    completedTasks += Math.min(simulations.completed.length, 3);
    completedTasks += Math.min(learning.modulesCompleted.length, 3);
    if (certificate.issued) completedTasks++;

    const overallProgress = Math.round((completedTasks / totalTasks) * 100);

    // Get last simulation
    const lastSimulation = simulations.completed.length > 0
      ? {
          id: simulations.completed[simulations.completed.length - 1],
          result: simulations.results[simulations.completed[simulations.completed.length - 1]],
        }
      : null;

    return {
      user: db.getUserById(userId),
      quiz,
      simulations: {
        completed: simulations.completed.length,
        total: 5,
        lastCompleted: lastSimulation,
      },
      learning: {
        completed: learning.modulesCompleted.length,
        total: 5,
        inProgress: learning.modulesInProgress,
      },
      certificate: {
        eligible: certificate.eligible,
        issued: certificate.issued,
        certificateId: certificate.certificateId,
      },
      activity: activity.slice(0, 5),
      overallProgress,
      riskLevel: quiz?.riskLevel || 'unknown',
      riskScore: quiz?.riskScore || 0,
    };
  },

  // ===== USER PROFILE =====

  resetUserProgress(userId) {
    return db.resetUserProgress(userId);
  },
};
