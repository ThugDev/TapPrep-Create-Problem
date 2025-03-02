import Cookies from 'js-cookie'
import { postRefreshToken } from '../apis/git-login'

export const refreshTokens = async () => {
    try {
        const refreshToken = Cookies.get('refreshToken')
        const userName = localStorage.getItem('userName')
        if (!refreshToken) throw new Error('리프레시 토큰 없음')
        const response = await postRefreshToken({
            username: userName,
            refreshToken: refreshToken,
        })
        const { accessToken, newRefreshToken } = response.data
        Cookies.set('accessToken', accessToken, {
            expires: 1,
            secure: true,
            sameSite: 'strict',
        })
        Cookies.set('refreshToken', newRefreshToken, {
            expires: 7,
            secure: true,
            sameSite: 'strict',
        })

        return accessToken
    } catch (error) {
        console.error('토큰 갱신 실패:', error)
        throw error
    }
}
