# Cyber Fraud Simulations

## 1. Feature Overview

Cyber Fraud Simulations provide users with safe, realistic practice environments to experience common cyber fraud scenarios and learn correct responses. Users make decisions in simulated fraud situations and receive immediate, educational feedback without real-world consequences.

**Purpose**: Build muscle memory for safe cyber behavior through realistic practice scenarios.

**User Problem Solved**: Awareness alone doesn't prevent fraud. Users need hands-on practice to develop instinctive safe responses when faced with real cyber threats.

## 2. User Flow (High Level)

### Entry Points
- Dashboard "Practice Scenarios" button
- Navigation header "Simulations" link
- Quiz recommendations (based on weak areas)
- Learning module completion (suggested next step)

### Page Flow
1. **Simulation Landing** (`/simulations`) - Scenario selection
2. **Simulation Intro** (`/simulations/intro`) - Scenario introduction
3. **Simulation Scenario** (`/simulations/scenario`) - Present situation
4. **Simulation Decision** (`/simulations/decision`) - Brief confirmation (auto-advances)
5. **Simulation Feedback** (`/simulations/feedback`) - Detailed explanation
6. **Simulation Scenario** (repeat for multi-step scenarios)
7. **Simulation Complete** (`/simulations/complete`) - Summary and key learnings

### Exit Points
- Dashboard (after completion)
- Learning modules (via recommendations)
- Next simulation (via "Try Another" button)

## 3. Current Frontend Implementation

### Key Components
- **SimulationRouter.jsx** - Route management
- **SimulationPage.jsx** - Scenario selection landing
- **SimulationIntro.jsx** - Scenario introduction
- **SimulationScenario.jsx** - Scenario presentation
- **SimulationDecision.jsx** - Decision confirmation
- **SimulationFeedback.jsx** - Feedback display
- **SimulationComplete.jsx** - Completion summary
- **ScenarioCard.jsx** - Scenario selection card
- **DecisionOption.jsx** - Decision button
- **FeedbackCard.jsx** - Feedback display
- **SafetyTip.jsx** - Safety tip highlight
- **SimulationProgress.jsx** - Progress indicator
- **ScenarioEngine.js** - Scenario flow logic

### Routes Involved
```
/simulations
/simulations/intro
/simulations/scenario
/simulations/decision
/simulations/feedback
/simulations/complete
```

### Mock APIs/Functions Used
```javascript
mockApi.getCurrentUser()                                    // Get authenticated user
mockApi.getSimulations(userId)                              // Get simulation progress
mockApi.startSimulation(userId, simulationId)               // Mark simulation as started
mockApi.completeSimulation(userId, simulationId, resultData) // Save completion
mockApi.getLastSimulation(userId)                           // Get most recent simulation
```

### Data Read/Written
**Read**:
- Simulation completion status
- Simulation results (score, decisions)
- User profile information

**Written**:
- Simulation completion status
- Score and decision accuracy
- Time taken
- Individual decision choices
- Completion timestamp

## 4. Current Mock Database Schema

```javascript
// Simulations data in mock DB
{
  "userId": "user_1",
  "simulations": {
    "user_1": {
      "completed": ["phishing_email", "otp_call"],  // Array of completed simulation IDs
      "inProgress": null,                            // Currently active simulation ID
      "results": {
        "phishing_email": {
          "completedAt": "2024-02-06T10:00:00Z",
          "score": 80,                               // Percentage (0-100)
          "correctDecisions": 4,                     // Number of safe decisions
          "totalDecisions": 5,                       // Total decision points
          "timeTaken": 180                           // Seconds
        },
        "otp_call": {
          "completedAt": "2024-02-07T11:30:00Z",
          "score": 70,
          "correctDecisions": 3,
          "totalDecisions": 5,
          "timeTaken": 240
        }
      }
    }
  }
}
```

### Field Purposes
- **completed**: Array of simulation IDs user has finished
- **inProgress**: ID of simulation currently being attempted (null if none)
- **results**: Object mapping simulation IDs to their results
- **completedAt**: ISO timestamp of completion
- **score**: Percentage score based on correct decisions
- **correctDecisions**: Count of safe/correct decisions made
- **totalDecisions**: Total number of decision points in scenario
- **timeTaken**: Time spent in seconds (for analytics)

### Data Types
- **Array**: completed (array of strings)
- **String**: inProgress, simulation IDs
- **Number**: score, correctDecisions, totalDecisions, timeTaken
- **ISO 8601 Timestamp**: completedAt
- **Object**: results (nested object structure)

### Update Triggers
- Simulation start → Sets inProgress field
- Simulation completion → Adds to completed array, saves result, clears inProgress
- Dashboard refresh → Reads simulation counts
- Certificate eligibility check → Counts completed simulations

## 5. Backend-Ready Data Model (Future)

### SQL Tables

```sql
-- Simulation completions table
CREATE TABLE simulation_completions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  simulation_id VARCHAR(100),
  score INTEGER CHECK (score >= 0 AND score <= 100),
  correct_decisions INTEGER,
  total_decisions INTEGER,
  time_taken INTEGER,  -- in seconds
  completed_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Simulation decisions table (detailed tracking)
CREATE TABLE simulation_decisions (
  id UUID PRIMARY KEY,
  completion_id UUID REFERENCES simulation_completions(id) ON DELETE CASCADE,
  step_id VARCHAR(100),
  decision_id VARCHAR(100),
  is_safe BOOLEAN,
  risk_level VARCHAR(20),
  decided_at TIMESTAMP DEFAULT NOW()
);

-- Simulation progress table (for in-progress tracking)
CREATE TABLE simulation_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  simulation_id VARCHAR(100),
  current_step_index INTEGER DEFAULT 0,
  started_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, simulation_id)
);

-- Indexes
CREATE INDEX idx_sim_completions_user_id ON simulation_completions(user_id);
CREATE INDEX idx_sim_completions_simulation_id ON simulation_completions(simulation_id);
CREATE INDEX idx_sim_progress_user_id ON simulation_progress(user_id);
```

### NoSQL Collections (Alternative)

```javascript
// simulationCompletions collection
{
  "_id": "completion_1",
  "userId": "user_1",
  "simulationId": "phishing_email",
  "score": 80,
  "correctDecisions": 4,
  "totalDecisions": 5,
  "timeTaken": 180,
  "decisions": [
    {
      "stepId": "step_1",
      "decisionId": "decision_1_a",
      "isSafe": true,
      "riskLevel": "safe",
      "decidedAt": ISODate("2024-02-06T09:55:00Z")
    }
  ],
  "completedAt": ISODate("2024-02-06T10:00:00Z"),
  "createdAt": ISODate("2024-02-06T09:50:00Z")
}

// simulationProgress collection (for in-progress tracking)
{
  "_id": "progress_1",
  "userId": "user_1",
  "simulationId": "otp_call",
  "currentStepIndex": 2,
  "decisions": [
    {
      "stepId": "step_1",
      "decisionId": "decision_1_b",
      "isSafe": false
    }
  ],
  "startedAt": ISODate("2024-02-07T11:20:00Z"),
  "updatedAt": ISODate("2024-02-07T11:25:00Z")
}
```

### Suggested API Endpoints

```
GET  /api/simulations                           # Get available simulations
GET  /api/simulations/:simulationId             # Get simulation details
GET  /api/simulations/user/:userId              # Get user's simulation progress
POST /api/simulations/start                     # Start a simulation
POST /api/simulations/decision                  # Save a decision
POST /api/simulations/complete                  # Complete a simulation
GET  /api/simulations/results/:userId           # Get user's simulation results
```

### Relationships with Other Features
- **Dashboard**: Displays simulation completion count and last simulation
- **Quiz**: Recommends simulations based on weak areas
- **Learning**: Simulations reinforce learning module concepts
- **Certificate**: Requires minimum simulation completions for eligibility
- **Safety Report**: Includes simulation performance in report

## 6. Edge Cases & Rules

### What Happens on Reset
- All simulation completions are deleted
- inProgress is cleared
- User can retake all simulations as if first time
- Dashboard shows 0 completions
- Certificate eligibility resets

### What Happens on Re-attempt
- Simulations can be retaken unlimited times
- Each completion is recorded (history maintained)
- Dashboard shows total completion count
- Best score can be tracked (future enhancement)

### What is User-Scoped vs Global
**User-Scoped**:
- Simulation completions and results
- Decision history
- Progress tracking
- Completion timestamps

**Global**:
- Available simulations list
- Scenario content and flow
- Feedback messages
- Safety tips

### What Should NOT Be Stored
- Temporary UI state (current step, animations)
- Scenario content (should be in separate scenarios table)
- Feedback text (should be in scenarios data)
- Intermediate navigation state

## 7. Integration Dependencies

### Which Other Features Read This Data
- **Dashboard**: Displays completion count and last simulation
- **Certificate**: Checks simulation count for eligibility
- **Safety Report**: Includes simulation performance
- **Quiz Recommendations**: Suggests simulations based on weak areas

### Which Features Update This Data
- **Simulation Flow**: Updates progress and completions
- **Profile Reset**: Clears simulation data

### Order of Operations
1. User selects simulation → Load scenario data
2. User starts simulation → Create progress record, set inProgress
3. User makes decision → Save decision to progress
4. User completes simulation → Calculate score, save result, add to completed array
5. Clear inProgress → Mark simulation as finished
6. Add activity entry → "Completed [Simulation Name]"
7. Re-evaluate certificate eligibility
8. Navigate to completion page

## Backend Migration Notes

- Scenario content should be stored in database (not hardcoded)
- Support versioning of scenarios for updates
- Implement progressive save (save decisions as user progresses)
- Track time per decision (not just total time)
- Add analytics: completion rates, common mistakes, average scores
- Consider difficulty levels and adaptive scenario selection
- Implement pause/resume functionality
- Add validation: ensure decisions are valid before saving
- Consider branching scenarios (different paths based on decisions)
- Track abandonment rate (started but not completed)
