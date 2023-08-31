
import { Schema ,model} from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:false,
    },
    status:{
        type:String,
        default:"offline",
        enum:["offline","online","block"]
    },
    role:{
        type:String,
        default:"User",
        enum:["User","admin"]
    }
},{
    timestamps:true,
})
const userModel=model('User',userSchema)
export default userModel

