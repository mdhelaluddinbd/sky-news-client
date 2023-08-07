import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import News from "../../Pages/News/News/News";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import Profile from "../../Pages/Profile/Profile";

export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch(`https://sky-news-server.onrender.com/news`)
            },
            {
                path:"/category/:id",
                element:<Category></Category>,
                loader:({params})=>fetch(`https://sky-news-server.onrender.com/category/${params.id}`)
            },
            {
                path:"/news/:id",
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=>fetch(`https://sky-news-server.onrender.com/news/${params.id}`)
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/terms",
                element:<TermsAndConditions></TermsAndConditions>
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])