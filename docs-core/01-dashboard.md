# Dashboard Feature

## 1. Feature Overview

The Dashboard is the central hub of CyberSakshar, providing users with a comprehensive overview of their cyber safety journey. It aggregates data from all features (quiz, simulations, learning, certificate) and presents personalized insights, progress tracking, and actionable recommendations.

**Purpose**: Serve as the single source of truth for user progress, safety status, and next steps in their cyber awareness journey.

**User Problem Solved**: Users need a clear, at-a-glance view of their cyber safety status without navigating through multiple pages. The dashboard reduces cognitive load and provides motivation through visible progress.

## 2. User Flow (High Level)

### Entry Points
- After successful login (primary entry)
- From navigation header "Dashboard" link
- After completing any feature (quiz, simulation, learning module)

### Page Flow
1. User lands on dashboard
2. Views safety summary (risk level, readiness score)
3. Sees last safety check results
4. Reviews recent activity feed
5. Checks learning progress
6. Views simulation completion status
7. Sees certificate eligibility
8. Clicks quick action buttons to navigate to features

### Exit Points
- Navigate to Quiz (via "Recheck Safety" or "Start Safety Check")
- Navigate to Simulations (via "Practice Scenarios")
- Navigate to Learning (via "Continue Learning")
- Navigate to Certificate (via "View Certificate")
- Navigate to Profile (via profile menu)

## 3. Current Frontend Implementation

### Key Components
- **DashBoard.jsx** - Main container component
- **DashboardSafetySummary.jsx** - Overall safety status card
- **DashboardLastSafetyCheck.jsx** - Quiz results display
- **DashboardLearningProgress.jsx** - Learning modules progress
- **DashboardLastSimulation.jsx** - Recent simulation results
- **DashboardCertificateStatus.jsx** - Certificate eligibility status
- **DashboardRecentActivity.jsx** - Activity feed
- **DashboardRecommendations.jsx** - Personalized suggestions
- **DashboardQuickActions.jsx** - Action buttons
- **DashboardSafetyReport.jsx** - Link to comprehensive report

### Routes Involved
- `/dashboard` - Main dashboard route

### Mock APIs/Functions Used
```javascript
mockApi.getCurrentUser()           // Get authenticated user
mockApi.getDashboardData(userId)   // Get all dashboard data
mockApi.getRecentActivity(userId)  // Get activity feed
```

### Data Read/Written
**Read**:
- User profile information
- Quiz results (score, risk level, completion status)
- Simulation progress (completed count, last simulation)
- Learning progress (modules completed, in progress)
- Certificate status (eligible, issued)
- Recent activity (last 10 activities)

**Written**: None (dashboard is read-only)

## 4. Current Mock Database Schema

```javascript
// Dashboard data aggregated from multiple sources
{
  "user": {
    "id": "user_1",
    "name": "Priya Sharma",
    "email": "student@demo.com",
    "role": "student"
  },
  
  "quiz": {
    "completed": true,
    "score": 75,
    "riskLevel": "medium",
    "riskScore": 45,
    "safetyLevel": "Intermediate",
    "completedAt": "2024-02-05T14:30:00Z",
    "weakAreas": ["phishing", "social_engineering"],
    "strongAreas": ["password_security"]
  },
  
  "simulations": {
    "completed": 2,
    "total": 3,
    "lastSimulation": {
      "id": "otp_call",
      "completedAt": "2024-02-07T11:30:00Z",
      "score": 70
    }
  },
  
  "learning": {
    "completed": 2,
    "total": 3,
    "inProgress": "urgency_scam",
    "progressPercentage": 67
  },
  
  "certificate": {
    "eligible": false,
    "issued": false,
    "requirements": {
      "quizCompleted": true,
      "simulationsCompleted": 2,
      "learningCompleted": 2
    }
  },
  
  "overallProgress": 65,
  "riskLevel": "medium",
  "riskScore": 45
}
```

### Field Purposes
- **user**: Basic user identification
- **quiz.completed**: Boolean indicating quiz completion
- **quiz.score**: Percentage score (0-100)
- **quiz.riskLevel**: "low" | "medium" | "high"
- **quiz.riskScore**: Numeric risk score (0-100, lower is better)
- **quiz.safetyLevel**: "Beginner" | "Intermediate" | "Advanced"
- **simulations.completed**: Count of completed simulations
- **learning.completed**: Count of completed learning modules
- **certificate.eligible**: Boolean for certificate eligibility
- **overallProgress**: Aggregate progress percentage (0-100)

### Data Types
- Strings: IDs, names, emails, levels
- Numbers: scores, counts, percentages
- Booleans: completion flags, eligibility
- ISO 8601 Timestamps: completedAt dates
- Arrays: weakAreas, strongAreas

### Update Triggers
- Quiz completion → Updates quiz data
- Simulation completion → Updates simulations data
- Learning module completion → Updates learning data
- Any completion → Recalculates overallProgress
- Certificate issuance → Updates certificate.issued

## 5. Backend-Ready Data Model (Future)

### SQL Tables

```sql
-- Users table (handled by auth system)
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  role VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quiz results table
CREATE TABLE quiz_results (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  score INTEGER CHECK (score >= 0 AND score <= 100),
  risk_level VARCHAR(20),
  risk_score INTEGER,
  safety_level VARCHAR(50),
  weak_areas JSONB,
  strong_areas JSONB,
  completed_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, completed_at)
);

-- Simulations table
CREATE TABLE simulation_completions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  simulation_id VARCHAR(100),
  score INTEGER,
  correct_decisions INTEGER,
  total_decisions INTEGER,
  time_taken INTEGER,
  completed_at TIMESTAMP DEFAULT NOW()
);

-- Learning progress table
CREATE TABLE learning_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  module_id VARCHAR(100),
  completed BOOLEAN DEFAULT FALSE,
  steps_completed INTEGER,
  total_steps INTEGER,
  completed_at TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Certificates table
CREATE TABLE certificates (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  certificate_id VARCHAR(100) UNIQUE,
  issued_at TIMESTAMP DEFAULT NOW(),
  eligible BOOLEAN DEFAULT FALSE
);

-- Activity feed table
CREATE TABLE user_activities (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  activity_type VARCHAR(50),
  title VARCHAR(255),
  icon VARCHAR(10),
  timestamp TIMESTAMP DEFAULT NOW()
);
```

### NoSQL Collections (Alternative)

```javascript
// users collection
{
  "_id": "user_1",
  "name": "Priya Sharma",
  "email": "student@demo.com",
  "role": "student",
  "createdAt": ISODate("2024-01-15T10:00:00Z")
}

// quizResults collection
{
  "_id": "quiz_result_1",
  "userId": "user_1",
  "score": 75,
  "riskLevel": "medium",
  "riskScore": 45,
  "safetyLevel": "Intermediate",
  "weakAreas": ["phishing", "social_engineering"],
  "strongAreas": ["password_security"],
  "completedAt": ISODate("2024-02-05T14:30:00Z")
}

// simulationCompletions collection
{
  "_id": "sim_completion_1",
  "userId": "user_1",
  "simulationId": "otp_call",
  "score": 70,
  "correctDecisions": 3,
  "totalDecisions": 5,
  "timeTaken": 240,
  "completedAt": ISODate("2024-02-07T11:30:00Z")
}

// learningProgress collection
{
  "_id": "learning_prog_1",
  "userId": "user_1",
  "moduleId": "otp_safety",
  "completed": true,
  "stepsCompleted": 5,
  "totalSteps": 5,
  "completedAt": ISODate("2024-02-04T15:00:00Z")
}

// certificates collection
{
  "_id": "cert_1",
  "userId": "user_1",
  "certificateId": "CERT-2024-001",
  "eligible": true,
  "issued": false,
  "issuedAt": null
}

// userActivities collection
{
  "_id": "activity_1",
  "userId": "user_1",
  "type": "simulation",
  "title": "Completed OTP Call Simulation",
  "icon": "🎭",
  "timestamp": ISODate("2024-02-07T11:30:00Z")
}
```

### Suggested API Endpoints

```
GET  /api/dashboard/:userId              # Get complete dashboard data
GET  /api/dashboard/:userId/summary      # Get safety summary only
GET  /api/dashboard/:userId/activity     # Get recent activity feed
GET  /api/dashboard/:userId/progress     # Get overall progress
```

### Relationships with Other Features
- **Quiz**: Reads latest quiz result for safety summary
- **Simulations**: Reads completion count and last simulation
- **Learning**: Reads module progress and completion status
- **Certificate**: Reads eligibility and issuance status
- **Activity**: Aggregates activities from all features

## 6. Edge Cases & Rules

### What Happens on Reset
- Dashboard shows "Not Started" state for all features
- Overall progress resets to 0%
- Recent activity clears
- Certificate eligibility resets to false
- User preferences (theme, language) remain intact

### What Happens on Re-attempt
- Quiz: Shows latest result, previous results archived
- Simulations: Can be retaken, shows best score
- Learning: Can be reviewed, completion status persists

### What is User-Scoped vs Global
**User-Scoped**:
- All dashboard data (quiz, simulations, learning, certificate)
- Activity feed
- Progress percentages

**Global**:
- Available simulations list
- Available learning modules list
- Certificate template

### What Should NOT Be Stored
- Temporary UI state (expanded cards, scroll position)
- Derived calculations (can be computed on-demand)
- Sensitive personal information beyond name/email
- Raw quiz answers (only aggregated results)

## 7. Integration Dependencies

### Which Other Features Read This Data
- **Profile Page**: Displays summary statistics
- **Safety Report**: Uses dashboard data for comprehensive report
- **Certificate**: Checks eligibility from dashboard data

### Which Features Update This Data
- **Quiz**: Updates quiz results and risk level
- **Simulations**: Updates simulation completion count
- **Learning**: Updates learning progress
- **Certificate**: Updates certificate status
- **All Features**: Add entries to activity feed

### Order of Operations
1. User completes a feature (quiz/simulation/learning)
2. Feature updates its specific data in DB
3. Dashboard data is recalculated (aggregation)
4. Activity feed entry is added
5. Certificate eligibility is re-evaluated
6. Dashboard UI refreshes to show new data

## Backend Migration Notes

- Dashboard is primarily a read/aggregation layer
- No complex business logic in dashboard itself
- Data comes from other feature tables/collections
- Consider caching dashboard data for performance
- Real-time updates not critical (can refresh on navigation)
- Activity feed should be paginated (limit to last 20-50 items)
