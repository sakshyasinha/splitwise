export const splitEqual=(amount, participants)=>{
    const share = amount/participants;
    return participants.map(participant=>({
        userId:participant,
        amount:share,
    }));
};