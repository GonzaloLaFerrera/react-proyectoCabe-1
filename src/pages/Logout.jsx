import { Link } from "react-router-dom";

const Logout = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="bg-green-300 mt-10 text-3xl font-bold p-8">Sesión Finalizada exitosamente</h1>
            <button className="h-20 w-20 rounded-md bg-blue-500 text-white">
                <Link to={'/'}>VOLVER al Inicio</Link> 
            </button>
        </div>
        
    )
};

export default Logout;