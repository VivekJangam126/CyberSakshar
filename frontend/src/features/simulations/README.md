# Cyber Fraud Simulation Feature

## Overview

The Scenario-Based Cyber Fraud Simulation is a **safe practice environment** that allows users to experience real-world cyber fraud situations and learn correct actions under pressure. This is NOT a quiz, NOT a test, and NOT a game - it's a learning tool focused on building safe habits.

## Core Philosophy

- **Practice > Awareness**: Users learn by doing, not just reading
- **Action > Theory**: Focus on what to do, not just what to know
- **Safety > Fear**: Supportive, educational tone without panic or shame

## Folder Structure

```
simulations/
├── pages/                          # Main page components
│   ├── SimulationIntro.jsx        # Calm introduction before starting
│   ├── SimulationScenario.jsx     # Presents the situation
│   ├── SimulationDecision.jsx     # Brief confirmation screen
│   ├── SimulationFeedback.jsx     # Detailed feedback (MOST IMPORTANT)
│   └── SimulationComplete.jsx     # Summary and key learnings
│
├── components/                     # Reusable UI components
│   ├── ScenarioCard.jsx           # Scenario selection card
│   ├── DecisionOption.jsx         # Decision button component
│   ├── FeedbackCard.jsx           # Feedback display component
│   ├── SafetyTip.jsx              # Safety tip highlight
│   └── SimulationProgress.jsx     # Progress indicator
│
├── data/                           # Mock scenario data
│   ├── otpCallScenario.js         # Fake bank OTP call scenario
│   └── phishingScenario.js        # Phishing SMS/Email scenario
│
├── engine/                         # Utility logic
│   └── ScenarioEngine.js          # Scenario flow management
│
├── SimulationRouter.jsx            # Route configuration
├── SimulationPage.jsx              # Main landing page
└── simulationAPI.js                # API placeholder (not used in MVP)
```

## Page Flow

1. **SimulationPage** → User selects a scenario
2. **SimulationIntro** → Calm introduction, sets expectations
3. **SimulationScenario** → Presents the situation and decision options
4. **SimulationDecision** → Brief confirmation (auto-advances)
5. **SimulationFeedback** → Detailed explanation of the choice
6. **SimulationScenario** → Next step (if any)
7. **SimulationComplete** → Summary, key rules, and next steps

## MVP Scenarios

### 1. Fake Bank OTP Call
- **Category**: Phone Fraud
- **Duration**: 3-4 minutes
- **Steps**: 2 decision points
- **Learning**: Never share OTP, verify callers, recognize urgency tactics

### 2. Phishing SMS/Email
- **Category**: Digital Fraud
- **Duration**: 3-4 minutes
- **Steps**: 2 decision points
- **Learning**: Identify phishing, verify URLs, avoid clicking suspicious links

## Design Guidelines

### Visual Style
- **Colors**: Amber/Orange brand colors, Slate for text
- **Typography**: Fraunces serif font (same as Quiz)
- **Cards**: White/translucent with soft shadows
- **Layout**: Mobile-first, responsive design

### Tone & Language
- **Supportive**: Non-judgmental, encouraging
- **Clear**: Simple, citizen-friendly language
- **Educational**: Focus on learning, not testing
- **Calm**: No fear-based messaging, no panic mechanics

### What to AVOID
- ❌ Dark, fear-based UI
- ❌ Countdown timers or pressure mechanics
- ❌ Trick questions or gotchas
- ❌ Shaming language for wrong choices
- ❌ Emojis or gamification elements
- ❌ Heavy AI claims

## Key Components

### FeedbackCard
The most important component - provides:
- **Explanation**: Why the choice matters
- **What Scammers Do**: Understanding attacker tactics
- **Correct Action**: What to do in real situations

### SafetyTip
Highlights critical safety information in an eye-catching format.

### ScenarioCard
Displays scenario information with:
- Category badge
- Title and description
- Time estimate
- XP reward
- Difficulty level

## Data Structure

Each scenario follows this structure:

```javascript
{
  id: 'unique-id',
  title: 'Scenario Title',
  description: 'Brief description',
  difficulty: 'Common',
  estimatedTime: '3-4 minutes',
  category: 'Phone Fraud',
  xpReward: 50,
  
  intro: {
    title: 'Introduction Title',
    message: 'Main message',
    instruction: 'What to expect',
    safetyNote: 'Important safety information'
  },
  
  steps: [
    {
      id: 'step-1',
      type: 'scenario',
      title: 'Step Title',
      situation: 'Detailed situation description',
      context: 'Context information',
      decisions: [
        {
          id: 'decision-1-a',
          text: 'Decision text',
          isSafe: false,
          riskLevel: 'high',
          nextStep: 'feedback-1-a'
        }
      ]
    }
  ],
  
  feedback: {
    'feedback-1-a': {
      isCorrect: false,
      title: 'Feedback Title',
      explanation: 'Why this matters',
      whatScammersDo: 'Attacker tactics',
      correctAction: 'What to do instead',
      safetyTip: 'Key safety tip',
      nextStep: 'step-2' or 'complete'
    }
  },
  
  completion: {
    title: 'Completion Title',
    message: 'Summary message',
    keySafetyRules: ['Rule 1', 'Rule 2'],
    realWorldImpact: 'Statistics or impact',
    nextSteps: ['Action 1', 'Action 2']
  }
}
```

## Routes

- `/simulations` - Main landing page
- `/simulations/intro` - Scenario introduction
- `/simulations/scenario` - Scenario presentation
- `/simulations/decision` - Decision confirmation
- `/simulations/feedback` - Feedback page
- `/simulations/complete` - Completion summary

## State Management

State is passed through React Router's `location.state`:

```javascript
{
  scenario: scenarioObject,
  currentStepIndex: 0,
  decisions: [decisionObject, ...]
}
```

## Future Enhancements (NOT in MVP)

- Backend API integration
- User progress tracking
- More scenarios (UPI fraud, fake job offers, etc.)
- Multilingual support
- Analytics and insights
- Social sharing of achievements

## Testing Checklist

- [ ] All pages render correctly
- [ ] Navigation flows smoothly
- [ ] Feedback is clear and educational
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Tone is supportive and non-judgmental
- [ ] Safety tips are prominent
- [ ] Completion page summarizes learnings

## Success Criteria

A judge should feel:
- "This teaches citizens what to do in real fraud situations"
- "This is realistic, safe, and educational"
- "This builds habits, not just awareness"

## Notes

- All data is currently mock/local - no backend calls
- API file exists but is not used in MVP
- Focus is on UI/UX and educational content
- Backend integration is planned for future phases
