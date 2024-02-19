import { useDispatch, useSelector } from "react-redux";
/* import { useFetch } from "../../services/useFetch" */
import { useEffect } from "react";
import fetchUser from "../services/fetchUser";
import { loadUser } from "../redux/userSlice";

const Profile = () => {

    /* const {data, loading, error} = useFetch('http://127.0.0.1:3000/users/login') */
    const userData = useSelector((state) => state.user)
    const userIsLogged = useSelector((state) => state.isLogged)
    const dispatch = useDispatch();

    useEffect(() => {
        if(userIsLogged){
            fetchUser()
            .then(resp => {
                console.log('PROBANDO PROFILE', resp)
                dispatch(loadUser(resp))
            })
        }
    }, [userIsLogged]);

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl text-center mt-8">Perfil de Usuario</h1>
            <p className="font-semibold text-center mt-4">Revise o actualice sus datos de perfil</p>
            {/* {loading && <p>L O A D I N G ....</p>}  Falta implentar el LOADING!*/}
            <div className="bg-slate-300 rounded-lg shadow-md h-[200px] w-[380px] hover:shadow-sm p-8 mt-8">
                <ul>
                    <li><b>Nombre: </b> {userData.firstName}</li>
                    <li><b>Apellido: </b>{userData.lastName}</li>
                    <li><b>Correo electrónico: </b>{userData.email}</li>
                </ul>
                {/* TENDRIA QUE AGREGAR ACA LOS BOTONES PARA EDITAR O CANCELAR/VOLVER INICIO */}
            </div>
        </div>
    );
};

export default Profile;