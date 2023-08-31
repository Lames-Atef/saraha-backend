
import { hash, compare } from "../../../utils/hashAndCompare.js";
import userModel from "../../../../DB/model/userModel.js";
import { generateToken } from "../../../utils/token.js";
import { asyncHandler } from "../../../utils/errorHandling.js";
export const signUP=asyncHandler( async(req,res,next)=>{
    const{name,email,password}=req.body;
    const checkUser=await userModel.findOne({email})
if(checkUser){
    return res.json({message:"email exist"})
}
const hashPassword=hash({
    plaintext:password
})
const user=await userModel.create({name,password:hashPassword,email})
return res.json({message:"done",user:user._id})
  })


export const login=asyncHandler( async(req,res,next)=>{
  const{email,password}=req.body
  const user=await userModel.findOne({email})
  if(!user){
    return res.json({message:"not exist"})
  }
  const match=compare({
    plaintext:password,
    hashValue:user.password
  })
  if(!match){
    return res.json({message:"password not valid"})
  }
  const token=generateToken({
    payload:{role:user.role,id:user._id,isLoggedIn:true},
    expiresIn:60*60*30
  })
  user.status="online";
  await user.save();
  return res.json({message:"done",token})
  
})