type DifficultySelectorProps = {
    selectedDifficulty: number
    onSelectedDifficulty: (difficulty: number) => void
}

const DifficultySelector = ({
    selectedDifficulty,
    onSelectedDifficulty,
}: DifficultySelectorProps) => {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">난이도</label>
            <div className="flex gap-2">
                {[1, 2, 3].map((difficulty) => (
                    <div
                        key={difficulty}
                        onClick={() => onSelectedDifficulty(difficulty)}
                        className={`cursor-pointer px-4 py-2 border rounded ${
                            selectedDifficulty === difficulty
                                ? 'ring-2 ring-offset-2 ring-blue-500'
                                : 'bg-gray-100'
                        }`}
                    >
                        {difficulty === 1
                            ? '하'
                            : difficulty === 2
                              ? '중'
                              : '상'}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default DifficultySelector
