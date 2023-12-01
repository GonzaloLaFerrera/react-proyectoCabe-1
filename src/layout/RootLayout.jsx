import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const LayoutPublic = () => {
    return(
        <div className="min-h-screen bg-slate-200 flex flex-col justify-between">
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

export default LayoutPublic;