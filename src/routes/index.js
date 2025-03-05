import { createBrowserRouter } from "react-router-dom";
import DashbaordPage from "../pages/dashboard";
import LoginPage from "../pages/auth/login";

export const routes = createBrowserRouter([
    {
        'path': '/',
        element: <DashbaordPage />
    },
    {
        'path': 'login',
        element: <LoginPage />
    }
])