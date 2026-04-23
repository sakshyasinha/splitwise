import jwt from 'jsonwebtoken';

export const protect=async(req,res,next)=>{
    const token=req.headers.authorization?.split(' ')[1];

    if(!token)return res.status(401).json({message: 'Not authorized, no token'});

    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;
    next();
}