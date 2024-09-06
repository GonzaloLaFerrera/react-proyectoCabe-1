import { Avatar, Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRedirectActiveUser } from "../services/useRedirectActiveUser";

import { useSelector } from "react-redux";

const Register = () => {

    const navigate = useNavigate();
    
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

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Lógica de validación nueva
    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState({
        firstName: {
            error: false,
            message:''
        },
        lastName: {
            error: false,
            message:''
        },
        email: {
            error: false,
            message:''
        },
        password: {
            error: false,
            message:''
        }
    })

    /* const [error, setError] = useState({
        error: false,
        message:''
    }) */

    // Validación de Nombre
    const validateFirstName = (firstName) => {
        const firstNameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s'-]{2,14}$/;
        return firstNameRegex.test(firstName);
    };

    // Validación de Apellido
    const validateLastName = (lastName) => {
        const lastNameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s'-]{2,14}$/;
        return lastNameRegex.test(lastName);
    };

    // Validación de Email
    const validateEmail = (email) => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(email);
    };

    // Validación de Password
    const validatePassword = (password) => {
        // Expresión regular para contraseña (mínimo 8 caracteres, incluyendo mayúsculas, minúsculas y un número)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\W]{8,}$/;
        return passwordRegex.test(password);
    };

    //Validación de 1 sólo campo (FUNCIONA)
    /* const handleSubmit = (e) => {
        e.preventDefault()
        if (validateFirstName(firstName)) {
            setError({
                error: false,
                message: '',
            })
            console.log('First Name Correcto: ' + firstName)
        } else {
            setError({
                error: true,
                message: 'Ingrese un nombre válido. Mínimo 2 carácteres, y máximo 14.'
            })
        };
    }; */

    //Validación de Múltiples campos
    /* const handleSubmit = (e) => {
        e.preventDefault()

        let hasErrors = false;
        const newErrors = {...error};

        if (!validateFirstName(firstName)) {
            newErrors.firstName.message = 'Ingrese un nombre válido. Mínimo 2 carácteres, y máximo 14.'
            hasErrors = true;
        } else {
            newErrors.firstName.message = '';
            console.log('Nombre ingresado correctamente: ' + firstName)
        };

        if (!validateLastName(lastName)) {
            newErrors.lastName.message = 'Ingrese un apellido válido. Mínimo 2 carácteres, y máximo 14.'
            hasErrors = true;
        } else {
            newErrors.lastName.message = '';
            console.log('Apellido ingresado correctamente: ' + lastName)
        };

        if (!validateEmail(email)) {
            newErrors.email.message = 'Ingrese un formato de email válido. (Incluya @ y el dominio).'
            hasErrors = true;
        } else {
            newErrors.email.message = '';
            console.log('Email ingresado correctamente: ' + email)
        };

        if (!validatePassword(password)) {
            newErrors.password.message = 'Ingrese un formato de password válido. (Incluya mínimo 8 caracteres, incluyendo mayúsculas, minúsculas y un número).'
            hasErrors = true;
        } else {
            newErrors.password.message = '';
            console.log('Password ingresado correctamente: ' + password)
        };

        setError(newErrors);
    }; */

    const handleSubmit = (e) => {
        e.preventDefault()
        
        /* setError((prevError) => ({
            ...prevError,
            firstName: { error: false, message: "" },
            lastName: { error: false, message: "" },
            email: { error: false, message: "" },
            password: { error: false, message: "" },
          })); */

        if (validateFirstName(firstName)) {
            setError({
                firstName: {
                    error: false,
                    message: ''
                }
            })
            console.log('First Name Correcto: ' + firstName)
        } else {
            setError({
                firstName:{
                    error: true,
                    message: 'Ingrese un nombre válido. Mínimo 2 carácteres, y máximo 14.'
                }
            })
        };

        if (validateLastName(lastName)) {
            setError({
                lastName: {
                    error: false,
                    message: ''
                }
            })
            console.log('Apellido ingresado correctamente: ' + lastName)
        } else {
            setError({
                lastName: {
                    error: true,
                    message: 'Ingrese un apellido válido. Mínimo 2 carácteres, y máximo 14.'
                }
            })
        };

        if (validateEmail(email)) {
            setError({
                email: {
                    error: false,
                    message: ''
                }
            })
            console.log('Apellido ingresado correctamente: ' + email)
        } else {
            setError({
                email: {
                    error: true,
                    message: 'Ingrese un formato de email válido. (Incluya @ y el dominio).'
                }             
            })
        };

        if (validatePassword(password)) {
            setError({
                password:{
                    error: false,
                    message: ''
                }               
            })
            console.log('Apellido ingresado correctamente: ' + password)
        } else {
            setError({
                password:{
                    error: true,
                    message: 'Ingrese un formato de password válido. (Incluya mínimo 8 caracteres, incluyendo mayúsculas, minúsculas y un número).'
                }
            })
        };
        
        console.log(error)

        if (!error.firstName?.error && !error.lastName?.error && !error.email?.error && !error.password?.error) {
            console.log("Formulario válido. Enviar datos:", { firstName, lastName, email, password });
        }        
    };


    return (
        <Box sx={{paddingTop:6, maxWidth:'400px', mx:'auto'}}>
            <Avatar sx={{ mx:'auto', bgcolor:'#767477' }} />   
            <Typography variant="h5" component='h1' sx={{ textAlign:'center', mt:2}}>Register</Typography>
            {/*EL QUE FUNCIONABA! <Box sx={{ mt:2, mx:2 }} component='form'  onChange={handleChange}> */}
            <Box sx={{ mt:2, mx:2 }} component='form'  onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    placeholder='Ingrese su nombre...'
                    name="firstName"
                    id="firstName"
                    label='Nombre'
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    required
                    error={error.firstName?.error}
                    helperText={error.firstName?.message}
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1' }}
                />
                <TextField
                    type="text"
                    placeholder='Ingrese su apellido...'
                    name="lastName"
                    id="lastName"
                    label='Apellido'
                    value={lastName}
                    onChange={(e) =>setLastName(e.target.value)}
                    required
                    error={error.lastName?.error}
                    helperText={error.lastName?.message}
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1' }}
                />
                <TextField
                    type="text"
                    placeholder="ejemplo@ejemplo.com"
                    name="email"
                    id="email"
                    label='Email'
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    required
                    error={error.email?.error}
                    helperText={error.email?.message}
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1' }}
                />
                <TextField 
                    type="password"
                    placeholder="Abc123"
                    name="password"
                    id="password"
                    label='Contraseña'
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                    required
                    error={error.password?.error}
                    helperText={error.password?.message}
                    fullWidth
                    sx={{ mb:3, bgcolor:'#f5f1f1' }}
                />
                <button className="h-15 w-30 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 mx-32" type="submit">
                    REGISTRARSE
                </button>
            </Box>
            {/* EL QUE FUNCIONABA! <button className="h-15 w-30 rounded-md bg-[#aaa4a4] text-black text-md font-semibold px-2 py-4 hover:shadow-lg hover:cursor-pointer mt-8 mx-36" onClick={handleClick}> 
                REGISTRARSE
            </button>*/}
            {/* <Button 
                fullWidth 
                variant="contained" 
                onClick={handleClick}
            >Registrar</Button> */}
        </Box>
    );
};

export default Register;