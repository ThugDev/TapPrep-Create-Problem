const UserNameBox = ({ userName }: { userName?: string }) => {
    const handleClick = () => {
        alert('준비중입니다.')
    }

    return (
        <div className="w-full pt-4 flex flex-row gap-2 ">
            <div>
                <p className="text-sm font-light">GitHub</p>
                <p className="text-md font-semibold">
                    @{userName || '알 수 없음'}
                </p>
            </div>
            <div className="pl-4">
                <div className="text-sm font-light mb-[3px]">Velog</div>
                <button
                    onClick={handleClick}
                    className="px-2 py-1 rounded-[3px] bg-[#0F99E4]"
                >
                    <p className="text-[10px] text-white">연결하기</p>
                </button>
            </div>
        </div>
    )
}
export default UserNameBox
