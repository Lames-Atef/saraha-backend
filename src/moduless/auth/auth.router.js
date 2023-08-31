import {Router } from "express";
import { validationMethod } from "../../MiddleWare/validation.js";
import * as  validator from "./auth.validation.js"
import * as authController from "./controller/auth.js"

const router=Router();
router.post("/signup",validationMethod(validator.signupValidation),authController.signUP)
router.post("/login",validationMethod(validator.loginValidation),authController.login)











export default router
