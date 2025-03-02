import ProblemAnswerOX from '../problem-answer-ox'
import ProblemAnswerText from '../problem-answer-text'
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
