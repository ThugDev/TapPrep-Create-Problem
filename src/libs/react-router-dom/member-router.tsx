import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import RootLayout from '../../components/layout/layout'
import Cookies from 'js-cookie'

const AdminRouter = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const token = Cookies.get('accessToken')

    useEffect(() => {
        if (location.pathname === '/dashboard') {
            if (!token) {
                navigate('/signIn')
            }
        }
        if (location.pathname === '/signIn' && token) {
            navigate('/dashboard')
        }
    }, [navigate, location.pathname, token])
    return <RootLayout />
}

export default AdminRouter
