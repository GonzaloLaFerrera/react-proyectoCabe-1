import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

import LayoutPublic from "../layout/RootLayout";
import LayoutPrivate from "../layout/LayoutPrivate";
import Profile from "../pages/Profile";

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
                path:'/login',
                element:<Login />,
            },
            {
                path:'/register',
                element:<Register />,
            }
        ]
    },
    {
        path:'user',
        element:<LayoutPrivate />,
        children:[
            {
                path:'home',
                element:<Home />
            },
            {
                path:'profile',
                element: <Profile/> 
            },
            {
                path:'logout',
                element:<Logout />
            }
        ]
    },
]);



/* {
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
            path:'/login',
            element:<Login />,
        },
        {
            path:'/register',
            element:<Register />,
        },
        {
            path:'/logout',
            element:<Logout />, 
        },
        {
            path:'/profile',
            element: <Profile/>
        },
        {
            path:'home',
            element:<LayoutPrivate />,     
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        }
    ],
},
]); */

