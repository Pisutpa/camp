
"use server";

import { profileSchema, validatedwithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import db from '@/utils/db'
import { redirect } from "next/navigation";
import { promises } from "dns";
const getAuthUser = async () => {
    //code body
    const user = await currentUser()
    if (!user) {
        throw new Error('You must logged!!!')
    }
    console.log('aaaaa',user.privateMetadata)
    if (!user.privateMetadata.hasProfile) redirect('/profile/create')
    return user
}

const renderError = (error: unknown): { message: string } => {
    //code body 
    return {
        message: error instanceof Error ? error.message : 'An Error!!'
    }
}


export const createProfileAction = async (
    prevState: any,
    formData: FormData) => {

    try {
        const user = await currentUser()
        if (!user) throw new Error('Please Login!!!')

        const rawData = Object.fromEntries(formData)
        const validatedField = validatedwithZod(profileSchema, rawData)
      
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validatedField
            }
        })
      
        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })
        //console.log('validated',validatedField)
        // return { rawData: 'Create Profile Success!!' }
    } catch (error) {
        //console.log(error)
        return renderError(error)
    }
    redirect('/')
};


export const createLandmarkAction = async (
    prevState: any,
    formData: FormData):Promise<{message: string}> => {

    try {
        const user = await currentUser()
        if (!user) throw new Error('Please Login!!!')

        const rawData = Object.fromEntries(formData)
      //  const validatedField = validatedwithZod(profileSchema, rawData)
      console.log("Validated",rawData)
      
      
        //console.log('validated',validatedField)
        return { message: 'Create Landmark Success!!' }
    } catch (error) {
        //console.log(error)
        return renderError(error)
    }
   // redirect('/')
};