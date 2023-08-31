
import mongoose, { Schema ,model,Types} from "mongoose";

const messageSchema=new Schema({
    description:{
        type:String,
        required:true,
    },
    userId:{
        type:Types.ObjectId,
        ref:'User',
        required:true,
    }
},{
    timestamps:true,
})
const messageModel=mongoose.model.Message|| model('Message',messageSchema)
export default messageModel

