import API from './api.js';

export async function addExpense(payload) {
  const response = await API.post('/expenses/add', payload);
  return response.data;
}