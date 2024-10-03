import { NavLink } from "react-router-dom";

const PublicNavBar = () => {
    return (
        <nav className="container min-w-full flex justify-end gap-2 p-4 bg-[#887a7a] items-center">
            <button className="h-12 w-24 rounded-md bg-[#686060] text-black text-xs font-semibold px-2 py-4 border-[1px] border-[#afa5a5] hover:shadow-lg hover:cursor-pointer">
                <NavLink to={'/register'}>REGISTER</NavLink> 
            </button>
            <button className="h-12 w-24 rounded-md bg-[#686060] text-black text-xs font-semibold px-2 py-2 border-[1px] border-[#afa5a5] hover:shadow-lg hover:cursor-pointer">
                <NavLink to={'/login'}>SIGN IN</NavLink>
            </button>
        </nav>
    )
}

export default PublicNavBar;


