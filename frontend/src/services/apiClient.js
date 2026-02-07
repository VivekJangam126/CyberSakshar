const API_URL = 'http://localhost:5000/api'

export const apiClient = {
  post: async (endpoint, data) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(data),
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Request failed')
    }
    
    return response.json()
  },

  get: async (endpoint) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    })
    
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Request failed')
    }
    
    return response.json()
  },
}

export default apiClient
