import userModel from "../../DB/model/userModel.js"
import { asyncHandler } from "../utils/errorHandling.js"
import { verifyToken } from "../utils/token.js"

export const auth=asyncHandler(
    async (req,res,next)=>{
        const {authorization}=req.headers
        console.log(authorization)
        if(!authorization?.startsWith("hamadasalmalaa__")){
            return res.json({message:"authorization not valid"})
        }
        const token=authorization.split("hamadasalmalaa__")[1]
        console.log({token})
        const decoded=verifyToken({token})
        console.log(decoded)
        if(!decoded?.id){
            return res.json({message:"decoded is not valid"})
        }
        const authUser=await userModel.findById(decoded.id).select("name,role,email,status")
        console.log({authUser})
        if(!authUser){
            return res.json({message:"authUser is not valid"})
        }
        req.user=authUser;
        return next()
    }
    
)
    