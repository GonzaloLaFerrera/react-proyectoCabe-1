import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="container flex gap-2 justify-center py-4 bg-slate-500">
            <Button variant="contained">
                <NavLink to='/home'>Home</NavLink>
            </Button>
            <Button variant="contained">
                <NavLink to='/register'>Register</NavLink>
            </Button>
            <Button variant="contained">
                <NavLink to='/login'>Login</NavLink>
            </Button>
            <Button variant="contained">
                <NavLink to='/'>Logout</NavLink>
            </Button>
        </nav>
    );
};

export default NavBar;