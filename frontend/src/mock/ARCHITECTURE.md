# Mock Backend Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         BROWSER                                  │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    UI COMPONENTS                            │ │
│  │                                                             │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │ │
│  │  │  Login   │  │Dashboard │  │   Quiz   │  │Simulation│  │ │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘  │ │
│  │       │             │             │             │         │ │
│  │       └─────────────┴─────────────┴─────────────┘         │ │
│  │                          │                                 │ │
│  │                          │ import mockApi                  │ │
│  └──────────────────────────┼─────────────────────────────────┘ │
│                             │                                   │
│  ┌──────────────────────────▼─────────────────────────────────┐ │
│  │                    mockApi.js                               │ │
│  │              (PUBLIC API INTERFACE)                         │ │
│  │                                                             │ │
│  │  • login(email, password)                                  │ │
│  │  • logout()                                                │ │
│  │  • getCurrentUser()                                        │ │
│  │  • getDashboardData(userId)                                │ │
│  │  • getQuizResult(userId)                                   │ │
│  │  • saveQuizResult(userId, data)                            │ │
│  │  • getSimulations(userId)                                  │ │
│  │  • completeSimulation(userId, simId, data)                 │ │
│  │  • getLearningProgress(userId)                             │ │
│  │  • getCertificateStatus(userId)                            │ │
│  │  • generateSafetyReport(userId)                            │ │
│  │  • ... and more                                            │ │
│  └──────────────────────────┬─────────────────────────────────┘ │
│                             │                                   │
│         ┌───────────────────┼───────────────────┐              │
│         │                   │                   │              │
│  ┌──────▼──────┐   ┌────────▼────────┐   ┌─────▼──────┐      │
│  │auth.mock.js │   │progress.mock.js │   │report.     │      │
│  │             │   │                 │   │mock.js     │      │
│  │• login      │   │• quiz tracking  │   │• generate  │      │
│  │• logout     │   │• simulations    │   │  reports   │      │
│  │• getUser    │   │• learning       │   │• calculate │      │
│  └──────┬──────┘   │• certificates   │   │  scores    │      │
│         │          └────────┬────────┘   └─────┬──────┘      │
│         │                   │                   │              │
│         └───────────────────┼───────────────────┘              │
│                             │                                   │
│                      ┌──────▼──────┐                           │
│                      │   db.js     │                           │
│                      │ (DATABASE)  │                           │
│                      │             │                           │
│                      │• initialize │                           │
│                      │• persist    │                           │
│                      │• CRUD ops   │                           │
│                      └──────┬──────┘                           │
│                             │                                   │
│                      ┌──────▼──────┐                           │
│                      │localStorage │                           │
│                      │             │                           │
│                      │CYBERSAKSHAR │                           │
│                      │_DB          │                           │
│                      │             │                           │
│                      │auth_user    │                           │
│                      └─────────────┘                           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. Login Flow

```
User enters credentials
        ↓
Login.jsx calls mockApi.login(email, password)
        ↓
mockApi → auth.mock.js → db.authenticateUser()
        ↓
db.js searches users array
        ↓
If valid: Store user in localStorage['auth_user']
        ↓
Return { success: true, user: {...} }
        ↓
Login.jsx redirects to /dashboard
```

### 2. Load Dashboard Flow

```
Dashboard.jsx mounts
        ↓
Calls mockApi.getCurrentUser()
        ↓
mockApi → auth.mock.js → localStorage['auth_user']
        ↓
If not found: Redirect to /login
        ↓
If found: Call mockApi.getDashboardData(user.id)
        ↓
mockApi → progress.mock.js → db.js
        ↓
db.js reads from localStorage['CYBERSAKSHAR_DB']
        ↓
Returns aggregated data (quiz, sims, learning, cert, activity)
        ↓
Dashboard.jsx displays personalized data
```

### 3. Save Quiz Result Flow

```
User completes quiz
        ↓
QuizResult.jsx calls mockApi.saveQuizResult(userId, result)
        ↓
mockApi → progress.mock.js → db.saveQuizResult()
        ↓
db.js updates quizResults[userId]
        ↓
db.js calls persist() → localStorage['CYBERSAKSHAR_DB']
        ↓
progress.mock.js adds activity entry
        ↓
progress.mock.js updates certificate eligibility
        ↓
Returns saved result
        ↓
QuizResult.jsx displays result
```

### 4. Complete Simulation Flow

```
User completes simulation
        ↓
SimulationComplete.jsx calls mockApi.completeSimulation(userId, simId, result)
        ↓
mockApi → progress.mock.js → db.completeSimulation()
        ↓
db.js updates simulations[userId].completed[]
        ↓
db.js updates simulations[userId].results[simId]
        ↓
db.js calls persist() → localStorage
        ↓
progress.mock.js adds activity entry
        ↓
progress.mock.js updates certificate eligibility
        ↓
Returns updated simulation data
```

## Component Integration Pattern

```javascript
// 1. Import mockApi (ONLY entry point)
import mockApi from '../../mock/mockApi';

// 2. Component with authentication
const MyComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    // 3. Get current user
    const user = mockApi.getCurrentUser();
    
    // 4. Check authentication
    if (!user) {
      navigate('/login');
      return;
    }

    // 5. Load data
    const myData = mockApi.getData(user.id);
    setData(myData);
  }, [navigate]);

  // 6. Save data on action
  const handleSave = () => {
    const user = mockApi.getCurrentUser();
    mockApi.saveData(user.id, newData);
  };

  return <div>{/* Render */}</div>;
};
```

## Storage Structure

### localStorage['CYBERSAKSHAR_DB']

```json
{
  "users": [
    {
      "id": "user_1",
      "email": "student@demo.com",
      "password": "student123",
      "name": "Priya Sharma",
      "role": "student"
    }
  ],
  "quizResults": {
    "user_1": {
      "completed": true,
      "score": 75,
      "riskLevel": "medium",
      "weakAreas": ["phishing"]
    }
  },
  "simulations": {
    "user_1": {
      "completed": ["phishing_email"],
      "results": {
        "phishing_email": {
          "score": 80,
          "completedAt": "2024-02-06T10:00:00Z"
        }
      }
    }
  },
  "learning": {
    "user_1": {
      "modulesCompleted": ["otp_safety"],
      "progress": {
        "otp_safety": {
          "completed": true,
          "stepsCompleted": 5
        }
      }
    }
  },
  "certificates": {
    "user_1": {
      "eligible": false,
      "issued": false
    }
  },
  "activity": {
    "user_1": [
      {
        "id": "act_1",
        "type": "quiz",
        "title": "Completed Safety Assessment",
        "timestamp": "2024-02-05T14:30:00Z"
      }
    ]
  }
}
```

### localStorage['auth_user']

```json
{
  "id": "user_1",
  "email": "student@demo.com",
  "name": "Priya Sharma",
  "role": "student"
}
```

## Module Responsibilities

### mockApi.js
- **Purpose**: Public API interface
- **Responsibility**: Route calls to appropriate mock modules
- **Used by**: All UI components
- **Uses**: auth.mock.js, progress.mock.js, report.mock.js

### auth.mock.js
- **Purpose**: Authentication logic
- **Responsibility**: Login, logout, session management
- **Used by**: mockApi.js
- **Uses**: db.js

### progress.mock.js
- **Purpose**: Progress tracking
- **Responsibility**: Quiz, simulations, learning, certificates, activity
- **Used by**: mockApi.js
- **Uses**: db.js

### report.mock.js
- **Purpose**: Report generation
- **Responsibility**: Calculate scores, identify risks, generate recommendations
- **Used by**: mockApi.js
- **Uses**: db.js

### db.js
- **Purpose**: Data persistence
- **Responsibility**: CRUD operations, localStorage management
- **Used by**: auth.mock.js, progress.mock.js, report.mock.js
- **Uses**: localStorage, seed.js

### seed.js
- **Purpose**: Initial data
- **Responsibility**: Provide demo user data
- **Used by**: db.js
- **Uses**: Nothing

## Security Model (Demo Only)

```
┌─────────────────────────────────────┐
│         DEMO SECURITY               │
│                                     │
│  ⚠️  NOT FOR PRODUCTION             │
│                                     │
│  • Passwords stored in plain text  │
│  • No encryption                   │
│  • No token validation             │
│  • No session expiry               │
│  • Client-side only                │
│                                     │
│  ✅  Good for:                      │
│  • Demos and prototypes            │
│  • Testing UI flows                │
│  • Showcasing features             │
│                                     │
│  ❌  NOT good for:                  │
│  • Production use                  │
│  • Real user data                  │
│  • Sensitive information           │
└─────────────────────────────────────┘
```

## Migration to Real Backend

```
BEFORE (Mock):
┌──────────┐
│Component │
└────┬─────┘
     │ import mockApi
     ↓
┌────────────┐
│ mockApi.js │
└────┬───────┘
     │
     ↓
┌────────────┐
│localStorage│
└────────────┘

AFTER (Real):
┌──────────┐
│Component │
└────┬─────┘
     │ import api (same signatures!)
     ↓
┌────────────┐
│  api.js    │
└────┬───────┘
     │ HTTP requests
     ↓
┌────────────┐
│   Server   │
└────┬───────┘
     │
     ↓
┌────────────┐
│  Database  │
└────────────┘
```

## Key Design Principles

1. **Single Entry Point**
   - Components only import mockApi.js
   - Never import db.js or seed.js directly

2. **Clean Separation**
   - UI logic in components
   - Business logic in mock modules
   - Data logic in db.js

3. **Easy Removal**
   - Mock system isolated in src/mock/
   - Same API signatures as real backend
   - Delete folder when ready

4. **Persistence**
   - All changes saved to localStorage
   - Survives page refreshes
   - Works offline

5. **Multi-User Support**
   - Different data per user
   - Isolated user sessions
   - Realistic demo experience

## Performance Considerations

- **localStorage**: Synchronous, fast for small data
- **No network calls**: Instant responses
- **No pagination**: All data loaded at once
- **Memory usage**: Minimal (few KB of data)
- **Build size**: ~10KB added to bundle

## Limitations

1. **Storage**: Limited to ~5-10MB (browser dependent)
2. **Sync**: No cross-tab synchronization
3. **Security**: No encryption or validation
4. **Scalability**: Not suitable for large datasets
5. **Offline**: Works offline but no sync when online

## Best Practices

1. ✅ Always get current user first
2. ✅ Check authentication before loading data
3. ✅ Use mockApi for all data operations
4. ✅ Handle null/undefined cases
5. ✅ Test with all demo users
6. ❌ Never hardcode user IDs
7. ❌ Never access localStorage directly
8. ❌ Never import db.js in components
9. ❌ Never store sensitive data
10. ❌ Never use in production
