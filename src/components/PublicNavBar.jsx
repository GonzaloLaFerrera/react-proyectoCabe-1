import { NavLink } from "react-router-dom";

const PublicNavBar = () => {
    return (
        <nav className="container min-w-full flex justify-end gap-6 p-4 bg-[#887a7a]">
            <button className="h-15 w-30 rounded-md bg-[#686060] text-black text-sm font-semibold px-2 py-4 border-[1px] border-[#afa5a5] hover:shadow-lg hover:cursor-pointer">
                <NavLink to={'/register'}>REGISTRARSE</NavLink> 
            </button>
            <button className="h-15 w-30 rounded-md bg-[#686060] text-black text-sm font-semibold px-2 py-4 border-[1px] border-[#afa5a5] hover:shadow-lg hover:cursor-pointer">
                <NavLink to={'/login'}>INICIAR SESIÓN</NavLink>
            </button>
        </nav>
    )
}

export default PublicNavBar;


