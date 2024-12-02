import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

const apiService = {
  getRecentlyViewed: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}/recentlyViewed`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Mock token
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching recently viewed products:', error);
      throw error;
    }
  },
};

export default apiService;
