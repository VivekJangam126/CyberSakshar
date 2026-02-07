# Mock API Quick Reference

## 🔐 Authentication

```javascript
import mockApi from '../../mock/mockApi';

// Login
const result = mockApi.login('student@demo.com', 'student123');
// Returns: { success: true/false, error: string, user: object }

// Get current user
const user = mockApi.getCurrentUser();
// Returns: { id, email, name, role } or null

// Check if authenticated
const isAuth = mockApi.isAuthenticated();
// Returns: boolean

// Logout
mockApi.logout();
```

## 📊 Dashboard

```javascript
// Get all dashboard data
const data = mockApi.getDashboardData(userId);
// Returns: { user, quiz, simulations, learning, certificate, activity, overallProgress, riskLevel, riskScore }

// Get recent activity
const activities = mockApi.getRecentActivity(userId, 10);
// Returns: Array of activity objects
```

## ✅ Quiz

```javascript
// Get quiz result
const result = mockApi.getQuizResult(userId);
// Returns: { completed, score, riskLevel, weakAreas, strongAreas, ... } or null

// Save quiz result
mockApi.saveQuizResult(userId, {
  completed: true,
  score: 85,
  totalQuestions: 10,
  correctAnswers: 8,
  riskLevel: 'low',
  riskScore: 25,
  weakAreas: [],
  strongAreas: ['phishing', 'otp_security'],
  answers: []
});
```

## 🎭 Simulations

```javascript
// Get all simulations
const sims = mockApi.getSimulations(userId);
// Returns: { completed: [], inProgress: string, results: {} }

// Get specific simulation result
const result = mockApi.getSimulationResult(userId, 'phishing_email');
// Returns: { score, correctDecisions, totalDecisions, timeTaken } or null

// Start simulation
mockApi.startSimulation(userId, 'phishing_email');

// Complete simulation
mockApi.completeSimulation(userId, 'phishing_email', {
  score: 90,
  correctDecisions: 4,
  totalDecisions: 5,
  timeTaken: 180
});

// Get last completed simulation
const last = mockApi.getLastSimulation(userId);
// Returns: { id, result } or null
```

## 📚 Learning

```javascript
// Get all learning progress
const learning = mockApi.getLearningProgress(userId);
// Returns: { modulesCompleted: [], modulesInProgress: string, progress: {} }

// Get specific module progress
const progress = mockApi.getModuleProgress(userId, 'otp_safety');
// Returns: { completed, completedAt, stepsCompleted, totalSteps } or null

// Update module progress
mockApi.updateModuleProgress(userId, 'otp_safety', {
  completed: false,
  stepsCompleted: 3,
  totalSteps: 5
});

// Complete module
mockApi.completeModule(userId, 'otp_safety', 5);
```

## 🏆 Certificate

```javascript
// Get certificate status
const cert = mockApi.getCertificateStatus(userId);
// Returns: { eligible, issued, certificateId, issuedAt, requirements }

// Check eligibility
const { eligible, requirements } = mockApi.isCertificateEligible(userId);
// Returns: { eligible: boolean, requirements: object }

// Issue certificate
const result = mockApi.issueCertificate(userId);
// Returns: { success: boolean, error: string, certificate: object }
```

## 📋 Safety Report

```javascript
// Generate comprehensive report
const report = mockApi.generateSafetyReport(userId);
// Returns: {
//   userId, userName, generatedAt,
//   readinessScore, riskLevel, riskScore, overallProgress,
//   riskAreas: [],
//   learningCoverage: [],
//   practiceSummary: [],
//   recommendations: [],
//   nextSteps: [],
//   certificate: {}
// }
```

## 🛠️ Dev Utilities

```javascript
// Reset all data (logs out and reloads)
mockApi.resetDemo();

// Export data for debugging
const data = mockApi.exportData();
console.log(data);
```

## 📝 Common Patterns

### Component with Authentication Check

```javascript
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockApi from '../../mock/mockApi';

const MyComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const user = mockApi.getCurrentUser();
    if (!user) {
      navigate('/login');
      return;
    }
    
    // Load data
    const myData = mockApi.getSomeData(user.id);
    setData(myData);
  }, [navigate]);

  if (!data) return <div>Loading...</div>;
  
  return <div>{/* Render data */}</div>;
};
```

### Save Data on Action

```javascript
const handleComplete = () => {
  const user = mockApi.getCurrentUser();
  
  mockApi.saveResult(user.id, {
    // your data
  });
  
  // Navigate or show success
  navigate('/success');
};
```

### Check Eligibility

```javascript
const user = mockApi.getCurrentUser();
const { eligible, requirements } = mockApi.isCertificateEligible(user.id);

if (eligible) {
  // Show download button
} else {
  // Show requirements
  console.log('Need:', requirements);
}
```

## 🎯 Demo User IDs

- Student: `user_1`
- Citizen: `user_2`
- Teacher: `user_3`

## 📦 Data Storage

All data stored in localStorage under:
- `CYBERSAKSHAR_DB` - Main database
- `auth_user` - Current authenticated user

## 🚨 Important Rules

1. ❌ Never import `db.js` directly
2. ❌ Never access localStorage directly
3. ✅ Always use `mockApi.js`
4. ✅ Always get current user first
5. ✅ Check authentication before loading data

## 🔄 Typical Flow

```javascript
// 1. Get current user
const user = mockApi.getCurrentUser();

// 2. Check authentication
if (!user) {
  navigate('/login');
  return;
}

// 3. Load data
const data = mockApi.getData(user.id);

// 4. Display data
// ... render component

// 5. Save changes
const handleSave = () => {
  mockApi.saveData(user.id, newData);
};
```

## 📞 Need Help?

- Full docs: `README.md`
- Integration guide: `INTEGRATION_GUIDE.md`
- Setup guide: `../MOCK_BACKEND_SETUP.md`
