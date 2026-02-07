# Micro Learning Modules

## 1. Feature Overview

Micro Learning provides bite-sized, focused educational content on specific cyber safety topics. Each module breaks down complex security concepts into digestible steps with real-world examples, psychological insights, and actionable safety rules.

**Purpose**: Educate users on specific cyber threats through structured, progressive learning paths.

**User Problem Solved**: Users are overwhelmed by complex security advice. Micro-learning breaks it into manageable, actionable lessons they can complete in 5-10 minutes.

## 2. User Flow (High Level)

### Entry Points
- Dashboard "Continue Learning" button
- Navigation header "Learn" link
- Quiz recommendations (based on weak areas)
- Simulation completion (suggested next step)

### Page Flow
1. **Learning Home** (`/learn`) - Module selection
2. **Learning Intro** (`/learn/:moduleId/intro`) - Module introduction
3. **Learning Content** (`/learn/:moduleId/content/:stepIndex`) - Content steps
4. **Learning Psychology** (`/learn/:moduleId/psychology/:stepIndex`) - Psychology insights
5. **Learning Rule** (`/learn/:moduleId/rule/:stepIndex`) - Safety rules
6. **Learning Complete** (`/learn/:moduleId/complete`) - Module completion

### Exit Points
- Dashboard (after completion)
- Next module (via "Continue Learning")
- Simulations (via "Practice This" button)

## 3. Current Frontend Implementation

### Key Components
- **LearningRouter.jsx** - Route management
- **LearningHome.jsx** - Module selection page
- **LearningIntro.jsx** - Module introduction
- **LearningContent.jsx** - Content step display
- **LearningPsychology.jsx** - Psychology insight display
- **LearningRule.jsx** - Safety rule display
- **LearningComplete.jsx** - Completion summary
- **ModuleCard.jsx** - Module selection card
- **ContentBlock.jsx** - Content display component
- **PsychologyNote.jsx** - Psychology insight component
- **SafetyRuleCard.jsx** - Safety rule component
- **LearningProgress.jsx** - Progress indicator
- **CompletionBanner.jsx** - Completion celebration
- **LearningEngine.js** - Module flow logic

### Routes Involved
```
/learn
/learn/:moduleId/intro
/learn/:moduleId/content/:stepIndex
/learn/:moduleId/psychology/:stepIndex
/learn/:moduleId/rule/:stepIndex
/learn/:moduleId/complete
```

### Mock APIs/Functions Used
```javascript
mockApi.getCurrentUser()                                // Get authenticated user
mockApi.getLearningProgress(userId)                     // Get learning progress
mockApi.getModuleProgress(userId, moduleId)             // Get specific module progress
mockApi.updateModuleProgress(userId, moduleId, stepData) // Update progress
mockApi.completeModule(userId, moduleId, totalSteps)    // Mark module complete
```

### Data Read/Written
**Read**:
- Module completion status
- Current step progress
- Module list and metadata

**Written**:
- Module progress (steps completed)
- Module completion status
- Completion timestamp

## 4. Current Mock Database Schema

```javascript
// Learning progress in mock DB
{
  "userId": "user_1",
  "learning": {
    "user_1": {
      "modulesCompleted": ["otp_safety", "phishing_links"],  // Array of completed module IDs
      "modulesInProgress": "urgency_scam",                   // Currently active module ID
      "progress": {
        "otp_safety": {
          "completed": true,
          "completedAt": "2024-02-04T15:00:00Z",
          "stepsCompleted": 5,
          "totalSteps": 5
        },
        "phishing_links": {
          "completed": true,
          "completedAt": "2024-02-05T16:00:00Z",
          "stepsCompleted": 6,
          "totalSteps": 6
        },
        "urgency_scam": {
          "completed": false,
          "completedAt": null,
          "stepsCompleted": 2,
          "totalSteps": 5
        }
      }
    }
  }
}
```

### Field Purposes
- **modulesCompleted**: Array of module IDs user has finished
- **modulesInProgress**: ID of module currently being studied (null if none)
- **progress**: Object mapping module IDs to their progress
- **completed**: Boolean flag for module completion
- **completedAt**: ISO timestamp of completion (null if not completed)
- **stepsCompleted**: Number of steps user has finished
- **totalSteps**: Total number of steps in the module

### Data Types
- **Array**: modulesCompleted (array of strings)
- **String**: modulesInProgress, module IDs
- **Boolean**: completed
- **Number**: stepsCompleted, totalSteps
- **ISO 8601 Timestamp**: completedAt (nullable)
- **Object**: progress (nested object structure)

### Update Triggers
- Step completion → Increments stepsCompleted
- Module completion → Sets completed=true, adds to modulesCompleted, clears modulesInProgress
- Dashboard refresh → Reads module counts
- Certificate eligibility check → Counts completed modules

## 5. Backend-Ready Data Model (Future)

### SQL Tables

```sql
-- Learning modules table (content)
CREATE TABLE learning_modules (
  id VARCHAR(100) PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  category VARCHAR(100),
  difficulty VARCHAR(50),
  estimated_time INTEGER,  -- in minutes
  total_steps INTEGER,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- User learning progress table
CREATE TABLE user_learning_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  module_id VARCHAR(100) REFERENCES learning_modules(id),
  completed BOOLEAN DEFAULT FALSE,
  steps_completed INTEGER DEFAULT 0,
  total_steps INTEGER,
  started_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, module_id)
);

-- Learning step completions (detailed tracking)
CREATE TABLE learning_step_completions (
  id UUID PRIMARY KEY,
  progress_id UUID REFERENCES user_learning_progress(id) ON DELETE CASCADE,
  step_index INTEGER,
  step_type VARCHAR(50),  -- 'content', 'psychology', 'rule'
  completed_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_learning_progress_user_id ON user_learning_progress(user_id);
CREATE INDEX idx_learning_progress_module_id ON user_learning_progress(module_id);
CREATE INDEX idx_learning_step_completions_progress_id ON learning_step_completions(progress_id);
```

### NoSQL Collections (Alternative)

```javascript
// learningModules collection (content)
{
  "_id": "otp_safety",
  "title": "OTP Safety Essentials",
  "description": "Learn why OTPs are sensitive and how to protect them",
  "category": "Authentication Security",
  "difficulty": "Beginner",
  "estimatedTime": 8,
  "totalSteps": 5,
  "steps": [
    {
      "index": 0,
      "type": "content",
      "title": "What is an OTP?",
      "content": "..."
    }
  ],
  "createdAt": ISODate("2024-01-01T00:00:00Z"),
  "updatedAt": ISODate("2024-01-01T00:00:00Z")
}

// userLearningProgress collection
{
  "_id": "progress_1",
  "userId": "user_1",
  "moduleId": "otp_safety",
  "completed": true,
  "stepsCompleted": 5,
  "totalSteps": 5,
  "stepCompletions": [
    {
      "stepIndex": 0,
      "stepType": "content",
      "completedAt": ISODate("2024-02-04T14:50:00Z")
    }
  ],
  "startedAt": ISODate("2024-02-04T14:45:00Z"),
  "completedAt": ISODate("2024-02-04T15:00:00Z"),
  "updatedAt": ISODate("2024-02-04T15:00:00Z")
}
```

### Suggested API Endpoints

```
GET  /api/learning/modules                      # Get available modules
GET  /api/learning/modules/:moduleId            # Get module details
GET  /api/learning/progress/:userId             # Get user's learning progress
POST /api/learning/start                        # Start a module
POST /api/learning/step                         # Complete a step
POST /api/learning/complete                     # Complete a module
GET  /api/learning/recommendations/:userId      # Get recommended modules
```

### Relationships with Other Features
- **Dashboard**: Displays module completion count and progress
- **Quiz**: Recommends modules based on weak areas
- **Simulations**: Modules prepare users for simulations
- **Certificate**: Requires minimum module completions for eligibility
- **Safety Report**: Includes learning coverage in report

## 6. Edge Cases & Rules

### What Happens on Reset
- All module progress is deleted
- modulesInProgress is cleared
- User can restart all modules from beginning
- Dashboard shows 0 completions
- Certificate eligibility resets

### What Happens on Re-attempt
- Modules can be reviewed/retaken
- Progress is maintained (not reset)
- Completion status persists
- User can navigate to any step

### What is User-Scoped vs Global
**User-Scoped**:
- Module progress and completions
- Step completion tracking
- Completion timestamps

**Global**:
- Available modules list
- Module content and structure
- Learning materials
- Safety rules

### What Should NOT Be Stored
- Temporary UI state (current step, scroll position)
- Module content (should be in separate modules table)
- Navigation history
- Reading time per step (optional analytics)

## 7. Integration Dependencies

### Which Other Features Read This Data
- **Dashboard**: Displays completion count and progress percentage
- **Certificate**: Checks module count for eligibility
- **Safety Report**: Includes learning coverage
- **Quiz Recommendations**: Suggests modules based on weak areas

### Which Features Update This Data
- **Learning Flow**: Updates progress and completions
- **Profile Reset**: Clears learning data

### Order of Operations
1. User selects module → Load module data
2. User starts module → Create progress record, set modulesInProgress
3. User completes step → Increment stepsCompleted
4. User completes module → Set completed=true, add to modulesCompleted, clear modulesInProgress
5. Add activity entry → "Completed [Module Name]"
6. Re-evaluate certificate eligibility
7. Navigate to completion page

## Backend Migration Notes

- Module content should be stored in database (not hardcoded)
- Support versioning of modules for updates
- Implement progressive save (save step completions)
- Track time per step (for analytics)
- Add analytics: completion rates, drop-off points, average time
- Consider adaptive content based on user's quiz results
- Implement bookmarking (resume from last step)
- Add validation: ensure steps are completed in order
- Consider prerequisites (module A before module B)
- Track review/revisit behavior
