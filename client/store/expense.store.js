import { create } from 'zustand';
import { addExpense as addExpenseService } from '../services/expense.service.js';
import { createGroup as createGroupService } from '../services/group.service.js';

const useExpenseStore = create((set) => ({
  expenses: [],
  groups: [],
  loading: false,
  error: null,
  clearError: () => set({ error: null }),
  addExpense: async (payload) => {
    set({ loading: true, error: null });
    try {
      const expense = await addExpenseService(payload);
      set((state) => ({
        expenses: [expense, ...state.expenses],
        loading: false
      }));
      return expense;
    } catch (error) {
      set({
        loading: false,
        error: error?.response?.data?.message || error.message || 'Failed to add expense'
      });
      throw error;
    }
  },
  createGroup: async (payload) => {
    set({ loading: true, error: null });
    try {
      const group = await createGroupService(payload);
      set((state) => ({
        groups: [group, ...state.groups],
        loading: false
      }));
      return group;
    } catch (error) {
      set({
        loading: false,
        error: error?.response?.data?.message || error.message || 'Failed to create group'
      });
      throw error;
    }
  }
}));

export default useExpenseStore;