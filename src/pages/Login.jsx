import { Https } from "@mui/icons-material";
import { Avatar, Box, TextField, Typography } from "@mui/material";
// import { Button } from "@mui/material";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../services/userLogin";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogged } from "../redux/isLoggedSlice";

// Form management and validation
import { useFormik } from "formik";
import * as yup from 'yup';

// Alerts
import Swal from 'sweetalert2';

/////////////////////////////////////////////////////////////////////////////////

// NUEVA LÓGICA DE FORMULARIO CON MATERIAL UI Y FORMIK

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email adress')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(4, 'Password should be of minimum 4 characters length')
        .required('Password is required'),
});

const Login = () => {

    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const {isLogged} = useSelector((state) => state.isLogged);

    const formik = useFormik({
        initialValues: {
            email: 'example@example.com',
            password: 'Example1234'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2)); // Podría cambiar este alerta por Sweet Alert            
            console.log(values)
            userLogin(values.email, values.password)
            .then(resp => {
                if(resp.status === 200){
                    dispatch(setIsLogged(true))
                    console.log('El console del LOGUEO', isLogged)                    
                    navigate("/user");
                    Swal.fire({
                        title: 'Succesful login!',
                        text: `Welcome ${values.email}`,
                        icon: 'success',
                        confirmButtonText: 'Continue...',
                        confirmButtonColor: '#686060'
                    })
                } else {
                    Swal.fire({
                        title: 'Oops...!',
                        text: `There's an error. Check your access info and try again`,
                        icon: 'error',
                        confirmButtonText: 'Try again',
                        confirmButtonColor: '#686060'
                    })
                }
            }).catch(err => console.log(err))
        },
    });

    return(
        <>
            {/* <Box sx={{width:{xs:'100%', lg:'25%'}, mt: {xs:4, lg:1}, display:{lg:'flex'}, flexDirection:{lg:'column'}, justifyContent:{lg:'center'}}}> '100%' */}
            <Box sx={{backgroundColor:{lg:'#c4bcbc'},paddingBottom:{lg:4},width:{xs:'100%', lg:'25%'}, mt: {xs:4, lg:2}, marginX:{lg:'auto'}, boxShadow:{lg:2},}}>
                {/* <Avatar sx={{ mx:'auto', bgcolor:{ xs:'#767477', sm:'#7f1db1', md: '#2aa874', lg:'#e5f04a' }, mt:{sm:12} }}> */}
                <Avatar sx={{width:{lg:60}, height:{lg:60}, mx:'auto', bgcolor:'#767477', mt:{sm:6, lg:4} }}>
                    {/* sx={{ width: 80, height: 80, bgcolor: '#767477' }} */}
                    <Https sx={{ fontSize:{ lg:60 }}}/>
                </Avatar>
                <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2, fontSize:{lg:30}}}>Login</Typography>
                <Box sx={{ mt:{xs:2, sm:6, lg:2}, mx:2/* , width:{lg:'80%'}, display:{lg:'flex'}, flexDirection:{lg:'column'}, align:{lg:'center'} */ }} component='form' onSubmit={formik.handleSubmit}>
                    <TextField
                        id='email'                        
                        name="email"                        
                        label='Email'
                        fullWidth
                        sx={{ mb:3, bgcolor:'#f5f1f1', mt:{ sm:2, lg:1  } }}
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
                        sx={{ mb:3, bgcolor:'#f5f1f1', mt:{ sm:4 } }}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    
                   {/*  <button className="h-15 w-30 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4  hover:shadow-lg hover:cursor-pointer mt-8 md:mx-[350px] md:mt-12" type="submit">
                        INGRESAR
                    </button> */}
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="h-15 w-36 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8" type="submit">
                            Sign in
                        </button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Login;

{/* <button className="h-15 w-30 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 ml-36" type="submit"> */}
{/* <Avatar sx={{ mx:'auto', bgcolor:'#767477' }}></Avatar> */}