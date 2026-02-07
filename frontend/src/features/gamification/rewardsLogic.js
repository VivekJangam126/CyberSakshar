// XP calculation logic
export const calculateLevel = (currentXP) => {
  const baseXP = 100;
  const multiplier = 1.5;
  
  let level = 1;
  let totalXPNeeded = 0;
  let xpForNextLevel = baseXP;
  
  while (totalXPNeeded + xpForNextLevel <= currentXP) {
    totalXPNeeded += xpForNextLevel;
    level++;
    xpForNextLevel = Math.floor(baseXP * Math.pow(multiplier, level - 1));
  }
  
  const xpProgress = currentXP - totalXPNeeded;
  const percentage = Math.round((xpProgress / xpForNextLevel) * 100);
  
  return {
    level,
    nextLevel: level + 1,
    xpForNextLevel,
    xpProgress,
    percentage,
  };
};

// XP rewards for different actions
export const XP_REWARDS = {
  COMPLETE_LESSON: 50,
  COMPLETE_QUIZ: 100,
  PERFECT_QUIZ: 150,
  COMPLETE_SIMULATION: 200,
  DAILY_LOGIN: 10,
  SHARE_ACHIEVEMENT: 25,
  REPORT_COMPLAINT: 75,
};

// Badge definitions
export const BADGES = {
  FIRST_LESSON: {
    id: 'first_lesson',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎓',
    requirement: 'Complete 1 lesson',
  },
  QUIZ_MASTER: {
    id: 'quiz_master',
    name: 'Quiz Master',
    description: 'Score 100% on a quiz',
    icon: '🏆',
    requirement: 'Perfect quiz score',
  },
  SIMULATION_PRO: {
    id: 'simulation_pro',
    name: 'Simulation Pro',
    description: 'Complete 5 simulations',
    icon: '🎮',
    requirement: 'Complete 5 simulations',
  },
  CYBER_GUARDIAN: {
    id: 'cyber_guardian',
    name: 'Cyber Guardian',
    description: 'Report a cybercrime',
    icon: '🛡️',
    requirement: 'Report 1 complaint',
  },
  STREAK_WARRIOR: {
    id: 'streak_warrior',
    name: 'Streak Warrior',
    description: 'Login for 7 consecutive days',
    icon: '🔥',
    requirement: '7 day streak',
  },
};

// Check if user earned a badge
export const checkBadgeEligibility = (userStats, badgeId) => {
  switch (badgeId) {
    case 'first_lesson':
      return userStats.completedLessons >= 1;
    case 'quiz_master':
      return userStats.perfectQuizzes >= 1;
    case 'simulation_pro':
      return userStats.completedSimulations >= 5;
    case 'cyber_guardian':
      return userStats.reportedComplaints >= 1;
    case 'streak_warrior':
      return userStats.loginStreak >= 7;
    default:
      return false;
  }
};

// Calculate rewards based on performance
export const calculateReward = (action, performance = {}) => {
  let xp = XP_REWARDS[action] || 0;
  
  // Bonus for perfect performance
  if (performance.perfect) {
    xp += 50;
  }
  
  // Bonus for speed
  if (performance.fast) {
    xp += 25;
  }
  
  // Streak bonus
  if (performance.streak) {
    xp = Math.floor(xp * (1 + performance.streak * 0.1));
  }
  
  return xp;
};
