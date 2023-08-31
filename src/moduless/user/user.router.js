import  Router  from "express";
import { validationMethod } from "../../MiddleWare/validation.js";
import * as validator from "./user.validation.js"
import * as userController from "./controller/user.js"
import { auth} from "../../MiddleWare/auth.js";
const router=Router()
router.get("/profile",auth,userController.profile)
router.patch("/password",validationMethod(validator.updatePassword),auth,userController.updatePassword)
router.get("/:id/profile",auth,userController.shareProfile)
export default router
