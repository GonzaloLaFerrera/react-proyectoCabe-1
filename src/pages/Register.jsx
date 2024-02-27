import { Avatar, Box, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRedirectActiveUser } from "../services/useRedirectActiveUser";

import { useSelector } from "react-redux";

const Register = () => {

    const navigate = useNavigate();
    
    /* const {isLogged} = useSelector((state) => state.isLogged); */
    const {userIsLogged} = useSelector((state) => state.isLogged)

    console.log('El Console del ESTADO LOGUEADO EN REGISTRO', userIsLogged);

    useRedirectActiveUser(userIsLogged, '/home');

    useEffect(() => {
        console.log('ESTOY VIENDOTE!!!!', userIsLogged)
    },[userIsLogged]);  

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    function handleChange(e){
        setState((prev) => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        });
    }

    async function handleClick(){
       
        return fetch("http://localhost:3000/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                password: state.password
            }),
        }).then((data)=>{
            console.log(data)
            if(data.ok) navigate("/login");
        })
    }
  
    return (
        <Box sx={{mt:8, maxWidth:'400px', mx:'auto'}}>
            <Avatar sx={{ mx:'auto', bgcolor:'#767477' }} />   
            <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2}}>Register</Typography>
            <Box sx={{ mt:4 }} component='form'  onChange={handleChange}>
                <TextField
                    type="text"
                    placeholder='Ingrese su nombre...'
                    name="firstName"
                    id="firstName"
                    label='Nombre'
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1' }}
                />
                <TextField
                    type="text"
                    placeholder='Ingrese su apellido...'
                    name="lastName"
                    id="lastName"
                    label='Apellido'
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1' }}
                />
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
                    label='Contraseña'
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1' }}
                />
            </Box>
            <button className="h-15 w-30 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 ml-36" onClick={handleClick}>
                REGISTRARSE
            </button>
            {/* <Button 
                fullWidth 
                variant="contained" 
                onClick={handleClick}
            >Registrar</Button> */}
        </Box>
    );
};

export default Register;