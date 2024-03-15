import { Https } from "@mui/icons-material";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../services/userLogin";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogged } from "../redux/isLoggedSlice";


const Login = () => {

    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const {isLogged} = useSelector((state) => state.isLogged);
    

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setState((prev) => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    //ESTO HAY QUE LLEVARLO A UNA FUNCION O UN CUSTOM HOOK EN LA CARPETA SERVICES
    const handleClick = () => {
                
        // eslint-disable-next-line no-unused-vars
        userLogin(state.email, state.password)
        .then(resp => {
            if(resp.status === 200){
                dispatch(setIsLogged(true))
                console.log('El console del LOGUEO', isLogged)
                //setUser(true);
                navigate("/user");
            }
        }).catch(err => console.log(err))
        
        
    }

    console.log('El console del LOGUEO por fuera', isLogged)


    return (
        <>
            <Box sx={{mt:8, maxWidth:'400px', mx:'auto'}}>
                <Avatar sx={{ mx:'auto', bgcolor:'#767477' }}>
                    <Https/>
                </Avatar>
                <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2}}>Login</Typography>
                <Box sx={{ mt:4 }} component='form' onChange={handleChange}>
                    <TextField
                        type="text"
                        placeholder="ejemplo@ejemplo.com"
                        name="email"
                        id="email"
                        label='Email'
                        fullWidth
                        sx={{ mb:3, bgcolor:'#f5f1f1' }}
                    />
                    <TextField
                        type="password"
                        placeholder="Abc123"
                        name="password"
                        id="password"
                        label='Password'
                        fullWidth
                        sx={{ mb:3, bgcolor:'#f5f1f1' }}
                    />
                </Box>

                <button className="h-15 w-30 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 ml-36" onClick={handleClick}>
                    INGRESAR
                </button>
{/* 
                <Button 
                fullWidth 
                variant="contained" 
                onClick={handleClick}
                >Ingresar</Button> */}

            </Box>
        </>
    )
};

export default Login;