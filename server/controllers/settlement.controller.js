import { CalculateBalances } from "../services/balance.service";
import { simplifyDebts } from "../services/settlement.services";

export const getSettlement=async(req,res)=>{
    const{groupId}=req.params;
    const balances=await CalculateBalances(groupId);
    const settlements=simplifyDebts(balances);

    res.json(settlements);
}