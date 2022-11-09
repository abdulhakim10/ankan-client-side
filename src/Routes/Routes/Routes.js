import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import MyReviews from "../../Pages/Home/Review/MyReviews";
import AddService from "../../Pages/Home/Services/AddService";
import Service from "../../Pages/Home/Services/Service";
import Services from "../../Pages/Home/Services/Services";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";


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
            },
            {
                path: '/service/:id',
                loader:({params}) => {
                    return fetch(`http://localhost:5000/service/${params.id}`)
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
                loader: () => fetch('http://localhost:5000/services'),
                element: <AddService></AddService>
            }
        ]
    }
])