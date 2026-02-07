# Mock Backend Integration Checklist

## ✅ Completed

- [x] Mock backend system created
  - [x] `seed.js` - Demo data for 3 users
  - [x] `db.js` - localStorage database engine
  - [x] `mockApi.js` - Public API interface
  - [x] `auth.mock.js` - Authentication logic
  - [x] `progress.mock.js` - Progress tracking
  - [x] `report.mock.js` - Report generation
  
- [x] Supporting components
  - [x] `ProtectedRoute.jsx` - Route protection
  - [x] `DevTools.jsx` - Dev utilities (optional)
  
- [x] Documentation
  - [x] `README.md` - Complete API docs
  - [x] `INTEGRATION_GUIDE.md` - Integration instructions
  - [x] `QUICK_REFERENCE.md` - Quick API reference
  - [x] `MOCK_BACKEND_SETUP.md` - Setup guide
  
- [x] Core components integrated
  - [x] Login page with demo credentials
  - [x] Dashboard with user-specific data
  - [x] ProfileMenu with logout
  - [x] AppHeader with user initial
  - [x] Routes with authentication protection
  
- [x] Build verification
  - [x] `npm run build` succeeds
  - [x] Dev server starts without errors

## 🔄 Pending Integration

### High Priority - Core Features

#### Quiz Module
- [ ] `frontend/src/features/quiz/pages/QuizAssessment.jsx`
  - [ ] Import mockApi
  - [ ] Get current user
  - [ ] Save quiz result on completion
  - [ ] Test with all 3 demo users
  
- [ ] `frontend/src/features/quiz/pages/QuizResult.jsx`
  - [ ] Import mockApi
  - [ ] Load quiz result
  - [ ] Display user-specific data
  - [ ] Handle case when no result exists
  
- [ ] `frontend/src/features/quiz/pages/QuizAnalyzing.jsx`
  - [ ] Verify it works with saved results
  
#### Simulation Module
- [ ] `frontend/src/features/simulations/SimulationRouter.jsx`
  - [ ] Import mockApi
  - [ ] Get current user
  - [ ] Load simulation progress
  - [ ] Track current simulation
  
- [ ] `frontend/src/features/simulations/pages/SimulationIntro.jsx`
  - [ ] Check if simulation already completed
  - [ ] Start simulation tracking
  
- [ ] `frontend/src/features/simulations/pages/SimulationComplete.jsx`
  - [ ] Save simulation result
  - [ ] Update completion status
  - [ ] Add to activity feed
  
- [ ] `frontend/src/features/simulations/SimulationPage.jsx`
  - [ ] Load available simulations
  - [ ] Show completion status

#### Learning Module
- [ ] `frontend/src/features/learning/LearningRouter.jsx`
  - [ ] Import mockApi
  - [ ] Get current user
  - [ ] Load learning progress
  
- [ ] `frontend/src/features/learning/pages/LearningHome.jsx`
  - [ ] Display modules with completion status
  - [ ] Show progress for each module
  
- [ ] `frontend/src/features/learning/pages/LearningContent.jsx`
  - [ ] Track step progress
  - [ ] Update progress as user advances
  - [ ] Save progress on each step
  
- [ ] `frontend/src/features/learning/pages/LearningComplete.jsx`
  - [ ] Mark module as complete
  - [ ] Update certificate eligibility
  - [ ] Add to activity feed
  
- [ ] `frontend/src/features/learning/Lessons.jsx`
  - [ ] Load learning progress
  - [ ] Show completion status

#### Certificate Module
- [ ] `frontend/src/features/certificate/pages/CertificateStatus.jsx`
  - [ ] Import mockApi
  - [ ] Check eligibility
  - [ ] Display requirements
  - [ ] Show progress toward eligibility
  
- [ ] `frontend/src/features/certificate/pages/CertificatePreview.jsx`
  - [ ] Load certificate data
  - [ ] Display user name and details
  - [ ] Show certificate ID if issued
  
- [ ] `frontend/src/features/certificate/pages/CertificateDownload.jsx`
  - [ ] Issue certificate if eligible
  - [ ] Generate PDF with user data
  - [ ] Handle already issued certificates
  
- [ ] `frontend/src/features/certificate/CertificateRouter.jsx`
  - [ ] Load certificate status
  - [ ] Route based on eligibility

### Medium Priority - Dashboard Widgets

- [ ] `frontend/src/components/dashboard/DashboardLastSimulation.jsx`
  - [ ] Receive data from Dashboard via props
  - [ ] Or load directly with mockApi
  
- [ ] `frontend/src/components/dashboard/DashboardLearningProgress.jsx`
  - [ ] Receive data from Dashboard via props
  - [ ] Or load directly with mockApi
  
- [ ] `frontend/src/components/dashboard/DashboardCertificateStatus.jsx`
  - [ ] Receive data from Dashboard via props
  - [ ] Or load directly with mockApi
  
- [ ] `frontend/src/components/dashboard/DashboardRecentActivity.jsx`
  - [ ] Receive data from Dashboard via props
  - [ ] Or load directly with mockApi
  
- [ ] `frontend/src/components/dashboard/DashboardLastSafetyCheck.jsx`
  - [ ] Load quiz result
  - [ ] Display risk level and score

### Medium Priority - Reports

- [ ] `frontend/src/features/safetyReport/pages/SafetyReportPage.jsx`
  - [ ] Import mockApi
  - [ ] Generate safety report
  - [ ] Display all report sections
  - [ ] Handle case when no data exists
  
- [ ] `frontend/src/features/safetyReport/components/SafetyOverview.jsx`
  - [ ] Receive report data via props
  
- [ ] `frontend/src/features/safetyReport/components/RiskAreas.jsx`
  - [ ] Receive report data via props
  
- [ ] `frontend/src/features/safetyReport/components/LearningCoverage.jsx`
  - [ ] Receive report data via props
  
- [ ] `frontend/src/features/safetyReport/components/NextSteps.jsx`
  - [ ] Receive report data via props

### Low Priority - Optional

- [ ] Add DevTools component to App.jsx (optional, for easier testing)
- [ ] Update Register page to show "Not available in demo" message
- [ ] Add data export button in profile menu (optional)
- [ ] Add reset demo button in settings (optional)

## 🧪 Testing Checklist

After each component integration:

- [ ] Test with student@demo.com
  - [ ] Verify partial progress shows
  - [ ] Complete an action and verify it saves
  - [ ] Refresh and verify persistence
  
- [ ] Test with citizen@demo.com
  - [ ] Verify different progress state
  - [ ] Complete an action and verify it saves
  
- [ ] Test with teacher@demo.com
  - [ ] Verify full completion state
  - [ ] Verify certificate is issued
  
- [ ] Test logout and re-login
  - [ ] Verify data persists across sessions
  
- [ ] Test protected routes
  - [ ] Logout and try accessing protected route
  - [ ] Should redirect to login

## 🚀 Deployment Checklist

Before deploying to Vercel:

- [ ] All high-priority components integrated
- [ ] Build succeeds: `npm run build`
- [ ] No console errors in dev mode
- [ ] Tested with all 3 demo users
- [ ] Data persists across refreshes
- [ ] Logout works correctly
- [ ] Protected routes redirect properly

## 📝 Integration Steps (Template)

For each component:

1. **Import mockApi**
   ```javascript
   import mockApi from '../../mock/mockApi';
   ```

2. **Get current user**
   ```javascript
   const user = mockApi.getCurrentUser();
   if (!user) {
     navigate('/login');
     return;
   }
   ```

3. **Load data**
   ```javascript
   const data = mockApi.getData(user.id);
   ```

4. **Save data on actions**
   ```javascript
   const handleComplete = () => {
     mockApi.saveData(user.id, result);
   };
   ```

5. **Test**
   - Login with demo user
   - Verify data loads
   - Complete action
   - Verify data saves
   - Refresh page
   - Verify persistence

## 🎯 Success Criteria

- [ ] All high-priority components integrated
- [ ] App works fully without backend
- [ ] All 3 demo users have different experiences
- [ ] Data persists across refreshes
- [ ] No hardcoded demo data in components
- [ ] No direct localStorage access in UI
- [ ] Build succeeds without errors
- [ ] Works on Vercel after deployment

## 📚 Resources

- API Documentation: `frontend/src/mock/README.md`
- Integration Guide: `frontend/src/mock/INTEGRATION_GUIDE.md`
- Quick Reference: `frontend/src/mock/QUICK_REFERENCE.md`
- Setup Guide: `frontend/MOCK_BACKEND_SETUP.md`

## 🆘 Need Help?

1. Check the integration guide for your specific component
2. Look at already-integrated components (Login, Dashboard) as examples
3. Use DevTools component to inspect data
4. Check browser console for errors
5. Verify mockApi function signatures in README.md

## 📞 Common Issues

**Issue**: Data not persisting
- **Solution**: Check browser console for localStorage errors
- **Solution**: Verify mockApi functions are being called

**Issue**: User not found
- **Solution**: Verify getCurrentUser() is called
- **Solution**: Check if user is logged in

**Issue**: Build errors
- **Solution**: Verify import paths are correct
- **Solution**: Check for typos in mockApi function names

**Issue**: Wrong data showing
- **Solution**: Verify using user.id, not hardcoded ID
- **Solution**: Check if loading data for correct user
