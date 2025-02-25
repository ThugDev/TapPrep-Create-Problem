import { setLocalAccessToken } from '../utils/storage'
import { axiosInstance } from './axios-instance'
import {
    GitLoginResponse,
    PostRefreshTokenProps,
    RefreshTokenResponse,
} from './type'
import Cookies from 'js-cookie'

export const postGitLogin = async (code: string) => {
    try {
        const response = await axiosInstance.post<GitLoginResponse>(
            `/api/auth/git/token`,
            { code }
        )
        if (response.data && response.data.token) {
            Cookies.set('accessToken', response.data.token.accessToken, {})
        }
        return response.data
    } catch {
        throw new Error('로그인 토큰 에러')
    }
}

export const postRefreshToken = async ({
    username,
    refreshToken,
}: PostRefreshTokenProps) => {
    try {
        const response = await axiosInstance.post<RefreshTokenResponse>(
            '/api/auth/token/refresh',
            {
                username,
                refreshToken,
            }
        )

        if (response.data) {
            setLocalAccessToken('accessToken')
        }

        return response.data
    } catch {
        throw new Error('refresh 토큰 에러')
    }
}
