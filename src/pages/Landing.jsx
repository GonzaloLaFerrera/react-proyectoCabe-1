/* eslint-disable react/no-unescaped-entities */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <section className="container flex flex-col gap-10 items-center">
                <div className="bg-[url('./assets/img/remoteWork.jpeg')] bg-cover bg-no-repeat bg-center h-[200px] w-full mt-10  ">
                    <h1 className="font-bold text-center text-xl mt-14 mb-20">Bienvenidos a "P R O Y E C T O  C A B E"</h1>
                    {/* <Link to='/login'>¿Tenes una cuenta? Inicia Sesión.</Link>
                    <Link to='/register'>¿No tenes cuenta? Regístrate.</Link> */}
                </div>
                <div className="mt-20">
                    <p className="font-semibold">¿Tenes una cuenta?
                        <Button 
                            component={Link} 
                            to='/login'
                        >
                            Inicia Sesión
                        </Button>
                    </p>
                    <p className="font-semibold">¿No tenes una cuenta?
                        <Button 
                            component={Link} 
                            to='/register'
                        >
                            Registrate
                        </Button>
                    </p>
                </div>          
        </section>
    )
};

export default Landing;