import { ProblemAnswerOXProps } from './type'

const ProblemAnswerOX = ({ answerOX, setAnswerOX }: ProblemAnswerOXProps) => {
    return (
        <div className="flex-center flex-col gap-12">
            <button
                onClick={() => setAnswerOX(true)}
                className={`px-6 py-3 rounded-lg cursor-pointer ${answerOX === true ? 'bg-green-500' : 'bg-gray-300'}`}
            >
                <p className="text-white text-lg font-bold">O</p>
            </button>
            <button
                onClick={() => setAnswerOX(false)}
                className={`px-6 py-3 rounded-lg cursor-pointer ${answerOX === false ? 'bg-green-500' : 'bg-gray-300'}`}
            >
                <p className="text-white text-lg font-bold">X</p>
            </button>
        </div>
    )
}
export default ProblemAnswerOX
