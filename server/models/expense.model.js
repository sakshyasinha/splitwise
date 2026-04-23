import mongoose from 'mongoose';

const expenseSchema=new mongoose.Schema({
    description:String,
    amount:Number,
    group:{type:mongoose.Schema.Types.ObjectId,ref:'Group'},
    paidBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    participants:[{userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},amount:Number
    },],
    description:String,
},{timestamps:true});

export default mongoose.model('Expense', expenseSchema);