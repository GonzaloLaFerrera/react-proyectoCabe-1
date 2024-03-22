import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

// import Home from "../pages/Home";
import Landing from "../pages/Landing";
// import Login from "../pages/Login";
// import Logout from "../pages/Logout";
// import NotFound from "../pages/NotFound";
// import Register from "../pages/Register";

// import LayoutPublic from "../layout/RootLayout";
// import LayoutPrivate from "../layout/LayoutPrivate";
// import Profile from "../pages/Profile";

// export const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<LayoutPublic />,
//         errorElement:<NotFound />,
//         children:[
//             {
//                 index: true,
//                 element:<Landing />,
//                 errorElement:<NotFound />
//             },
//             {
//                 path:'/login',
//                 element:<Login />,
//             },
//             {
//                 path:'/register',
//                 element:<Register />,
//             }
//         ]
//     },
//     {
//         path:'user',
//         element:<LayoutPrivate />,
//         children:[
//             {
//                 path:'/user/home',
//                 element:<Home />
//             },
//             {
//                 path:'profile',
//                 element: <Profile/> 
//             },
//             {
//                 path:'logout',
//                 element:<Logout />
//             }
//         ]
//     },
// ]);


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/LandingPage" element={<Landing />}/>
    )
);


//Ejemplo de la doc de react router
// createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Root />}>
//         <Route path="contact" element={<Contact />} />
//         <Route
//           path="dashboard"
//           element={<Dashboard />}
//           loader={({ request }) =>
//             fetch("/api/dashboard.json", {
//               signal: request.signal,
//             })
//           }
//         />
//         <Route element={<AuthLayout />}>
//           <Route
//             path="login"
//             element={<Login />}
//             loader={redirectIfUser}
//           />
//           <Route path="logout" action={logoutUser} />
//         </Route>
//       </Route>
//     )
//   );
        
        




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

