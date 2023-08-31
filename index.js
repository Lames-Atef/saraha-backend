import express from "express";
import * as dotenv from "dotenv"
dotenv.config();
import initApp from "./src/app.router.js";
import sendEmail from "./src/services/sendEmail.js";
const app=express()
const port=6000
initApp(app,express)

app.listen(port,()=>{
    console.log(`app is running in port ${port}`)
})