
import { createLandmarkAction } from "@/actions/actions"
import { SubmitButton } from "@/components/form/Buttons"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"




const CreateProfile = async () => {
  
        
    return (
        <section>
            <h1 className=" text-2xl font-semibold mb-8 capitalize">
                Create Landmark
            </h1>
            <div className="border p-8 rounded-md ">
                <FormContainer action={createLandmarkAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput name="name" label=" Create Landmark" type="text" placeholder=" Create Landmark" />
                       
                    </div>
                    <SubmitButton text="Create Profile" size='lg' />
                </FormContainer>
            </div>

        </section>
    )
}
export default CreateProfile