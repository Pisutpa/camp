import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const createProfileAction = async (fromData: FormData) => {
    'use server'
    const firstName = fromData.get('firstName') as string
    console.log('hhihelllll', firstName)
}

const CreateProfile = () => {
    return (
        <section>
            <h1 className=" text-2xl font-semibold mb-8 capitalize">
                new user
            </h1>
            <div>
                <form action={createProfileAction}>
                    <div className="mb-2">
                        <Label htmlFor="firstName" >
                            First Name
                            <Input name="firstName" type="text" />
                        </Label>
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