import joi from "joi"
import { generalField } from "../../MiddleWare/validation.js";

export const updatePassword=joi.object({
    body:joi.object({
        oldPassword:generalField.password,
       newPassword:generalField.password.invalid(joi.ref("oldPassword")),
    cPassword:generalField.cPassword.valid(joi.ref("newPassword")),
    })
}).required();
export const shareProfile=joi.object({
    params:joi.object({
      id:generalField.id 
    })
}).required()