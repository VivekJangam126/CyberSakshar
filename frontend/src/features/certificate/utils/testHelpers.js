/**
 * Test Helpers for Certificate Feature
 * Use these functions in browser console to test different eligibility states
 */

// Set all requirements as completed
export const unlockCertificate = () => {
  localStorage.setItem('quizCompleted', 'true');
  localStorage.setItem('simulationsCompleted', 'true');
  localStorage.setItem('learningCompleted', 'true');
  console.log('✅ Certificate unlocked! Refresh the page to see changes.');
};

// Lock certificate (clear all completions)
export const lockCertificate = () => {
  localStorage.removeItem('quizCompleted');
  localStorage.removeItem('simulationsCompleted');
  localStorage.removeItem('learningCompleted');
  console.log('🔒 Certificate locked! Refresh the page to see changes.');
};

// Set partial completion
export const setPartialCompletion = () => {
  localStorage.setItem('quizCompleted', 'true');
  localStorage.setItem('simulationsCompleted', 'true');
  localStorage.removeItem('learningCompleted');
  console.log('⚠️ Partial completion set (2/3). Refresh the page to see changes.');
};

// Set user name for certificate
export const setUserName = (name) => {
  localStorage.setItem('userName', name);
  console.log(`👤 User name set to: ${name}. Refresh the page to see changes.`);
};

// Check current status
export const checkStatus = () => {
  const status = {
    quizCompleted: localStorage.getItem('quizCompleted') === 'true',
    simulationsCompleted: localStorage.getItem('simulationsCompleted') === 'true',
    learningCompleted: localStorage.getItem('learningCompleted') === 'true',
    userName: localStorage.getItem('userName') || 'Student',
  };
  console.log('Current Status:', status);
  return status;
};

// Make functions available globally for console testing
if (typeof window !== 'undefined') {
  window.certificateTest = {
    unlock: unlockCertificate,
    lock: lockCertificate,
    partial: setPartialCompletion,
    setName: setUserName,
    status: checkStatus,
  };
  console.log('Certificate test helpers loaded! Use window.certificateTest');
}
