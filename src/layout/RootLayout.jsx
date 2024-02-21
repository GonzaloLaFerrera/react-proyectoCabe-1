import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";

const LayoutPublic = () => {

    const userIsLogged = useSelector((state) => state.isLogged)
    const navigate = useNavigate();

    return(
        <>
            {
                userIsLogged ? (
                <div className="min-h-screen bg-slate-200 flex flex-col justify-between">
                    <div>
                        <nav><NavBar /></nav>
                        <main><Outlet /></main>
                    </div>
                    <div>
                        <footer><Footer /></footer>
                    </div>
                </div>
                )   : navigate('/')
            }
        </>
    );
};

export default LayoutPublic;