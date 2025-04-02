type ProblemOptionProps = {
    type: string[] | string | boolean
    options: string[]
    answer: string
    onOptionChange: (index: number, value: string) => void
    onSelectedOX: (value: boolean) => void
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
}

const ProblemOption = ({
    type,
    options,
    onOptionChange,
    onSelectedOX,
    answer,
    onChange,
}: ProblemOptionProps) => {
    return (
        <>
            {type === 'normal' && (
                <div>
                    <label className="block text-sm font-medium mb-2">
                        객관식 선택지 (최대 5개)
                    </label>
                    {options.map((option, index) => (
                        <input
                            key={index}
                            type="text"
                            value={option}
                            onChange={(e) =>
                                onOptionChange(index, e.target.value)
                            }
                            className="w-full p-2 border rounded mb-2"
                            placeholder={`선택지 ${index + 1}`}
                        />
                    ))}
                </div>
            )}
            {type === 'tf' && (
                <div>
                    <label className="block text-sm font-medium mb-2">
                        OX 문제 정답
                    </label>
                    <div className="flex gap-2">
                        {['O', 'X'].map((choice) => {
                            console.log('choice', typeof choice)
                            return (
                                <div
                                    key={choice}
                                    onClick={() => onSelectedOX(choice === 'O')}
                                    className={`cursor-pointer px-4 py-2 border rounded ${
                                        answer === choice
                                            ? 'ring-2 ring-offset-2 ring-blue-500 bg-[#E1F2FF]'
                                            : 'bg-[#f0f0f0]'
                                    }`}
                                >
                                    {choice}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}

            {type === 'word' && (
                <div>
                    <label className="block text-sm font-medium mb-2">
                        주관식 정답
                    </label>
                    <input
                        type="text"
                        name="answer"
                        value={answer}
                        onChange={onChange}
                        className="w-full p-2 border rounded"
                        placeholder="정답을 입력하세요"
                        required
                    />
                </div>
            )}
        </>
    )
}
export default ProblemOption
