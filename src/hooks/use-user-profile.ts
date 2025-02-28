import { useQuery } from '@tanstack/react-query'
import { UserProfileResponse } from '../apis/type'
import { getUserProfile } from '../apis/user'

export const useUserProfile = () => {
    const {
        data: userProfileData,
        isLoading,
        isError,
    } = useQuery<UserProfileResponse>({
        queryKey: ['userData'],
        queryFn: getUserProfile,
    })

    return { userProfileData, isLoading, isError }
}
