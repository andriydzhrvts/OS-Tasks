import API, { API_URL } from 'services/axiosWrapper';

export const getEvents = async () => {
  const response = await API.get(`${API_URL}/api/events`);
  return response.data;
};
