import DifficultySelector from './difficulty-selector'
import ProblemTypeSelector from './problem-type-selector'
import SectorSelector from './sector-selector'
import SectorTypeSelector from './sector-type-selector'

type Props = {
    sectorType: string
    types: string[] | undefined
    sector: string
    difficulty: number
    problemType: string
    handleSelect: (
        field: string,
        value: string | string[] | number | boolean
    ) => void
}

const SelectSection = ({
    sectorType,
    problemType,
    difficulty,
    sector,
    types,
    handleSelect,
}: Props) => {
    return (
        <>
            {/* FE, BE 선택 */}
            <SectorTypeSelector
                selectedSector={sectorType}
                onSelectedSector={(value) => {
                    handleSelect('sectorType', value)
                }}
            />
            {/* FE, BE에 따른 분야 선택 */}
            <SectorSelector
                sectorType={types || []}
                selectedSectorType={sector}
                onSelectedSectorType={(value) => {
                    handleSelect('sector', value)
                }}
            />
            {/* 난이도 선택 */}
            <DifficultySelector
                selectedDifficulty={difficulty}
                onSelectedDifficulty={(value) =>
                    handleSelect('difficulty', value)
                }
            />
            {/* 문제 타입 선택 */}
            <ProblemTypeSelector
                selectedType={problemType}
                onSelectedType={(value) => handleSelect('type', value)}
            />
        </>
    )
}

export default SelectSection
