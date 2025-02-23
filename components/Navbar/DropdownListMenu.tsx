
import { AlignLeft } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import UserIcon from './UserIcon';
import Link from 'next/link';
import { links } from '@/utils/links';
import SingOutLinks from './SingOutLinks';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'

const DropdownListMenu = () => {
    return (

        <DropdownMenu>
            {/* asChild ใช้ลูกที่อยู่ในปีกกา*/}
            <DropdownMenuTrigger asChild>

                <Button variant={'outline'}>
                    <AlignLeft />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/*,ล็อกเอ๊าแล้ว*/}
                <SignedOut>
                    <DropdownMenuItem >
                        <SignUpButton mode='modal'>
                            <button>
                                Regiter
                            </button>
                        </SignUpButton>
                    </DropdownMenuItem>
                    <DropdownMenuItem >

                        <SignInButton mode='modal'>
                            <button>
                                Login
                            </button>
                        </SignInButton>
                    </DropdownMenuItem>
                </SignedOut>
                {/*,ล็อกอินแล้ว*/}
                <SignedIn>
                    {
                        links.map((item, index) => {
                            return <DropdownMenuItem key={index}>
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </DropdownMenuItem>
                        })
                    }
                    <DropdownMenuSeparator />
                    <DropdownMenuItem >
                    <SingOutLinks />
                    </DropdownMenuItem>
                </SignedIn>


            </DropdownMenuContent>
        </DropdownMenu>


    )
}
export default DropdownListMenu