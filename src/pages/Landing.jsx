import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <div className="container flex flex-col gap-2 py-8 px-4 items-center ">
            <h1 className="font-bold mt-8 mb-20">Bienvenido a "P R O Y E C T O  C A B E"</h1>
            {/* <Link to='/login'>¿Tenes una cuenta? Inicia Sesión.</Link>
            <Link to='/register'>¿No tenes cuenta? Regístrate.</Link> */}
            <p>¿Tenes una cuenta?
                <Button 
                    component={Link} 
                    to='/login'
                >
                    Inicia Sesión
                </Button>
            </p>
            <p>¿No tenes una cuenta?
                <Button 
                    component={Link} 
                    to='/register'
                >
                    Registrate
                </Button>
            </p>
        </div>
    )
};

export default Landing;