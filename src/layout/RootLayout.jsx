import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
    return(
        <>
            <nav>NavBar</nav>
            <main><Outlet /></main>   {/* será reemplazado por el Outlet */}
            <footer>Footer</footer>
        </>
    );
};

export default LayoutPublic;