import bcrypt from "bcryptjs"
export const hash=({plaintext,salt=process.env.SALT_ROUND}={})=>{
    const hash=bcrypt.hashSync(plaintext,parseInt(salt))
    return hash
}
export const compare=({plaintext,hashValue}={})=>{
    const match=bcrypt.compareSync(plaintext,hashValue)
    return match
}