# Mock Backend System

This folder contains a **frontend-only dummy backend** for the CyberSakshar platform. It provides full functionality without requiring a real backend or database.

## 🎯 Purpose

- Make the app feel fully functional and populated
- Support multiple demo users with different progress states
- Persist state across page refreshes using localStorage
- Work seamlessly on Vercel after deployment
- Be easily removable when real backend is ready

## 📁 Architecture

```
src/mock/
├── seed.js              # Initial demo data (3 users with different progress)
├── db.js                # localStorage-backed database engine
├── mockApi.js           # PUBLIC API - ONLY entry point for UI components
├── auth.mock.js         # Authentication logic
├── progress.mock.js     # Quiz, simulations, learning, certificate tracking
└── report.mock.js       # Safety report generation
```

## 🔐 Demo Users

| Email | Password | Profile |
|-------|----------|---------|
| student@demo.com | student123 | Beginner - partial progress |
| citizen@demo.com | citizen123 | Intermediate - some completion |
| teacher@demo.com | teacher123 | Advanced - full completion with certificate |

## 🚀 Usage in Components

**IMPORTANT:** Components should ONLY import and use `mockApi.js`. Never access `db.js` or `seed.js` directly.

### Authentication

```javascript
import mockApi from '../../mock/mockApi';

// Login
const result = mockApi.login(email, password);
if (result.success) {
  // User authenticated
  console.log(result.user);
}

// Get current user
const user = mockApi.getCurrentUser();

// Logout
mockApi.logout();
```

### Dashboard

```javascript
import mockApi from '../../mock/mockApi';

const user = mockApi.getCurrentUser();
const dashboardData = mockApi.getDashboardData(user.id);

// dashboardData contains:
// - user info
// - quiz results
// - simulations progress
// - learning progress
// - certificate status
// - recent activity
// - overall progress percentage
```

### Quiz

```javascript
import mockApi from '../../mock/mockApi';

const user = mockApi.getCurrentUser();

// Get quiz result
const quizResult = mockApi.getQuizResult(user.id);

// Save quiz result
mockApi.saveQuizResult(user.id, {
  completed: true,
  score: 85,
  totalQuestions: 10,
  correctAnswers: 8,
  riskLevel: 'low',
  riskScore: 25,
  weakAreas: [],
  strongAreas: ['phishing', 'otp_security'],
  answers: [...],
});
```

### Simulations

```javascript
import mockApi from '../../mock/mockApi';

const user = mockApi.getCurrentUser();

// Get all simulations
const sims = mockApi.getSimulations(user.id);

// Start simulation
mockApi.startSimulation(user.id, 'phishing_email');

// Complete simulation
mockApi.completeSimulation(user.id, 'phishing_email', {
  score: 90,
  correctDecisions: 4,
  totalDecisions: 5,
  timeTaken: 180,
});
```

### Learning

```javascript
import mockApi from '../../mock/mockApi';

const user = mockApi.getCurrentUser();

// Get learning progress
const learning = mockApi.getLearningProgress(user.id);

// Update module progress
mockApi.updateModuleProgress(user.id, 'otp_safety', {
  completed: false,
  stepsCompleted: 3,
  totalSteps: 5,
});

// Complete module
mockApi.completeModule(user.id, 'otp_safety', 5);
```

### Certificate

```javascript
import mockApi from '../../mock/mockApi';

const user = mockApi.getCurrentUser();

// Check eligibility
const { eligible, requirements } = mockApi.isCertificateEligible(user.id);

// Get certificate status
const cert = mockApi.getCertificateStatus(user.id);

// Issue certificate (if eligible)
const result = mockApi.issueCertificate(user.id);
if (result.success) {
  console.log('Certificate issued:', result.certificate);
}
```

### Safety Report

```javascript
import mockApi from '../../mock/mockApi';

const user = mockApi.getCurrentUser();

// Generate comprehensive report
const report = mockApi.generateSafetyReport(user.id);

// report contains:
// - readinessScore
// - riskLevel and riskScore
// - riskAreas (weak areas)
// - learningCoverage
// - practiceSummary
// - recommendations
// - nextSteps
```

## 🛠️ Dev Utilities

### Reset Demo

To reset all data back to initial state:

```javascript
import mockApi from '../../mock/mockApi';

// Reset everything
mockApi.resetDemo();
```

Or from browser console:

```javascript
localStorage.removeItem('CYBERSAKSHAR_DB');
localStorage.removeItem('auth_user');
location.reload();
```

### Export Data

To debug or inspect current state:

```javascript
import mockApi from '../../mock/mockApi';

const data = mockApi.exportData();
console.log(JSON.stringify(data, null, 2));
```

## 🔄 How It Works

1. **Initialization**: On first load, `db.js` checks localStorage for `CYBERSAKSHAR_DB`
2. **Seed Data**: If not found, loads initial data from `seed.js`
3. **Persistence**: All changes are automatically saved to localStorage
4. **Authentication**: Login stores `auth_user` in localStorage
5. **State Management**: All CRUD operations go through `db.js`
6. **API Layer**: Components only interact with `mockApi.js`

## ✅ Vercel Compatibility

- ✅ No filesystem writes
- ✅ No environment variables needed
- ✅ No backend routes
- ✅ Browser APIs only (localStorage)
- ✅ Works after page refresh
- ✅ Supports multiple users

## 🧹 Removal Plan

When ready to integrate real backend:

1. Keep `mockApi.js` interface signatures
2. Replace mock implementations with real API calls
3. Remove `src/mock/` folder
4. Update imports to point to real API client
5. UI components require NO changes (same API interface)

## 📝 Notes

- All timestamps are ISO 8601 format
- User passwords are stored in plain text (demo only!)
- Certificate eligibility: Quiz ≥70%, 2+ simulations, 2+ learning modules
- Activity feed limited to last 20 items
- Data persists until localStorage is cleared

## 🚨 Important Rules

1. **Never** import `db.js` or `seed.js` directly in components
2. **Always** use `mockApi.js` as the single entry point
3. **Never** access localStorage directly from UI code
4. **Always** check authentication before loading user data
5. **Never** commit real user data to this mock system
