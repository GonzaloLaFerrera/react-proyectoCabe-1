import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import NotFound from "../pages/NotFound";

import LayoutPublic from "../layout/RootLayout";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPublic />,
        errorElement:<NotFound />,
        children:[
            {
                index: true,
                element:<Landing />,
                errorElement:<NotFound />
            },
            {
                path:'/home',
                element:<Home />,              
            },
            {
                path:'/login',
                element:<Login />,
            },
            {
                path:'/logout',
                element:<Logout />, 
            }
        ],
    },
]);