import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Edit from "../../Pages/Home/Review/Edit";
import MyReviews from "../../Pages/Home/Review/MyReviews";
import AddService from "../../Pages/Home/Services/AddService";
import Service from "../../Pages/Home/Services/Service";
import Services from "../../Pages/Home/Services/Services";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader:() => fetch('https://ankan-print-assignment-server.vercel.app/limited') ,
                element: <Home></Home>
            },
            {
                path: '/services',
                loader:() => fetch('https://ankan-print-assignment-server.vercel.app/services'),
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                loader:({params}) => {
                    return fetch(`https://ankan-print-assignment-server.vercel.app/service/${params.id}`)
                },
                element: <Service></Service>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservice',
                loader: () => fetch('https://ankan-print-assignment-server.vercel.app/services'),
                element: <PrivetRoute><AddService></AddService></PrivetRoute>
            },
            {
                path: '/edit/:id',
                loader: ({params}) => fetch(`https://ankan-print-assignment-server.vercel.app/edit/${params.id}`),
                element: <Edit></Edit>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])