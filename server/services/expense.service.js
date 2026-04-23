import expense from '../models/expense.model.js';
import { splitEqual } from './split.service.js';

export const addExpense=async(userId,data)=>{
    const {groupId,amount,description,participants}=data;

    const splits=splitEqual(amount, participants);

    const expense=await expense.create({
        groupId,
        amount,
        description,
        paidBy:userId,
        participants:splits,
    });
    return expense;
};