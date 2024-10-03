/* eslint-disable react/no-unescaped-entities */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Landing = () => {
    return(
        <section className="container flex flex-col gap-10 items-center">
                <div className="bg-[url('./assets/img/remoteWork.jpeg')] bg-cover bg-no-repeat bg-center h-[200px] w-full mt-10  ">
                    <h1 className="font-bold text-center text-xl mt-14 mb-20">Welcome to "P R O Y E C T O  C A B E"</h1>
                    {/* <Link to='/login'>¿Tenes una cuenta? Inicia Sesión.</Link>
                    <Link to='/register'>¿No tenes cuenta? Regístrate.</Link> */}
                </div>
                <div className="mt-20 flex flex-col">
                    <p className="font-semibold">Do you have an account?{/* <IconPriority className='text-lg'/> */}
                        <Button 
                            component={Link} 
                            to='/login'
                            sx={{ textAlign:'center', mb:'2px'}}
                        >
                            Sign in
                        </Button>
                    </p>
                    <p className="font-semibold">Don't have an account?
                        <Button 
                            component={Link} 
                            to='/register'
                            sx={{ textAlign:'center', mb:'2px'}}
                        >
                            Register
                        </Button>
                    </p>
                </div>          
        </section>
    )
};

export default Landing;