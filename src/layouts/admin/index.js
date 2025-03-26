import { Outlet } from "react-router-dom"
import { UserProvider } from '../../context/useUser'


const AdminLayout = () => {
    return (
        <div>
            <UserProvider>
                <Outlet />
            </UserProvider>
        </div>
    )
}

export default AdminLayout