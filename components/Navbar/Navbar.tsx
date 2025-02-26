import { ChangTheme } from "./Darkmode"
import DropdownListMenu from "./DropdownListMenu"
import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
    return (
        <nav>
            <div className="container flex flex-col justify-between
            py-8 sm:flex-row sm:items-center gap-4
            ">
                {/* logo*/}
                <Logo />
                <Search />
                {/*search*/}
                {/*darkmode & profile*/}
                <div className="flex gap-4">
                    <ChangTheme>
                    </ChangTheme>
                    <DropdownListMenu>
                    </DropdownListMenu>
                </div>

            </div>
        </nav>
    )
}
export default Navbar