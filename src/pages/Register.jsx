import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// MUI icons and components
import { Https } from "@mui/icons-material";
import { Avatar, Box, TextField, Typography } from "@mui/material";

// User logged management
import { useRedirectActiveUser } from "../services/useRedirectActiveUser";

// Services
import { userRegister } from "../services/userRegister";

//// Form management and validation
import { useFormik } from "formik";
import * as yup from 'yup';

// Alerts
import Swal from 'sweetalert2';

/////////////////////////////////////////////////////////////////////////////////

// NUEVA LÓGICA DE FORMULARIO CON MATERIAL UI Y FORMIK

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .min(2, 'Name should be of minimum 2 characters length')
        .required('Your name is required'),
    lastName: yup
        .string('Enter your last name')
        .min(2, 'Last name should be of minimum 2 characters length')
        .required('Your last name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email adress')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(4, 'Password should be of minimum 4 characters length')
        .required('Password is required'),
});

const Register = () => {

    const navigate = useNavigate();
    
    const {userIsLogged} = useSelector((state) => state.isLogged)

    console.log('El Console del ESTADO LOGUEADO EN REGISTRO', userIsLogged);

    useRedirectActiveUser(userIsLogged, '/home');

    useEffect(() => {
        console.log('ESTOY VIENDOTE!!!!', userIsLogged)
    },[userIsLogged]);

    const formik = useFormik({
        initialValues: {
            name: 'Please enter your name...',
            lastName: 'Please enter your last name...',
            email: 'example@example.com',
            password: 'Example1234'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values)
            userRegister(values.name, values.lastName, values.email, values.password)
            .then((data)=>{
                console.log(data)
                if(data.ok){
                    navigate("/login");
                    Swal.fire({
                        title: 'Succesful register!',
                        text: `Welcome ${values.name}, please login...`,
                        icon: 'success',
                        confirmButtonText: 'Continue...',
                        confirmButtonColor: '#686060'
                    })
                } else {
                    Swal.fire({
                        title: 'Oops...!',
                        text: `There's an error. Check your info and try again`,
                        icon: 'error',
                        confirmButtonText: 'Try again',
                        confirmButtonColor: '#686060'
                    })
                } 
            })
        },
    });

    return(
        <>
            {/* <Box sx={{mt:8, width:'75%', mx:2}}> */}
            <Box sx={{width:'100%', mt: 4}}>
                <Avatar sx={{ mx:'auto', bgcolor:'#767477' }}>
                    <Https/>
                </Avatar>
                <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2}}>Register</Typography>
                    <Box sx={{ mt:2, mx:2 }} component='form'  onSubmit={formik.handleSubmit}>
                        <TextField
                            type="text"
                            id='name'                        
                            name="name"                        
                            label='Nombre'
                            fullWidth
                            sx={{ mb:3, bgcolor:'#f5f1f1' }}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}                            
                        />
                        <TextField
                            type="text"                            
                            name="lastName"
                            id="lastName"
                            label='Apellido'
                            fullWidth
                            sx={{ mb:3, bgcolor:'#f5f1f1' }}
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}   
                        />
                        <TextField
                            id='email'                        
                            name="email"                        
                            label='Email'
                            fullWidth
                            sx={{ mb:3, bgcolor:'#f5f1f1' }}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField 
                            type="password"
                            name="password"
                            id="password"
                            label='Password'
                            fullWidth
                            sx={{ mb:3, bgcolor:'#f5f1f1' }}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <button className="h-15 w-30 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 mx-32" type="submit">
                            REGISTRARSE
                        </button>
                </Box>
            </Box>
        </>
    )
}

export default Register;