# Authentication & User Profile

## 1. Feature Overview

Authentication provides secure user login/logout functionality, while the Profile feature allows users to view their information, manage settings, and control their learning journey.

**Purpose**: Secure user authentication and personalized profile management.

**User Problem Solved**: Users need secure access to their personalized learning data and ability to manage their account settings.

## 2. User Flow (High Level)

### Entry Points
**Authentication**:
- Landing page "Login" button
- Any protected route (redirects to login)

**Profile**:
- Navigation header profile menu
- Dashboard "View Profile" link

### Page Flow
**Authentication**:
1. **Login** (`/login`) - Email/password login
2. **Register** (`/register`) - New user registration (disabled in demo)
3. Redirect to Dashboard on success

**Profile**:
1. **Profile Page** (`/profile`) - Complete profile view with sections:
   - Profile Header (user info, avatar)
   - Profile Snapshot (progress summary)
   - Profile Settings (theme, language)
   - Profile Demo Tools (reset journey)
   - Profile Actions (sign out)

### Exit Points
- Dashboard (after login or profile update)
- Landing page (after logout)

## 3. Current Frontend Implementation

### Key Components
**Authentication**:
- **Login.jsx** - Login page
- **Register.jsx** - Registration page (disabled)
- **authSlice.js** - Redux auth state
- **authAPI.js** - Auth API calls
- **ProtectedRoute.jsx** - Route protection

**Profile**:
- **ProfilePage.jsx** - Main profile page
- **ProfileHeader.jsx** - User info display
- **ProfileSnapshot.jsx** - Progress summary
- **ProfileSettings.jsx** - Settings management
- **ProfileDemoTools.jsx** - Demo utilities
- **ProfileActions.jsx** - Account actions
- **ProfileMenu.jsx** - Dropdown menu component

### Routes Involved
```
/login
/register
/profile
```

### Mock APIs/Functions Used
```javascript
// Authentication
mockApi.login(email, password)              // Login user
mockApi.logout()                            // Logout user
mockApi.getCurrentUser()                    // Get current user
mockApi.isAuthenticated()                   // Check auth status

// Profile
mockApi.getDashboardData(userId)            // Get user progress
mockApi.resetUserProgress(userId)           // Reset journey
mockApi.getUserPreferences(userId)          // Get user preferences
mockApi.updateUserPreferences(userId, prefs) // Update preferences
```

### Data Read/Written
**Authentication Read**:
- User credentials (email, password)
- User profile information

**Authentication Written**:
- Auth token (localStorage: 'auth_user')
- Login timestamp

**Profile Read**:
- User information
- Progress data (quiz, simulations, learning, certificate)
- User preferences (theme, language)

**Profile Written**:
- User preferences (theme, language)
- Reset progress (clears all progress data)

## 4. Current Mock Database Schema

```javascript
// User data in mock DB
{
  "users": [
    {
      "id": "user_1",
      "email": "student@demo.com",
      "password": "student123",              // Plain text (demo only!)
      "name": "Priya Sharma",
      "role": "student",
      "avatar": null,
      "createdAt": "2024-01-15T10:00:00Z",
      "preferences": {
        "theme": "light",                    // "light" | "dark"
        "language": "en",                    // "en" | "hi"
        "notifications": true
      }
    }
  ]
}

// Auth session (localStorage)
{
  "auth_user": {
    "id": "user_1",
    "email": "student@demo.com",
    "name": "Priya Sharma",
    "role": "student"
    // Note: password NOT stored in session
  }
}
```

### Field Purposes
- **id**: Unique user identifier
- **email**: User email (login credential)
- **password**: User password (plain text in demo, should be hashed in production)
- **name**: User's full name
- **role**: User role (student, citizen, teacher)
- **avatar**: Profile picture URL (null in demo)
- **createdAt**: Account creation timestamp
- **preferences**: User preferences object
- **preferences.theme**: UI theme preference
- **preferences.language**: Language preference
- **preferences.notifications**: Notification preference

### Data Types
- **String**: id, email, password, name, role, avatar, theme, language
- **Boolean**: notifications
- **ISO 8601 Timestamp**: createdAt

### Update Triggers
- Login → Stores auth_user in localStorage
- Logout → Removes auth_user from localStorage
- Theme change → Updates preferences.theme in DB
- Language change → Updates preferences.language in DB
- Reset journey → Clears progress data (NOT preferences)

## 5. Backend-Ready Data Model (Future)

### SQL Tables

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'citizen',
  avatar_url TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login_at TIMESTAMP
);

-- User preferences table
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  theme VARCHAR(20) DEFAULT 'light',
  language VARCHAR(10) DEFAULT 'en',
  notifications BOOLEAN DEFAULT TRUE,
  email_notifications BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- User sessions table (for token management)
CREATE TABLE user_sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Password reset tokens table
CREATE TABLE password_reset_tokens (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_user_sessions_token ON user_sessions(token);
CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX idx_password_reset_tokens_token ON password_reset_tokens(token);
```

### NoSQL Collections (Alternative)

```javascript
// users collection
{
  "_id": "user_1",
  "email": "student@demo.com",
  "passwordHash": "$2b$10$...",
  "name": "Priya Sharma",
  "role": "student",
  "avatarUrl": null,
  "emailVerified": false,
  "preferences": {
    "theme": "light",
    "language": "en",
    "notifications": true,
    "emailNotifications": true
  },
  "createdAt": ISODate("2024-01-15T10:00:00Z"),
  "updatedAt": ISODate("2024-01-15T10:00:00Z"),
  "lastLoginAt": ISODate("2024-02-08T10:00:00Z")
}

// userSessions collection
{
  "_id": "session_1",
  "userId": "user_1",
  "token": "jwt_token_here",
  "ipAddress": "192.168.1.1",
  "userAgent": "Mozilla/5.0...",
  "expiresAt": ISODate("2024-02-15T10:00:00Z"),
  "createdAt": ISODate("2024-02-08T10:00:00Z")
}
```

### Suggested API Endpoints

```
POST /api/auth/register                     # Register new user
POST /api/auth/login                        # Login user
POST /api/auth/logout                       # Logout user
POST /api/auth/refresh                      # Refresh token
POST /api/auth/forgot-password              # Request password reset
POST /api/auth/reset-password               # Reset password
GET  /api/auth/verify-email/:token          # Verify email

GET  /api/profile/:userId                   # Get user profile
PUT  /api/profile/:userId                   # Update user profile
GET  /api/profile/:userId/preferences       # Get preferences
PUT  /api/profile/:userId/preferences       # Update preferences
POST /api/profile/:userId/avatar            # Upload avatar
POST /api/profile/:userId/reset-progress    # Reset journey
DELETE /api/profile/:userId                 # Delete account
```

### Relationships with Other Features
- **All Features**: Require authentication to access
- **Dashboard**: Displays user-specific data
- **Quiz/Simulations/Learning**: Store user-specific progress
- **Certificate**: Issues to specific user
- **Theme/Language**: Apply user preferences globally

## 6. Edge Cases & Rules

### What Happens on Reset
- User account remains intact
- All progress data is cleared (quiz, simulations, learning, certificate)
- User preferences persist (theme, language)
- User can continue using the platform immediately

### What Happens on Re-attempt
- Login: User can login multiple times (new session each time)
- Logout: Clears current session only
- Password reset: Generates new token, invalidates old ones

### What is User-Scoped vs Global
**User-Scoped**:
- User profile information
- User preferences
- User progress data
- User sessions

**Global**:
- Available features
- Platform content
- UI components

### What Should NOT BE Stored
- Plain text passwords (use bcrypt/argon2)
- Sensitive personal information (SSN, credit cards)
- Session tokens in database (use JWT or Redis)
- Temporary UI state

## 7. Integration Dependencies

### Which Other Features Read This Data
- **All Features**: Read user ID for data scoping
- **Dashboard**: Displays user name and progress
- **Theme/Language Contexts**: Read user preferences
- **Profile**: Displays all user information

### Which Features Update This Data
- **Login**: Creates user session
- **Logout**: Destroys user session
- **Profile Settings**: Updates user preferences
- **Profile Reset**: Clears user progress

### Order of Operations
**Login**:
1. User submits email/password
2. Validate credentials against database
3. Generate session token (JWT)
4. Store session in database/Redis
5. Return token to client
6. Client stores token in localStorage/cookie
7. Dispatch auth-changed event
8. Theme/Language contexts reload preferences
9. Redirect to dashboard

**Logout**:
1. User clicks logout
2. Remove session from database/Redis
3. Clear token from client storage
4. Dispatch auth-changed event
5. Theme/Language contexts reset to defaults
6. Redirect to landing page

**Preference Update**:
1. User changes theme/language
2. Update preferences in database
3. Apply change immediately in UI
4. No page reload required

## Backend Migration Notes

- Implement proper password hashing (bcrypt, argon2)
- Use JWT for stateless authentication
- Implement refresh token rotation
- Add rate limiting on login endpoint
- Implement email verification
- Add OAuth providers (Google, Facebook)
- Implement 2FA (optional)
- Add session management (view/revoke active sessions)
- Implement account deletion (GDPR compliance)
- Add audit logging (login attempts, preference changes)
- Consider Redis for session storage (performance)
- Implement password strength requirements
- Add CAPTCHA for registration/login (prevent bots)
