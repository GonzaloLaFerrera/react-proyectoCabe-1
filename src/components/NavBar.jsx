import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from '../redux/userSlice'
import { setIsLogged } from "../redux/isLoggedSlice";

// Alerts
import Swal from 'sweetalert2';


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
            console.log('Desolgueando al Usario!')
            dispatch(logoutUser())
            //prueba para el deslogueo exitoso (FUNCIONA PERFECTAMENTE)
            dispatch(setIsLogged(false))
            navigate('/user/logout')
            // alert('Sesión Finalizada') //puede ser una page o un componente
            Swal.fire({
                title: 'Session finished!',
                text: `See you soon...`,
                icon: 'warning',
                confirmButtonText: 'Close',
                confirmButtonColor: '#686060'
            })            
            if(data.status !== 200){
                console.log('Algo salió mal en el Logout')
                navigate("/")
            } 
        });
    };

    return (
        <nav className="container min-w-full flex gap-2 justify-end py-4 bg-[#887a7a] px-4 sm:px-6">
            <Button variant="contained"sx={{boxShadow:{xs:0, lg:3}}} style={{ border: '1px solid #afa5a5', cursor: 'pointer', backgroundColor: '#686060' }}>
                <NavLink to='/user'>Home</NavLink>
            </Button>
            <Button variant="contained" sx={{boxShadow:{xs:0, lg:3}}} style={{ border: '1px solid #afa5a5', cursor: 'pointer', backgroundColor: '#686060' }}>
                <NavLink to='/user/profile'>Profile</NavLink>
            </Button>
            <Button variant="contained" onClick={handleClickLogOut}sx={{boxShadow:{xs:0,lg:3}}} style={{ border: '1px solid #afa5a5', cursor: 'pointer', backgroundColor: '#686060' }}>
                <NavLink to='/user/logout'>Logout</NavLink>
            </Button>
        </nav>
    );
};

export default NavBar;