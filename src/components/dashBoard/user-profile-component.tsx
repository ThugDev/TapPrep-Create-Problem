import DashBoardButton from './dashboard-button'
import UserNameBox from './user-name-box'

export type UserProfileProps = {
    profileImage: string | undefined
    nickName: string | undefined
    userName: string | undefined
}

const UserProfileComponent = ({
    profileImage,
    nickName,
    userName,
}: UserProfileProps) => {
    // const handleDashBoard = () => {
    //     navigation.navigate('DashBoardScreen');
    // };

    return (
        <div className="bg-white w-full h-full flex-center flex-col shadow-lg rounded-lg">
            <div className="w-full flex-center">
                <div className="w-full flex-center ">
                    <div className="w-1/3 flex-items">
                        <img
                            src={profileImage}
                            className="w-36 h-36 rounded-[50%]"
                        />
                    </div>
                    <div className="w-1/2">
                        {/* <Text className="text-xs font-light">Name</Text> */}
                        <p className="text-sm font-light">NickName</p>
                        <p className="text-4xl font-bold">{nickName}</p>
                        <UserNameBox userName={userName} />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-x-4 h-[30px] mt-4 ml-12">
                <DashBoardButton text="Edit Profile" />
                <DashBoardButton text="Suggest Qs" />
            </div>
        </div>
    )
}
export default UserProfileComponent
