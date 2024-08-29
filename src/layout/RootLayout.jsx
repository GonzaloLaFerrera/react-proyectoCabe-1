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
                <div className="min-h-screen bg-[#dfdada] flex flex-col justify-between"> {/* bg-[#dfdada] */}
                    <div>
                        <nav><PublicNavBar /></nav>
                        <main><Outlet /></main>
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


/* 
return(
    <>
        {
            userIsLogged ? (
            <div className="min-h-screen bg-[#dfdada] flex flex-col justify-between">
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
}; */