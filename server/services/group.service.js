import group from '../models/group.model.js';

export const createGroup=async(userId,{name})=>{
    return await group.create({
        name,
        members:[userId],
        createdBy:[userId],
    });
};