import { useNavigate } from 'react-router-dom'
import { ProblemArray } from '../constants/problemArray'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="w-full h-full flex flex-col gap-12 justify-center items-center">
            {ProblemArray.map((item, index) => (
                <div
                    key={index}
                    className="w-80 p-4 shadow-sm shadow-gray-700 rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#595959]"
                    onClick={() => navigate(item.link)}
                >
                    {item.text}
                </div>
            ))}
        </div>
    )
}

export default Home
