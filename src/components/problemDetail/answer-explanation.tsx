import { AnswerExplanationProps } from './type'

const AnswerExplanation = ({
    isCorrect,
    explanation,
    reference,
}: AnswerExplanationProps) => {
    return (
        <div className="w-full">
            {isCorrect === true && (
                <div className="w-full">
                    <div className="flex-row items-center py-2">
                        <p className="text-lg font-bold">정답 여부 : </p>
                        <p className="text-green-500 font-bold text-2xl">O</p>
                    </div>
                    <div>
                        <div className="py-2">
                            <p className="text-lg font-bold">정답 해설</p>
                            <p>{explanation}</p>
                        </div>
                        <div className="py-2">
                            <p className="text-lg font-bold">참고 사항</p>
                            <p>{reference}</p>
                        </div>
                    </div>
                </div>
            )}
            {isCorrect === false && (
                <div className="w-full">
                    <div className="flex-row items-center">
                        <p className="text-lg font-bold">정답 여부 : </p>
                        <p className="text-red-500 font-bold text-2xl">X</p>
                    </div>
                    <div>
                        <div className="py-2">
                            <p className="text-lg font-bold">정답 해설</p>
                            <p>{explanation}</p>
                        </div>
                        <div className="py-2">
                            <p className="text-lg font-bold">참고 사항</p>
                            <p>{reference}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AnswerExplanation
