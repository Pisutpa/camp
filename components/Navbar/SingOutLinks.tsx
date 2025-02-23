'use client'
import { SignOutButton } from '@clerk/nextjs'
import { toast } from "sonner"
import { Button } from '../ui/button'


const SingOutLinks = () => {
  return (

  <SignOutButton redirectUrl='/'> 

   <button
   className="w-full text-left"
    onClick={() => toast("Logout success")
} >Logout</button>

  </SignOutButton>
  )
}
export default SingOutLinks