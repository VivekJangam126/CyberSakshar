# User Journey - Cyber Fraud Simulation

## Complete User Flow

### 1. Entry Point: Simulation Landing Page
**Route**: `/simulations`  
**Component**: `SimulationPage.jsx`

**User sees**:
- Hero section with feature title and description
- Three info cards explaining the feature:
  - "Learn by Doing" - Practice real scenarios
  - "100% Safe" - No real risk
  - "Instant Feedback" - Understand why choices matter
- Important note: "This is NOT a test or game"
- Two scenario cards:
  - Fake Bank OTP Call
  - Phishing SMS/Email

**User action**: Clicks "Start Practice" on a scenario card

---

### 2. Scenario Introduction
**Route**: `/simulations/intro`  
**Component**: `SimulationIntro.jsx`

**User sees**:
- Scenario title (e.g., "A Call From Your Bank?")
- Metadata badges:
  - Category (Phone Fraud)
  - Time estimate (3-4 minutes)
  - XP reward (+50 XP)
- Main message: "This is a safe practice environment"
- Instruction: "Choose what you would do. No penalties."
- Important safety note (e.g., "Banks NEVER ask for OTP")
- What to expect (4 numbered points)
- Reassurance: "NOT a test, NOT a game"

**User action**: Clicks "Start Simulation"

---

### 3. First Scenario Step
**Route**: `/simulations/scenario`  
**Component**: `SimulationScenario.jsx`

**User sees**:
- Progress bar (Step 1 of 2)
- Step title (e.g., "The Phone Rings")
- Context badge (e.g., "It's 2 PM on a weekday")
- Situation description in message-style format:
  - Detailed scenario text
  - What the caller says
  - How it feels
- Prompt: "What would you do?"
- 4 decision options (A, B, C, D):
  - Each with clear text
  - Hover effects
  - No indication of correct/incorrect

**User action**: Clicks one of the decision options

---

### 4. Decision Confirmation
**Route**: `/simulations/decision`  
**Component**: `SimulationDecision.jsx`

**User sees**:
- Checkmark icon
- "You chose:" heading
- Their selected decision text
- Loading animation (3 bouncing dots)
- "Analyzing your decision..." message

**Duration**: 1.5 seconds (auto-advances)

**User action**: None (automatic transition)

---

### 5. Feedback on Decision
**Route**: `/simulations/feedback`  
**Component**: `SimulationFeedback.jsx`

**User sees**:
- Result badge:
  - Green "Safe Choice" OR Orange "Risky Choice"
- Feedback title (e.g., "Excellent Decision!" or "This Could Be Risky")
- Main feedback card with three sections:
  
  **Section 1: Why This Matters** (Blue)
  - Explanation of why the choice is safe/risky
  - Impact of the decision
  
  **Section 2: What Scammers Do** (Red/Rose)
  - Attacker tactics and psychology
  - How fraudsters operate
  
  **Section 3: Correct Action** (Green/Amber)
  - What to do in real situations
  - Best practices
  
- Safety Tip (Orange highlight):
  - Key takeaway in bold
  - Memorable, actionable advice
  
- Decision recap:
  - Shows what user chose
  
- Continue button

**User action**: Clicks "Continue"

---

### 6. Second Scenario Step
**Route**: `/simulations/scenario`  
**Component**: `SimulationScenario.jsx`

**User sees**:
- Progress bar (Step 2 of 2)
- New step title (e.g., "The OTP Request")
- Updated context
- New situation (escalation of the scenario)
- New prompt: "What would you do?"
- 4 new decision options

**User action**: Clicks one of the decision options

---

### 7. Second Decision Confirmation
**Route**: `/simulations/decision`  
**Component**: `SimulationDecision.jsx`

(Same as step 4)

---

### 8. Second Feedback
**Route**: `/simulations/feedback`  
**Component**: `SimulationFeedback.jsx`

**User sees**:
(Same structure as step 5, but with different content)

**User action**: Clicks "Complete Simulation"

---

### 9. Simulation Complete
**Route**: `/simulations/complete`  
**Component**: `SimulationComplete.jsx`

**User sees**:
- "Simulation Complete" badge (Green)
- Completion title
- Summary message
- XP reward display:
  - Large "+50 XP" with icon
  - Emerald/green styling
  
- Performance summary:
  - Safe choices count
  - Total decisions count
  - Visual ratio display
  
- Key Safety Rules section:
  - 5 numbered rules to remember
  - Each in a card with orange numbering
  
- Real World Impact section (Red/Rose):
  - Statistics about the fraud type
  - Why it matters
  
- What You Can Do Next section (Dark):
  - 4-5 actionable next steps
  - Checkmark icons
  - Practical advice
  
- Two action buttons:
  - "Try Another Simulation" (Primary)
  - "Return to Dashboard" (Secondary)
  
- Bottom message:
  - Encouragement
  - Call to share knowledge

**User action**: 
- Clicks "Try Another Simulation" → Returns to step 1
- Clicks "Return to Dashboard" → Goes to dashboard

---

## User Experience Principles

### Throughout the Journey

#### Tone
- **Supportive**: "Great job!" / "Learning from mistakes makes you stronger"
- **Educational**: Clear explanations of why choices matter
- **Non-judgmental**: No shaming for risky choices
- **Encouraging**: Positive reinforcement throughout

#### Visual Design
- **Consistent**: Same color scheme and typography throughout
- **Calm**: Soft colors, no harsh reds or alarming visuals
- **Clear**: Good contrast, readable text, clear hierarchy
- **Responsive**: Works on all device sizes

#### Interaction
- **Smooth**: Fade-in animations, smooth transitions
- **Intuitive**: Clear buttons, obvious next steps
- **Accessible**: Keyboard navigation, screen reader friendly
- **Forgiving**: Can't make "wrong" choices, only learning opportunities

### Key Moments

#### Moment 1: First Impression (Landing Page)
**Goal**: Make user feel safe and curious
- Clear explanation of what this is (and isn't)
- Emphasis on learning, not testing
- Attractive scenario cards

#### Moment 2: Scenario Introduction
**Goal**: Set expectations and reduce anxiety
- Reassurance about safety
- Clear time commitment
- Important safety note upfront

#### Moment 3: First Decision
**Goal**: Engage user in realistic scenario
- Immersive situation description
- Realistic decision options
- No pressure or time limits

#### Moment 4: First Feedback
**Goal**: Teach without judging
- Immediate, clear feedback
- Explanation of attacker tactics
- Actionable advice for real life

#### Moment 5: Completion
**Goal**: Reinforce learning and motivate continuation
- Celebrate completion
- Summarize key learnings
- Provide next steps
- Encourage practice

## Emotional Journey

### Landing Page
**Emotion**: Curious, slightly uncertain
**Message**: "This looks interesting and safe"

### Introduction
**Emotion**: Reassured, ready
**Message**: "I understand what to expect"

### First Scenario
**Emotion**: Engaged, thinking
**Message**: "This feels real, what would I actually do?"

### First Feedback
**Emotion**: Enlightened, validated or corrected
**Message**: "Ah, I see why that matters"

### Second Scenario
**Emotion**: More confident, applying learning
**Message**: "I'm getting better at this"

### Second Feedback
**Emotion**: Reinforced learning
**Message**: "This makes sense now"

### Completion
**Emotion**: Accomplished, empowered
**Message**: "I learned something valuable and can protect myself"

## Success Metrics (Future)

### Engagement
- Completion rate per scenario
- Time spent on each page
- Return rate for additional scenarios

### Learning
- Safe choice percentage
- Improvement over multiple attempts
- Knowledge retention (follow-up quiz)

### Behavior Change
- Real-world application (survey)
- Sharing with others
- Reporting suspicious activity

## Accessibility Considerations

### Visual
- High contrast text
- Clear visual hierarchy
- No color-only indicators
- Readable font sizes

### Motor
- Large tap targets (44x44px minimum)
- No time-based interactions (except auto-advance)
- Keyboard navigation support
- No precise clicking required

### Cognitive
- Simple, clear language
- One concept at a time
- Progressive disclosure
- Consistent patterns

### Screen Readers
- Semantic HTML
- Descriptive labels
- Logical tab order
- Status announcements

## Mobile Experience

### Optimizations
- Touch-friendly buttons
- Vertical scrolling (no horizontal)
- Readable text without zooming
- Fast loading times
- Offline capability (future)

### Considerations
- Thumb-friendly button placement
- Minimal text input
- Clear visual feedback
- Swipe gestures (future)

## Desktop Experience

### Enhancements
- Larger cards and spacing
- Multi-column layouts
- Hover effects
- Keyboard shortcuts (future)

### Considerations
- Center-aligned content (max-width)
- Comfortable reading line length
- Clear focus states
- Mouse-friendly interactions

## Edge Cases Handled

### Navigation
- Direct URL access redirects to landing
- Missing state redirects to landing
- Browser back button works correctly
- Refresh preserves progress (future)

### Content
- Long text wraps properly
- Images load gracefully (if added)
- Empty states handled
- Error states handled (future)

### Devices
- Small phones (320px width)
- Large desktops (1920px+ width)
- Tablets in portrait/landscape
- Touch and mouse inputs

## Future Enhancements

### Personalization
- Remember completed scenarios
- Suggest next scenarios
- Track improvement over time
- Personalized difficulty

### Social
- Share achievements
- Challenge friends
- Community discussions
- Expert Q&A

### Content
- More scenarios
- Video demonstrations
- Audio narration
- Multiple languages

### Gamification (Light)
- Badges for completion
- Streak tracking
- Progress milestones
- Learning paths

---

**Note**: This journey is designed to be educational, supportive, and empowering. Every interaction reinforces the core message: "You can learn to protect yourself from cyber fraud through safe practice."
