import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const LayoutPublic = () => {
    return(
        <>
            <nav><NavBar /></nav>
            <main><Outlet /></main>   {/* será reemplazado por el Outlet */}
            <footer><Footer /></footer>
        </>
    );
};

export default LayoutPublic;