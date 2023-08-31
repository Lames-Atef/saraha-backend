import joi from "joi"
import { generalField } from "../../MiddleWare/validation.js"

export const sendMessage={
   body: joi.object({
    description:joi.string().required(),
}).required(),
params:joi.object({
    receiveId:generalField.id,
}).required()
}
export const deleteMessage={
    params:joi.object({
    id:generalField.id,
}).required()}