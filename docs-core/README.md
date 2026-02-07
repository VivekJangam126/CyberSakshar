# CyberSakshar Core Documentation

## Purpose

This documentation provides comprehensive technical specifications for all core features of the CyberSakshar platform. It is designed for:

- **Backend Engineers**: Implementing real backend APIs
- **Government/Institutional Partners**: Understanding system architecture
- **Future Maintainers**: Long-term platform maintenance
- **Technical Reviewers**: Evaluating architecture and design decisions

## Documentation Structure

Each feature is documented in a separate file following a consistent structure:

1. **Feature Overview** - What it does, why it exists, problem it solves
2. **User Flow** - Entry points, page flow, exit points
3. **Current Frontend Implementation** - Components, routes, APIs used
4. **Current Mock Database Schema** - Exact data structure in mock DB
5. **Backend-Ready Data Model** - SQL/NoSQL schemas for real backend
6. **Edge Cases & Rules** - Reset behavior, re-attempts, scope
7. **Integration Dependencies** - How features interact

## Feature Documentation

### Core Features
- **[01-dashboard.md](01-dashboard.md)** - Central hub aggregating all user data
- **[02-adaptive-quiz.md](02-adaptive-quiz.md)** - Cyber risk assessment with adaptive feedback
- **[03-simulations.md](03-simulations.md)** - Realistic fraud scenario practice
- **[04-micro-learning.md](04-micro-learning.md)** - Bite-sized educational modules
- **[05-certificate.md](05-certificate.md)** - Proof of learning completion
- **[06-complaint-guidance.md](06-complaint-guidance.md)** - Fraud reporting assistance
- **[07-safety-report.md](07-safety-report.md)** - Comprehensive progress report

### System Features
- **[08-auth-and-profile.md](08-auth-and-profile.md)** - Authentication and user management
- **[09-theme-and-language.md](09-theme-and-language.md)** - Global UI preferences
- **[10-mock-backend.md](10-mock-backend.md)** - Mock backend architecture and migration

## Key Principles

### Single Source of Truth
All documentation reflects the actual implementation. Mock database schemas match exactly what is stored in localStorage.

### Backend-Ready Design
Every feature includes SQL and NoSQL data models ready for backend implementation. API endpoints are suggested with RESTful conventions.

### Migration Path
The mock backend is designed to be removable without rewriting UI components. The `mockApi.js` interface matches what a real backend would provide.

### No UI Code
This documentation focuses on data models, APIs, and business logic. UI implementation details are in the source code.

## Mock Backend Overview

The current implementation uses a localStorage-based mock backend:

- **Storage**: Browser localStorage (5-10 MB limit)
- **Persistence**: Survives page refreshes
- **Multi-user**: Supports multiple demo accounts
- **Isolation**: User data properly scoped by userId
- **Vercel Compatible**: Works on static hosting

### localStorage Keys
- `CYBERSAKSHAR_DB` - Complete database state
- `auth_user` - Current authenticated user session

### Demo Users
| Email | Password | Profile |
|-------|----------|---------|
| student@demo.com | student123 | Beginner with partial progress |
| citizen@demo.com | citizen123 | Intermediate with some completion |
| teacher@demo.com | teacher123 | Advanced with full completion |

## Backend Migration Strategy

### Phase 1: API Interface Replacement
1. Keep `mockApi.js` structure
2. Replace mock implementations with real API calls
3. Add authentication headers (JWT)
4. Add error handling and loading states
5. **UI components require NO changes**

### Phase 2: Database Implementation
1. Choose database (PostgreSQL, MongoDB, etc.)
2. Implement schemas from documentation
3. Add migrations and seed data
4. Implement CRUD operations
5. Add validation and security

### Phase 3: Production Features
1. Implement proper authentication (JWT, OAuth)
2. Add rate limiting and security
3. Implement analytics and logging
4. Add real-time features (if needed)
5. Implement backup and recovery

## Data Model Conventions

### SQL Tables
- Use UUID for primary keys
- Use foreign keys for relationships
- Add indexes for performance
- Include timestamps (created_at, updated_at)
- Use CHECK constraints for validation

### NoSQL Collections
- Use meaningful document IDs
- Embed related data when appropriate
- Use references for large relationships
- Include timestamps (ISODate format)
- Add indexes for queries

### API Endpoints
- RESTful conventions (GET, POST, PUT, DELETE)
- Resource-based URLs (/api/resource/:id)
- Consistent response format
- Proper HTTP status codes
- Error messages in response body

## Security Considerations

### Current Mock Backend (NOT SECURE)
⚠️ **Demo Only**:
- Passwords in plain text
- No encryption
- No access control
- Client-side only
- Anyone can inspect localStorage

### Real Backend Requirements
🔒 **Must Have**:
- Password hashing (bcrypt, argon2)
- JWT authentication
- HTTPS only
- Rate limiting
- Input validation
- SQL injection prevention
- XSS protection
- CSRF protection

## Analytics & Monitoring

### Recommended Tracking
- API call frequency and response times
- Error rates and types
- User activity patterns
- Feature usage and completion rates
- Drop-off points in user flows
- Performance metrics

### Privacy Considerations
- Anonymize personal data in analytics
- Comply with GDPR/data protection laws
- Implement data retention policies
- Provide data export/deletion options

## Testing Strategy

### Unit Tests
- Test business logic independently
- Mock external dependencies
- Test edge cases and error handling

### Integration Tests
- Test API endpoints
- Test database operations
- Test feature interactions

### E2E Tests
- Test complete user flows
- Test multi-user scenarios
- Test data persistence

## Deployment Considerations

### Current (Vercel)
- Static hosting
- No backend required
- localStorage persistence
- Works globally

### Future (Production)
- Backend API server
- Database server
- CDN for static assets
- Load balancing
- Auto-scaling
- Monitoring and logging

## Contributing

When updating documentation:

1. **Keep it accurate** - Documentation must match implementation
2. **Update schemas** - If data structure changes, update docs
3. **Add examples** - Include code examples where helpful
4. **Explain why** - Document design decisions and trade-offs
5. **No UI details** - Focus on data and business logic

## Questions?

For technical questions about:
- **Data models**: See individual feature documentation
- **API design**: See suggested endpoints in each doc
- **Migration**: See 10-mock-backend.md
- **Security**: See security sections in each doc

---

**Last Updated**: February 2026
**Version**: 1.0.0
**Status**: Production-Ready Documentation
