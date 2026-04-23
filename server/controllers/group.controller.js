import * as groupService from '../services/group.service.js';

export const createGroup=async(req,res)=>{
    const group = await groupService.createGroup(req.body);
    res.json(group);
}