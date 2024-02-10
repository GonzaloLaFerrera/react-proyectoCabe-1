import { useFetch } from "../../services/useFetch"

const Profile = () => {

    const {data, loading, error} = useFetch('http://127.0.0.1:3000/users/login')

    return (
        <>
            <h1>Perfiles de Usuario</h1>
            <p>listado de usuarios registrados</p>
            <ul>
                {loading && <li>L O A D I N G ......</li>}
                {
                    data?.map((user) => (
                        <li key={user.userId}>{user.firstName}</li>
                    ))
                }
            </ul>
        </>
    );
};

export default Profile;