import { useNavigate } from 'react-router-dom'
import { TapPerpContent } from '../constants/tapprep-content'
import { useUserProfile } from '../hooks/use-user-profile'

const Home = () => {
    const navigate = useNavigate()

    const { userProfileData } = useUserProfile()

    const handleClick = () => {
        navigate('/signIn')
    }

    return (
        <div className="relative w-full h-full">
            <div className="w-full flex-center flex-col absolute top-1/3 z-10 ">
                <div className="text-2xl font-bold">
                    어서오세요,{' '}
                    {userProfileData
                        ? userProfileData.userData.nickname
                        : '면접자'}
                    님!
                </div>
                <div className=" w-full flex-center flex-col text-xs mt-12">
                    <p>{TapPerpContent.text1}</p>
                    <p>{TapPerpContent.text2}</p>
                </div>
                <div className="py-12">
                    <button
                        onClick={handleClick}
                        className="w-76 py-3 rounded-lg gap-x-2 flex-center flex-row cursor-pointer text-xs text-white bg-[#073955]"
                    >
                        DashBoard 보러 가기
                    </button>
                </div>
            </div>
            <div className="fixed bottom-0">
                <img src="/assets/image/web-bg-image.svg" />
            </div>
        </div>
    )
}

export default Home
