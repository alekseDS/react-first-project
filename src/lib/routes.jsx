import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/Home/Homepage";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Layout from "../components/ui/Layout";
import ErrorElement from "../components/ui/ErrorElement";
import NotFound from "../components/ui/NotFound";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorElement/>,
      children: [
            {
                index: true,
                element: <Homepage />
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