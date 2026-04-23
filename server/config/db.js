import mongoose from 'mongoose';

const connectDB=async()=>{
    const mongoUri = (process.env.MONGO_URI || process.env.MONGOOSE_URI || '').trim();
    if (!mongoUri) {
        throw new Error('Missing Mongo URI. Set MONGO_URI (or MONGOOSE_URI) in your .env file.');
    }
    await mongoose.connect(mongoUri)
    console.log('MongoDB connected');
};

export default connectDB;