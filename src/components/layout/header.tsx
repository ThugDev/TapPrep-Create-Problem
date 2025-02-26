import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const handleLogo = () => {
        navigate('/dashboard')
    }

    return (
        <div className="w-full h-[50px] flex justify-center items-center bg-[#fff] fixed border-b-[1px] border-[#e3e5eb]">
            <div className="w-[90%] h-full font-bold flex justify-between items-center text-black">
                <div onClick={handleLogo} className="cursor-pointer">
                    Tap&Prep
                </div>
                <div className="flex flex-row gap-x-1">
                    <div className="px-1">
                        <img
                            src="/assets/icon/Cat_Profile.svg"
                            width={28}
                            height={28}
                            className=" cursor-pointer"
                        />
                    </div>
                    <div className="px-1">
                        <img
                            src="/assets/icon/Doorbell.svg"
                            width={28}
                            height={28}
                            className=" cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header
