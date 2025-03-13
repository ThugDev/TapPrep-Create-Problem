import { DifficultyData } from '../../constants/difficulty-data'
import { DifficultySelectorProps } from './type'

const DifficultySelector = ({
    selectedDifficulty,
    onSelectDifficulty,
}: DifficultySelectorProps) => {
    return (
        <div className="flex py-4">
            <select
                value={selectedDifficulty}
                onChange={(e) => onSelectDifficulty(Number(e.target.value))}
                className="p-2 cursor-pointer"
            >
                {DifficultyData.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default DifficultySelector
