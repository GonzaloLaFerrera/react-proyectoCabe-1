import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const LayoutPrivate = () => {

    const navigate = useNavigate();
    const userLogged = useSelector((state) => state.isLogged);

    useEffect(() => {
        console.log(userLogged, 'estamos en el layout privado')
        if(!userLogged) {
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userLogged]);

    return (
    
        <div className="min-h-screen bg-[#c1bcc2] flex flex-col justify-between">
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