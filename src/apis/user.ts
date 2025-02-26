import { axiosInstance } from './axios-instance'
import { UserProfileResponse } from './type'

export const getUserProfile = async () => {
    try {
        const response =
            await axiosInstance.get<UserProfileResponse>('/api/profile')
        return response.data
    } catch (error) {
        console.error(error)
        throw new Error('User Profile 가져오기 오류')
    }
}
