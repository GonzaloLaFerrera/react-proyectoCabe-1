import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    const handleClickLogOut = () => {
        
        return fetch("http://127.0.0.1:3000/user/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        }).then((data)=>{
            console.log(data)
            if(data.status !== 200){
                console.log('Le estamos pifiando')
                navigate("/")
            } 
            navigate("/");  
        });
    };

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
            <Button variant="contained" onClick={handleClickLogOut}>
                <NavLink to='/'>Logout</NavLink>
            </Button>
            <Button variant="contained">
                <NavLink to='/profile'>Profile</NavLink>
            </Button>
        </nav>
    );
};

export default NavBar;