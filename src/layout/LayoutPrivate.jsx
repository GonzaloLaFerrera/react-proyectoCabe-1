import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const LayoutPrivate = () => {

    const navigate = useNavigate();
    const userLogged = useSelector((state) => state.isLogged);

    useEffect(() => {
        console.log(userLogged)
        if(!userLogged) {
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userLogged]);

    return (
        <Outlet />
    );
};

export default LayoutPrivate;