import API from './api.js';

export async function askAI(prompt) {
  const response = await API.post('/ai/chat', { prompt });
  return response.data;
}