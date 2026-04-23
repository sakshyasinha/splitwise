import mongoose from 'mongoose';
import { type } from 'node:os';

const userSchema =new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
});

export default mongoose.model('User',userSchema);