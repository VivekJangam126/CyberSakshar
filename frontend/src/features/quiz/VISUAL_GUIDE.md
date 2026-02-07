# Quiz Engine - Visual Design Guide

## 🎨 Page-by-Page Visual Breakdown

---

## 1. QuizIntro Page (`/quiz`)

### Layout
```
┌─────────────────────────────────────────┐
│  [Badge] Cyber Safety Assessment        │
│                                         │
│  How Safe Are You in the                │
│  Digital World? [underline]             │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  What is this assessment?         │ │
│  │  [Description text]               │ │
│  │                                   │ │
│  │  [4 Feature Cards in 2x2 grid]   │ │
│  │  • No Right or Wrong              │ │
│  │  • Takes 5 Minutes                │ │
│  │  • Get Your Safety Level          │ │
│  │  • Personalized Guidance          │ │
│  │                                   │ │
│  │  [What you'll discover box]       │ │
│  │  1. Current awareness level       │ │
│  │  2. Areas doing great             │ │
│  │  3. Areas to improve              │ │
│  │  4. Personalized learning path    │ │
│  │                                   │ │
│  │  [Privacy Note]                   │ │
│  │                                   │ │
│  │  [Start Safety Check Button]     │ │
│  └───────────────────────────────────┘ │
│                                         │
│  Remember: This is about learning...    │
└─────────────────────────────────────────┘
```

### Colors
- Background: `from-orange-100 via-white to-orange-50`
- Badge: Orange border, orange background
- Cards: Colored borders (emerald, blue, amber, purple)
- Dark box: Slate-900 background
- Button: Orange gradient

---

## 2. QuizAssessment Page (`/quiz/assessment`)

### Layout
```
┌─────────────────────────────────────────┐
│  Cyber Safety Assessment    [Exit]      │
│  Question 3 of 8            38%         │
│  [Progress Bar ████████░░░░░░░░░]      │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  You receive a message saying     │ │
│  │  you've won a lottery...          │ │
│  │                                   │ │
│  │  [Scenario Box]                   │ │
│  │  A message claims you won...      │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ A  Share my bank details        │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ B  Ignore and delete [SELECTED] │   │
│  │    ✓ Excellent choice! This is  │   │
│  │      the safest response...     │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ C  Call the number to verify    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ D  Forward it to friends        │   │
│  └─────────────────────────────────┘   │
│                                         │
│  [Previous]          [Next Question]    │
└─────────────────────────────────────────┘
```

### Colors
- Background: `from-slate-50 via-white to-amber-50/30`
- Progress bar: Orange gradient
- Question card: White with slate border
- Scenario box: Amber background
- Selected option: Orange border, orange background
- Feedback: Green/amber/rose based on risk level

### States
- **Unselected**: White background, slate border
- **Selected (before feedback)**: Orange border, orange background
- **Selected (with feedback)**: 
  - Low risk: Emerald border/background
  - Medium risk: Amber border/background
  - High risk: Rose border/background

---

## 3. QuizAnalyzing Page (`/quiz/analyzing`)

### Layout
```
┌─────────────────────────────────────────┐
│                                         │
│              [Spinning Ring]            │
│           [Pulsing Center Circle]       │
│              [Shield Icon]              │
│                                         │
│      Analyzing Your Responses           │
│                                         │
│  Our system is evaluating your          │
│  cyber safety awareness...              │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ ✓ Reviewing your choices        │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ ● Calculating risk level        │   │
│  └─────────────────────────────────┘   │
│  ┌─────────────────────────────────┐   │
│  │ ○ Preparing recommendations     │   │
│  └─────────────────────────────────┘   │
│                                         │
│  This will only take a moment...        │
│                                         │
└─────────────────────────────────────────┘
```

### Colors
- Background: `from-slate-900 via-slate-800 to-slate-900`
- Spinning ring: Orange on slate
- Center circle: Orange gradient with glow
- Text: White and slate-300
- Progress boxes: White/5 with backdrop blur

### Animations
- Outer ring: Spinning continuously
- Center circle: Pulsing
- First step: Checkmark (complete)
- Second step: Pulsing dot (in progress)
- Third step: Empty circle (pending)

---

## 4. QuizResult Page (`/quiz/result`)

### Layout
```
┌─────────────────────────────────────────┐
│  [Badge] Assessment Complete            │
│                                         │
│  Your Cyber Safety Report               │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  Your Cyber Safety Level          │ │
│  │                                   │ │
│  │  ┌─────────────────────────────┐ │ │
│  │  │  Intermediate               │ │ │
│  │  │  Growing Awareness          │ │ │
│  │  └─────────────────────────────┘ │ │
│  │                                   │ │
│  │  You understand many cyber        │ │
│  │  threats and make mostly safe...  │ │
│  │                                   │ │
│  │  Awareness Progress               │ │
│  │  [Progress Bar ████████░░] 60%   │ │
│  │                                   │ │
│  │  ─────────────────────────────    │ │
│  │                                   │ │
│  │  Risk Assessment                  │ │
│  │  [Risk Indicator: Medium 55%]    │ │
│  │                                   │ │
│  │  You have good basic awareness... │ │
│  │                                   │ │
│  │  [3 Cards: Safe/Moderate/Risky]  │ │
│  │  3 Safe | 3 Moderate | 2 Risky   │ │
│  └───────────────────────────────────┘ │
│                                         │
│  [Dark Box: What This Means]            │
│  1. You answered 8 scenarios            │
│  2. You're at Intermediate level        │
│  3. We've identified areas to improve   │
│                                         │
│  [View Recommendations] [Dashboard]     │
│                                         │
│  Remember: Everyone can improve...      │
└─────────────────────────────────────────┘
```

### Colors
- Background: `from-orange-100 via-white to-orange-50`
- Badge: Emerald (success)
- Safety level card: Amber (intermediate)
- Progress bar: Amber gradient
- Risk indicator: Amber (medium)
- Breakdown cards: Emerald, amber, rose
- Dark box: Slate-900

### Dynamic Elements
- Safety level color changes based on result
- Progress bar width animates
- Risk indicator color changes
- Numbers in breakdown cards

---

## 5. QuizRecommendations Page (`/quiz/recommendations`)

### Layout
```
┌─────────────────────────────────────────┐
│  [Badge] Personalized for You           │
│                                         │
│  Your Learning Path                     │
│                                         │
│  Based on your assessment, here are...  │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  [1] Phishing Awareness           │ │
│  │  Learn to identify and avoid...   │ │
│  │                                   │ │
│  │  Recommended Lessons              │ │
│  │  [Spotting Fake Messages]         │ │
│  │  [Email Safety Basics]            │ │
│  │                                   │ │
│  │  Practice Simulations             │ │
│  │  [Phishing Email Challenge]       │ │
│  │                                   │ │
│  │  [Start Learning]                 │ │
│  └───────────────────────────────────┘ │
│                                         │
│  [Similar cards for recommendations    │
│   #2 and #3]                           │
│                                         │
│  [Dark Box: Why These Recommendations] │
│  • Your current awareness gaps          │
│  • Most common cyber threats            │
│  • Quick wins for better protection     │
│                                         │
│  [Next Steps Box]                       │
│  Ready to improve your safety?          │
│  [Browse Lessons] [Try Simulations]     │
│  [Dashboard]                            │
│                                         │
│  You've taken the first step...         │
└─────────────────────────────────────────┘
```

### Colors
- Background: `from-slate-50 via-white to-blue-50/30`
- Badge: Purple
- Recommendation cards: White with hover effects
- Number badges: Orange gradient
- Lesson cards: Emerald background
- Simulation cards: Blue background
- Dark box: Slate-900
- Next steps box: Amber gradient background

---

## 🎨 Color Palette Reference

### Primary Colors
```
Orange:  #f97316  (orange-500)
Amber:   #f59e0b  (amber-500)
```

### Success/Safe
```
Emerald: #10b981  (emerald-500)
Green:   #22c55e  (green-600)
```

### Warning/Medium
```
Amber:   #f59e0b  (amber-500)
Orange:  #f97316  (orange-500)
```

### Danger/High Risk
```
Rose:    #f43f5e  (rose-600)
Red:     #dc2626  (red-600)
```

### Neutral
```
Slate-50:  #f8fafc
Slate-200: #e2e8f0
Slate-600: #475569
Slate-900: #0f172a
White:     #ffffff
```

---

## 📐 Spacing & Sizing

### Container Widths
- Max width: `max-w-4xl` (896px) for most pages
- Max width: `max-w-5xl` (1024px) for recommendations
- Max width: `max-w-2xl` (672px) for analyzing page

### Padding
- Page padding: `px-4 py-12` (mobile)
- Card padding: `p-6 sm:p-8` (responsive)
- Button padding: `px-8 py-3` (standard)

### Gaps
- Section gaps: `space-y-6` or `space-y-8`
- Grid gaps: `gap-3` or `gap-4`
- Flex gaps: `gap-3` or `gap-4`

### Border Radius
- Small: `rounded-xl` (12px)
- Medium: `rounded-2xl` (16px)
- Large: `rounded-3xl` (24px)
- Full: `rounded-full` (9999px)

---

## 🎭 Interactive States

### Buttons
```
Default:  bg-gradient-to-r from-orange-500 to-orange-600
Hover:    from-orange-600 to-orange-700 + shadow-xl
Active:   scale-95
Disabled: opacity-50 + cursor-not-allowed
```

### Cards
```
Default:  border-2 border-slate-200 bg-white/90
Hover:    -translate-y-1 + shadow-2xl
Active:   scale-[0.98]
```

### Options
```
Unselected:  border-slate-200 bg-white
Hover:       border-orange-300 bg-orange-50/50
Selected:    border-orange-400 bg-orange-50 ring-2
With Feedback: border-[color] bg-[color]-50 ring-2
```

---

## 🎬 Animations

### Progress Bar
```css
transition-all duration-500 ease-out
width: ${percentage}%
```

### Analyzing Spinner
```css
animate-spin (outer ring)
animate-pulse (center circle)
```

### Page Transitions
```css
opacity-0 translate-y-4 → opacity-100 translate-y-0
transition-all duration-1000
```

### Hover Effects
```css
hover:-translate-y-1
hover:shadow-xl
transition-all duration-200/300
```

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)
- Single column
- Stacked buttons
- Smaller text sizes
- Reduced padding

### Tablet (640px - 1024px)
- 2-column grids
- Side-by-side buttons
- Medium text sizes
- Standard padding

### Desktop (> 1024px)
- Multi-column grids
- Full layouts
- Large text sizes
- Enhanced padding

---

## ♿ Accessibility Features

### Focus States
```css
focus:ring-2 focus:ring-orange-300
focus:border-orange-500
focus:outline-none
```

### Color Contrast
- Text on white: Minimum 4.5:1
- Text on colored backgrounds: Minimum 3:1
- Interactive elements: Clear visual distinction

### Touch Targets
- Minimum size: 44px × 44px
- Adequate spacing between targets
- Clear hit areas

---

## 🎯 Key Visual Principles

1. **Consistency**: Same patterns across all pages
2. **Hierarchy**: Clear visual hierarchy with size/weight
3. **Whitespace**: Generous spacing for readability
4. **Color**: Meaningful use of color (not decorative)
5. **Typography**: Readable sizes, clear hierarchy
6. **Feedback**: Immediate visual feedback on interactions
7. **Accessibility**: High contrast, clear focus states
8. **Responsiveness**: Mobile-first, scales beautifully

---

**Design System**: CyberSakshar
**Font**: Fraunces (serif)
**Framework**: Tailwind CSS
**Approach**: Warm, trustworthy, citizen-friendly
