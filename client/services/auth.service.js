import API from './api.js';

export async function login(payload) {
  const response = await API.post('/auth/login', payload);
  return response.data;
}

export async function register(payload) {
  const response = await API.post('/auth/register', payload);
  return response.data;
}