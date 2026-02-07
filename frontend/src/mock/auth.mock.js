// Authentication mock API
// Handles login, logout, and current user management

import db from './db.js';

const AUTH_USER_KEY = 'auth_user';

export const authMock = {
  // Login user
  login(email, password) {
    const user = db.authenticateUser(email, password);
    
    if (!user) {
      return {
        success: false,
        error: 'Invalid email or password',
        user: null,
      };
    }

    // Store authenticated user
    try {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    } catch (error) {
      console.error('[AuthMock] Failed to store user:', error);
    }

    return {
      success: true,
      error: null,
      user,
    };
  },

  // Logout user
  logout() {
    try {
      localStorage.removeItem(AUTH_USER_KEY);
    } catch (error) {
      console.error('[AuthMock] Failed to remove user:', error);
    }

    return {
      success: true,
    };
  },

  // Get current authenticated user
  getCurrentUser() {
    try {
      const stored = localStorage.getItem(AUTH_USER_KEY);
      
      if (!stored) {
        return null;
      }

      const user = JSON.parse(stored);
      
      // Verify user still exists in DB
      const dbUser = db.getUserById(user.id);
      if (!dbUser) {
        localStorage.removeItem(AUTH_USER_KEY);
        return null;
      }

      return user;
    } catch (error) {
      console.error('[AuthMock] Failed to get current user:', error);
      return null;
    }
  },

  // Check if user is authenticated
  isAuthenticated() {
    return this.getCurrentUser() !== null;
  },

  // Register new user (optional - for future use)
  register(userData) {
    // Not implemented for demo
    return {
      success: false,
      error: 'Registration not available in demo mode',
      user: null,
    };
  },
};
