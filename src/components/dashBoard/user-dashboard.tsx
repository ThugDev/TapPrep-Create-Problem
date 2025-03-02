import LevelView from './level-view'
import NewsView from './news-view'

import { DashboardUserProfileProps } from './type'

import UserProfileComponent from './user-profile-component'

const UserDashBoard = ({ userProfileData }: DashboardUserProfileProps) => {
    return (
        <div className="w-full h-full flex-center ">
            <div className="w-full h-full py-12 px-4 flex-center flex-col">
                <div className="w-full flex-center">
                    <div className="w-full text-3xl mb-4 font-bold">
                        👋 어서오세요,{' '}
                        <span className="text-[#073955]">
                            {userProfileData?.userData.nickname}
                        </span>
                        님!
                    </div>
                </div>
                <div className="w-full h-[300px] flex-items rounded py-4">
                    <UserProfileComponent
                        profileImage={userProfileData?.userData.profile_image}
                        nickName={userProfileData?.userData.nickname}
                        userName={userProfileData?.userData.username}
                    />
                </div>
                <div className="w-full flex-center">
                    <LevelView
                        level={userProfileData?.userData.level}
                        nickName={userProfileData?.userData.nickname}
                    />
                </div>
                <NewsView />
            </div>
        </div>
    )
}
export default UserDashBoard
