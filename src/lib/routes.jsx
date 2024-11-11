import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/Home/Homepage";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Layout from "../components/ui/Layout";
import ErrorElement from "../components/ui/ErrorElement";
import NotFound from "../components/ui/NotFound";
import Redirector from "../components/utils/Redirector";
import Profile from "../components/profile/Profile";
import Todo from "../components/Home/Todo";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorElement/>,
      children: [
            {
                element: <Redirector />,
                children: [   
                    {
                        index: true,
                        element: <Homepage />
                    },  
                    {
                        path: '/todos/:id',
                        element: <Todo/>
                    },  
                    {
                        path: '/profile',
                        element: <Profile/>
                    },
                ],
            },
            {
                path: "/login",
                element: <LoginForm/>,
            },
            {
                path: "/register",
                element: <RegisterForm/>,
            },
            {
                path: "*",
                element: <NotFound />,
            },
      ],
    },
  ]);