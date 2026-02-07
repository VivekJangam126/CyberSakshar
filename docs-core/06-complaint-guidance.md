# Complaint & Fraud Reporting Guidance

## 1. Feature Overview

The Complaint Guidance feature provides step-by-step assistance for users who have experienced or are experiencing cyber fraud. It guides them through immediate actions, evidence collection, and official complaint filing with appropriate authorities.

**Purpose**: Help victims of cyber fraud take correct immediate actions and file proper complaints with law enforcement.

**User Problem Solved**: Victims don't know what to do when fraud occurs. This feature provides calm, structured guidance during a stressful situation.

## 2. User Flow (High Level)

### Entry Points
- Dashboard "Report Fraud" quick action
- Navigation header "Report Fraud" link
- Emergency access (no login required - future)

### Page Flow
1. **Complaint Intro** (`/complaints/intro`) - Introduction and reassurance
2. **Complaint Type Select** (`/complaints/type`) - Select fraud type
3. **Immediate Actions** (`/complaints/actions`) - Critical first steps
4. **Complaint Questions** (`/complaints/questions`) - Guided questionnaire
5. **Complaint Summary** (`/complaints/summary`) - Review collected information
6. **Official Redirection** (`/complaints/redirect`) - Links to official portals

### Exit Points
- External: National Cyber Crime Portal, local police websites
- Internal: Dashboard, Learning modules (prevention education)

## 3. Current Frontend Implementation

### Key Components
- **ComplaintRouter.jsx** - Route management
- **ComplaintIntro.jsx** - Introduction page
- **ComplaintTypeSelect.jsx** - Fraud type selection
- **ImmediateActions.jsx** - Critical actions display
- **ComplaintQuestions.jsx** - Guided questionnaire
- **ComplaintSummary.jsx** - Information summary
- **OfficialRedirection.jsx** - Official portal links
- **IncidentTypeCard.jsx** - Fraud type card
- **ActionChecklist.jsx** - Action checklist component
- **HelplineCard.jsx** - Helpline information
- **DoDontCard.jsx** - Do's and Don'ts
- **QuestionCard.jsx** - Question display
- **SummaryBlock.jsx** - Summary section
- **complaintFlowEngine.js** - Flow logic

### Routes Involved
```
/complaints/intro
/complaints/type
/complaints/actions
/complaints/questions
/complaints/summary
/complaints/redirect
```

### Mock APIs/Functions Used
```javascript
mockApi.getCurrentUser()  // Get authenticated user (optional)
// Note: This feature works without authentication for emergency access
```

### Data Read/Written
**Read**: None (stateless feature)
**Written**: None (no data persistence in MVP)

## 4. Current Mock Database Schema

```javascript
// No database storage in MVP
// All data is session-based (React state)
// Future: Store complaint drafts for logged-in users

{
  "sessionData": {
    "incidentType": "otp_fraud",           // Selected fraud type
    "immediateActionsTaken": [             // Actions user confirmed
      "blocked_card",
      "contacted_bank"
    ],
    "answers": {                           // Questionnaire responses
      "when_occurred": "2024-02-08T10:00:00Z",
      "amount_lost": 5000,
      "suspect_details": "...",
      "evidence_available": ["screenshots", "sms"]
    },
    "timestamp": "2024-02-08T10:30:00Z"
  }
}
```

### Field Purposes (Future Implementation)
- **incidentType**: Type of fraud experienced
- **immediateActionsTaken**: Array of actions user has taken
- **answers**: Object containing questionnaire responses
- **timestamp**: When complaint guidance was accessed

### Data Types
- **String**: incidentType, text responses
- **Array**: immediateActionsTaken, evidence_available
- **Number**: amount_lost
- **ISO 8601 Timestamp**: when_occurred, timestamp

### Update Triggers
- None in MVP (stateless)
- Future: Save draft on each step completion

## 5. Backend-Ready Data Model (Future)

### SQL Tables

```sql
-- Complaint drafts table (for logged-in users)
CREATE TABLE complaint_drafts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  incident_type VARCHAR(100),
  immediate_actions JSONB,
  questionnaire_answers JSONB,
  status VARCHAR(50) DEFAULT 'draft',  -- 'draft', 'submitted', 'abandoned'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  submitted_at TIMESTAMP
);

-- Complaint submissions (if filing through platform)
CREATE TABLE complaint_submissions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  draft_id UUID REFERENCES complaint_drafts(id),
  incident_type VARCHAR(100),
  incident_date TIMESTAMP,
  amount_lost DECIMAL(10,2),
  description TEXT,
  evidence_urls JSONB,
  submitted_to VARCHAR(100),  -- 'cybercrime_portal', 'local_police'
  submission_reference VARCHAR(255),
  submitted_at TIMESTAMP DEFAULT NOW()
);

-- Helpline access tracking (analytics)
CREATE TABLE helpline_accesses (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  helpline_type VARCHAR(100),
  accessed_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_complaint_drafts_user_id ON complaint_drafts(user_id);
CREATE INDEX idx_complaint_submissions_user_id ON complaint_submissions(user_id);
```

### NoSQL Collections (Alternative)

```javascript
// complaintDrafts collection
{
  "_id": "draft_1",
  "userId": "user_1",
  "incidentType": "otp_fraud",
  "immediateActions": ["blocked_card", "contacted_bank"],
  "questionnaireAnswers": {
    "whenOccurred": ISODate("2024-02-08T10:00:00Z"),
    "amountLost": 5000,
    "suspectDetails": "...",
    "evidenceAvailable": ["screenshots", "sms"]
  },
  "status": "draft",
  "createdAt": ISODate("2024-02-08T10:30:00Z"),
  "updatedAt": ISODate("2024-02-08T10:35:00Z"),
  "submittedAt": null
}

// complaintSubmissions collection
{
  "_id": "submission_1",
  "userId": "user_1",
  "draftId": "draft_1",
  "incidentType": "otp_fraud",
  "incidentDate": ISODate("2024-02-08T10:00:00Z"),
  "amountLost": 5000,
  "description": "...",
  "evidenceUrls": ["https://..."],
  "submittedTo": "cybercrime_portal",
  "submissionReference": "CC-2024-12345",
  "submittedAt": ISODate("2024-02-08T11:00:00Z")
}
```

### Suggested API Endpoints

```
POST /api/complaints/draft                  # Save complaint draft
GET  /api/complaints/draft/:userId          # Get user's draft
PUT  /api/complaints/draft/:draftId         # Update draft
POST /api/complaints/submit                 # Submit complaint
GET  /api/complaints/history/:userId        # Get complaint history
GET  /api/complaints/helplines              # Get helpline information
POST /api/complaints/helpline-access        # Track helpline access
```

### Relationships with Other Features
- **Dashboard**: May show "Active Complaint" status (future)
- **Learning**: Recommends prevention modules after complaint
- **Profile**: Shows complaint history (future)

## 6. Edge Cases & Rules

### What Happens on Reset
- Not applicable (no persistent data in MVP)
- Future: Complaint drafts are NOT deleted on profile reset

### What Happens on Re-attempt
- User can access complaint guidance multiple times
- Each access is independent (no history in MVP)
- Future: Previous complaints are saved and accessible

### What is User-Scoped vs Global
**User-Scoped** (Future):
- Complaint drafts
- Complaint submission history
- Helpline access history

**Global**:
- Fraud type definitions
- Immediate action checklists
- Questionnaire templates
- Helpline information
- Official portal links

### What Should NOT Be Stored
- Sensitive personal information (bank details, passwords)
- Evidence files (only URLs/references)
- Real-time session state (use session storage)
- Temporary navigation state

## 7. Integration Dependencies

### Which Other Features Read This Data
- None in MVP
- Future: Dashboard may show active complaint status

### Which Features Update This Data
- **Complaint Flow**: Creates and updates drafts (future)

### Order of Operations
1. User accesses complaint guidance
2. User selects fraud type → Load type-specific guidance
3. User reviews immediate actions → Display checklist
4. User answers questions → Collect information
5. User reviews summary → Display collected data
6. User redirected to official portal → External link
7. (Future) Save draft → Store in database
8. (Future) Track submission → Record submission reference

## Backend Migration Notes

- Implement draft auto-save (save on each step)
- Add encryption for sensitive complaint data
- Implement evidence file upload and storage
- Add integration with National Cyber Crime Portal API (if available)
- Track complaint status (filed, under investigation, resolved)
- Implement notification system for complaint updates
- Add analytics: most common fraud types, average amount lost
- Consider anonymous complaint filing (no login required)
- Implement complaint reference number generation
- Add follow-up reminders (check complaint status)
- Consider multi-language support for non-English speakers
