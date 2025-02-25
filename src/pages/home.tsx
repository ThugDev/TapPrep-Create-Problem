import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/signIn')
    }

    return (
        <div className="relative w-full h-full">
            <div className="w-full flex-center flex-col absolute top-1/3 z-10 ">
                <div className="text-2xl font-bold">어서오세요, 면접자 님!</div>
                <div className=" w-full flex-center flex-col text-xs mt-12">
                    <p>Tapping으로 간편하게 면접을 대비해 볼까요?</p>
                    <p>
                        틈틈히 핸드폰으로 연습할 수 있게 Tap&Prep이
                        도와드릴게요!
                    </p>
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
