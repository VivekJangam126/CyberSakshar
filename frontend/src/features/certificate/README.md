# Certificate & Proof of Learning

## Overview

The Certificate feature provides users with a formal, verifiable acknowledgment of their completed cyber safety learning journey through the CyberSakshar platform.

## Philosophy

This certificate:
- **Is NOT decorative** - It represents real learning and engagement
- **Is NOT gamified** - No scores, badges, or leaderboards
- **Is NOT score-based** - Completion matters, not excellence
- **Represents commitment** - User has assessed, practiced, and learned

## Tone & Design

- **Official** - Government-style, academic presentation
- **Trustworthy** - Suitable for schools, institutions, employers
- **Professional** - Clean, serif typography, blue and white color scheme
- **Printable** - A4 landscape format, high-quality PDF output

## Structure

```
certificate/
├── pages/
│   ├── CertificateStatus.jsx      # Shows eligibility status
│   ├── CertificatePreview.jsx     # Preview before generation
│   └── CertificateDownload.jsx    # Download and access
│
├── components/
│   ├── EligibilityChecklist.jsx   # Visual checklist of requirements
│   ├── CertificateCard.jsx        # Wrapper component
│   ├── CertificateLayout.jsx      # A4 certificate design
│   └── CertificateActions.jsx     # Action buttons
│
├── utils/
│   └── certificateEligibility.js  # Eligibility logic (mock)
│
├── CertificateRouter.jsx          # Route management
├── Certificate.jsx                # Legacy entry point (kept)
└── pdfGenerator.js                # PDF generation (kept)
```

## User Flow

1. **Status Check** (`/certificate/status`)
   - Shows locked/unlocked state
   - Displays eligibility checklist
   - Redirects to preview if eligible

2. **Preview** (`/certificate/preview`)
   - Shows full certificate design
   - Displays certificate details
   - Generate button

3. **Download** (`/certificate/download`)
   - Success confirmation
   - Download PDF button
   - Return to dashboard

## Eligibility Requirements

User must complete:
- ✅ Cyber Risk Assessment (Quiz)
- ✅ Real-World Scenarios (Simulations)
- ✅ Micro Learning Modules

**No scores. No percentages. No grading.**

## Certificate Content

- **Program Name**: CyberSakshar
- **Certificate Title**: Certificate of Cyber Safety Awareness
- **Recipient Name**: User's name
- **Completion Date**: Date of generation
- **Certificate ID**: Unique identifier (format: CS-YYYY-MM-XXXX)
- **Signatures**: Founder, Co-Founder placeholders

## Technical Implementation

### Mock Data
All eligibility checks use localStorage flags:
- `quizCompleted`
- `simulationsCompleted`
- `learningCompleted`

### PDF Generation
- Uses `html2canvas` and `jsPDF`
- A4 landscape format (297mm x 210mm)
- High-quality output (scale: 2)
- White background, blue accents

### Styling
- Font: Georgia (serif)
- Colors: Blue (#1e3a8a, #2563eb) and Gray
- Border: Double border design
- Layout: Centered, formal structure

## Integration Points

### Dashboard
- Certificate status widget
- Quick access link
- Completion indicator

### Profile Menu
- Certificate access
- Download history (future)

### Navigation
- Main navigation item
- Protected routes (eligibility check)

## What This Feature Does NOT Include

❌ Final exams or tests
❌ Scoring or grading system
❌ Social sharing pressure
❌ Leaderboards or rankings
❌ Backend API calls
❌ Authentication beyond Redux user
❌ Certificate verification system (placeholder only)

## Usage

### Check Eligibility
```javascript
import { checkEligibility } from './utils/certificateEligibility';

const { eligible, requirements } = checkEligibility();
```

### Generate Certificate Data
```javascript
import { generateCertificateData } from './utils/certificateEligibility';

const certificateData = generateCertificateData('User Name');
```

### Generate PDF
```javascript
import { generateCertificatePDF } from './pdfGenerator';

await generateCertificatePDF(certificateData, certificateRef.current);
```

## Routes

- `/certificate` → Redirects to `/certificate/status`
- `/certificate/status` → Eligibility check and status
- `/certificate/preview` → Certificate preview (requires eligibility)
- `/certificate/download` → Download page (requires eligibility)

## Future Enhancements (Not Implemented)

- Backend verification system
- Certificate history
- Email delivery
- QR code for verification
- Multi-language support
- Custom certificate templates

## Design Principles

1. **Credibility First** - Must feel official and trustworthy
2. **Simplicity** - No unnecessary elements or distractions
3. **Accessibility** - Clear typography, good contrast
4. **Printability** - Designed for physical printing
5. **Professionalism** - Suitable for formal contexts

## Success Criteria

A judge should feel:
> "This certificate represents real learning and practice, not just clicking through content."

The certificate must feel:
- **Earned** - Through genuine engagement
- **Serious** - Not a game or toy
- **Credible** - Acceptable in formal settings
- **Official** - Government/academic style

---

**Note**: This is a UI-first implementation using mock data. Backend integration, authentication, and persistence are intentionally excluded from this phase.
