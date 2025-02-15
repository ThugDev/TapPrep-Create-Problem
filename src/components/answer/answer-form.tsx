import ProblemAnswerOX from '../ProblemAnswerOX'
import ProblemAnswerText from '../ProblemAnswerText'
import { AnswerFormProps } from './type'

const AnswerForm = ({
    problemType,
    formData,
    setAnswerText,
    setAnswerOX,
}: AnswerFormProps) => {
    return (
        <div className="w-full">
            <p className="mb-2">답안 작성</p>
            {problemType === 3 ? (
                <ProblemAnswerText
                    answerText={formData.answerText}
                    setAnswerText={setAnswerText}
                />
            ) : (
                <ProblemAnswerOX
                    answerOX={formData.answerOX}
                    setAnswerOX={setAnswerOX}
                />
            )}
        </div>
    )
}
export default AnswerForm
