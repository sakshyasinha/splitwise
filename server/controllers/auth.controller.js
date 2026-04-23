import * as authService from '../services/auth.service.js';

export const registerUser=async(req,res)=>{
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};

export const loginUser=async(req,res)=>{
    try {
        const token = await authService.loginUser(req.body);
        res.json({ token });
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
};