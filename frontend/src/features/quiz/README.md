# AI-Inspired Adaptive Quiz Engine

## Overview
A full-page cyber safety assessment flow that evaluates users' digital awareness and provides personalized recommendations. This is NOT a traditional exam - it's a safety check that answers: "How safe am I in the digital world?"

## Philosophy
- **Safety Check** - Not an exam or test
- **Risk Assessment** - Identifies vulnerabilities
- **Guidance System** - Provides actionable recommendations
- **Citizen-Friendly** - Simple language, warm tone

## Folder Structure

```
quiz/
├── pages/
│   ├── QuizIntro.jsx              # Welcome & explanation page
│   ├── QuizAssessment.jsx         # Main quiz flow (one question per screen)
│   ├── QuizAnalyzing.jsx          # AI-inspired loading/analysis screen
│   ├── QuizResult.jsx             # Safety level & risk assessment results
│   └── QuizRecommendations.jsx    # Personalized learning recommendations
│
├── components/
│   ├── QuizQuestionCard.jsx       # Question display with scenario
│   ├── QuizOption.jsx             # Answer option with feedback
│   ├── QuizProgress.jsx           # Progress bar component
│   └── RiskIndicator.jsx          # Risk level visual indicator
│
├── data/
│   ├── quizQuestions.js           # Mock quiz questions (8 scenarios)
│   └── riskRules.js               # Risk calculation & recommendation logic
│
└── QuizRouter.jsx                 # Quiz routing configuration
```

## Design System

### Colors
- **Primary**: Orange/Amber (`orange-500`, `orange-600`, `amber-500`)
- **Text**: Slate (`slate-50`, `slate-600`, `slate-900`)
- **Success**: Emerald (`emerald-500`, `emerald-600`)
- **Warning**: Amber (`amber-500`, `amber-600`)
- **Danger**: Rose (`rose-600`, `rose-700`)

### Typography
- **Font**: "Fraunces", "Times New Roman", serif
- **Headings**: `font-black` (900)
- **Subheadings**: `font-bold` (700)
- **Body**: `font-semibold` (600) / `font-medium` (500)

### UI Patterns
- Rounded corners: `rounded-2xl`, `rounded-3xl`
- Shadows: `shadow-lg`, `shadow-xl`, `shadow-2xl`
- Borders: `border-2` with color variants
- Transitions: `transition-all duration-200/300`

## User Flow

1. **QuizIntro** (`/quiz`)
   - Explains the assessment purpose
   - Sets expectations (no right/wrong, 5 minutes, personalized)
   - CTA: "Start Safety Check"

2. **QuizAssessment** (`/quiz/assessment`)
   - One question per screen
   - Real-life cyber scenarios
   - 4 options per question
   - Immediate feedback after selection
   - Progress indicator
   - Navigation: Previous/Next buttons

3. **QuizAnalyzing** (`/quiz/analyzing`)
   - 2.5 second loading screen
   - Animated analysis indicators
   - Creates "AI intelligence" perception
   - Auto-navigates to results

4. **QuizResult** (`/quiz/result`)
   - Cyber Safety Level (Beginner/Intermediate/Advanced)
   - Risk Score (Low/Medium/High)
   - Detailed breakdown of choices
   - Explanation of results
   - CTA: "View Recommendations"

5. **QuizRecommendations** (`/quiz/recommendations`)
   - Top 3 personalized recommendations
   - Recommended lessons per category
   - Practice simulations
   - CTAs: Browse Lessons, Try Simulations, Dashboard

## Key Features

### Adaptive Language
- ❌ Avoid: Score, Pass/Fail, Marks, Test
- ✅ Use: Safety Level, Risk Score, Awareness, Protection

### Real-Life Scenarios
Questions are based on everyday situations:
- Lottery scam messages
- Public WiFi usage
- Suspicious links from friends
- Phishing emails
- Password practices
- Tech support scams
- Online payment safety

### Risk Assessment
Each answer has a risk level:
- **Low Risk**: Safe, secure choice
- **Medium Risk**: Partially safe, room for improvement
- **High Risk**: Vulnerable, needs attention

### Personalized Recommendations
Based on weak areas identified:
- Phishing Awareness
- Network Safety
- Device Protection
- Password Security
- Social Engineering Defense
- Online Shopping Safety

## Mock Data

### Questions (8 total)
Located in `data/quizQuestions.js`:
- Real-world cyber scenarios
- 4 options each
- Risk level per option
- Immediate feedback
- Category tags for recommendations

### Risk Rules
Located in `data/riskRules.js`:
- Risk score calculation
- Safety level determination
- Risk level details
- Recommendation generation

## Integration

### Routes
The quiz is integrated into the main app routing:

```jsx
// In frontend/src/app/routes.jsx
{
  path: 'quiz/*',
  element: <QuizRouter />,
}
```

### Dashboard Link
Quick action button in Dashboard:
- "Take Safety Quiz"
- "Check your cyber awareness level"
- Links to `/quiz`

## Future Enhancements (Backend Integration)

When implementing backend:
1. Save quiz responses to database
2. Track user progress over time
3. Implement true adaptive logic (adjust difficulty based on answers)
4. Generate detailed analytics
5. Compare results with previous attempts
6. Integrate with learning progress tracking
7. Award badges/XP for completion

## Mobile Responsiveness

All components are mobile-first:
- Touch-friendly option buttons
- Responsive grid layouts
- Readable text sizes
- Proper spacing for small screens
- Smooth transitions

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast colors
- Clear focus states

## Testing the Quiz

1. Navigate to `/quiz` or click "Take Safety Quiz" from Dashboard
2. Read the introduction and click "Start Safety Check"
3. Answer all 8 questions (select any option to see feedback)
4. Watch the analyzing animation
5. View your results (safety level, risk score, breakdown)
6. Explore personalized recommendations
7. Navigate to lessons, simulations, or dashboard

## Notes

- All data is currently mock/static
- No backend API calls yet
- Results are calculated client-side
- Recommendations are rule-based
- Perfect for demo/hackathon presentation
- Ready for backend integration when needed
