import { ChevronRight } from 'lucide-react'

const NewsView = () => {
    const handleAlert = () => {
        alert('아직 준비 중입니다.')
    }

    return (
        <div
            onClick={handleAlert}
            className="w-full h-[50px] pl-4 relative mt-4 flex justify-center items-start rounded-md shadow-md bg-[#E1F2FF] cursor-pointer"
        >
            <div className="w-full h-full flex-items">
                <p className="text-md">
                    ✨
                    <span className="text-[#073955] font-semibold">
                        Tap&Prep
                    </span>{' '}
                    새로운 소식 보러가기
                </p>
            </div>
            <div className=" absolute top-3 right-4">
                <ChevronRight size={28} />
            </div>
        </div>
    )
}
export default NewsView
