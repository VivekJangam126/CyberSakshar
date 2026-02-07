import apiClient from '../../services/apiClient';

export const simulationAPI = {
  getScenarios: async () => {
    const response = await apiClient.get('/simulations');
    return response.data;
  },

  getScenario: async (id) => {
    const response = await apiClient.get(`/simulations/${id}`);
    return response.data;
  },

  submitSimulation: async (simulationData) => {
    const response = await apiClient.post('/simulations/submit', simulationData);
    return response.data;
  },

  getSimulationHistory: async () => {
    const response = await apiClient.get('/simulations/history');
    return response.data;
  },
};
