import API from './api.js';

export async function createGroup(payload) {
  const response = await API.post('/groups/create', payload);
  return response.data;
}