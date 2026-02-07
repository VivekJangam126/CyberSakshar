import apiClient from '../../services/apiClient';

export const quizAPI = {
  getQuiz: async (level = 'beginner') => {
    const response = await apiClient.get(`/quiz?level=${level}`);
    return response.data;
  },

  submitQuiz: async (quizData) => {
    const response = await apiClient.post('/quiz/submit', quizData);
    return response.data;
  },

  getQuizHistory: async () => {
    const response = await apiClient.get('/quiz/history');
    return response.data;
  },
};
