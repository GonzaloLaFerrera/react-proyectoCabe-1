/* eslint-disable react/no-unescaped-entities */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// Icons
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';


const Landing = () => {
    return(
        <section className=" flex flex-col gap-10 items-center  ">
                <div className="bg-[url('./assets/img/remoteWork.jpeg')] bg-cover bg-no-repeat bg-center h-[200px] w-full mt-10 flex flex-col justify-center sm:bg-[url('./assets/img/pexels-olia-danilevich-5088017.jpg')] sm:bg-cover sm:h-[300px] ">
                    <h3 className="font-bold text-center text-xl mb-2 sm:text-2xl sm:mb-6 lg:text-6xl">Welcome to </h3>
                    <h1 className="font-medium text-lg text-center mb-8 lg:text-2xl">"C A V E M E N O R G A N I Z E R" <LandscapeOutlinedIcon /></h1>
                    {/* <Link to='/login'>¿Tenes una cuenta? Inicia Sesión.</Link>
                    <Link to='/register'>¿No tenes cuenta? Regístrate.</Link> */}
                </div>
                <div className="mt-20 flex flex-col lg:flex-row lg:gap-28">
                    <p className="font-semibold lg:text-2xl lg:font-normal">Do you have an account?{/* <IconPriority className='text-lg'/> */}
                        <Button 
                            component={Link} 
                            to='/login'
                            sx={{ textAlign:'center', mb:{xs:'2px', lg:0}, fontSize:{lg:'18px'}}}
                        >
                            Sign in
                        </Button>
                    </p>
                    <p className="font-semibold lg:text-2xl lg:font-normal">Don't have an account?
                        <Button 
                            component={Link} 
                            to='/register'
                            sx={{ textAlign:'center', mb:{xs:'2px', lg:0}, fontSize:{lg:'18px'}}}
                        >
                            Register
                        </Button>
                    </p>
                </div>          
        </section>
    )
};

export default Landing;

{/* <h3 className="font-bold text-center text-xl mt-14 mb-20">Welcome to </h3> */}