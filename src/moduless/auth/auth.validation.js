import joi from "joi"
import { generalField } from "../../MiddleWare/validation.js";


export const signupValidation=joi.object({
    name:joi.string().required(),
    email:generalField.email,
    password:generalField.password,
    cPassword:generalField.cPassword.valid(joi.ref('password'))
}).required();

export const loginValidation={
    body:joi.object({
        password:generalField.password,
        email:generalField.email,
    }).required(),
    query:joi.object({
        flag:joi.boolean().required()
    }).required()
}