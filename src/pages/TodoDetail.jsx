import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TodoDetail = () => {
    const {isLogged} = useSelector((state) => state.isLogged); 
    const dispatch = useDispatch();


    /* useEffect(() =>{
        if(isLogged){

        }
    }, [isLogged]); */

    return (
        <section className="flex flex-col items-center p-4 my-6 mx-3 gap-4 bg-[#dfdada]">
            <h1 className="font-bold text-3xl">Detalle de Tareas</h1>
            <h5 className="font-semibold text-lg">"Titulo de Tarea"</h5>
            <p>Descripción de Tarea: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <div className="flex gap-2 text-center">
                <span className="font-bold">Urgente/Prioridad</span>
                <p className="font-bold">Creación de Tarea: <span className="font-light">21/03/2024</span></p>
                <p className="font-bold">Vencimiento de Tarea: <span className="font-light">24/12/2024</span></p>
            </div>
            <div className="flex gap-2 mt-4">
                <button className="h-14 w-20 rounded-md bg-[#686060] text-white">
                    Editar Tarea
                </button>
                <button className="h-14 w-20 rounded-md bg-[#686060] text-white">
                    <Link to={'/user'}>Volver</Link>
                </button>
            </div>
        </section>
    )
};

export default TodoDetail;