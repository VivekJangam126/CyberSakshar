# Mock Backend Integration Guide

This guide shows how to integrate the mock backend into existing components.

## ✅ Already Integrated

The following components have been updated to use the mock backend:

- ✅ `Login.jsx` - Authentication with demo accounts
- ✅ `Dashboard.jsx` - Loads user-specific dashboard data
- ✅ `ProfileMenu.jsx` - Shows current user and handles logout
- ✅ `AppHeader.jsx` - Displays user initial
- ✅ `routes.jsx` - Protected routes with authentication check

## 🔄 Components That Need Integration

### Quiz Components

**Files to update:**
- `frontend/src/features/quiz/pages/QuizAssessment.jsx`
- `frontend/src/features/quiz/pages/QuizResult.jsx`

**What to add:**

```javascript
import mockApi from '../../../mock/mockApi';

// At component start
const user = mockApi.getCurrentUser();

// When quiz is completed
const handleQuizComplete = (answers) => {
  const result = {
    completed: true,
    score: calculateScore(answers),
    totalQuestions: answers.length,
    correctAnswers: countCorrect(answers),
    riskLevel: determineRiskLevel(score),
    riskScore: calculateRiskScore(answers),
    weakAreas: identifyWeakAreas(answers),
    strongAreas: identifyStrongAreas(answers),
    answers: answers,
  };
  
  mockApi.saveQuizResult(user.id, result);
};

// To load existing result
const existingResult = mockApi.getQuizResult(user.id);
```

### Simulation Components

**Files to update:**
- `frontend/src/features/simulations/SimulationRouter.jsx`
- `frontend/src/features/simulations/pages/SimulationComplete.jsx`

**What to add:**

```javascript
import mockApi from '../../mock/mockApi';

// At component start
const user = mockApi.getCurrentUser();

// When starting simulation
mockApi.startSimulation(user.id, simulationId);

// When completing simulation
const handleSimulationComplete = (simulationId, decisions) => {
  const result = {
    score: calculateScore(decisions),
    correctDecisions: countCorrect(decisions),
    totalDecisions: decisions.length,
    timeTaken: elapsedTime,
  };
  
  mockApi.completeSimulation(user.id, simulationId, result);
};

// To check if already completed
const sims = mockApi.getSimulations(user.id);
const isCompleted = sims.completed.includes(simulationId);
```

### Learning Components

**Files to update:**
- `frontend/src/features/learning/LearningRouter.jsx`
- `frontend/src/features/learning/pages/LearningContent.jsx`
- `frontend/src/features/learning/pages/LearningComplete.jsx`

**What to add:**

```javascript
import mockApi from '../../mock/mockApi';

// At component start
const user = mockApi.getCurrentUser();

// Load progress
const learning = mockApi.getLearningProgress(user.id);
const moduleProgress = mockApi.getModuleProgress(user.id, moduleId);

// Update progress as user advances
const handleStepComplete = (moduleId, currentStep, totalSteps) => {
  mockApi.updateModuleProgress(user.id, moduleId, {
    completed: currentStep === totalSteps,
    stepsCompleted: currentStep,
    totalSteps: totalSteps,
  });
};

// When module is fully completed
const handleModuleComplete = (moduleId, totalSteps) => {
  mockApi.completeModule(user.id, moduleId, totalSteps);
};
```

### Certificate Components

**Files to update:**
- `frontend/src/features/certificate/pages/CertificateStatus.jsx`
- `frontend/src/features/certificate/pages/CertificatePreview.jsx`
- `frontend/src/features/certificate/pages/CertificateDownload.jsx`

**What to add:**

```javascript
import mockApi from '../../../mock/mockApi';

// At component start
const user = mockApi.getCurrentUser();

// Check eligibility
const { eligible, requirements } = mockApi.isCertificateEligible(user.id);

// Get certificate status
const cert = mockApi.getCertificateStatus(user.id);

// Issue certificate (when user clicks download/generate)
const handleIssueCertificate = () => {
  const result = mockApi.issueCertificate(user.id);
  
  if (result.success) {
    // Show success message
    // Generate PDF with result.certificate data
  } else {
    // Show error: result.error
  }
};
```

### Safety Report Components

**Files to update:**
- `frontend/src/features/safetyReport/pages/SafetyReportPage.jsx`

**What to add:**

```javascript
import mockApi from '../../../mock/mockApi';

// At component start
const user = mockApi.getCurrentUser();

// Generate report
const report = mockApi.generateSafetyReport(user.id);

// Use report data:
// - report.readinessScore
// - report.riskLevel
// - report.riskAreas
// - report.learningCoverage
// - report.practiceSummary
// - report.recommendations
// - report.nextSteps
```

### Dashboard Components

**Files to update:**
- `frontend/src/components/dashboard/DashboardLastSimulation.jsx`
- `frontend/src/components/dashboard/DashboardLearningProgress.jsx`
- `frontend/src/components/dashboard/DashboardCertificateStatus.jsx`
- `frontend/src/components/dashboard/DashboardRecentActivity.jsx`

**What to add:**

```javascript
import mockApi from '../../mock/mockApi';

// These components should receive data as props from Dashboard.jsx
// Dashboard.jsx already loads all data via mockApi.getDashboardData()

// If you need to load data directly:
const user = mockApi.getCurrentUser();
const dashboardData = mockApi.getDashboardData(user.id);

// Access specific data:
// - dashboardData.quiz
// - dashboardData.simulations
// - dashboardData.learning
// - dashboardData.certificate
// - dashboardData.activity
```

## 🎯 Integration Checklist

For each component you integrate:

1. ✅ Import mockApi: `import mockApi from '../../mock/mockApi';`
2. ✅ Get current user: `const user = mockApi.getCurrentUser();`
3. ✅ Load data using appropriate mockApi function
4. ✅ Save/update data when user completes actions
5. ✅ Remove any hardcoded demo data
6. ✅ Remove direct localStorage access
7. ✅ Test with different demo users

## 🧪 Testing Steps

1. **Login as each demo user:**
   - student@demo.com / student123
   - citizen@demo.com / citizen123
   - teacher@demo.com / teacher123

2. **Verify different states:**
   - Student: Partial progress, no certificate
   - Citizen: Some completion, not eligible for certificate
   - Teacher: Full completion, certificate issued

3. **Test persistence:**
   - Complete an action (quiz, simulation, learning)
   - Refresh the page
   - Verify data persists

4. **Test logout:**
   - Logout
   - Verify redirect to login
   - Verify cannot access protected routes

## 🚨 Common Mistakes to Avoid

1. ❌ **Don't import db.js directly**
   ```javascript
   // WRONG
   import db from '../../mock/db.js';
   
   // RIGHT
   import mockApi from '../../mock/mockApi';
   ```

2. ❌ **Don't access localStorage directly**
   ```javascript
   // WRONG
   localStorage.setItem('quiz_result', JSON.stringify(result));
   
   // RIGHT
   mockApi.saveQuizResult(userId, result);
   ```

3. ❌ **Don't forget to get current user**
   ```javascript
   // WRONG
   mockApi.getQuizResult('user_1'); // Hardcoded user ID
   
   // RIGHT
   const user = mockApi.getCurrentUser();
   mockApi.getQuizResult(user.id);
   ```

4. ❌ **Don't mix mock data with component state**
   ```javascript
   // WRONG - Hardcoded data
   const [quizResult, setQuizResult] = useState({ score: 75 });
   
   // RIGHT - Load from mock API
   const user = mockApi.getCurrentUser();
   const [quizResult, setQuizResult] = useState(
     mockApi.getQuizResult(user.id)
   );
   ```

## 📝 Example: Full Component Integration

Here's a complete example of integrating a quiz result component:

```javascript
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockApi from '../../../mock/mockApi';

const QuizResult = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get current user
    const user = mockApi.getCurrentUser();
    
    if (!user) {
      navigate('/login');
      return;
    }

    // Load quiz result
    const quizResult = mockApi.getQuizResult(user.id);
    
    if (!quizResult || !quizResult.completed) {
      // No result found, redirect to quiz
      navigate('/quiz/intro');
      return;
    }

    setResult(quizResult);
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Your Quiz Result</h1>
      <p>Score: {result.score}%</p>
      <p>Risk Level: {result.riskLevel}</p>
      {/* Display other result data */}
    </div>
  );
};

export default QuizResult;
```

## 🔄 Migration Path to Real Backend

When ready to replace mock backend with real API:

1. Create real API client (e.g., `src/api/client.js`)
2. Implement same function signatures as mockApi
3. Update single import in each component:
   ```javascript
   // Change from:
   import mockApi from '../../mock/mockApi';
   
   // To:
   import api from '../../api/client';
   ```
4. No other component changes needed!
5. Delete `src/mock/` folder

## 💡 Tips

- Use browser DevTools → Application → Local Storage to inspect data
- Use the DevTools component (optional) for quick testing
- Reset demo data if it gets corrupted: `mockApi.resetDemo()`
- Export data for debugging: `mockApi.exportData()`
