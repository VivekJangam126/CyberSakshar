# Certificate Feature - Quick Start Guide

## 🚀 Get Started in 2 Minutes

### Step 1: Start the Development Server
```bash
cd frontend
npm run dev
```

### Step 2: Unlock the Certificate
Open browser console (F12) and paste:
```javascript
localStorage.setItem('quizCompleted', 'true');
localStorage.setItem('simulationsCompleted', 'true');
localStorage.setItem('learningCompleted', 'true');
location.reload();
```

### Step 3: Navigate to Certificate
Go to: `http://localhost:5173/certificate/status`

You should see:
- ✅ Green checkmark icon
- "Certificate Ready" message
- All requirements checked
- "View Certificate" button

### Step 4: View and Download
1. Click "View Certificate" → See preview
2. Click "Generate Certificate" → Go to download page
3. Click "Download PDF" → Get your certificate!

## 🎯 Key Routes

| URL | What You'll See |
|-----|-----------------|
| `/certificate/status` | Eligibility check and status |
| `/certificate/preview` | Full certificate preview |
| `/certificate/download` | Download page with PDF button |
| `/dashboard` | Certificate status widget |

## 🔧 Testing Different States

### Locked State (No Requirements)
```javascript
localStorage.clear();
location.reload();
```
Navigate to `/certificate/status` → See locked state

### Partial Completion (2/3)
```javascript
localStorage.setItem('quizCompleted', 'true');
localStorage.setItem('simulationsCompleted', 'true');
localStorage.removeItem('learningCompleted');
location.reload();
```
Navigate to `/certificate/status` → See partial progress

### Unlocked State (All Requirements)
```javascript
localStorage.setItem('quizCompleted', 'true');
localStorage.setItem('simulationsCompleted', 'true');
localStorage.setItem('learningCompleted', 'true');
location.reload();
```
Navigate to `/certificate/status` → See unlocked state

## 📱 Where to Find Certificate Access

### 1. Dashboard Widget
- Go to `/dashboard`
- Look for "CyberSakshar Certificate" card
- Click "View Certificate" or "View Status"

### 2. Profile Menu
- Click profile icon (top right)
- Click "My Certificate"
- Opens certificate status page

### 3. Direct Navigation
- Type `/certificate/status` in URL bar

## 🎨 What Makes This Certificate Special

- **Official Design**: Government-style, academic presentation
- **No Gamification**: No scores, badges, or leaderboards
- **Completion-Based**: Represents engagement, not excellence
- **Printable**: A4 landscape, high-quality PDF
- **Professional**: Suitable for schools, institutions, employers

## 📋 Certificate Content

Your certificate includes:
- **Program Name**: CyberSakshar
- **Certificate Title**: Certificate of Cyber Safety Awareness
- **Your Name**: From Redux auth state (or "Student" as fallback)
- **Completion Date**: Current date
- **Certificate ID**: Unique format (CS-YYYY-MM-XXXX)
- **Signatures**: Founder and Co-Founder placeholders

## 🔍 Troubleshooting

### Certificate Not Unlocking?
Check localStorage in console:
```javascript
console.log({
  quiz: localStorage.getItem('quizCompleted'),
  simulations: localStorage.getItem('simulationsCompleted'),
  learning: localStorage.getItem('learningCompleted')
});
```

### PDF Not Downloading?
1. Check browser console for errors
2. Disable popup blocker
3. Try different browser
4. Verify dependencies installed: `npm list html2canvas jspdf`

### Redirect Loop?
Clear everything and start fresh:
```javascript
localStorage.clear();
location.reload();
```

### Preview Not Showing?
1. Make sure you're eligible (all flags set to 'true')
2. Check browser console for errors
3. Verify you're on `/certificate/preview` not `/certificate/status`

## 💡 Pro Tips

1. **Test on Dashboard First**: The dashboard widget gives you quick status overview
2. **Use Browser Console**: Fastest way to test different states
3. **Check Mobile View**: Certificate is responsive, test on different screen sizes
4. **Print Test**: Try printing the certificate preview to verify layout
5. **PDF Quality**: Generated PDFs are high-quality (scale: 2) and suitable for printing

## 🎓 Understanding Eligibility

Certificate requires completion of:
1. **Cyber Risk Assessment** (Quiz)
2. **Real-World Scenarios** (Simulations)
3. **Micro Learning Modules** (Learning)

**Important**: 
- NO scores required
- NO percentages calculated
- NO grading system
- Just completion flags

## 📚 More Information

- **Full Documentation**: See `README.md`
- **Testing Guide**: See `TESTING_GUIDE.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`

## ✅ Quick Checklist

Before reporting issues, verify:
- [ ] Development server is running
- [ ] You're on the correct route
- [ ] localStorage flags are set correctly
- [ ] Browser console shows no errors
- [ ] Dependencies are installed (html2canvas, jspdf)
- [ ] You've refreshed the page after setting flags

## 🎉 Success!

If you can:
1. ✅ See the certificate status page
2. ✅ Unlock the certificate
3. ✅ Preview the certificate
4. ✅ Download the PDF
5. ✅ See the dashboard widget

**Congratulations!** The certificate feature is working perfectly.

---

**Need Help?** Check the full `TESTING_GUIDE.md` for comprehensive test cases and solutions.
