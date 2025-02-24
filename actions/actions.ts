
"use server";

import { profileSchema, validatedwithZod } from "@/utils/schemas";

const renderError =(error:unknown):{message:string}=>{ 
//code body 
return{
    message:error instanceof Error? error.message:'An Error!!'
}
}


export const createProfileAction = async (
    prevState: any,
     formData: FormData) => {

try{
    const rawData = Object.fromEntries(formData)
    const validatedField = validatedwithZod(profileSchema,rawData)
    console.log('validated',validatedField)
    return { rawData: 'Create Profile Success!!' }
}catch (error){
 console.log(error)
 return renderError(error)
}
    
};