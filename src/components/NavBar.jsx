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
        <nav className="container min-w-full flex gap-2 justify-end py-4 bg-[#887a7a] px-4">
            <Button variant="contained" style={{ border: '1px solid #afa5a5', boxShadow: 'none', cursor: 'pointer', backgroundColor: '#686060' }}>
                <NavLink to='/home'>Home</NavLink>
            </Button>
            <Button variant="contained" style={{ border: '1px solid #afa5a5', boxShadow: 'none', cursor: 'pointer', backgroundColor: '#686060' }}>
                <NavLink to='/profile'>Profile</NavLink>
            </Button>
            <Button variant="contained" onClick={handleClickLogOut} style={{ border: '1px solid #afa5a5', boxShadow: 'none', cursor: 'pointer', backgroundColor: '#686060' }}>
                <NavLink to='/'>Logout</NavLink>
            </Button>
        </nav>
    );
};

export default NavBar;