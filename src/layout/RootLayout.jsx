import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import PublicNavBar from "../components/PublicNavBar";
import LayoutPrivate from "../layout/LayoutPrivate"

const LayoutPublic = () => {

    const {isLogged} = useSelector((state) => state.isLogged)
    /* const navigate = useNavigate(); */

    return(
        <>
            {
                !isLogged ? (
                <div className="min-h-screen bg-[#dfdada] flex flex-col justify-between"> {/* bg-slate-500 sm:bg-[#128b07] md:bg-[#faed36]  lg:bg-[#a72828] */}
                    <div>
                        <nav><PublicNavBar /></nav>
                        <main className="lg:flex lg:flex-col lg:justify-center "><Outlet /></main>
                    </div>
                    <div>
                        <footer><Footer /></footer>
                    </div>
                </div>
                )   : <LayoutPrivate /> 
            }
        </>
    );
};

export default LayoutPublic;