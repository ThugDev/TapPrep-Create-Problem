import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { postGitLogin } from '../apis/git-login'
import { setLocalAccessToken, setLocalRefreshToken } from '../utils/storage'

const Auth = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const code = params.get('code')

        if (code) {
            const fetchLoginData = async (code: string) => {
                const response = await postGitLogin(code)
                setLocalAccessToken(response.token.accessToken)
                setLocalRefreshToken(response.token.refreshToken)
                console.log(response)
                if (response.statusCode === 200) {
                    navigate('/')
                }
                return response
            }
            fetchLoginData(code)
        }
    }, [location])

    return <div>인증 처리 중...</div>
}
export default Auth
