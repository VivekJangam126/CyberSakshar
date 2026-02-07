# Mock Backend Setup - Quick Start Guide

## ✅ What's Been Done

A complete frontend-only dummy backend has been implemented for CyberSakshar. The system:

- ✅ Works without any real backend or database
- ✅ Supports 3 demo users with different progress states
- ✅ Persists data across page refreshes using localStorage
- ✅ Works on Vercel after deployment
- ✅ Can be cleanly removed and replaced with real APIs later

## 📁 Files Created

```
frontend/src/mock/
├── seed.js                    # Initial demo data (3 users)
├── db.js                      # localStorage-backed database engine
├── mockApi.js                 # PUBLIC API (only entry point for components)
├── auth.mock.js               # Authentication logic
├── progress.mock.js           # Quiz, simulations, learning, certificates
├── report.mock.js             # Safety report generation
├── DevTools.jsx               # Optional dev utility component
├── README.md                  # Complete documentation
└── INTEGRATION_GUIDE.md       # Step-by-step integration guide

frontend/src/components/
└── ProtectedRoute.jsx         # Route protection wrapper
```

## 🔐 Demo Users

| Email | Password | Profile | Progress |
|-------|----------|---------|----------|
| student@demo.com | student123 | Priya Sharma (Student) | Beginner - 75% quiz, 2 simulations, 2 modules |
| citizen@demo.com | citizen123 | Rajesh Kumar (Citizen) | Intermediate - 60% quiz, 1 simulation, 1 module |
| teacher@demo.com | teacher123 | Anjali Verma (Teacher) | Advanced - 90% quiz, 3 simulations, 3 modules, certificate issued |

## ✅ Already Integrated Components

The following components are already using the mock backend:

1. **Login** (`frontend/src/features/auth/Login.jsx`)
   - Authenticates against demo users
   - Shows demo credentials
   - Displays error messages

2. **Dashboard** (`frontend/src/features/DashBoard/DashBoard.jsx`)
   - Loads user-specific data
   - Shows personalized progress
   - Displays recent activity

3. **ProfileMenu** (`frontend/src/components/ProfileMenu.jsx`)
   - Shows current user name
   - Handles logout

4. **AppHeader** (`frontend/src/components/AppHeader.jsx`)
   - Displays user initial

5. **Routes** (`frontend/src/app/routes.jsx`)
   - Protected routes with authentication
   - Redirects to login if not authenticated

## 🚀 How to Use

### 1. Start the Development Server

```bash
cd frontend
npm run dev
```

### 2. Login with Demo Account

Navigate to `http://localhost:5173/login` and use any demo account:

- **student@demo.com** / student123
- **citizen@demo.com** / citizen123
- **teacher@demo.com** / teacher123

### 3. Test Different User States

Each user has different progress:

- **Student**: Partial progress, not eligible for certificate
- **Citizen**: Some completion, still needs more progress
- **Teacher**: Full completion with certificate already issued

### 4. Verify Persistence

1. Login and complete an action
2. Refresh the page
3. Data should persist

### 5. Test Logout

1. Click profile menu → Sign Out
2. Should redirect to login
3. Try accessing `/dashboard` - should redirect to login

## 🔧 Optional: Add Dev Tools

To make testing easier, add the DevTools component to your app:

```javascript
// In frontend/src/App.jsx or main layout
import DevTools from './mock/DevTools';

function App() {
  return (
    <>
      {/* Your app content */}
      
      {/* Add this at the bottom - only in development */}
      {import.meta.env.DEV && <DevTools />}
    </>
  );
}
```

This adds a floating button with:
- Quick login for all demo users
- Export data to console
- Reset all data
- View current user data

## 📝 Next Steps: Integrate Remaining Components

The following components still need integration:

### High Priority

1. **Quiz Components**
   - `QuizAssessment.jsx` - Save quiz results
   - `QuizResult.jsx` - Load and display results

2. **Simulation Components**
   - `SimulationRouter.jsx` - Track simulation progress
   - `SimulationComplete.jsx` - Save completion data

3. **Learning Components**
   - `LearningRouter.jsx` - Load learning progress
   - `LearningContent.jsx` - Update progress as user advances
   - `LearningComplete.jsx` - Mark modules as complete

4. **Certificate Components**
   - `CertificateStatus.jsx` - Check eligibility
   - `CertificatePreview.jsx` - Show certificate data
   - `CertificateDownload.jsx` - Issue certificate

### Medium Priority

5. **Safety Report**
   - `SafetyReportPage.jsx` - Generate and display report

6. **Dashboard Widgets**
   - Update individual dashboard components to use real data

See `INTEGRATION_GUIDE.md` for detailed instructions on integrating each component.

## 🧪 Testing Checklist

- [ ] Login with all 3 demo users
- [ ] Verify different dashboard states for each user
- [ ] Complete a quiz and verify it saves
- [ ] Complete a simulation and verify it saves
- [ ] Complete a learning module and verify it saves
- [ ] Check certificate eligibility
- [ ] Generate safety report
- [ ] Logout and verify redirect
- [ ] Refresh page and verify data persists
- [ ] Try accessing protected routes without login

## 🚀 Deployment to Vercel

The mock backend works perfectly on Vercel:

1. **Build the app:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel deploy
   ```

3. **Test on production:**
   - Login with demo accounts
   - Verify all features work
   - Check data persistence

## 🧹 Removal Plan (When Real Backend is Ready)

1. Create real API client with same function signatures
2. Update imports in components from `mockApi` to real API
3. Delete `frontend/src/mock/` folder
4. Remove `ProtectedRoute` if using different auth
5. Update authentication flow

**No component logic changes needed!** The mock API interface matches what the real API should provide.

## 📚 Documentation

- **README.md** - Complete mock backend documentation
- **INTEGRATION_GUIDE.md** - Step-by-step integration instructions
- **This file** - Quick start guide

## 🐛 Troubleshooting

### Data is corrupted or wrong

Reset the demo data:

```javascript
// In browser console
localStorage.removeItem('CYBERSAKSHAR_DB');
localStorage.removeItem('auth_user');
location.reload();
```

Or use the DevTools component's "Reset All Data" button.

### Can't login

Make sure you're using the exact credentials:
- Email: `student@demo.com` (not Student@demo.com)
- Password: `student123`

### Data not persisting

Check browser console for localStorage errors. Some browsers block localStorage in private/incognito mode.

### Build errors

Make sure all imports are correct:
```javascript
import mockApi from '../../mock/mockApi';  // Correct path
```

## 💡 Tips

1. **Use different browsers/tabs** to test multiple users simultaneously
2. **Check browser DevTools → Application → Local Storage** to inspect data
3. **Use the DevTools component** for quick testing and debugging
4. **Export data** before making changes: `mockApi.exportData()`
5. **Reset data** if you need a clean slate: `mockApi.resetDemo()`

## 🎯 Success Criteria

- ✅ App works fully without backend
- ✅ Multiple demo users available
- ✅ Dashboard, progress, certificate, report feel real
- ✅ State persists across refreshes
- ✅ Clean architecture (components only use mockApi)
- ✅ Judges can demo instantly
- ✅ Works on Vercel
- ✅ Easy to remove later

## 📞 Support

For questions or issues:
1. Check `README.md` for API documentation
2. Check `INTEGRATION_GUIDE.md` for integration examples
3. Use DevTools component to debug
4. Check browser console for errors
