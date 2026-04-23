import useExpenseStore from '../store/expense.store.js';

export default function useExpenses() {
	const expenses = useExpenseStore((state) => state.expenses);
	const groups = useExpenseStore((state) => state.groups);
	const loading = useExpenseStore((state) => state.loading);
	const error = useExpenseStore((state) => state.error);
	const addExpense = useExpenseStore((state) => state.addExpense);
	const createGroup = useExpenseStore((state) => state.createGroup);
	const clearError = useExpenseStore((state) => state.clearError);

	return {
		expenses,
		groups,
		loading,
		error,
		addExpense,
		createGroup,
		clearError
	};
}
