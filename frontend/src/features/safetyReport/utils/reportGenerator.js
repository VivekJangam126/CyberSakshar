/**
 * Report Generator
 * Generates insights and recommendations from user data
 */

import { getRiskAreas } from '../data/mockReportData';

/**
 * Determine overall safety level
 */
export const getSafetyLevel = (data) => {
  const { quiz, simulations, learning } = data;
  
  const completionCount = [
    quiz.completed,
    simulations.completed >= simulations.attempted * 0.5,
    learning.completed,
  ].filter(Boolean).length;

  if (completionCount >= 3) return 'Advanced';
  if (completionCount >= 2) return 'Intermediate';
  return 'Beginner';
};

/**
 * Determine risk level
 */
export const getRiskLevel = (data) => {
  const riskAreas = getRiskAreas(data);
  const needsAttention = riskAreas.filter(a => a.status === 'needs-attention').length;

  if (needsAttention === 0) return 'Low';
  if (needsAttention <= 2) return 'Medium';
  return 'High';
};

/**
 * Generate readiness insight text
 */
export const generateInsight = (data) => {
  const safetyLevel = getSafetyLevel(data);
  const riskLevel = getRiskLevel(data);
  const riskAreas = getRiskAreas(data);
  
  const needsAttention = riskAreas.filter(a => a.status === 'needs-attention');
  const wellCovered = riskAreas.filter(a => a.status === 'well-covered');

  let insight = '';

  // Opening statement based on safety level
  if (safetyLevel === 'Advanced') {
    insight += 'You have built strong cyber safety awareness through consistent learning and practice. ';
  } else if (safetyLevel === 'Intermediate') {
    insight += 'You are developing good cyber safety habits and awareness. ';
  } else {
    insight += 'You are beginning your cyber safety journey. ';
  }

  // Strengths
  if (wellCovered.length > 0) {
    const areas = wellCovered.map(a => a.name.toLowerCase()).join(' and ');
    insight += `You are well prepared in ${areas}. `;
  }

  // Areas for improvement
  if (needsAttention.length > 0) {
    const areas = needsAttention.map(a => a.name.toLowerCase()).join(' and ');
    insight += `However, ${areas} ${needsAttention.length === 1 ? 'remains' : 'remain'} potential risk ${needsAttention.length === 1 ? 'area' : 'areas'}. `;
  }

  // Encouraging conclusion
  if (riskLevel === 'Low') {
    insight += 'Continue practicing safe digital habits to maintain your readiness.';
  } else if (riskLevel === 'Medium') {
    insight += 'Focusing on these areas will significantly improve your overall cyber safety.';
  } else {
    insight += 'Taking time to learn and practice in these areas will help protect you from common cyber threats.';
  }

  return insight;
};

/**
 * Generate next steps recommendations
 */
export const generateNextSteps = (data) => {
  const steps = [];
  const riskAreas = getRiskAreas(data);
  const needsAttention = riskAreas.filter(a => a.status === 'needs-attention');

  // Quiz recommendation
  if (!data.quiz.completed) {
    steps.push({
      type: 'quiz',
      title: 'Take Cyber Risk Assessment',
      description: 'Understand your current awareness level',
      path: '/quiz',
      icon: '🎯',
    });
  }

  // Simulation recommendations based on risk areas
  if (needsAttention.some(a => a.id === 'otp')) {
    steps.push({
      type: 'simulation',
      title: 'Practice OTP Fraud Scenario',
      description: 'Learn to handle OTP-related scams',
      path: '/simulations',
      icon: '🎮',
    });
  }

  if (needsAttention.some(a => a.id === 'phishing')) {
    steps.push({
      type: 'simulation',
      title: 'Practice Phishing Detection',
      description: 'Identify and avoid phishing attempts',
      path: '/simulations',
      icon: '🎮',
    });
  }

  // Learning recommendations
  if (!data.learning.completed) {
    steps.push({
      type: 'learning',
      title: 'Complete Micro Learning Modules',
      description: 'Quick lessons on cyber safety',
      path: '/learning',
      icon: '💡',
    });
  }

  // Certificate recommendation
  if (data.certificate.eligible && !data.certificate.issued) {
    steps.push({
      type: 'certificate',
      title: 'Get Your Certificate',
      description: 'Download your cyber safety certificate',
      path: '/certificate',
      icon: '🎓',
    });
  }

  // General safety reminders
  steps.push({
    type: 'reminder',
    title: 'Stay Updated',
    description: 'Review safety tips regularly',
      path: '/dashboard',
    icon: '🔔',
  });

  return steps.slice(0, 5); // Limit to 5 recommendations
};

/**
 * Generate complete report
 */
export const generateReport = (data) => {
  return {
    safetyLevel: getSafetyLevel(data),
    riskLevel: getRiskLevel(data),
    riskAreas: getRiskAreas(data),
    insight: generateInsight(data),
    nextSteps: generateNextSteps(data),
  };
};
