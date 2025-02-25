import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import RootLayout from '../../components/layout/layout'
import { getLocalAccessToken } from '../../utils/storage'

const AdminRouter: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const sessionToken = getLocalAccessToken()

    useEffect(() => {
        if (location.pathname === '/dashboard') {
            if (!sessionToken) {
                navigate('/signIn')
            }
        }
        if (location.pathname === '/signIn' && sessionToken) {
            navigate('/dashboard')
        }
    }, [navigate, location.pathname, sessionToken])
    return <RootLayout />
}

export default AdminRouter
