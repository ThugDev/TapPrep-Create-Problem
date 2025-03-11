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
                    <div className="flex-center flex-row py-12">
                        <p className="text-green-500 font-bold text-9xl">O</p>
                    </div>
                    <div>
                        <div className="py-12 flex-center flex-col">
                            <p className="text-lg font-bold flex-center py-4">
                                정답 해설
                            </p>
                            <p className="w-[80%]">{explanation}</p>
                        </div>
                        <div className="py-12 flex-center flex-col">
                            <p className="text-lg font-bold flex-center py-4">
                                참고 사항
                            </p>
                            <p className="w-[80%]">{reference}</p>
                        </div>
                    </div>
                </div>
            )}
            {isCorrect === false && (
                <div className="w-full">
                    <div className="flex-center flex-row py-12">
                        <p className="text-red-500 font-bold text-9xl">X</p>
                    </div>
                    <div>
                        <div className="py-12 flex-center flex-col">
                            <p className="text-lg font-bold flex-center py-4">
                                정답 해설
                            </p>
                            <p className="w-[80%]">{explanation}</p>
                        </div>
                        <div className="py-12 flex-center flex-col">
                            <p className="text-lg font-bold flex-center py-4">
                                참고 사항
                            </p>
                            <p className="w-[80%]">{reference}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default AnswerExplanation
