import { useNavigate } from 'react-router-dom'

const CreateNavigateButton = () => {
    const navigate = useNavigate()

    const handleNavigateCreate = () => {
        navigate('/create-problem')
    }

    return (
        <div
            className=" w-full h-[50px] flex-center absolute -bottom-33 bg-[#E1F2FF] shadow-md rounded-md cursor-pointer hover:opacity-50"
            onClick={handleNavigateCreate}
        >
            문제 생성하러 가기
        </div>
    )
}
export default CreateNavigateButton
