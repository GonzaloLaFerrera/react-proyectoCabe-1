import { Button } from "@mui/material";
import { Link, useRouteError } from "react-router-dom"

const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div className="container bg-gray-500 flex flex-col gap-2 font-bold mx-auto px-4 pt-8 pb-4 items-center">
            <h1 className="text-xl">404</h1>
            <p className="text-xl uppercase tracking-[0.3em]">Not Found</p>
            <p>(Error: "{error.statusText || error.message}")</p>
            <Button variant="contained" sx={{mt:4}}>
                <Link to='/'>Volver al inicio</Link>
            </Button>
        </div>        
    );
};

export default NotFound;