# Quick Start Guide - Simulation Feature

## Getting Started

The Cyber Fraud Simulation feature is now fully integrated into the CyberSakshar platform. Here's how to use and extend it.

## Accessing the Feature

### Routes
- Main page: `http://localhost:5173/simulations`
- All routes are handled by `SimulationRouter.jsx`

### Navigation
The feature is accessible from:
- Dashboard (add a link/button to `/simulations`)
- Direct URL navigation

## File Organization

```
simulations/
├── pages/              # 5 page components (Intro → Scenario → Decision → Feedback → Complete)
├── components/         # 5 reusable components
├── data/              # 2 mock scenarios (OTP Call, Phishing)
├── engine/            # ScenarioEngine utility
├── SimulationRouter.jsx
├── SimulationPage.jsx
└── simulationAPI.js   # Placeholder (not used in MVP)
```

## Adding a New Scenario

### Step 1: Create Scenario Data File

Create a new file in `data/` folder:

```javascript
// data/newScenario.js
export const newScenario = {
  id: 'unique-scenario-id',
  title: 'Scenario Title',
  description: 'Brief description for card',
  difficulty: 'Common', // or 'Moderate', 'Advanced'
  estimatedTime: '3-4 minutes',
  category: 'Category Name',
  xpReward: 50,
  
  intro: {
    title: 'Introduction Title',
    message: 'This is a safe practice environment...',
    instruction: 'Choose what you would do...',
    safetyNote: 'Important safety information'
  },
  
  steps: [
    {
      id: 'step-1',
      type: 'scenario',
      title: 'Step Title',
      situation: 'Detailed situation description...',
      context: 'Context information',
      decisions: [
        {
          id: 'decision-1-a',
          text: 'Decision option text',
          isSafe: false,
          riskLevel: 'high', // 'high', 'medium', 'low'
          nextStep: 'feedback-1-a'
        },
        // Add 2-4 decision options
      ]
    },
    // Add more steps as needed
  ],
  
  feedback: {
    'feedback-1-a': {
      isCorrect: false,
      title: 'Feedback Title',
      explanation: 'Why this choice matters...',
      whatScammersDo: 'What attackers do...',
      correctAction: 'What to do instead...',
      safetyTip: 'Key safety tip',
      nextStep: 'step-2' // or 'complete'
    },
    // Add feedback for each decision
  },
  
  completion: {
    title: 'Simulation Complete',
    message: 'Summary message...',
    keySafetyRules: [
      'Rule 1',
      'Rule 2',
      // Add 3-5 key rules
    ],
    realWorldImpact: 'Statistics or real-world impact...',
    nextSteps: [
      'Action 1',
      'Action 2',
      // Add 3-5 next steps
    ]
  }
};
```

### Step 2: Import in SimulationPage.jsx

```javascript
import { newScenario } from './data/newScenario';

// Add to scenarios array
const scenarios = [otpCallScenario, phishingScenario, newScenario];
```

That's it! The new scenario will appear on the main page.

## Customizing Components

### Changing Colors

Edit the Tailwind classes in components:

```javascript
// For safe choices (currently emerald)
className="border-emerald-200 bg-emerald-50 text-emerald-700"

// For risky choices (currently rose)
className="border-rose-200 bg-rose-50 text-rose-700"

// For info (currently blue)
className="border-blue-200 bg-blue-50 text-blue-700"
```

### Modifying Feedback Layout

Edit `components/FeedbackCard.jsx`:
- Change section order
- Add new sections
- Modify styling

### Adjusting Page Flow

Edit `SimulationRouter.jsx` to:
- Add new pages
- Change route paths
- Modify navigation flow

## Testing Your Changes

### 1. Start Development Server
```bash
cd frontend
npm run dev
```

### 2. Navigate to Simulations
Open `http://localhost:5173/simulations`

### 3. Test Flow
- Select a scenario
- Go through all steps
- Verify feedback displays correctly
- Check completion page

### 4. Test Responsiveness
- Resize browser window
- Test on mobile device
- Check all breakpoints

## Common Customizations

### Change XP Rewards
Edit the `xpReward` value in scenario data:
```javascript
xpReward: 100, // Changed from 50
```

### Add More Decision Options
Add more objects to the `decisions` array:
```javascript
decisions: [
  { id: 'decision-1-a', text: 'Option A', ... },
  { id: 'decision-1-b', text: 'Option B', ... },
  { id: 'decision-1-c', text: 'Option C', ... },
  { id: 'decision-1-d', text: 'Option D', ... },
  { id: 'decision-1-e', text: 'Option E', ... }, // New option
]
```

### Modify Time Estimates
Change `estimatedTime` in scenario data:
```javascript
estimatedTime: '5-6 minutes', // Changed from 3-4
```

### Add More Steps
Add more step objects to the `steps` array:
```javascript
steps: [
  { id: 'step-1', ... },
  { id: 'step-2', ... },
  { id: 'step-3', ... }, // New step
]
```

## Integrating with Dashboard

### Add Navigation Link

In `DashboardQuickActions.jsx` or similar:

```javascript
<button
  onClick={() => navigate('/simulations')}
  className="..."
>
  <svg>...</svg>
  <span>Practice Simulations</span>
</button>
```

### Add Stats Card

In `DashboardSafetySummary.jsx` or similar:

```javascript
<div className="...">
  <h3>Simulations Completed</h3>
  <p className="text-3xl font-bold">3</p>
  <p className="text-sm">Keep practicing!</p>
</div>
```

## Backend Integration (Future)

When ready to connect to backend:

### 1. Update simulationAPI.js

```javascript
export const simulationAPI = {
  getScenarios: async () => {
    const response = await apiClient.get('/api/simulations');
    return response.data;
  },
  
  submitSimulation: async (data) => {
    const response = await apiClient.post('/api/simulations/submit', data);
    return response.data;
  },
  
  getProgress: async () => {
    const response = await apiClient.get('/api/simulations/progress');
    return response.data;
  }
};
```

### 2. Update SimulationPage.jsx

```javascript
const [scenarios, setScenarios] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadScenarios = async () => {
    try {
      const data = await simulationAPI.getScenarios();
      setScenarios(data);
    } catch (error) {
      console.error('Failed to load scenarios:', error);
      // Fallback to local data
      setScenarios([otpCallScenario, phishingScenario]);
    } finally {
      setLoading(false);
    }
  };
  
  loadScenarios();
}, []);
```

### 3. Submit Results

In `SimulationComplete.jsx`:

```javascript
useEffect(() => {
  const submitResults = async () => {
    try {
      await simulationAPI.submitSimulation({
        scenarioId: scenario.id,
        decisions: decisions,
        completedAt: new Date().toISOString(),
        xpEarned: scenario.xpReward
      });
    } catch (error) {
      console.error('Failed to submit results:', error);
    }
  };
  
  submitResults();
}, []);
```

## Troubleshooting

### Scenario Not Appearing
- Check if imported in `SimulationPage.jsx`
- Verify scenario object structure
- Check console for errors

### Navigation Not Working
- Verify route in `SimulationRouter.jsx`
- Check state is passed correctly
- Ensure `useNavigate` is used properly

### Styling Issues
- Check Tailwind classes are correct
- Verify responsive breakpoints
- Test in different browsers

### State Not Persisting
- Ensure state is passed via `location.state`
- Check navigation includes state object
- Verify state destructuring in components

## Best Practices

### Content Writing
- Use simple, clear language
- Avoid technical jargon
- Be supportive, not judgmental
- Focus on learning, not testing

### UI Design
- Maintain consistency with Quiz feature
- Use brand colors (orange/amber)
- Ensure mobile responsiveness
- Keep tap targets large (44x44px minimum)

### Code Organization
- Keep components small and focused
- Use meaningful variable names
- Add comments for complex logic
- Follow existing patterns

## Need Help?

Refer to:
- `README.md` - Feature overview and structure
- `DESIGN_GUIDE.md` - Visual design patterns
- Existing scenario files - Data structure examples
- Quiz feature - Similar patterns and components

## Next Steps

1. Test the existing scenarios
2. Review the code structure
3. Try adding a new scenario
4. Customize styling if needed
5. Plan backend integration
6. Add analytics tracking
7. Implement user progress tracking

Happy coding! 🚀
