import apiClient from '../../services/apiClient';

export const complaintAPI = {
  submitComplaint: async (complaintData) => {
    const formData = new FormData();
    
    Object.keys(complaintData).forEach((key) => {
      if (key === 'contactInfo') {
        formData.append('contactInfo', JSON.stringify(complaintData[key]));
      } else if (key === 'evidence' && complaintData[key]) {
        formData.append('evidence', complaintData[key]);
      } else {
        formData.append(key, complaintData[key]);
      }
    });

    const response = await apiClient.post('/complaints', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getComplaints: async () => {
    const response = await apiClient.get('/complaints');
    return response.data;
  },

  getComplaintStatus: async (id) => {
    const response = await apiClient.get(`/complaints/${id}`);
    return response.data;
  },
};
