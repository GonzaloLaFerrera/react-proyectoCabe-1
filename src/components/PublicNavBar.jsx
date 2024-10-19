import { NavLink } from "react-router-dom";

const PublicNavBar = () => {
    return (
        <nav className="container min-w-full flex justify-end gap-2 px-2 py-4 bg-[#887a7a] items-center md:pr-[14px]">
            <button className="h-10 w-20 rounded-md bg-[#686060] text-black text-xs font-semibold px-2 py-2 border-[1px] border-[#afa5a5] hover:shadow-lg hover:cursor-pointer lg:h-14 lg:w-28 lg:text-sm">
                <NavLink to={'/register'}>REGISTER</NavLink> 
            </button>
            <button className="h-10 w-20 rounded-md bg-[#686060] text-black text-xs font-semibold px-2 py-2 border-[1px] border-[#afa5a5] hover:shadow-lg hover:cursor-pointer lg:h-14 lg:w-28 lg:text-sm">
                <NavLink to={'/login'}>SIGN IN</NavLink>
            </button>
        </nav>
    )
}

export default PublicNavBar;


