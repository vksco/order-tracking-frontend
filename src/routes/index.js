import { createBrowserRouter } from "react-router-dom";
import DashbaordPage from "../pages/dashboard";
import LoginPage from "../pages/auth/login";
import AdminLayout from "../layouts/admin";
import FullPageLayout from "../layouts/full-page";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            {
                path: "",
                element: <DashbaordPage />
            }
        ]
    },
    {
        path: '/auth',
        element: <FullPageLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />
            }
        ]
    }
    
])