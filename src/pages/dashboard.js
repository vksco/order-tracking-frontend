import { useUser } from "../context/useUser"


const DashbaordPage = () => {

    const {user} = useUser()

    return (
        <div>
            Dashboard Page
            <br />
            Hi { user?.name }
        </div>
    )
}

export default DashbaordPage