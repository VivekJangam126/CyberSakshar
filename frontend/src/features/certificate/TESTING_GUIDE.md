# Certificate Feature - Testing Guide

## Quick Start Testing

### 1. Unlock Certificate (All Requirements Met)

Open browser console and run:
```javascript
localStorage.setItem('quizCompleted', 'true');
localStorage.setItem('simulationsCompleted', 'true');
localStorage.setItem('learningCompleted', 'true');
location.reload();
```

Then navigate to `/certificate/status` - you should see:
- ✅ Green checkmarks on all requirements
- "Certificate Ready" status
- "View Certificate" button enabled

### 2. Lock Certificate (No Requirements Met)

```javascript
localStorage.removeItem('quizCompleted');
localStorage.removeItem('simulationsCompleted');
localStorage.removeItem('learningCompleted');
location.reload();
```

Then navigate to `/certificate/status` - you should see:
- 🔒 Lock icon
- "Certificate Locked" status
- Gray icons on all requirements
- "Continue Learning" button

### 3. Partial Completion

```javascript
localStorage.setItem('quizCompleted', 'true');
localStorage.setItem('simulationsCompleted', 'true');
localStorage.removeItem('learningCompleted');
location.reload();
```

Should show 2/3 requirements completed.

## Test Routes

### Route: `/certificate/status`
**Purpose**: Main entry point, shows eligibility status

**Test Cases**:
1. **Locked State**
   - Clear all localStorage flags
   - Should show lock icon
   - Should show incomplete checklist
   - Button should say "Continue Learning"

2. **Unlocked State**
   - Set all localStorage flags to 'true'
   - Should show green checkmark icon
   - Should show completed checklist
   - Button should say "View Certificate"

3. **Partial State**
   - Set some flags to 'true', leave others unset
   - Should show mixed checklist (some green, some gray)
   - Should show progress (e.g., "2/3 requirements completed")

### Route: `/certificate/preview`
**Purpose**: Preview certificate before generation

**Test Cases**:
1. **Access Without Eligibility**
   - Clear all flags
   - Navigate to `/certificate/preview`
   - Should redirect to `/certificate/status`

2. **Access With Eligibility**
   - Set all flags to 'true'
   - Navigate to `/certificate/preview`
   - Should show certificate preview (scaled down)
   - Should show certificate details card
   - Should show "Generate Certificate" button

3. **Certificate Content**
   - Verify user name displays correctly
   - Verify program name: "CyberSakshar"
   - Verify certificate title: "Certificate of Cyber Safety Awareness"
   - Verify completion date is current
   - Verify certificate ID format: CS-YYYY-MM-XXXX
   - Verify signature placeholders show "Founder" and "Co-Founder"

### Route: `/certificate/download`
**Purpose**: Download and access generated certificate

**Test Cases**:
1. **Access Without Eligibility**
   - Clear all flags
   - Navigate to `/certificate/download`
   - Should redirect to `/certificate/status`

2. **Success State**
   - Set all flags to 'true'
   - Navigate to `/certificate/download`
   - Should show success message with green checkmark
   - Should show certificate details card
   - Should show "Download PDF" button
   - Should show "Return to Dashboard" button

3. **PDF Generation**
   - Click "Download PDF" button
   - Should generate and download PDF file
   - PDF should be A4 landscape format
   - PDF should contain all certificate information
   - Filename should be: `Certificate_[UserName]_[Timestamp].pdf`

## Dashboard Integration

### Test: Certificate Status Widget

Navigate to `/dashboard` and verify:

1. **Widget Appears**
   - Certificate status widget should be visible
   - Should be positioned after safety summary

2. **Locked State**
   - Clear all flags
   - Should show blue icon
   - Should show "X/3 requirements completed"
   - Should show incomplete checklist
   - Button should say "View Status"

3. **Unlocked State**
   - Set all flags to 'true'
   - Should show green checkmark icon
   - Should say "Your certificate is ready"
   - Button should say "View Certificate"

4. **Navigation**
   - Click button
   - Should navigate to `/certificate/status`

## Profile Menu Integration

### Test: Certificate Link

1. Click profile icon in header
2. Verify "My Certificate" menu item exists
3. Click "My Certificate"
4. Should navigate to `/certificate/status`

## Visual Design Tests

### Certificate Layout (A4 Landscape)

Verify the following design elements:

1. **Dimensions**
   - Width: 297mm (A4 landscape)
   - Height: 210mm (A4 landscape)

2. **Typography**
   - Font family: Georgia (serif)
   - Professional, formal appearance

3. **Colors**
   - Primary: Blue (#1e3a8a, #2563eb)
   - Background: White
   - Text: Gray scale

4. **Border**
   - Double border design
   - Outer border: 4px solid blue
   - Inner border: 1px solid blue

5. **Layout**
   - Centered content
   - Proper spacing and padding
   - Signature lines at bottom
   - Certificate ID and date in footer

### Responsive Design

Test on different screen sizes:

1. **Desktop (1920x1080)**
   - Certificate preview should be scaled appropriately
   - All text should be readable
   - Buttons should be properly sized

2. **Tablet (768x1024)**
   - Layout should adapt
   - Certificate preview should scale down
   - Touch targets should be adequate

3. **Mobile (375x667)**
   - Single column layout
   - Certificate preview should be scrollable or scaled
   - Buttons should stack vertically

## Accessibility Tests

1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Enter/Space should activate buttons
   - Focus indicators should be visible

2. **Screen Reader**
   - All images should have alt text
   - Status messages should be announced
   - Button labels should be descriptive

3. **Color Contrast**
   - Text should meet WCAG AA standards
   - Icons should be distinguishable
   - Status indicators should not rely on color alone

## Error Handling

### Test: PDF Generation Failure

1. Simulate error by modifying `pdfGenerator.js`
2. Click "Download PDF"
3. Should show error alert
4. Should not crash the application
5. User should be able to retry

### Test: Missing User Data

1. Clear Redux auth state
2. Navigate to certificate pages
3. Should use fallback name "Student"
4. Should not crash

## Performance Tests

1. **Page Load Time**
   - Certificate status page should load < 1s
   - Preview page should load < 2s
   - Download page should load < 1s

2. **PDF Generation Time**
   - Should complete < 5s
   - Should show loading state during generation
   - Should not block UI

## Browser Compatibility

Test on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Test Checklist

Use this checklist for comprehensive testing:

- [ ] Certificate status page loads correctly
- [ ] Eligibility check works (locked/unlocked states)
- [ ] Requirements checklist displays correctly
- [ ] Preview page shows certificate design
- [ ] Certificate content is accurate
- [ ] PDF generation works
- [ ] PDF download works
- [ ] Dashboard widget appears
- [ ] Dashboard widget shows correct status
- [ ] Profile menu has certificate link
- [ ] Navigation between pages works
- [ ] Redirects work for ineligible users
- [ ] Responsive design works on all screen sizes
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Error handling works
- [ ] Performance is acceptable
- [ ] Works in all major browsers

## Common Issues & Solutions

### Issue: Certificate not unlocking
**Solution**: Check localStorage flags in console:
```javascript
console.log(localStorage.getItem('quizCompleted'));
console.log(localStorage.getItem('simulationsCompleted'));
console.log(localStorage.getItem('learningCompleted'));
```

### Issue: PDF not downloading
**Solution**: 
1. Check browser console for errors
2. Verify html2canvas and jspdf are installed
3. Check if popup blocker is enabled

### Issue: Redirect loop
**Solution**: Clear localStorage and start fresh:
```javascript
localStorage.clear();
location.reload();
```

### Issue: Certificate preview not showing
**Solution**: Check if certificateRef is properly attached to the element

## Automated Testing (Future)

Suggested test cases for automated testing:

```javascript
describe('Certificate Feature', () => {
  describe('Eligibility Check', () => {
    it('should show locked state when requirements not met');
    it('should show unlocked state when all requirements met');
    it('should calculate completion percentage correctly');
  });

  describe('Navigation', () => {
    it('should redirect to status when accessing preview without eligibility');
    it('should redirect to status when accessing download without eligibility');
    it('should allow access to preview when eligible');
  });

  describe('PDF Generation', () => {
    it('should generate PDF with correct content');
    it('should download PDF with correct filename');
    it('should handle generation errors gracefully');
  });
});
```

---

## Quick Test Commands

Copy and paste these into browser console:

```javascript
// Unlock certificate
localStorage.setItem('quizCompleted', 'true');
localStorage.setItem('simulationsCompleted', 'true');
localStorage.setItem('learningCompleted', 'true');
location.reload();

// Lock certificate
localStorage.removeItem('quizCompleted');
localStorage.removeItem('simulationsCompleted');
localStorage.removeItem('learningCompleted');
location.reload();

// Check status
console.log({
  quiz: localStorage.getItem('quizCompleted'),
  simulations: localStorage.getItem('simulationsCompleted'),
  learning: localStorage.getItem('learningCompleted')
});
```
