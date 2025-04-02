type ProblemContentInputProps = {
    title: string
    description: string
    hint: string
    explanation: string
    reference: string
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
}

const ProblemContentInput = ({
    title,
    description,
    hint,
    explanation,
    reference,
    onChange,
}: ProblemContentInputProps) => {
    return (
        <>
            <div>
                <label className="block text-sm font-medium">제목</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={onChange}
                    className="w-full p-2 border rounded"
                    placeholder="문제 제목을 입력하세요"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">설명</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={onChange}
                    className="w-full p-2 border rounded"
                    placeholder="문제 설명을 입력하세요"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium">힌트</label>
                <textarea
                    name="hint"
                    value={hint}
                    onChange={onChange}
                    className="w-full p-2 border rounded"
                    placeholder="힌트를 입력하세요"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">해설</label>
                <textarea
                    name="explanation"
                    value={explanation}
                    onChange={onChange}
                    className="w-full p-2 border rounded"
                    placeholder="해설을 입력하세요"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">참고 자료</label>
                <textarea
                    name="reference"
                    value={reference}
                    onChange={onChange}
                    className="w-full p-2 border rounded"
                    placeholder="참고 자료를 입력하세요"
                />
            </div>
        </>
    )
}
export default ProblemContentInput
