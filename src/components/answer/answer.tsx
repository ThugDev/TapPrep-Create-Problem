import { useAnswerForm } from '../../hooks/use-answer-form'
import { useAnswerInitialization } from '../../hooks/use-answer-initialzation'
import { useSubmitAnswer } from '../../hooks/use-submit-answer'

import ErrorPage from '../common/error-page'
import OptionList from '../option-list'
import AnswerExplanation from '../problemDetail/answer-explanation'
import AnswerForm from './answer-form'
import { InterviewAnswerProps } from './type'

const Answer = ({ data }: InterviewAnswerProps) => {
    if (!data || !data.problemData) {
        return <ErrorPage message="답안 제출란을 불러오지 못했습니다." />
    }

    const { formData, handleSelectedOption, setAnswerText, setAnswerOX } =
        useAnswerForm()
    const {
        responseData = null,
        submitAnswer,
        isLoading,
    } = useSubmitAnswer(data.problemData.problem_id)

    const isAnswerDisabled = data.isSolved || isLoading

    useAnswerInitialization({
        data,
        setAnswerText,
        setAnswerOX,
        handleSelectedOption,
    })

    return (
        <div className="w-[80%] flex-center flex-col">
            {!data?.problemData.options ? (
                <AnswerForm
                    problemType={data.problemData.type}
                    formData={formData}
                    setAnswerText={setAnswerText}
                    setAnswerOX={setAnswerOX}
                />
            ) : (
                <OptionList
                    options={data?.problemData.options}
                    selectedOption={formData.selectedOption}
                    onSelect={handleSelectedOption}
                />
            )}
            <div className="w-full flex justify-center items-end">
                <button
                    onClick={() => submitAnswer({ formData })}
                    disabled={isAnswerDisabled}
                    className="p-2 mt-4 bg-gray-700 rounded cursor-pointer"
                >
                    <p>제출</p>
                </button>
            </div>
            <AnswerExplanation
                isCorrect={responseData?.problemResult.isCorrect}
                explanation={responseData?.problemResult.explanation}
                reference={responseData?.problemResult.reference}
            />
        </div>
    )
}
export default Answer
