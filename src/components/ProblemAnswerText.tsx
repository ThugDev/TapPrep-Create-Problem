import { ProblemAnswerTextProps } from './type'

const ProblemAnswerText = ({
    answerText,
    setAnswerText,
}: ProblemAnswerTextProps) => {
    return (
        <div className=" w-full h-[100px] border">
            <div className="flex-1">
                <textarea
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    placeholder="답안을 입력해주세요..."
                    className="w-full h-[100px] p-2 resize-none"
                />
            </div>
        </div>
    )
}
export default ProblemAnswerText
