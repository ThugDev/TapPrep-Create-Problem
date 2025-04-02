import { useSuspenseQuery } from '@tanstack/react-query'
import { UserProfileResponse } from '../apis/type'
import { getUserProfile } from '../apis/user'

export const useUserProfile = () => {
    try {
        const { data: userProfileData } = useSuspenseQuery<UserProfileResponse>(
            {
                queryKey: ['userData'],
                queryFn: getUserProfile,
            }
        )
        return { userProfileData }
    } catch (error) {
        console.error('유저 프로필 데이터를 가져오는 중 오류 발생:', error)
        return { userProfileData: null }
    }
}
