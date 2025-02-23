
import FormInput from "@/components/form/FormInput"
import { Button } from "@/components/ui/button"

const createProfileAction = async (fromData: FormData) => {
    'use server'
    const firstName = fromData.get('firstName') as string
    console.log('hhihelllll')
}

const CreateProfile = () => {
    return (
        <section>
            <h1 className=" text-2xl font-semibold mb-8 capitalize">
                new user
            </h1>
            <div className="border p-8 rounded-md ">
                <form action={createProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">

                  
                    <FormInput name="fistName"label="Fist Name"type="text"placeholder="Fist Name"/>
                    <FormInput name="lastName"label="Last Name"type="text"placeholder="Last Name"/>
                    <FormInput name="userName"label="Username"type="text"placeholder="Username"/>
                    </div>
                    <Button type="submit" size='lg'>
                        Create Profile
                    </Button>
                </form>
            </div>
        </section>
    )
}
export default CreateProfile