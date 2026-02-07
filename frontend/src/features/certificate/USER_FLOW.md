# Certificate Feature - User Flow

## Complete User Journey

### Entry Points

Users can access the certificate feature from three locations:

```
1. Dashboard Widget
   └─> Click "View Certificate" or "View Status"
       └─> Navigate to /certificate/status

2. Profile Menu
   └─> Click Profile Icon (top right)
       └─> Click "My Certificate"
           └─> Navigate to /certificate/status

3. Direct URL
   └─> Type /certificate/status in browser
```

---

## Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     ENTRY POINTS                             │
│  Dashboard Widget | Profile Menu | Direct URL               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              CERTIFICATE STATUS PAGE                         │
│              /certificate/status                             │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Check Eligibility                                    │  │
│  │  • Quiz Completed?                                    │  │
│  │  • Simulations Completed?                             │  │
│  │  • Learning Completed?                                │  │
│  └──────────────────────────────────────────────────────┘  │
│                         │                                    │
│         ┌───────────────┴───────────────┐                   │
│         ▼                               ▼                   │
│  ┌─────────────┐                 ┌─────────────┐           │
│  │   LOCKED    │                 │  UNLOCKED   │           │
│  │   STATE     │                 │   STATE     │           │
│  └─────────────┘                 └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
         │                                 │
         │                                 │
         ▼                                 ▼
┌─────────────────┐              ┌─────────────────┐
│  🔒 LOCKED      │              │  ✅ UNLOCKED    │
│                 │              │                 │
│  • Lock icon    │              │  • Checkmark    │
│  • Gray checks  │              │  • Green checks │
│  • "Continue    │              │  • "View        │
│    Learning"    │              │    Certificate" │
│    button       │              │    button       │
└────────┬────────┘              └────────┬────────┘
         │                                 │
         │                                 │
         ▼                                 ▼
   Navigate to                    Navigate to
   Dashboard                      Preview Page
   (Continue                      
   Learning)                      
                                  
                         ┌─────────────────────────────────────┐
                         │   CERTIFICATE PREVIEW PAGE          │
                         │   /certificate/preview              │
                         │                                     │
                         │  ┌──────────────────────────────┐  │
                         │  │  Certificate Design Preview   │  │
                         │  │  • Scaled down view           │  │
                         │  │  • Full certificate layout    │  │
                         │  │  • All details visible        │  │
                         │  └──────────────────────────────┘  │
                         │                                     │
                         │  ┌──────────────────────────────┐  │
                         │  │  Certificate Details Card     │  │
                         │  │  • Recipient name             │  │
                         │  │  • Program name               │  │
                         │  │  • Completion date            │  │
                         │  │  • Certificate ID             │  │
                         │  └──────────────────────────────┘  │
                         │                                     │
                         │  [Generate Certificate] Button      │
                         │                                     │
                         └────────────┬────────────────────────┘
                                      │
                                      │ Click "Generate"
                                      │
                                      ▼
                         ┌─────────────────────────────────────┐
                         │   CERTIFICATE DOWNLOAD PAGE         │
                         │   /certificate/download             │
                         │                                     │
                         │  ┌──────────────────────────────┐  │
                         │  │  ✅ Success Message          │  │
                         │  │  "Certificate Generated      │  │
                         │  │   Successfully"              │  │
                         │  └──────────────────────────────┘  │
                         │                                     │
                         │  ┌──────────────────────────────┐  │
                         │  │  Certificate Info Card        │  │
                         │  │  • Program details            │  │
                         │  │  • Completion date            │  │
                         │  │  • Certificate ID             │  │
                         │  └──────────────────────────────┘  │
                         │                                     │
                         │  [Download PDF] Button              │
                         │  [Return to Dashboard] Button       │
                         │                                     │
                         └────────────┬────────────────────────┘
                                      │
                         ┌────────────┴────────────┐
                         │                         │
                         ▼                         ▼
                  Download PDF              Return to
                  (Save File)               Dashboard
```

---

## Detailed State Descriptions

### 1. Certificate Status Page - LOCKED State

**Visual Elements:**
- 🔒 Blue lock icon
- "Certificate Locked" heading
- "Complete the required learning to unlock your certificate" message
- Requirements checklist with gray icons for incomplete items
- "Continue Learning" button (secondary style)

**User Actions:**
- Click "Continue Learning" → Navigate to Dashboard
- Complete requirements → Return to see unlocked state

**Protection:**
- None - accessible to all users
- Shows current progress

---

### 2. Certificate Status Page - UNLOCKED State

**Visual Elements:**
- ✅ Green checkmark icon
- "Certificate Ready" heading
- "Congratulations! Your certificate is ready to be generated" message
- Requirements checklist with green checkmarks
- "View Certificate" button (primary style)

**User Actions:**
- Click "View Certificate" → Navigate to Preview Page

**Protection:**
- None - accessible to all users
- Shows completion status

---

### 3. Certificate Preview Page

**Visual Elements:**
- "Certificate Preview" heading
- Full certificate design (scaled down to fit screen)
- Certificate details card showing:
  - Recipient name
  - Program name (CyberSakshar)
  - Completion date
  - Certificate ID
- "Generate Certificate" button
- "← Back to Status" link

**User Actions:**
- Click "Generate Certificate" → Navigate to Download Page
- Click "Back to Status" → Return to Status Page

**Protection:**
- ✅ Requires eligibility
- Redirects to Status Page if not eligible

---

### 4. Certificate Download Page

**Visual Elements:**
- ✅ Green success icon
- "Certificate Generated Successfully" heading
- "Your official CyberSakshar certificate is ready" message
- Certificate info card with details
- "Download PDF" button (primary style)
- "Return to Dashboard" button (secondary style)
- Information box about certificate usage

**User Actions:**
- Click "Download PDF" → Generate and download PDF file
- Click "Return to Dashboard" → Navigate to Dashboard

**Protection:**
- ✅ Requires eligibility
- Redirects to Status Page if not eligible

---

## Navigation Paths

### Forward Navigation (Happy Path)
```
Status (Locked)
  → Complete Requirements
    → Status (Unlocked)
      → Preview
        → Download
          → Dashboard
```

### Backward Navigation
```
Download
  → [Return to Dashboard] → Dashboard
  
Preview
  → [Back to Status] → Status
  
Status
  → [Continue Learning] → Dashboard (if locked)
```

### Protected Routes
```
Preview Page
  ├─ If Eligible → Show Preview
  └─ If Not Eligible → Redirect to Status

Download Page
  ├─ If Eligible → Show Download
  └─ If Not Eligible → Redirect to Status
```

---

## Dashboard Integration

### Certificate Status Widget

**Location:** Dashboard page, after Safety Summary

**Locked State:**
- Blue icon
- "CyberSakshar Certificate" heading
- "X/3 requirements completed" subtitle
- Mini checklist showing completion status
- "View Status" button

**Unlocked State:**
- Green checkmark icon
- "CyberSakshar Certificate" heading
- "Your certificate is ready" subtitle
- "View Certificate" button

**Action:**
- Click button → Navigate to /certificate/status

---

## Profile Menu Integration

**Location:** Profile dropdown menu (top right)

**Menu Item:**
- "My Certificate"
- Positioned between "My Progress" and divider
- Same styling as other menu items

**Action:**
- Click "My Certificate" → Navigate to /certificate/status

---

## PDF Generation Flow

```
Download Page
  │
  ├─ User clicks "Download PDF"
  │
  ├─ Show loading state ("Generating PDF...")
  │
  ├─ html2canvas renders certificate
  │
  ├─ jsPDF creates PDF document
  │
  ├─ PDF saved with filename:
  │  Certificate_[UserName]_[Timestamp].pdf
  │
  └─ Browser downloads file
```

---

## Error Handling

### Scenario 1: User Not Eligible
```
User navigates to /certificate/preview
  │
  ├─ Check eligibility
  │
  ├─ Not eligible
  │
  └─ Redirect to /certificate/status
```

### Scenario 2: PDF Generation Fails
```
User clicks "Download PDF"
  │
  ├─ Attempt PDF generation
  │
  ├─ Error occurs
  │
  ├─ Show error alert
  │
  └─ User can retry
```

### Scenario 3: Missing User Data
```
Certificate page loads
  │
  ├─ Check Redux user state
  │
  ├─ User data missing
  │
  └─ Use fallback: "Student"
```

---

## Responsive Behavior

### Desktop (1920x1080)
- Full certificate preview visible
- Side-by-side layouts where appropriate
- Optimal spacing and sizing

### Tablet (768x1024)
- Certificate preview scaled down
- Single column layouts
- Touch-friendly buttons

### Mobile (375x667)
- Certificate preview scrollable or scaled
- Stacked layouts
- Full-width buttons
- Simplified navigation

---

## Accessibility Considerations

### Keyboard Navigation
```
Tab Order:
1. Navigation links
2. Main action button
3. Secondary buttons
4. Back links
```

### Screen Reader Announcements
- Status changes announced
- Button purposes clear
- Icon meanings conveyed via text

### Visual Indicators
- Focus states visible
- Status not relying on color alone
- Clear button labels

---

## Success Metrics

**User completes flow when:**
1. ✅ Navigates to certificate status
2. ✅ Sees eligibility status
3. ✅ (If eligible) Views preview
4. ✅ Generates certificate
5. ✅ Downloads PDF
6. ✅ Returns to dashboard

**Certificate feels:**
- Earned through real engagement
- Official and credible
- Suitable for formal use
- Professional and trustworthy

---

## Testing the Flow

### Quick Test (All States)
```javascript
// 1. Test Locked State
localStorage.clear();
location.href = '/certificate/status';

// 2. Test Unlocked State
localStorage.setItem('quizCompleted', 'true');
localStorage.setItem('simulationsCompleted', 'true');
localStorage.setItem('learningCompleted', 'true');
location.reload();

// 3. Click through flow
// Status → Preview → Download → PDF
```

---

**This flow ensures a clear, professional, and trustworthy certificate experience that represents genuine learning and engagement.**
