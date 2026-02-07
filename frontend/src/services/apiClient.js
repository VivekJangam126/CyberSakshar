const API_URL = 'http://localhost:5000/api'

export const apiClient = {
  post: async (endpoint, data) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response.json()
  },

  get: async (endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}`)
    return response.json()
  },
}
