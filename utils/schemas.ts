


import { z, ZodSchema } from 'zod'


//const profileSchema = z.string().min(2,{message:"อักขระต้องมากกว่า 2 ตัวขึ้นไป"})

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: "ชื่อ ต้องมากกว่า 2 ตัวขึ้นไป" }),
    lastName: z.string().min(2, { message: "นามสกุล ต้องมากกว่า 2 ตัวขึ้นไป" }),
    userName: z.string().min(2, { message: "username ต้องมากกว่า 2 ตัวขึ้นไป" }),
})

export const validatedwithZod =<T> (schema :ZodSchema<T>, data:unknown):T => {
    const result = schema.safeParse(data);
    if (!result.success) {
        //code
        const errors = result.error.errors?.map((error:any) => error.message)
        console.log("ss",errors)
        throw new Error(errors?.join(','))
        
      

    }
    return result.data

};