# Simulation Feature - Design Guide

## Visual Identity

### Color Palette
```
Primary Brand:
- Orange-600: #ea580c (Primary actions, highlights)
- Orange-500: #f97316 (Accents, progress bars)
- Orange-100: #ffedd5 (Light backgrounds)
- Amber-500: #f59e0b (Secondary accents)

Feedback Colors:
- Emerald (Safe): #10b981 (Safe choices, success)
- Rose (Risky): #f43f5e (Risky choices, warnings)
- Blue (Info): #3b82f6 (Information, context)
- Amber (Caution): #f59e0b (Moderate risk)

Neutral:
- Slate-900: #0f172a (Primary text, dark backgrounds)
- Slate-700: #334155 (Secondary text)
- Slate-600: #475569 (Tertiary text)
- Slate-200: #e2e8f0 (Borders)
- Slate-100: #f1f5f9 (Light backgrounds)
- White: #ffffff (Cards, backgrounds)
```

### Typography
```
Font Family: "Fraunces", "Times New Roman", serif
(Consistent with Quiz feature)

Sizes:
- Hero: text-5xl (48px) to text-6xl (60px)
- Page Title: text-4xl (36px)
- Section Title: text-2xl (24px) to text-3xl (30px)
- Body Large: text-xl (20px)
- Body: text-lg (18px)
- Body Small: text-base (16px)
- Caption: text-sm (14px)
- Micro: text-xs (12px)

Weights:
- Black: font-black (900) - Titles, emphasis
- Bold: font-bold (700) - Subtitles, labels
- Semibold: font-semibold (600) - Body emphasis
- Medium: font-medium (500) - Regular text
```

## Component Patterns

### Cards
```jsx
// Standard Card
className="rounded-3xl border-2 border-slate-200 bg-white/90 p-8 shadow-2xl ring-1 ring-white/70 backdrop-blur-sm"

// Info Card (Blue)
className="rounded-2xl border-2 border-blue-100 bg-blue-50 p-6"

// Success Card (Emerald)
className="rounded-2xl border-2 border-emerald-100 bg-emerald-50 p-6"

// Warning Card (Rose)
className="rounded-2xl border-2 border-rose-100 bg-rose-50 p-6"

// Dark Card
className="rounded-3xl border-2 border-slate-900 bg-slate-900 p-8 shadow-2xl"
```

### Badges
```jsx
// Primary Badge
className="inline-flex items-center gap-2 rounded-full border-2 border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-orange-700"

// Success Badge
className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-emerald-700"

// Info Badge
className="inline-flex items-center gap-2 rounded-full border-2 border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-700"
```

### Buttons
```jsx
// Primary Button (uses Button component)
<Button className="px-12 py-4 text-lg font-bold shadow-2xl shadow-orange-500/30">

// Secondary Button
className="rounded-2xl border-2 border-slate-200 bg-white px-10 py-4 text-lg font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"

// Decision Option Button
className="group w-full rounded-2xl border-2 border-slate-200 bg-white p-6 text-left shadow-lg transition-all hover:border-orange-300 hover:bg-orange-50 hover:shadow-xl"
```

### Icons
```jsx
// Icon Container (Small)
className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white"

// Icon Container (Medium)
className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600"

// Icon Container (Large)
className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100"
```

## Layout Patterns

### Page Container
```jsx
<div className="flex min-h-screen flex-col bg-gradient-to-b from-orange-100 via-white to-orange-50"
     style={{ fontFamily: '"Fraunces", "Times New Roman", serif' }}>
  <AppHeader />
  <div className="flex-1 px-4 py-12">
    <div className="mx-auto max-w-4xl">
      {/* Content */}
    </div>
  </div>
  <AppFooter />
</div>
```

### Fade-in Animation
```jsx
const [showContent, setShowContent] = useState(false);

useEffect(() => {
  setTimeout(() => setShowContent(true), 100);
}, []);

<div className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
```

### Grid Layouts
```jsx
// 2-column responsive
className="grid gap-4 sm:grid-cols-2"

// 3-column responsive
className="grid gap-4 sm:grid-cols-3"

// 2-column for cards
className="grid gap-6 md:grid-cols-2"
```

## Spacing System

```
Gap/Space:
- gap-2: 0.5rem (8px)
- gap-3: 0.75rem (12px)
- gap-4: 1rem (16px)
- gap-6: 1.5rem (24px)
- gap-8: 2rem (32px)

Padding:
- p-4: 1rem (16px)
- p-6: 1.5rem (24px)
- p-8: 2rem (32px)
- p-10: 2.5rem (40px)

Margin:
- mb-4: 1rem (16px)
- mb-6: 1.5rem (24px)
- mb-8: 2rem (32px)
- mb-12: 3rem (48px)
```

## Interaction States

### Hover Effects
```jsx
// Card hover
hover:border-orange-300 hover:bg-orange-50 hover:shadow-xl

// Button hover
hover:shadow-orange-500/40

// Text hover
hover:text-orange-700
```

### Transitions
```jsx
// Standard transition
transition-all

// Smooth transition
transition-all duration-500 ease-out

// Fade transition
transition-all duration-700
```

## Accessibility

### Focus States
- All interactive elements have visible focus states
- Keyboard navigation supported
- Semantic HTML used throughout

### Color Contrast
- All text meets WCAG AA standards
- Important information uses high contrast
- Icons paired with text labels

### Screen Readers
- Semantic HTML elements (header, main, footer)
- Descriptive button text
- Alt text for icons (via aria-label when needed)

## Responsive Breakpoints

```
sm: 640px   - Small tablets
md: 768px   - Tablets
lg: 1024px  - Small laptops
xl: 1280px  - Desktops
```

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly tap targets (min 44x44px)

## Animation Guidelines

### Timing
- Page transitions: 700ms
- Card animations: 500ms
- Hover effects: 300ms
- Loading indicators: Continuous

### Easing
- ease-out: For entering elements
- ease-in: For exiting elements
- ease-in-out: For state changes

## Content Guidelines

### Tone
- Supportive and encouraging
- Clear and simple language
- No technical jargon
- No fear-based messaging

### Structure
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Clear headings and sections
- Progressive disclosure

### Emphasis
- Bold for key terms
- Color for status (safe/risky)
- Icons for visual hierarchy
- White space for breathing room

## Do's and Don'ts

### ✅ Do
- Use warm, encouraging colors
- Provide clear feedback
- Show progress indicators
- Use simple, citizen-friendly language
- Make tap targets large enough
- Provide context for decisions

### ❌ Don't
- Use dark, fear-based colors
- Add countdown timers
- Create panic or urgency
- Use shaming language
- Add unnecessary gamification
- Overcomplicate the interface

## Testing Checklist

- [ ] Colors are consistent with brand
- [ ] Typography is readable on all devices
- [ ] Spacing is consistent throughout
- [ ] Hover states work correctly
- [ ] Animations are smooth
- [ ] Mobile layout is usable
- [ ] Touch targets are large enough
- [ ] Focus states are visible
- [ ] Content is clear and supportive
