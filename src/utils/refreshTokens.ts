import axios from 'axios'
import { setLocalAccessToken, setLocalRefreshToken } from './storage'

export async function refreshTokens() {
    try {
        // 저장된 리프레시 토큰 가져오기 (예: localStorage에서)
        const refreshToken = localStorage.getItem('refreshToken')
        if (!refreshToken) throw new Error('리프레시 토큰 없음')

        // 토큰 갱신 엔드포인트 호출
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/auth/refresh`,
            {
                refreshToken,
            }
        )

        const { accessToken, newRefreshToken } = response.data

        // 새로운 토큰 저장
        setLocalAccessToken(accessToken)
        setLocalRefreshToken(newRefreshToken)

        return accessToken
    } catch (error) {
        console.error('토큰 갱신 실패:', error)
        throw error
    }
}
