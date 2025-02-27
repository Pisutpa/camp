
"use server";

import { profileSchema, validatedwithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from '@/utils/db'
import { redirect } from "next/navigation";
const getAuthUser = async()=>{
    //code body
const user = await currentUser()
if(!user){
    throw new Error('You must logged!!!')
}
if(!user.privateMetadata.hasProfile) redirect('/profile/create')
return user
}

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
    const user = await getAuthUser()

    const rawData = Object.fromEntries(formData)
    const validatedField = validatedwithZod(profileSchema,rawData)
   await db.profile.create({
    data:{
        clerkId:user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage:user.imageUrl?? '',
        ...validatedField
    }
   })
   const client = await clerkClient()
   await client.users.updateUserMetadata(user.id,{
    privateMetadata:{
        hasProfile: true
    }
   })
    //console.log('validated',validatedField)
   // return { rawData: 'Create Profile Success!!' }
}catch (error){
 //console.log(error)
 return renderError(error)
}
  redirect  ('/')
};