import API, { API_URL } from 'services/axiosWrapper';

export const getUserEvents = async () => {
  const response = await API.get(`${API_URL}/api/user-events`);
  return response.data;
};

export const subscribeToEvent = async (body) => {
  const response = await API.post(`${API_URL}/api/user-events`, body);
  return response.data;
};

export const unsubscribeToEvent = async (eventId) => {
  const response = await API.delete(`${API_URL}/api/user-events/${eventId}`);
  return response.data;
};

export const getUserEventsTypes = async () => {
  const response = await API.get(`${API_URL}/api/user-events-types`);
  return response.data;
};
