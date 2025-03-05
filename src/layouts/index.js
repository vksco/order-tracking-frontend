import AdminLayout from "./admin"
import FullPageLayout from "./full-page"


const Layout = ({ children }) => {

    const token = localStorage.getItem('user_token')

    return (
        <>
            {
                token ? 
                    <AdminLayout>{children}</AdminLayout>
                    :
                    <FullPageLayout>{children}</FullPageLayout>
            }
        </>
    )
}

export default Layout