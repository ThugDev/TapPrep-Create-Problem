import MySolutions from '../components/dashBoard/my-solution'
import UserDashBoard from '../components/dashBoard/user-dashboard'
import { useUserProfile } from '../hooks/use-user-profile'

const DashBoard = () => {
    const { userProfileData, isLoading, isError } = useUserProfile()

    if (isLoading) <div>Loading...</div>
    if (isError) <div>오류가 발생했습니다.</div>

    return (
        <div className="w-full h-full flex-center">
            <div className="w-[80%] h-full flex-center flex-row gap-x-12">
                <UserDashBoard userProfileData={userProfileData} />
                <MySolutions />
            </div>
        </div>
    )
}
export default DashBoard
