import { Https } from "@mui/icons-material";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();

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

    const handleClick = () => {
        
        return fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: state.email,
                password: state.password
            }),
        }).then((data)=>{
            console.log(data)
            if(data.ok) navigate("/home");
        })
    }


    return (
        <>
            <Box sx={{mt:8, maxWidth:'400px', mx:'auto'}}>
                <Avatar sx={{ mx:'auto', bgcolor:'#6ddd63' }}>
                    <Https/>
                </Avatar>
                <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2}}>Login</Typography>
                <Box sx={{ mt:4 }} component='form' onChange={handleChange}>
                    <TextField
                        type="text"
                        placeholder="ejemplo@ejemplo.com"
                        name="email"
                        id="email"
                        label='email'
                        fullWidth
                        sx={{ mb:3 }}
                    />
                    <TextField
                        type="password"
                        placeholder="Abc123"
                        name="password"
                        id="password"
                        label='password'
                        fullWidth
                        sx={{ mb:3 }}
                    />
                </Box>

                <Button 
                fullWidth 
                variant="contained" 
                onClick={handleClick}
            >Ingresar</Button>

            </Box>
        </>
    )
};

export default Login;