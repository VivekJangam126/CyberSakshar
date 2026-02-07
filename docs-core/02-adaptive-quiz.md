# Adaptive Cyber Risk Assessment (Quiz)

## 1. Feature Overview

The Adaptive Cyber Risk Assessment is an intelligent questionnaire that evaluates a user's vulnerability to cyber threats. It analyzes decision-making patterns, identifies weak areas, and provides personalized recommendations. The feature creates the perception of AI-driven adaptation through carefully timed feedback and contextual messaging.

**Purpose**: Assess user's cyber safety awareness, identify knowledge gaps, and provide a baseline for personalized learning recommendations.

**User Problem Solved**: Users don't know their actual cyber risk level. This assessment provides objective, non-judgmental evaluation of their vulnerabilities and actionable next steps.

## 2. User Flow (High Level)

### Entry Points
- Dashboard "Start Safety Check" or "Recheck Safety" button
- Navigation header "Quiz" link
- First-time user onboarding (future)

### Page Flow
1. **Quiz Intro** (`/quiz/intro`) - Introduction and expectations
2. **Quiz Assessment** (`/quiz/assessment`) - 8-10 questions with adaptive feedback
3. **Quiz Analyzing** (`/quiz/analyzing`) - Brief analysis screen (2.5s)
4. **Quiz Result** (`/quiz/result`) - Risk level, score, weak areas
5. **Quiz Recommendations** (`/quiz/recommendations`) - Personalized next steps

### Exit Points
- Dashboard (after viewing results)
- Learning modules (via recommendations)
- Simulations (via recommendations)
- Safety report (via "View Full Report" link)

## 3. Current Frontend Implementation

### Key Components
- **QuizRouter.jsx** - Route management
- **QuizIntro.jsx** - Introduction page
- **QuizAssessment.jsx** - Main quiz interface
- **QuizAnalyzing.jsx** - Analysis loading screen
- **QuizResult.jsx** - Results display
- **QuizRecommendations.jsx** - Personalized recommendations
- **QuizQuestionCard.jsx** - Question display component
- **QuizOption.jsx** - Answer option button
- **QuizProgress.jsx** - Progress indicator
- **RiskIndicator.jsx** - Visual risk level display

### Routes Involved
```
/quiz/intro
/quiz/assessment
/quiz/analyzing
/quiz/result
/quiz/recommendations
```

### Mock APIs/Functions Used
```javascript
mockApi.getCurrentUser()                    // Get authenticated user
mockApi.getQuizResult(userId)               // Get existing quiz result
mockApi.saveQuizResult(userId, resultData)  // Save quiz completion
mockApi.getDashboardData(userId)            // Get dashboard data for recommendations
```

### Data Read/Written
**Read**:
- Existing quiz results (for retake detection)
- User profile information

**Written**:
- Quiz completion status
- Score and risk level
- Weak and strong areas
- Individual question answers
- Completion timestamp

## 4. Current Mock Database Schema

```javascript
// Quiz result stored in mock DB
{
  "userId": "user_1",
  "quizResults": {
    "user_1": {
      "completed": true,
      "completedAt": "2024-02-05T14:30:00Z",
      "score": 75,                          // Percentage (0-100)
      "totalQuestions": 10,
      "correctAnswers": 7,
      "riskLevel": "medium",                // "low" | "medium" | "high"
      "riskScore": 45,                      // Numeric score (0-100, lower is better)
      "safetyLevel": "Intermediate",        // "Beginner" | "Intermediate" | "Advanced"
      "weakAreas": [                        // Topics user struggled with
        "phishing",
        "social_engineering"
      ],
      "strongAreas": [                      // Topics user excelled at
        "password_security"
      ],
      "answers": [                          // Individual question responses
        {
          "questionId": "q1",
          "selectedOption": "option_b",
          "isCorrect": true,
          "riskLevel": "safe",
          "category": "phishing"
        }
      ],
      "highRiskCount": 2,                   // Count of high-risk answers
      "mediumRiskCount": 1,                 // Count of medium-risk answers
      "lowRiskCount": 7                     // Count of low-risk answers
    }
  }
}
```

### Field Purposes
- **completed**: Boolean flag for quiz completion
- **completedAt**: ISO timestamp of completion
- **score**: Overall percentage score (0-100)
- **totalQuestions**: Total number of questions asked
- **correctAnswers**: Number of correct/safe answers
- **riskLevel**: Overall risk assessment (low/medium/high)
- **riskScore**: Numeric risk score (0-100, lower is safer)
- **safetyLevel**: User-friendly safety level label
- **weakAreas**: Array of topic IDs where user made risky choices
- **strongAreas**: Array of topic IDs where user made safe choices
- **answers**: Array of individual question responses
- **highRiskCount**: Count of high-risk answers (for analytics)
- **mediumRiskCount**: Count of medium-risk answers
- **lowRiskCount**: Count of low/safe answers

### Data Types
- **Boolean**: completed, isCorrect
- **String**: userId, riskLevel, safetyLevel, questionId, selectedOption, category
- **Number**: score, totalQuestions, correctAnswers, riskScore, counts
- **ISO 8601 Timestamp**: completedAt
- **Array**: weakAreas, strongAreas, answers

### Update Triggers
- Quiz completion → Saves entire result object
- Retake → Overwrites previous result (history not maintained in MVP)
- Dashboard refresh → Reads latest quiz result
- Certificate eligibility check → Reads quiz.completed flag

## 5. Backend-Ready Data Model (Future)

### SQL Tables

```sql
-- Quiz attempts table (supports history)
CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  score INTEGER CHECK (score >= 0 AND score <= 100),
  total_questions INTEGER,
  correct_answers INTEGER,
  risk_level VARCHAR(20) CHECK (risk_level IN ('low', 'medium', 'high')),
  risk_score INTEGER CHECK (risk_score >= 0 AND risk_score <= 100),
  safety_level VARCHAR(50),
  high_risk_count INTEGER DEFAULT 0,
  medium_risk_count INTEGER DEFAULT 0,
  low_risk_count INTEGER DEFAULT 0,
  completed_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quiz answers table (detailed responses)
CREATE TABLE quiz_answers (
  id UUID PRIMARY KEY,
  attempt_id UUID REFERENCES quiz_attempts(id) ON DELETE CASCADE,
  question_id VARCHAR(100),
  selected_option VARCHAR(100),
  is_correct BOOLEAN,
  risk_level VARCHAR(20),
  category VARCHAR(100),
  answered_at TIMESTAMP DEFAULT NOW()
);

-- Quiz weak areas (many-to-many)
CREATE TABLE quiz_weak_areas (
  id UUID PRIMARY KEY,
  attempt_id UUID REFERENCES quiz_attempts(id) ON DELETE CASCADE,
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quiz strong areas (many-to-many)
CREATE TABLE quiz_strong_areas (
  id UUID PRIMARY KEY,
  attempt_id UUID REFERENCES quiz_attempts(id) ON DELETE CASCADE,
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index for performance
CREATE INDEX idx_quiz_attempts_user_id ON quiz_attempts(user_id);
CREATE INDEX idx_quiz_attempts_completed_at ON quiz_attempts(completed_at DESC);
CREATE INDEX idx_quiz_answers_attempt_id ON quiz_answers(attempt_id);
```

### NoSQL Collections (Alternative)

```javascript
// quizAttempts collection
{
  "_id": "attempt_1",
  "userId": "user_1",
  "score": 75,
  "totalQuestions": 10,
  "correctAnswers": 7,
  "riskLevel": "medium",
  "riskScore": 45,
  "safetyLevel": "Intermediate",
  "weakAreas": ["phishing", "social_engineering"],
  "strongAreas": ["password_security"],
  "highRiskCount": 2,
  "mediumRiskCount": 1,
  "lowRiskCount": 7,
  "answers": [
    {
      "questionId": "q1",
      "selectedOption": "option_b",
      "isCorrect": true,
      "riskLevel": "safe",
      "category": "phishing",
      "answeredAt": ISODate("2024-02-05T14:25:00Z")
    }
  ],
  "completedAt": ISODate("2024-02-05T14:30:00Z"),
  "createdAt": ISODate("2024-02-05T14:20:00Z")
}
```

### Suggested API Endpoints

```
GET  /api/quiz/questions                    # Get quiz questions
GET  /api/quiz/result/:userId               # Get latest quiz result
GET  /api/quiz/history/:userId              # Get quiz attempt history
POST /api/quiz/submit                       # Submit quiz answers
POST /api/quiz/answer                       # Submit individual answer (for progressive save)
GET  /api/quiz/recommendations/:userId      # Get personalized recommendations
```

### Relationships with Other Features
- **Dashboard**: Displays latest quiz result and risk level
- **Learning**: Recommends modules based on weak areas
- **Simulations**: Recommends scenarios based on weak areas
- **Certificate**: Requires quiz completion for eligibility
- **Safety Report**: Includes quiz results in comprehensive report

## 6. Edge Cases & Rules

### What Happens on Reset
- Quiz result is deleted from database
- User can retake quiz as if first time
- Previous answers are not retained
- Dashboard shows "Not Completed" status
- Certificate eligibility resets

### What Happens on Re-attempt
- Previous result is overwritten (no history in MVP)
- New score and risk level replace old values
- Weak/strong areas are recalculated
- Dashboard updates with new result
- Certificate eligibility is re-evaluated

### What is User-Scoped vs Global
**User-Scoped**:
- Quiz results and scores
- Weak and strong areas
- Answer history
- Completion status

**Global**:
- Question bank (same questions for all users)
- Risk calculation rules
- Feedback messages
- Recommendation logic

### What Should NOT Be Stored
- Temporary UI state (current question index, timer)
- Adaptive messages (generated on-the-fly)
- Intermediate calculations
- Question order (randomized per attempt)

## 7. Integration Dependencies

### Which Other Features Read This Data
- **Dashboard**: Displays quiz score, risk level, completion status
- **Certificate**: Checks quiz completion for eligibility
- **Safety Report**: Includes quiz results in report
- **Learning**: Uses weak areas for module recommendations
- **Simulations**: Uses weak areas for scenario recommendations

### Which Features Update This Data
- **Quiz Assessment**: Saves answers and final result
- **Profile Reset**: Clears quiz data

### Order of Operations
1. User starts quiz → Questions loaded from question bank
2. User answers question → Answer saved (optional progressive save)
3. User completes quiz → Calculate score, risk level, weak/strong areas
4. Save quiz result → Update database
5. Add activity entry → "Completed Safety Assessment"
6. Re-evaluate certificate eligibility
7. Navigate to results page
8. Generate personalized recommendations based on weak areas

## Backend Migration Notes

- Question bank should be stored in database (not hardcoded)
- Support versioning of question bank for analytics
- Consider progressive save (save answers as user progresses)
- Implement quiz attempt history (not just latest result)
- Add analytics: average scores, common weak areas, completion rates
- Risk calculation rules should be configurable
- Consider A/B testing different question sets
- Implement rate limiting (prevent rapid retakes)
- Add validation: ensure all questions answered before submission
- Consider time tracking: how long user spent on quiz
