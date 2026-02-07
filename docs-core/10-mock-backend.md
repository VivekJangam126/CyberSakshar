# Mock Backend System

## Overview

The Mock Backend is a localStorage-based database system that simulates a full backend API without requiring a server. It provides complete CRUD operations, data persistence, and multi-user support entirely in the browser.

**Purpose**: Enable full-featured demo and development without backend infrastructure.

**Key Principle**: This mock layer is designed to be removable without rewriting UI components. The API interface (`mockApi.js`) matches what a real backend would provide.

## Architecture

```
frontend/src/mock/
├── seed.js              # Initial demo data (3 users with different progress)
├── db.js                # localStorage-backed database engine
├── mockApi.js           # PUBLIC API - ONLY entry point for UI components
├── auth.mock.js         # Authentication logic
├── progress.mock.js     # Quiz, simulations, learning, certificate tracking
└── report.mock.js       # Safety report generation
```

### Component Responsibilities

**seed.js**
- Defines initial demo data
- 3 demo users with different progress levels
- Exported as `INITIAL_DB_STATE`
- Used only on first initialization

**db.js**
- Core database engine
- Manages localStorage persistence
- Provides CRUD operations
- Handles data initialization
- Singleton instance exported as `db`

**mockApi.js**
- Public API interface
- ONLY file that UI components should import
- Delegates to auth.mock, progress.mock, report.mock
- Matches real backend API signatures

**auth.mock.js**
- Authentication logic
- Login/logout operations
- Session management (localStorage: 'auth_user')
- User verification

**progress.mock.js**
- Quiz result management
- Simulation progress tracking
- Learning module progress
- Certificate eligibility and issuance
- Activity feed management

**report.mock.js**
- Safety report generation
- Data aggregation from multiple sources
- Recommendation engine

## localStorage Keys

```javascript
{
  "CYBERSAKSHAR_DB": {
    // Complete database state
    "users": [...],
    "quizResults": {...},
    "simulations": {...},
    "learning": {...},
    "certificates": {...},
    "activity": {...},
    "version": "1.0.0",
    "initializedAt": "2024-01-15T10:00:00Z"
  },
  
  "auth_user": {
    // Current authenticated user (session)
    "id": "user_1",
    "email": "student@demo.com",
    "name": "Priya Sharma",
    "role": "student"
  }
}
```

## Data Isolation

### Per-User Data
All user-specific data is keyed by `userId`:

```javascript
{
  "quizResults": {
    "user_1": { /* quiz data */ },
    "user_2": { /* quiz data */ },
    "user_3": { /* quiz data */ }
  },
  "simulations": {
    "user_1": { /* simulation data */ },
    "user_2": { /* simulation data */ }
  },
  "learning": {
    "user_1": { /* learning data */ }
  }
}
```

### Global Data
User accounts are stored in a flat array:

```javascript
{
  "users": [
    { "id": "user_1", "email": "...", "name": "..." },
    { "id": "user_2", "email": "...", "name": "..." }
  ]
}
```

## Demo Users

| Email | Password | Profile | Progress |
|-------|----------|---------|----------|
| student@demo.com | student123 | Beginner | Partial progress |
| citizen@demo.com | citizen123 | Intermediate | Some completion |
| teacher@demo.com | teacher123 | Advanced | Full completion with certificate |

## Reset Logic

### User Progress Reset
```javascript
mockApi.resetUserProgress(userId)
```

**What is Reset**:
- Quiz results
- Simulation completions
- Learning progress
- Certificate status
- Activity feed

**What is NOT Reset**:
- User account (email, name, role)
- User preferences (theme, language)
- User authentication status

### Full Database Reset
```javascript
mockApi.resetDemo()
```

**What Happens**:
- Entire database cleared
- Reloaded from seed data
- All users reset to initial state
- Current session cleared
- Page reloads

## API Interface

### Authentication
```javascript
mockApi.login(email, password)              // Returns: { success, user, error }
mockApi.logout()                            // Returns: { success }
mockApi.getCurrentUser()                    // Returns: user object or null
mockApi.isAuthenticated()                   // Returns: boolean
```

### Dashboard
```javascript
mockApi.getDashboardData(userId)            // Returns: aggregated dashboard data
mockApi.getRecentActivity(userId, limit)    // Returns: activity array
```

### Quiz
```javascript
mockApi.getQuizResult(userId)               // Returns: quiz result or null
mockApi.saveQuizResult(userId, resultData)  // Returns: saved result
```

### Simulations
```javascript
mockApi.getSimulations(userId)              // Returns: simulation progress
mockApi.startSimulation(userId, simId)      // Returns: updated progress
mockApi.completeSimulation(userId, simId, result) // Returns: updated progress
mockApi.getLastSimulation(userId)           // Returns: last simulation or null
```

### Learning
```javascript
mockApi.getLearningProgress(userId)         // Returns: learning progress
mockApi.getModuleProgress(userId, moduleId) // Returns: module progress
mockApi.updateModuleProgress(userId, moduleId, data) // Returns: updated progress
mockApi.completeModule(userId, moduleId, totalSteps) // Returns: updated progress
```

### Certificate
```javascript
mockApi.getCertificateStatus(userId)        // Returns: certificate status
mockApi.isCertificateEligible(userId)       // Returns: { eligible, requirements }
mockApi.issueCertificate(userId)            // Returns: { success, certificate }
```

### Safety Report
```javascript
mockApi.generateSafetyReport(userId)        // Returns: complete report data
```

### User Preferences
```javascript
mockApi.getUserPreferences(userId)          // Returns: preferences object
mockApi.updateUserPreferences(userId, prefs) // Returns: updated preferences
```

### User Profile
```javascript
mockApi.resetUserProgress(userId)           // Returns: { success, message }
```

### Dev Utilities
```javascript
mockApi.resetDemo()                         // Resets entire database
mockApi.exportData()                        // Returns: complete database dump
```

## Migration Strategy to Real Backend

### Phase 1: Keep Interface, Replace Implementation
1. Keep `mockApi.js` file structure
2. Replace mock implementations with real API calls
3. Update imports to use real API client
4. UI components require NO changes

Example:
```javascript
// Before (mock)
export const getQuizResult = (userId) => {
  return progressMock.getQuizResult(userId);
};

// After (real backend)
export const getQuizResult = async (userId) => {
  const response = await apiClient.get(`/api/quiz/result/${userId}`);
  return response.data;
};
```

### Phase 2: Remove Mock Files
1. Delete `src/mock/` folder
2. Update imports in `mockApi.js` to point to real API client
3. Add error handling and loading states
4. Add authentication headers

### Phase 3: Add Backend Features
1. Implement proper authentication (JWT)
2. Add data validation
3. Implement rate limiting
4. Add analytics and logging
5. Implement real-time features (if needed)

## Vercel Compatibility

✅ **Works on Vercel**:
- No filesystem writes
- No environment variables needed
- No backend routes
- Browser APIs only (localStorage)
- Works after page refresh
- Supports multiple users

❌ **Limitations**:
- Data not shared across devices
- Data lost if localStorage cleared
- No server-side validation
- No real-time sync
- No data backup

## Development Guidelines

### DO
✅ Import only `mockApi.js` in UI components
✅ Use async/await syntax (matches real API)
✅ Handle errors gracefully
✅ Check authentication before data access
✅ Use TypeScript interfaces (future)

### DON'T
❌ Import `db.js` directly in components
❌ Access localStorage directly from UI
❌ Store sensitive data in mock DB
❌ Rely on mock-specific features
❌ Skip error handling

## Testing Considerations

### Unit Tests
- Mock `mockApi.js` functions
- Test component logic independently
- Don't test mock implementation

### Integration Tests
- Use mock backend for integration tests
- Reset database before each test
- Test multi-user scenarios

### E2E Tests
- Use mock backend for E2E tests
- Test complete user flows
- Verify data persistence

## Performance Considerations

### localStorage Limits
- 5-10 MB per domain (browser-dependent)
- Current usage: ~100 KB for 3 users
- Scales to ~50 users before issues

### Optimization Strategies
- Lazy load large data structures
- Implement data pagination
- Clear old activity entries
- Compress data (future)

## Security Notes

⚠️ **Mock Backend is NOT Secure**:
- Passwords stored in plain text
- No encryption
- No access control
- Client-side only
- Anyone can inspect localStorage

🔒 **Real Backend Must Have**:
- Password hashing (bcrypt, argon2)
- JWT authentication
- HTTPS only
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection
- CSRF protection

## Analytics & Monitoring

### What to Track (Future)
- API call frequency
- Error rates
- Response times
- User activity patterns
- Feature usage
- Completion rates

### Current Limitations
- No analytics in mock backend
- No error tracking
- No performance monitoring
- No user behavior tracking

## Backup & Recovery

### Current State
- No automatic backup
- Data lost if localStorage cleared
- No recovery mechanism

### Future Implementation
- Export data to JSON
- Import data from JSON
- Cloud backup (optional)
- Version control for data

## Conclusion

The mock backend is a temporary solution designed for:
- Demo and development
- Rapid prototyping
- Frontend-first development
- Vercel deployment without backend

It is NOT suitable for:
- Production use
- Sensitive data
- Multi-device sync
- Large-scale deployment

**Migration Path**: Replace `mockApi.js` implementations with real API calls. UI components remain unchanged.
