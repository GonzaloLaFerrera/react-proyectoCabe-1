import { Avatar, Box, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

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
            <Avatar sx={{ mx:'auto', bgcolor:'#b063dd' }} />   
            <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2}}>Register</Typography>
            <Box sx={{ mt:4 }} component='form'  onChange={handleChange}>
                <TextField
                    type="text"
                    placeholder='Ingrese su nombre...'
                    name="firstName"
                    id="firstName"
                    label='Nombre'
                    fullWidth
                    sx={{ mb:3 }}
                />
                <TextField
                    type="text"
                    placeholder='Ingrese su apellido...'
                    name="lastName"
                    id="lastName"
                    label='Apellido'
                    fullWidth
                    sx={{ mb:3 }}
                />
                <TextField
                    type="text"
                    placeholder="ejemplo@ejemplo.com"
                    name="email"
                    id="email"
                    label='Email'
                    fullWidth
                    sx={{ mb:3 }}
                />
                <TextField 
                    type="password"
                    placeholder="Abc123"
                    name="password"
                    id="password"
                    label='Contraseña'
                    fullWidth
                    sx={{ mb:3 }}
                />
            </Box>
            <Button 
                fullWidth 
                variant="contained" 
                onClick={handleClick}
            >Registrar</Button>
        </Box>
    );
};

export default Register;