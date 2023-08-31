import { compare, hash } from "../../../utils/hashAndCompare.js"
import userModel from "../../../../DB/model/userModel.js"
import { asyncHandler } from "../../../utils/errorHandling.js"

export const profile=async(req,res,next)=>{
    const user=await userModel.findById(req.user.id)
    return res.json({message:"done",user})
}
export const updatePassword=asyncHandler( async(req,res,next)=>{
    const{oldPassword,newPassword}=req.body;
    const user=await userModel.findById(req.user.id)
    const comparePassword=compare({plaintext:oldPassword,hashValue:user.password})
    if(!comparePassword){
        return next(new Error("invalid password"))
    }
    const hashPassword=hash({plaintext:newPassword})
    user.password=hashPassword;
    await user.save();
    return res.json({message:"done",})
})

export const shareProfile=async(req,res,next)=>{
    const user=await userModel.findById(req.params.id).select('name,email')
    return user ?res.json({message:"done",user}):next(new Error("invalid id"))
}