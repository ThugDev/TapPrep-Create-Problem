import axios from 'axios'
import { getLocalAccessToken } from '../utils/storage'
import { refreshTokens } from '../utils/refreshTokens'

export const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    timeout: 10000,
})

axiosInstance.interceptors.request.use(
    async (config) => {
        try {
            const noAuthPaths = ['api/auth/git/token']
            if (noAuthPaths.some((path) => config.url?.includes(path))) {
                return config
            }
            const token = getLocalAccessToken()
            if (token) {
                config.headers.Authorization = `bearer ${token}`
            }
        } catch (error) {
            console.error('requert interceptor 에러', error)
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true // 재시도 방지 플래그 설정
            try {
                await refreshTokens()

                const newToken = getLocalAccessToken()
                if (newToken) {
                    originalRequest.headers.Authorization = `bearer ${newToken}`
                    return axios(originalRequest) // 재시도
                }
            } catch (refreshError) {
                console.error('토큰 갱신 실패', refreshError)
                // 토큰 갱신 실패 시 로그인 화면으로 리디렉션 처리 등
            }
        }
        return Promise.reject(error)
    }
)
