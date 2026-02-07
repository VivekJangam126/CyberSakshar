// localStorage-backed database engine
// Handles initialization, persistence, and CRUD operations

import { INITIAL_DB_STATE } from './seed.js';

const DB_KEY = 'CYBERSAKSHAR_DB';

class MockDatabase {
  constructor() {
    this.data = null;
    this.activityCounter = 0;
    this.initialize();
  }

  // Initialize database from seed or localStorage
  initialize() {
    try {
      const stored = localStorage.getItem(DB_KEY);
      
      if (stored) {
        this.data = JSON.parse(stored);
        console.log('[MockDB] Loaded from localStorage');
      } else {
        this.data = { ...INITIAL_DB_STATE };
        this.persist();
        console.log('[MockDB] Initialized from seed data');
      }
    } catch (error) {
      console.error('[MockDB] Initialization error:', error);
      this.data = { ...INITIAL_DB_STATE };
      this.persist();
    }
  }

  // Persist current state to localStorage
  persist() {
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(this.data));
    } catch (error) {
      console.error('[MockDB] Persist error:', error);
    }
  }

  // Get all users
  getUsers() {
    return [...this.data.users];
  }

  // Get user by ID
  getUserById(userId) {
    return this.data.users.find(u => u.id === userId) || null;
  }

  // Get user by email
  getUserByEmail(email) {
    return this.data.users.find(u => u.email === email) || null;
  }

  // Authenticate user
  authenticateUser(email, password) {
    const user = this.getUserByEmail(email);
    if (user && user.password === password) {
      // Return user without password
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }

  // Quiz operations
  getQuizResult(userId) {
    return this.data.quizResults[userId] || null;
  }

  saveQuizResult(userId, result) {
    this.data.quizResults[userId] = {
      ...result,
      completedAt: new Date().toISOString(),
    };
    this.persist();
    return this.data.quizResults[userId];
  }

  // Simulation operations
  getSimulations(userId) {
    return this.data.simulations[userId] || {
      completed: [],
      inProgress: null,
      results: {},
    };
  }

  completeSimulation(userId, simulationId, result) {
    if (!this.data.simulations[userId]) {
      this.data.simulations[userId] = {
        completed: [],
        inProgress: null,
        results: {},
      };
    }

    const userSims = this.data.simulations[userId];
    
    if (!userSims.completed.includes(simulationId)) {
      userSims.completed.push(simulationId);
    }
    
    userSims.results[simulationId] = {
      ...result,
      completedAt: new Date().toISOString(),
    };
    
    userSims.inProgress = null;

    this.persist();
    return userSims;
  }

  setSimulationInProgress(userId, simulationId) {
    if (!this.data.simulations[userId]) {
      this.data.simulations[userId] = {
        completed: [],
        inProgress: null,
        results: {},
      };
    }

    this.data.simulations[userId].inProgress = simulationId;
    this.persist();
  }

  // Learning operations
  getLearningProgress(userId) {
    return this.data.learning[userId] || {
      modulesCompleted: [],
      modulesInProgress: null,
      progress: {},
    };
  }

  updateLearningProgress(userId, moduleId, stepData) {
    if (!this.data.learning[userId]) {
      this.data.learning[userId] = {
        modulesCompleted: [],
        modulesInProgress: null,
        progress: {},
      };
    }

    const userLearning = this.data.learning[userId];
    
    if (!userLearning.progress[moduleId]) {
      userLearning.progress[moduleId] = {
        completed: false,
        completedAt: null,
        stepsCompleted: 0,
        totalSteps: stepData.totalSteps || 5,
      };
    }

    userLearning.progress[moduleId] = {
      ...userLearning.progress[moduleId],
      ...stepData,
    };

    if (stepData.completed) {
      userLearning.progress[moduleId].completedAt = new Date().toISOString();
      
      if (!userLearning.modulesCompleted.includes(moduleId)) {
        userLearning.modulesCompleted.push(moduleId);
      }
      
      userLearning.modulesInProgress = null;
    } else {
      userLearning.modulesInProgress = moduleId;
    }

    this.persist();
    return userLearning;
  }

  // Certificate operations
  getCertificate(userId) {
    return this.data.certificates[userId] || {
      eligible: false,
      issued: false,
      certificateId: null,
      issuedAt: null,
      requirements: {},
    };
  }

  issueCertificate(userId) {
    if (!this.data.certificates[userId]) {
      this.data.certificates[userId] = {
        eligible: false,
        issued: false,
        certificateId: null,
        issuedAt: null,
        requirements: {},
      };
    }

    const cert = this.data.certificates[userId];
    cert.issued = true;
    cert.certificateId = `CERT-${Date.now()}-${userId}`;
    cert.issuedAt = new Date().toISOString();

    this.persist();
    return cert;
  }

  updateCertificateEligibility(userId, eligible, requirements) {
    if (!this.data.certificates[userId]) {
      this.data.certificates[userId] = {
        eligible: false,
        issued: false,
        certificateId: null,
        issuedAt: null,
        requirements: {},
      };
    }

    this.data.certificates[userId].eligible = eligible;
    this.data.certificates[userId].requirements = requirements;

    this.persist();
    return this.data.certificates[userId];
  }

  // Activity operations
  getActivity(userId) {
    const activities = this.data.activity[userId] || [];
    // Remove any duplicates by ID
    const uniqueActivities = activities.filter((act, index, self) =>
      index === self.findIndex(a => a.id === act.id)
    );
    return uniqueActivities;
  }

  addActivity(userId, activity) {
    if (!this.data.activity[userId]) {
      this.data.activity[userId] = [];
    }

    // Use counter to ensure unique IDs even if called rapidly
    this.activityCounter++;
    const newActivity = {
      ...activity,
      id: `act_${Date.now()}_${this.activityCounter}`,
      timestamp: new Date().toISOString(),
    };

    this.data.activity[userId].unshift(newActivity);

    // Keep only last 20 activities
    if (this.data.activity[userId].length > 20) {
      this.data.activity[userId] = this.data.activity[userId].slice(0, 20);
    }

    this.persist();
    return newActivity;
  }

  // Reset database (dev utility)
  reset() {
    this.data = { ...INITIAL_DB_STATE };
    this.persist();
    console.log('[MockDB] Database reset to initial state');
  }

  // Reset user progress only (keep account intact)
  resetUserProgress(userId) {
    // Clear quiz results
    delete this.data.quizResults[userId];

    // Clear simulations
    this.data.simulations[userId] = {
      completed: [],
      inProgress: null,
      results: {},
    };

    // Clear learning progress
    this.data.learning[userId] = {
      modulesCompleted: [],
      modulesInProgress: null,
      progress: {},
    };

    // Clear certificate
    this.data.certificates[userId] = {
      eligible: false,
      issued: false,
      certificateId: null,
      issuedAt: null,
      requirements: {},
    };

    // Clear activity
    this.data.activity[userId] = [];

    this.persist();
    console.log(`[MockDB] Progress reset for user ${userId}`);

    return {
      success: true,
      message: 'User progress has been reset',
    };
  }

  // Export data (for debugging)
  export() {
    return JSON.parse(JSON.stringify(this.data));
  }
}

// Singleton instance
const db = new MockDatabase();

export default db;
