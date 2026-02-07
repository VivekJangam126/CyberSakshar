# Theme & Language (Global Preferences)

## 1. Feature Overview

Global Theme and Language management provides users with personalized UI preferences that persist across sessions and devices. Theme controls light/dark mode, while Language enables multi-lingual support (currently English and Hindi).

**Purpose**: Provide accessible, personalized user experience through theme and language customization.

**User Problem Solved**: Users need UI that matches their preferences (dark mode for eye comfort, native language for comprehension).

## 2. User Flow (High Level)

### Entry Points
- AppHeader theme toggle button (sun/moon icon)
- AppHeader language toggle button (EN/हिं)
- Profile Settings page

### Page Flow
1. User clicks theme toggle → Theme switches immediately
2. User clicks language toggle → Language switches immediately
3. User changes settings in Profile → Updates persist globally
4. User logs out → Preferences reset to defaults
5. User logs back in → Preferences reload from database

### Exit Points
- No explicit exit (preferences apply globally)

## 3. Current Frontend Implementation

### Key Components
- **ThemeContext.jsx** - Global theme state management
- **LanguageContext.jsx** - Global language state management
- **AppHeader.jsx** - Theme and language toggle buttons
- **ProfileSettings.jsx** - Settings management UI
- **i18n.js** - i18next configuration
- **index.html** - Pre-render theme initialization script

### Routes Involved
- All routes (theme and language apply globally)

### Mock APIs/Functions Used
```javascript
mockApi.getCurrentUser()                        // Get authenticated user
mockApi.getUserPreferences(userId)              // Get user preferences
mockApi.updateUserPreferences(userId, prefs)    // Update preferences
```

### Data Read/Written
**Read**:
- User preferences (theme, language)
- User authentication status

**Written**:
- Theme preference (light/dark)
- Language preference (en/hi)

## 4. Current Mock Database Schema

```javascript
// User preferences in mock DB
{
  "users": [
    {
      "id": "user_1",
      "preferences": {
        "theme": "light",                    // "light" | "dark"
        "language": "en",                    // "en" | "hi"
        "notifications": true
      }
    }
  ]
}
```

### Field Purposes
- **theme**: UI theme preference (light or dark mode)
- **language**: UI language preference (English or Hindi)
- **notifications**: Notification preference (future use)

### Data Types
- **String**: theme ("light" | "dark"), language ("en" | "hi")
- **Boolean**: notifications

### Update Triggers
- Theme toggle → Updates preferences.theme in DB, applies to HTML element
- Language toggle → Updates preferences.language in DB, updates i18n
- Login → Loads preferences from DB, applies theme and language
- Logout → Resets to defaults (light theme, English)

## 5. Backend-Ready Data Model (Future)

### SQL Tables

```sql
-- User preferences table (already defined in auth doc)
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  theme VARCHAR(20) DEFAULT 'light' CHECK (theme IN ('light', 'dark')),
  language VARCHAR(10) DEFAULT 'en' CHECK (language IN ('en', 'hi', 'mr', 'ta')),
  notifications BOOLEAN DEFAULT TRUE,
  email_notifications BOOLEAN DEFAULT TRUE,
  font_size VARCHAR(20) DEFAULT 'medium',  -- 'small', 'medium', 'large'
  high_contrast BOOLEAN DEFAULT FALSE,     -- Accessibility
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Preference change history (analytics)
CREATE TABLE preference_changes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  preference_type VARCHAR(50),  -- 'theme', 'language', etc.
  old_value VARCHAR(50),
  new_value VARCHAR(50),
  changed_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_user_preferences_user_id ON user_preferences(user_id);
CREATE INDEX idx_preference_changes_user_id ON preference_changes(user_id);
```

### NoSQL Collections (Alternative)

```javascript
// Embedded in users collection
{
  "_id": "user_1",
  "email": "student@demo.com",
  "preferences": {
    "theme": "light",
    "language": "en",
    "notifications": true,
    "emailNotifications": true,
    "fontSize": "medium",
    "highContrast": false
  },
  "preferenceHistory": [
    {
      "type": "theme",
      "oldValue": "light",
      "newValue": "dark",
      "changedAt": ISODate("2024-02-08T10:00:00Z")
    }
  ]
}
```

### Suggested API Endpoints

```
GET  /api/preferences/:userId               # Get user preferences
PUT  /api/preferences/:userId               # Update preferences
PATCH /api/preferences/:userId/theme        # Update theme only
PATCH /api/preferences/:userId/language     # Update language only
GET  /api/preferences/:userId/history       # Get preference change history
```

### Relationships with Other Features
- **All Features**: Apply theme and language globally
- **Profile**: Displays and manages preferences
- **Authentication**: Loads preferences on login

## 6. Edge Cases & Rules

### What Happens on Reset
- User preferences persist (NOT reset)
- Theme and language remain unchanged
- Only progress data is reset

### What Happens on Re-attempt
- Preferences can be changed unlimited times
- Each change is immediate and persistent
- No confirmation required

### What is User-Scoped vs Global
**User-Scoped**:
- Theme preference
- Language preference
- All preference settings

**Global**:
- Available themes (light, dark)
- Available languages (en, hi)
- Default preferences (light, en)

### What Should NOT Be Stored
- Temporary theme state (use context)
- Browser-level preferences (use database)
- CSS variables (computed from theme)

## 7. Integration Dependencies

### Which Other Features Read This Data
- **All Features**: Apply theme and language
- **Profile**: Displays current preferences
- **AppHeader**: Shows current theme/language state

### Which Features Update This Data
- **AppHeader**: Theme and language toggles
- **Profile Settings**: Preference management
- **Authentication**: Loads preferences on login

### Order of Operations
**Theme Change**:
1. User clicks theme toggle
2. Context calls mockApi.updateUserPreferences()
3. Database updates preferences.theme
4. Context updates local state
5. HTML element class updated (add/remove 'dark')
6. UI re-renders with new theme
7. No page reload required

**Language Change**:
1. User clicks language toggle
2. Context calls mockApi.updateUserPreferences()
3. Database updates preferences.language
4. Context updates local state
5. i18n.changeLanguage() called
6. UI re-renders with new language
7. No page reload required

**Login**:
1. User logs in successfully
2. Auth dispatches 'auth-changed' event
3. Theme context listens to event
4. Theme context calls mockApi.getUserPreferences()
5. Theme context applies user's theme
6. Language context listens to event
7. Language context calls mockApi.getUserPreferences()
8. Language context applies user's language
9. UI renders with user's preferences

## Backend Migration Notes

- Store preferences in user table or separate preferences table
- Implement preference validation (valid theme/language values)
- Add more theme options (high contrast, custom colors)
- Add more language options (Marathi, Tamil, Telugu, etc.)
- Implement preference sync across devices
- Add preference presets (accessibility, reading mode, etc.)
- Track preference usage analytics
- Implement A/B testing for default preferences
- Add preference export/import (for backup)
- Consider system preference detection (auto dark mode)
- Implement preference inheritance (organization defaults)
- Add preference locking (for institutional deployments)

## Implementation Details

### Theme Application
- Theme is applied to `<html>` element via class
- Tailwind CSS `dark:` variants handle styling
- Pre-render script in index.html prevents flash
- Context initializes synchronously (no async)

### Language Application
- i18next handles translations
- Language files in `src/app/i18n.js`
- Context updates i18n instance directly
- Components use `useTranslation()` hook

### Persistence Strategy
- Single source of truth: mockApi.getUserPreferences()
- No direct localStorage access from components
- Contexts read from API on mount
- Contexts update API on change
- Database persists automatically

### Performance Considerations
- Theme change is instant (no API call delay)
- Language change is instant (no reload)
- Preferences loaded once on login
- No polling or real-time sync needed
