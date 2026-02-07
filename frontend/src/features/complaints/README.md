# Cybercrime Complaint Guidance & Action System

## Overview

The Complaint Guidance System helps citizens take correct, calm, and timely action after a cyber fraud incident. This feature provides step-by-step guidance without filing complaints directly.

## Philosophy

**This feature is:**
- A calm digital assistant
- Supportive and reassuring
- Citizen-friendly and non-technical
- Government-aligned

**This feature is NOT:**
- A complaint filing system
- A replacement for official portals
- Using panic language or red alerts
- Collecting personal data

## Tone Guidelines

✅ **DO:**
- Use calm, supportive language
- Provide clear, actionable steps
- Reassure users
- Guide to official resources

❌ **DON'T:**
- Use panic language
- Show red alerts
- Use legal jargon
- Force inputs
- Blame or judge

## Structure

```
complaints/
├── pages/
│   ├── ComplaintIntro.jsx           # Entry point with disclaimer
│   ├── ComplaintTypeSelect.jsx      # Incident type selection
│   ├── ComplaintQuestions.jsx       # Optional context questions
│   ├── ImmediateActions.jsx         # Critical actions to take
│   ├── ComplaintSummary.jsx         # Generated summary
│   └── OfficialRedirection.jsx      # Handoff to authorities
│
├── components/
│   ├── IncidentTypeCard.jsx         # Incident type selector
│   ├── QuestionCard.jsx             # Question input component
│   ├── ActionChecklist.jsx          # Checkable action list
│   ├── DoDontCard.jsx               # Do's and Don'ts display
│   ├── SummaryBlock.jsx             # Summary content block
│   └── HelplineCard.jsx             # Helpline information
│
├── data/
│   ├── incidentTypes.js             # All incident types
│   ├── otpFraud.js                  # OTP fraud guidance
│   ├── upiFraud.js                  # UPI fraud guidance
│   ├── phishing.js                  # Phishing guidance
│   └── socialMediaHack.js           # Social media hack guidance
│
├── utils/
│   └── complaintFlowEngine.js       # Flow logic and mapping
│
├── ComplaintRouter.jsx              # Route management
├── ComplaintForm.jsx                # Legacy form (kept)
└── README.md                        # This file
```

## User Flow

```
1. Intro
   ↓
2. Type Selection
   ↓
3. Questions (Optional)
   ↓
4. Immediate Actions
   ↓
5. Summary
   ↓
6. Official Redirection
```

## Routes

| Route | Purpose |
|-------|---------|
| `/complaints` | Redirects to intro |
| `/complaints/intro` | Entry point with disclaimer |
| `/complaints/type` | Select incident type |
| `/complaints/questions` | Optional context questions |
| `/complaints/actions` | Immediate actions to take |
| `/complaints/summary` | Generated summary |
| `/complaints/official` | Official portal links |

## Data-Driven Architecture

### Adding a New Incident Type

1. **Create data file** in `data/` folder:
```javascript
export const newIncidentData = {
  id: 'new-incident',
  title: 'New Incident Type',
  questions: [...],
  immediateActions: [...],
  doList: [...],
  dontList: [...],
  safetyReminders: [...],
  officialLinks: [...],
};
```

2. **Add to incidentTypes.js**:
```javascript
{
  id: 'new-incident',
  title: 'New Incident Type',
  description: 'Brief description',
  icon: '🔔',
  severity: 'medium',
  color: 'from-blue-50 to-cyan-50',
  border: 'border-blue-200',
}
```

3. **Register in complaintFlowEngine.js**:
```javascript
const guidanceDataMap = {
  'new-incident': newIncidentData,
  // ... other types
};
```

**That's it!** No UI changes needed.

## Key Features

### 1. Calm Reassurance
- No panic language
- Supportive tone throughout
- Clear disclaimers

### 2. Personalized Guidance
- Incident-specific actions
- Relevant do's and don'ts
- Appropriate official resources

### 3. Optional Questions
- All inputs optional
- Skip allowed
- No validation pressure

### 4. Immediate Actions
- Priority-based checklist
- Interactive checkboxes
- Clear, actionable steps

### 5. Summary Generation
- Auto-generated from inputs
- Copy and download options
- Ready for official filing

### 6. Official Handoff
- Clear boundaries
- Direct links to portals
- Helpline information

## Design Guidelines

### Colors
- **Calm colors**: Amber/orange accents
- **White/translucent cards**
- **NO red panic UI**

### Typography
- Large, readable text
- Clear hierarchy
- Mobile-first

### Interactions
- No urgent animations
- Smooth transitions
- Reassuring feedback

## Official Resources

### National Cyber Crime Portal
- URL: https://cybercrime.gov.in
- Purpose: File official complaints

### Cyber Helpline
- Number: 1930
- Available: 24x7
- Purpose: Immediate assistance

## What This Feature Does NOT Do

❌ Submit complaints
❌ Store user data
❌ Ask for Aadhaar, phone, or bank details
❌ Use fear-based messaging
❌ Pretend to be authority
❌ Make AI or ML claims

## Success Criteria

A judge should think:
> "This platform doesn't just teach cyber safety — it helps citizens act correctly when things go wrong."

The feature should feel:
- **Responsible**: Guides without overstepping
- **Empathetic**: Understands user stress
- **Government-aligned**: Respects official processes
- **Socially impactful**: Real public service

## Testing

### Test Flow
1. Navigate to `/complaints/intro`
2. Click "Start Guidance"
3. Select an incident type
4. Answer questions (or skip)
5. Review immediate actions
6. Generate summary
7. View official resources

### Test Data
- All incident types have complete data
- Questions are optional
- Summary generates correctly
- Links work properly

## Future Enhancements (Not Implemented)

- Multi-language support
- Voice guidance
- SMS/Email summary delivery
- Progress saving
- Follow-up reminders

## Integration Points

### Navbar
- "Report Fraud" tab added to AppHeader
- Visible after login
- Same styling as other tabs

### Dashboard
- Quick access card (future)
- Recent guidance history (future)

## Technical Notes

### State Management
- Uses localStorage for flow state
- Clears data after completion
- No Redux needed

### Routing
- Nested routes under `/complaints/*`
- Protected flow (redirects if missing data)
- Clean URLs

### Data Flow
```
User Input
  ↓
localStorage
  ↓
Flow Engine
  ↓
Guidance Data
  ↓
UI Components
```

---

**Implementation Date:** February 8, 2026
**Status:** ✅ Complete and Ready for Use
