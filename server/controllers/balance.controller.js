import { CalculateBalance } from "../services/balance.service";

export const getBalance=async(req,res)=>{
    const balance=await CalculateBalance(req.user.id);
    res.json(balance);
}