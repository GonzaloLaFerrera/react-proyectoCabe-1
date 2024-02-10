import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    ); 
};

export default UserProvider;

/* Pequeño Mini-Hook para evitar el llamado a UserContext continuamente */
export const UseUserContext = () => useContext(UserContext);
