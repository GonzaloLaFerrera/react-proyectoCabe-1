import { Https } from "@mui/icons-material";
import { Avatar, Box, TextField, Typography } from "@mui/material";


const Login = () => {
    return (
        <>
            <Box sx={{mt:8, maxWidth:'400px', mx:'auto'}}>
                <Avatar sx={{ mx:'auto', bgcolor:'#6ddd63' }}>
                    <Https/>
                </Avatar>
                <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2}}>Login</Typography>
                <Box sx={{ mt:4 }} component='form'>
                    <TextField
                        type="text"
                        placeholder="ejemplo@ejemplo.com"
                        name="email"
                        id="email"
                        label='Ingrese el correo electrónico...'
                        fullWidth
                        sx={{ mb:3 }}
                    />
                    <TextField
                        type="password"
                        placeholder="Abc123"
                        name="password"
                        id="password"
                        label='Ingrese la contraseña...'
                        fullWidth
                        sx={{ mb:3 }}
                    />
                </Box>

            </Box>
        </>
    )
};

export default Login;