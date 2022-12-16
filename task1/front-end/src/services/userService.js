import API, { API_URL } from 'services/axiosWrapper';

export const userService = {
  getUser: async () => {
    try {
      const user = await API.get(`${API_URL}/auth/me`);
      return user;
    } catch (e) {
      console.log(e);
    }
  },
};
