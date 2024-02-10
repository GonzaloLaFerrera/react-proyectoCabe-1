import { Outlet, useNavigate } from "react-router-dom";
import { UseUserContext } from "../context/UserContext";
import { useEffect } from "react";

const LayoutPrivate = () => {

    const { user } = UseUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user)
        if(!user) {
            navigate('/')
        }
    }, [user]);

    return (
        <Outlet />
    );
};

export default LayoutPrivate;