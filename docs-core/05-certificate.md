# Certificate & Proof of Learning

## 1. Feature Overview

The Certificate feature provides users with a formal, verifiable acknowledgment of their completed cyber safety learning journey. It represents genuine engagement with quiz, simulations, and learning modules - not just passive content consumption.

**Purpose**: Provide official recognition of cyber safety education completion suitable for schools, institutions, and employers.

**User Problem Solved**: Users need tangible proof of their cyber safety education for academic or professional purposes.

## 2. User Flow (High Level)

### Entry Points
- Dashboard certificate status widget
- Navigation header "Certificate" link
- Profile menu "My Certificate"
- Completion of all requirements (auto-notification)

### Page Flow
1. **Certificate Status** (`/certificate/status`) - Eligibility check and requirements
2. **Certificate Preview** (`/certificate/preview`) - Full certificate design preview
3. **Certificate Download** (`/certificate/download`) - Download PDF and access

### Exit Points
- Dashboard (after download)
- Profile (to view again)
- Share (future: social media, email)

## 3. Current Frontend Implementation

### Key Components
- **CertificateRouter.jsx** - Route management
- **CertificateStatus.jsx** - Eligibility status page
- **CertificatePreview.jsx** - Certificate preview page
- **CertificateDownload.jsx** - Download page
- **EligibilityChecklist.jsx** - Requirements checklist
- **CertificateCard.jsx** - Wrapper component
- **CertificateLayout.jsx** - A4 certificate design
- **CertificateActions.jsx** - Action buttons
- **pdfGenerator.js** - PDF generation logic
- **certificateEligibility.js** - Eligibility logic

### Routes Involved
```
/certificate/status
/certificate/preview
/certificate/download
```

### Mock APIs/Functions Used
```javascript
mockApi.getCurrentUser()                    // Get authenticated user
mockApi.getCertificateStatus(userId)        // Get certificate status
mockApi.isCertificateEligible(userId)       // Check eligibility
mockApi.issueCertificate(userId)            // Issue certificate
```

### Data Read/Written
**Read**:
- Quiz completion status
- Simulation completion count
- Learning module completion count
- Certificate issuance status

**Written**:
- Certificate issuance flag
- Certificate ID
- Issuance timestamp

## 4. Current Mock Database Schema

```javascript
// Certificate data in mock DB
{
  "userId": "user_1",
  "certificates": {
    "user_1": {
      "eligible": true,                      // Boolean: meets requirements
      "issued": false,                       // Boolean: certificate generated
      "certificateId": null,                 // String: unique certificate ID (e.g., "CERT-2024-001")
      "issuedAt": null,                      // ISO timestamp: when issued
      "requirements": {
        "quizCompleted": true,               // Boolean: quiz completed
        "simulationsCompleted": 2,           // Number: simulations completed
        "learningCompleted": 2,              // Number: modules completed
        "minimumScore": 70                   // Number: minimum quiz score required
      }
    }
  }
}
```

### Field Purposes
- **eligible**: Boolean indicating if user meets all requirements
- **issued**: Boolean indicating if certificate has been generated
- **certificateId**: Unique identifier for the certificate (format: CERT-YYYY-XXXX)
- **issuedAt**: ISO timestamp of certificate generation
- **requirements**: Object tracking individual requirement completion

### Eligibility Rules
- Quiz completed with score ≥ 70%
- At least 2 simulations completed
- At least 2 learning modules completed

### Data Types
- **Boolean**: eligible, issued, quizCompleted
- **String**: certificateId (nullable)
- **Number**: simulationsCompleted, learningCompleted, minimumScore
- **ISO 8601 Timestamp**: issuedAt (nullable)

### Update Triggers
- Quiz completion → Updates quizCompleted, recalculates eligible
- Simulation completion → Updates simulationsCompleted, recalculates eligible
- Learning completion → Updates learningCompleted, recalculates eligible
- Certificate generation → Sets issued=true, generates certificateId, sets issuedAt

## 5. Backend-Ready Data Model (Future)

### SQL Tables

```sql
-- Certificates table
CREATE TABLE certificates (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) UNIQUE,
  certificate_id VARCHAR(100) UNIQUE,
  eligible BOOLEAN DEFAULT FALSE,
  issued BOOLEAN DEFAULT FALSE,
  issued_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Certificate requirements tracking
CREATE TABLE certificate_requirements (
  id UUID PRIMARY KEY,
  certificate_id UUID REFERENCES certificates(id) ON DELETE CASCADE,
  requirement_type VARCHAR(50),  -- 'quiz', 'simulation', 'learning'
  requirement_met BOOLEAN DEFAULT FALSE,
  value INTEGER,  -- count or score
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Certificate downloads tracking (analytics)
CREATE TABLE certificate_downloads (
  id UUID PRIMARY KEY,
  certificate_id UUID REFERENCES certificates(id),
  downloaded_at TIMESTAMP DEFAULT NOW(),
  ip_address VARCHAR(45),
  user_agent TEXT
);

-- Indexes
CREATE INDEX idx_certificates_user_id ON certificates(user_id);
CREATE INDEX idx_certificates_certificate_id ON certificates(certificate_id);
CREATE INDEX idx_cert_requirements_certificate_id ON certificate_requirements(certificate_id);
```

### NoSQL Collections (Alternative)

```javascript
// certificates collection
{
  "_id": "cert_1",
  "userId": "user_1",
  "certificateId": "CERT-2024-001",
  "eligible": true,
  "issued": true,
  "requirements": {
    "quizCompleted": true,
    "quizScore": 85,
    "simulationsCompleted": 3,
    "learningCompleted": 3
  },
  "issuedAt": ISODate("2024-01-28T10:00:00Z"),
  "downloads": [
    {
      "downloadedAt": ISODate("2024-01-28T10:05:00Z"),
      "ipAddress": "192.168.1.1"
    }
  ],
  "createdAt": ISODate("2024-01-15T10:00:00Z"),
  "updatedAt": ISODate("2024-01-28T10:00:00Z")
}
```

### Suggested API Endpoints

```
GET  /api/certificate/status/:userId        # Get certificate status
GET  /api/certificate/eligibility/:userId   # Check eligibility
POST /api/certificate/issue                 # Issue certificate
GET  /api/certificate/download/:certificateId  # Download PDF
GET  /api/certificate/verify/:certificateId    # Verify certificate authenticity
```

### Relationships with Other Features
- **Dashboard**: Displays certificate status and eligibility
- **Quiz**: Provides quiz completion requirement
- **Simulations**: Provides simulation count requirement
- **Learning**: Provides learning module count requirement
- **Profile**: Displays certificate access

## 6. Edge Cases & Rules

### What Happens on Reset
- Certificate eligibility resets to false
- Certificate issuance status remains (certificate persists)
- Requirements are recalculated based on reset progress
- User must re-complete requirements to generate new certificate

### What Happens on Re-attempt
- Certificate can only be issued once per user
- Re-completing requirements doesn't generate new certificate
- User can re-download existing certificate unlimited times

### What is User-Scoped vs Global
**User-Scoped**:
- Certificate eligibility and issuance
- Certificate ID
- Download history

**Global**:
- Certificate template design
- Eligibility requirements (70% quiz, 2 sims, 2 modules)
- Certificate format and styling

### What Should NOT Be Stored
- PDF file itself (generated on-demand)
- Temporary preview state
- Certificate design/template (should be in code/config)

## 7. Integration Dependencies

### Which Other Features Read This Data
- **Dashboard**: Displays certificate status
- **Profile**: Shows certificate access link

### Which Features Update This Data
- **Quiz**: Updates quiz completion requirement
- **Simulations**: Updates simulation count requirement
- **Learning**: Updates learning module count requirement
- **Certificate Flow**: Issues certificate when eligible

### Order of Operations
1. User completes quiz/simulation/learning → Update requirements
2. Check eligibility → Calculate if all requirements met
3. User navigates to certificate status → Display eligibility
4. User clicks "Generate Certificate" → Issue certificate
5. Generate certificate ID → Format: CERT-YYYY-XXXX
6. Set issued=true, issuedAt=now
7. Add activity entry → "Certificate Issued"
8. Navigate to preview page
9. User downloads PDF → Generate PDF from template

## Backend Migration Notes

- Certificate ID generation should be sequential and unique
- Implement certificate verification system (QR code, verification page)
- Store certificate metadata (not PDF) in database
- Generate PDF on-demand (don't store files)
- Add digital signature for authenticity
- Implement revocation system (if needed)
- Track download analytics
- Consider email delivery option
- Add multi-language certificate support
- Implement certificate expiry (optional, for compliance)
