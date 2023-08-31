import connectDB from "../DB/connection.js"
import productRouter from "./moduless/product/message.router.js"
import userRouter from "./moduless/user/user.router.js"
import authRouter from './moduless/auth/auth.router.js';
import { globalErrorHandling } from "./utils/errorHandling.js";



const initApp=(app,express)=>{
    app.use(express.json({}))
    app.use("/product",productRouter)
    app.use("/user",userRouter)
    app.use("/auth",authRouter)
    app.use(globalErrorHandling)
connectDB()
}
export default initApp