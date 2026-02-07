import apiClient from '../../services/apiClient';

export const authAPI = {
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response;
  },

  register: async (userData) => {
    const response = await apiClient.post('/auth/register', userData);
    return response;
  },

  logout: async () => {
    try {
      const response = await apiClient.post('/auth/logout', {});
      return response;
    } catch (error) {
      // Logout locally even if server request fails
      return { success: true };
    }
  },

  getCurrentUser: async () => {
    const response = await apiClient.get('/auth/me');
    return response;
  },
};
