import { PROBLEM_TYPE } from '../../constants/problem-type'

type ProblemTypeSelectorProps = {
    selectedType: string
    onSelectedType: (type: string) => void
}

const ProblemTypeSelector = ({
    selectedType,
    onSelectedType,
}: ProblemTypeSelectorProps) => {
    return (
        <div>
            <label className="block text-sm font-medium">문제 유형</label>
            <div className="flex gap-2">
                {PROBLEM_TYPE.map((type) => (
                    <div
                        key={type.value}
                        onClick={() => onSelectedType(type.value)}
                        className={`cursor-pointer px-4 py-2 border rounded ${
                            selectedType === type.value
                                ? 'ring-2 ring-offset-2 ring-blue-500'
                                : 'gray-100'
                        }`}
                    >
                        {type.label}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProblemTypeSelector
