// Mock API - ONLY entry point for UI components
// This is the public interface that components should use

import { authMock } from './auth.mock.js';
import { progressMock } from './progress.mock.js';
import { reportMock } from './report.mock.js';
import db from './db.js';

// ===== AUTHENTICATION =====

export const login = (email, password) => {
  return authMock.login(email, password);
};

export const logout = () => {
  return authMock.logout();
};

export const getCurrentUser = () => {
  return authMock.getCurrentUser();
};

export const isAuthenticated = () => {
  return authMock.isAuthenticated();
};

// ===== DASHBOARD =====

export const getDashboardData = (userId) => {
  return progressMock.getDashboardData(userId);
};

export const getRecentActivity = (userId, limit = 10) => {
  return progressMock.getRecentActivity(userId, limit);
};

// ===== QUIZ =====

export const getQuizResult = (userId) => {
  return progressMock.getQuizResult(userId);
};

export const saveQuizResult = (userId, resultData) => {
  return progressMock.saveQuizResult(userId, resultData);
};

// ===== SIMULATIONS =====

export const getSimulations = (userId) => {
  return progressMock.getSimulations(userId);
};

export const getSimulationResult = (userId, simulationId) => {
  return progressMock.getSimulationResult(userId, simulationId);
};

export const startSimulation = (userId, simulationId) => {
  return progressMock.startSimulation(userId, simulationId);
};

export const completeSimulation = (userId, simulationId, resultData) => {
  return progressMock.completeSimulation(userId, simulationId, resultData);
};

export const getLastSimulation = (userId) => {
  const sims = progressMock.getSimulations(userId);
  if (sims.completed.length === 0) return null;

  const lastSimId = sims.completed[sims.completed.length - 1];
  return {
    id: lastSimId,
    result: sims.results[lastSimId],
  };
};

// ===== LEARNING =====

export const getLearningProgress = (userId) => {
  return progressMock.getLearningProgress(userId);
};

export const getModuleProgress = (userId, moduleId) => {
  return progressMock.getModuleProgress(userId, moduleId);
};

export const updateModuleProgress = (userId, moduleId, stepData) => {
  return progressMock.updateModuleProgress(userId, moduleId, stepData);
};

export const completeModule = (userId, moduleId, totalSteps) => {
  return progressMock.completeModule(userId, moduleId, totalSteps);
};

// ===== CERTIFICATE =====

export const getCertificateStatus = (userId) => {
  return progressMock.getCertificateStatus(userId);
};

export const isCertificateEligible = (userId) => {
  return progressMock.isCertificateEligible(userId);
};

export const issueCertificate = (userId) => {
  return progressMock.issueCertificate(userId);
};

// ===== SAFETY REPORT =====

export const generateSafetyReport = (userId) => {
  return reportMock.generateSafetyReport(userId);
};

// ===== USER PROFILE =====

export const resetUserProgress = (userId) => {
  return progressMock.resetUserProgress(userId);
};

// ===== DEV UTILITIES =====

export const resetDemo = () => {
  db.reset();
  authMock.logout();
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
};

export const exportData = () => {
  return db.export();
};

// ===== DEFAULT EXPORT =====

const mockApi = {
  // Auth
  login,
  logout,
  getCurrentUser,
  isAuthenticated,
  
  // Dashboard
  getDashboardData,
  getRecentActivity,
  
  // Quiz
  getQuizResult,
  saveQuizResult,
  
  // Simulations
  getSimulations,
  getSimulationResult,
  startSimulation,
  completeSimulation,
  getLastSimulation,
  
  // Learning
  getLearningProgress,
  getModuleProgress,
  updateModuleProgress,
  completeModule,
  
  // Certificate
  getCertificateStatus,
  isCertificateEligible,
  issueCertificate,
  
  // Report
  generateSafetyReport,
  
  // User Profile
  resetUserProgress,
  
  // Dev utilities
  resetDemo,
  exportData,
};

export default mockApi;
