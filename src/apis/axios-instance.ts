import axios from 'axios'
import { refreshTokens } from '../utils/refresh-tokens'
import Cookies from 'js-cookie'

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
            const token = Cookies.get('accessToken')
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
            originalRequest._retry = true
            try {
                await refreshTokens()
                const newToken = Cookies.get('accessToken')
                if (newToken) {
                    originalRequest.headers.Authorization = `bearer ${newToken}`
                    return axiosInstance(originalRequest)
                }
            } catch (refreshError) {
                console.error('토큰 갱신 실패', refreshError)
            }
        }
        return Promise.reject(error)
    }
)
