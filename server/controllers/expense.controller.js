import * as expenseService from '../services/expense.service.js';

export const addExpense=async(req,res)=>{
    const expense = await expenseService.addExpense(req.body);
    res.json(expense);
}