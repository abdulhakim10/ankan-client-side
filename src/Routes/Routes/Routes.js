import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Main from "../../Pages/Layout/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader:() => fetch('http://localhost:5000/limited') ,
                element: <Home></Home>
            },
            {
                path: '/services',
                loader:() => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            }
        ]
    }
])