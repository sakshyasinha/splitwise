import { group } from 'node:console';
import expense from '../models/expense.model.js';

export const CalculateBalance=async(groupId)=>{
    const expenses=await expense.find({groupId});

    const balances={};

    for(const expense of expenses){
        const {paidBy,amount,participants}=expense;

        balances[paidBy]=(balances[paidBy] || 0)+amount;

        participants.forEach(({userId,share})=>{
            balances[userId]=balances[userId] || 0-share;
        })
    }
    return balances;
};