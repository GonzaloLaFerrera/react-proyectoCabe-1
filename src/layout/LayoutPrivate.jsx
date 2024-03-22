import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const LayoutPrivate = () => {

    const navigate = useNavigate();
    const {isLogged} = useSelector((state) => state.isLogged)

/*     useEffect(() => {
        console.log(userIsLogged, 'estamos en el layout privado')
        if(!userIsLogged) {
            console.log('estoy en el IF de NO USUARIO')
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userIsLogged]); */

    //SIN PROTECCION (FUNCIONA PERFECTAMENTE) <<<<<<<<<<<<<<<<<<---------------------------------
    /* useEffect(() => {
        console.log(isLogged, "chequeando estado de Logueo de Usuario")
        navigate('/user')
    }, []); */

    useEffect(() => {
        console.log(isLogged, "chequeando estado de Logueo de Usuario")
        if(isLogged === false) {
            console.log("EL USUARIO NO ESTA LOGUEADO! TE REDIRIJO DESDE EL LAYOUT PRIVADO!")
            navigate('/')
        } else {
            console.log("Entro al ELSE")
            navigate('/user')
        }
         
    }, [isLogged]);

    console.log(isLogged, "chequeando por fuera del UseEffect")

    return (
    
        <div className="min-h-screen bg-[#c1bcc2]  flex flex-col justify-between"> {/* bg-black */}
            <div>
                <nav><NavBar /></nav>
                <main><Outlet /></main>
            </div>
            <div>
                <footer><Footer /></footer>
            </div>
        </div>
        
    );
};

export default LayoutPrivate;