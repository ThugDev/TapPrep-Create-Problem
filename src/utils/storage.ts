export const setLocalAccessToken = (token: string) => {
    localStorage.setItem('accessToken', token)
}

export const getLocalAccessToken = () => {
    return localStorage.getItem('accessToken')
}

export const setLocalRefreshToken = (token: string) => {
    localStorage.setItem('refreshToken', token)
}

export const getLocalRefreshToken = () => {
    return localStorage.getItem('refreshToken')
}
