import mongoose from "mongoose";

const groupSchema=new mongoose.Schema({
    name:String,
    members:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    createdBy:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
});

export default mongoose.model('Group',groupSchema);

