import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from '../redux/userSlice'


const NavBar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickLogOut = () => {
        
        return fetch("http://localhost:3000/user/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        }).then((data)=>{
            console.log(data)
            dispatch(logoutUser())
            navigate('/logout')
            //alert('Sesión Finalizada') //puede ser una page o un componente            
            if(data.status !== 200){
                console.log('Estoy en el IF')
                navigate("/")
            } 
            // navigate("/");  
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