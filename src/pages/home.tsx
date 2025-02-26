import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { getUserProfile } from '../apis/user'
import { TapPerpContent } from '../constants/tapprep-content'

const Home = () => {
    const navigate = useNavigate()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['userData'],
        queryFn: getUserProfile,
    })

    const handleClick = () => {
        navigate('/signIn')
    }

    if (isLoading) <div>Loading...</div>
    if (isError) <div>유저 데이터 오류</div>

    return (
        <div className="relative w-full h-full">
            <div className="w-full flex-center flex-col absolute top-1/3 z-10 ">
                <div className="text-2xl font-bold">
                    어서오세요,{' '}
                    {data?.userData.nickname
                        ? data.userData.nickname
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
