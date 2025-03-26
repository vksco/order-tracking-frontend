import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from "react-router-dom"
import { check_authenticated } from '../../helpers/index'


const FullPageLayout = () => {

    const navigate = useNavigate()

    useEffect(() => {
       const is_aitheticated = check_authenticated()
       if(is_aitheticated){
            navigate('/')
       }
    }, [])

    return (
        <div className="container pt-3">
            <Outlet />
        </div>
    )
}

export default FullPageLayout