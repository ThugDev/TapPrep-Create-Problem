import { DifficultyData } from '../../constants/difficulty-data'

export type DifficultySelectorProps = {
    selectedDifficulty: number
    onSelectDifficulty: (value: number) => void
}

const DifficultySelector = ({
    selectedDifficulty,
    onSelectDifficulty,
}: DifficultySelectorProps) => {
    return (
        <div className="flex-center flex-row py-4">
            {DifficultyData.map((item) => (
                <div
                    key={item.value}
                    onClick={() => onSelectDifficulty(item.value)}
                    className={`w-16 flex justify-center items-center border border-gray-600 mx-2 rounded-lg p-2 cursor-pointer hover:bg-gray-600 ${
                        selectedDifficulty === item.value ? 'bg-gray-600' : ''
                    }`}
                >
                    {item.label}
                </div>
            ))}
        </div>
    )
}
export default DifficultySelector
