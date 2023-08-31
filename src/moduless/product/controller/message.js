import messageModel from "../../../../DB/model/messageModel.js";
import userModel from "../../../../DB/model/userModel.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

export const getMessage=(req,res,next)=>{
    console.log("message");
}
export const sendMessage=asyncHandler(async(req,res,next)=>{
    const{receiveId}=req.params;
    const{description}=req.body;
    console.log(description)
    const user=await userModel.findById(receiveId)
    if(!user){
        return next(new Error("not catch user"))
    }
    const createMessage=await messageModel.create({description,receiveId})
    return res.json({message:"done",createMessage})
})

export const deleteMessage=async(req,res,next)=>{
const{id}=req.params;
const message=await messageModel.deleteOne({_id:id,receiveId:req.user._id})
if(!message){
    return next(new Error("message not found"))
}
return res.json({message:"done"})

}