# Comprehensive Safety Report

## 1. Feature Overview

The Safety Report provides users with a comprehensive, downloadable analysis of their cyber safety readiness. It aggregates data from quiz, simulations, and learning modules to generate personalized insights, risk assessments, and actionable recommendations.

**Purpose**: Provide users with a holistic view of their cyber safety journey and areas for improvement.

**User Problem Solved**: Users need a consolidated report of their progress and vulnerabilities for personal review or sharing with educators/employers.

## 2. User Flow (High Level)

### Entry Points
- Dashboard "View Safety Report" link
- Profile menu "My Safety Report"
- Quiz results "View Full Report" button
- Navigation header (future)

### Page Flow
1. **Safety Report Page** (`/safety-report`) - Complete report display with sections:
   - Report Header (user info, generation date)
   - Safety Overview (readiness score, risk level)
   - Risk Areas (weak areas from quiz)
   - Learning Coverage (modules completed)
   - Practice Summary (simulations completed)
   - Readiness Insight (overall assessment)
   - Next Steps (recommendations)
   - Report Download (PDF export)

### Exit Points
- Dashboard
- Learning modules (via recommendations)
- Simulations (via recommendations)
- Download PDF (external)

## 3. Current Frontend Implementation

### Key Components
- **SafetyReportRouter.jsx** - Route management
- **SafetyReportPage.jsx** - Main report page
- **ReportHeader.jsx** - User info and date
- **SafetyOverview.jsx** - Readiness score display
- **RiskAreas.jsx** - Weak areas display
- **LearningCoverage.jsx** - Learning progress
- **PracticeSummary.jsx** - Simulation results
- **ReadinessInsight.jsx** - Overall assessment
- **NextSteps.jsx** - Recommendations
- **ReportDownload.jsx** - PDF download button
- **reportGenerator.js** - Report data aggregation logic

### Routes Involved
```
/safety-report
```

### Mock APIs/Functions Used
```javascript
mockApi.getCurrentUser()                // Get authenticated user
mockApi.generateSafetyReport(userId)    // Generate complete report
mockApi.getDashboardData(userId)        // Get dashboard data
```

### Data Read/Written
**Read**:
- Quiz results (score, risk level, weak areas)
- Simulation completions and scores
- Learning module completions
- Overall progress

**Written**: None (report is read-only, generated on-demand)

## 4. Current Mock Database Schema

```javascript
// Safety report is generated on-demand, not stored
// It aggregates data from multiple sources

{
  "reportData": {
    "userId": "user_1",
    "generatedAt": "2024-02-08T10:00:00Z",
    "readinessScore": 75,                    // Overall score (0-100)
    "riskLevel": "medium",                   // "low" | "medium" | "high"
    "riskScore": 45,                         // Numeric risk (0-100, lower is better)
    
    "quiz": {
      "completed": true,
      "score": 75,
      "riskLevel": "medium",
      "weakAreas": ["phishing", "social_engineering"],
      "strongAreas": ["password_security"]
    },
    
    "simulations": {
      "completed": 2,
      "total": 3,
      "averageScore": 75,
      "results": [
        {
          "id": "phishing_email",
          "score": 80,
          "completedAt": "2024-02-06T10:00:00Z"
        }
      ]
    },
    
    "learning": {
      "completed": 2,
      "total": 3,
      "progressPercentage": 67,
      "modules": [
        {
          "id": "otp_safety",
          "title": "OTP Safety Essentials",
          "completedAt": "2024-02-04T15:00:00Z"
        }
      ]
    },
    
    "recommendations": [
      {
        "type": "learning",
        "title": "Complete Phishing Links Module",
        "reason": "Identified as weak area in quiz",
        "priority": "high"
      }
    ],
    
    "nextSteps": [
      "Complete remaining learning modules",
      "Practice more simulations",
      "Retake quiz to improve score"
    ]
  }
}
```

### Field Purposes
- **readinessScore**: Overall cyber safety readiness (0-100)
- **riskLevel**: Overall risk assessment
- **riskScore**: Numeric risk score
- **quiz**: Quiz results summary
- **simulations**: Simulation performance summary
- **learning**: Learning progress summary
- **recommendations**: Personalized action items
- **nextSteps**: Suggested next actions

### Data Types
- **Number**: scores, percentages, counts
- **String**: IDs, levels, titles, reasons
- **Boolean**: completion flags
- **ISO 8601 Timestamp**: generatedAt, completedAt dates
- **Array**: weakAreas, strongAreas, results, modules, recommendations, nextSteps
- **Object**: Nested structures for quiz, simulations, learning

### Update Triggers
- Report is generated on-demand when user accesses page
- No persistent storage (calculated from current data)
- Reflects real-time user progress

## 5. Backend-Ready Data Model (Future)

### SQL Tables

```sql
-- Safety reports table (if storing generated reports)
CREATE TABLE safety_reports (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  readiness_score INTEGER CHECK (readiness_score >= 0 AND readiness_score <= 100),
  risk_level VARCHAR(20),
  risk_score INTEGER,
  quiz_data JSONB,
  simulations_data JSONB,
  learning_data JSONB,
  recommendations JSONB,
  generated_at TIMESTAMP DEFAULT NOW(),
  downloaded_at TIMESTAMP
);

-- Report downloads tracking (analytics)
CREATE TABLE report_downloads (
  id UUID PRIMARY KEY,
  report_id UUID REFERENCES safety_reports(id),
  user_id UUID REFERENCES users(id),
  format VARCHAR(20),  -- 'pdf', 'json'
  downloaded_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_safety_reports_user_id ON safety_reports(user_id);
CREATE INDEX idx_safety_reports_generated_at ON safety_reports(generated_at DESC);
```

### NoSQL Collections (Alternative)

```javascript
// safetyReports collection (if storing)
{
  "_id": "report_1",
  "userId": "user_1",
  "readinessScore": 75,
  "riskLevel": "medium",
  "riskScore": 45,
  "quiz": {
    "completed": true,
    "score": 75,
    "weakAreas": ["phishing", "social_engineering"]
  },
  "simulations": {
    "completed": 2,
    "averageScore": 75
  },
  "learning": {
    "completed": 2,
    "progressPercentage": 67
  },
  "recommendations": [...],
  "generatedAt": ISODate("2024-02-08T10:00:00Z"),
  "downloadedAt": ISODate("2024-02-08T10:05:00Z")
}
```

### Suggested API Endpoints

```
GET  /api/safety-report/:userId             # Generate/get latest report
POST /api/safety-report/generate            # Force regenerate report
GET  /api/safety-report/download/:reportId  # Download PDF
GET  /api/safety-report/history/:userId     # Get report history
```

### Relationships with Other Features
- **Dashboard**: Links to safety report
- **Quiz**: Provides quiz data for report
- **Simulations**: Provides simulation data for report
- **Learning**: Provides learning data for report
- **Profile**: Shows report access link

## 6. Edge Cases & Rules

### What Happens on Reset
- Report reflects reset state (all zeros)
- Previous reports remain accessible (if stored)
- New report shows "Not Started" status

### What Happens on Re-attempt
- Report always reflects latest data
- Historical reports can be compared (future)
- Recommendations update based on new progress

### What is User-Scoped vs Global
**User-Scoped**:
- Report data and scores
- Recommendations
- Download history

**Global**:
- Report template and format
- Recommendation logic
- Risk calculation rules

### What Should NOT Be Stored
- Temporary report generation state
- PDF file itself (generate on-demand)
- Intermediate calculations

## 7. Integration Dependencies

### Which Other Features Read This Data
- None (report is terminal feature)

### Which Features Update This Data
- **Quiz**: Updates quiz data used in report
- **Simulations**: Updates simulation data used in report
- **Learning**: Updates learning data used in report

### Order of Operations
1. User accesses safety report page
2. Fetch user data from all features (quiz, simulations, learning)
3. Calculate readiness score and risk level
4. Generate recommendations based on weak areas
5. Compile next steps based on incomplete features
6. Display report
7. User clicks download → Generate PDF
8. Track download (analytics)

## Backend Migration Notes

- Consider caching generated reports (regenerate on data change)
- Implement PDF generation service (separate microservice)
- Add report versioning (track changes over time)
- Implement comparison feature (compare two reports)
- Add analytics: most common weak areas, average readiness scores
- Consider scheduled report generation (monthly summary)
- Implement email delivery option
- Add multi-language report support
- Consider shareable report links (with privacy controls)
- Implement report expiry (regenerate after X days)
