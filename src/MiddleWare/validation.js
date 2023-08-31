const Method=["body","query","params","headers"]
import joi from "joi";
export const generalField={
    password:joi.string().pattern(RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)),
    email:joi.string().email().required(),
    cPassword:joi.string().required(),
    id:joi.string().max(24).min(24).required()

}

export const validationMethod=(schema)=>{
    return(req,res,next)=>{
        const validationErr=[];
        Method.forEach(key=> {
            if(schema[key]){
                console.log([key])
                const validationResult=schema[key].validate(req[key],{abortEarly:false})
                if(validationResult.error){
              validationErr.push(validationResult.error.details)
                }   
            } 
           
        });
        if(validationErr.length>0){
            return res.json({message:"error in validation",validationErr})
        }
        return next()
    }
}