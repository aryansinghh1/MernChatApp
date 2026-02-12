const Chat = require("../models/Chat");
const Thread = require("../models/Thread");
const asyncHandler = require("../utils/asyncHandler");
const {getIO, onlineUsers} = require("../socket/socket");


//SEND MESSAGE
exports.sendMessage = asyncHandler(async (req,res)=>{
    const {sender,receiver,message} = req.body;

    if(!sender || !receiver ||!message)
        return res.status(400).json({message: "Missing fields"})

    //find or create thread
    let thread = await Thread.findOne({
        participants: {$all :[sender,receiver]},
    })
    
})