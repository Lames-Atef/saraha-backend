import mongoose from "mongoose";
const connectDB=async()=>{
    return await mongoose.connect(process.env.DB_CONNECT)
    .then(result=>{
        console.log(`database connected ${result}`);
    }).catch(err=>{
        console.log(`database failed ${err}`);
    })
}
export default connectDB