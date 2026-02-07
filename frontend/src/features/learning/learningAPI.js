import apiClient from '../../services/apiClient';

export const learningAPI = {
  getLessons: async () => {
    const response = await apiClient.get('/lessons');
    return response.data;
  },

  getLesson: async (id) => {
    const response = await apiClient.get(`/lessons/${id}`);
    return response.data;
  },

  completeLesson: async (lessonId) => {
    const response = await apiClient.post('/lessons/complete', { lessonId });
    return response.data;
  },

  getProgress: async () => {
    const response = await apiClient.get('/lessons/progress');
    return response.data;
  },
};
