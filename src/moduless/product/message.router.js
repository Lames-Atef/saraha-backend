import  Router from "express";
import { validationMethod } from "../../MiddleWare/validation.js";
import * as Validator  from "./message.validation.js";
import * as messageController from "./controller/message.js"
const router=Router()
router.get("/",messageController.getMessage)
router.post("/:receiveId",validationMethod(Validator.sendMessage),messageController.sendMessage)
router.delete("/:id",validationMethod(Validator.deleteMessage),messageController.deleteMessage)
export default router