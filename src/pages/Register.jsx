import { Avatar, Box, TextField, Typography } from "@mui/material";

const Register = () => {
    return (
        <Box sx={{mt:8, maxWidth:'400px', mx:'auto'}}>
            <Avatar sx={{ mx:'auto', bgcolor:'#b063dd' }} />   
            <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2}}>Register</Typography>
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
    );
};

export default Register;