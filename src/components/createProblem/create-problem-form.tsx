import { useCreateProblem } from '../../hooks/use-create-problem'
import { SECTOR_TYPE } from '../../constants/sector-type'
import DifficultySelector from './difficulty-selector'
import ProblemTypeSelector from './problem-type-selector'
import ProblemContentInput from './problem-content-input'
import ProblemOption from './problem-option'
import { useProblemForm } from '../../hooks/use-problem-form'
import SectorTypeSelector from './sector-type-selector'
import SectorSelector from './sector-selector'

const CreateProblemForm = () => {
    const { mutate, isSuccess } = useCreateProblem()

    const {
        problemData,
        handleChange,
        handleOptionChange,
        handleSelect,
        resetAnswerForOX,
    } = useProblemForm({
        sector: '',
        sectorType: '',
        difficulty: 1,
        type: '',
        title: '',
        description: '',
        answer: '',
        options: ['', '', '', '', ''],
        hint: '',
        explanation: '',
        reference: '',
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        resetAnswerForOX()
        mutate(problemData)
    }
    const selectedSector = SECTOR_TYPE.find(
        (sector) => sector.name === problemData.sectorType
    )

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[600px] p-6 bg-white shadow-md rounded-lg flex flex-col gap-4"
        >
            <p className="text-2xl font-bold">문제 생성</p>
            {/* FE, BE 선택 */}
            <SectorTypeSelector
                selectedSector={problemData.sectorType}
                onSelectedSector={(value) => {
                    handleSelect('sectorType', value)
                }}
            />
            {/* FE, BE에 따른 분야 선택 */}
            <SectorSelector
                sectorType={selectedSector?.types || []}
                selectedSectorType={problemData.sector}
                onSelectedSectorType={(value) => {
                    handleSelect('sector', value)
                }}
            />
            {/* 난이도 선택 */}
            <DifficultySelector
                selectedDifficulty={problemData.difficulty}
                onSelectedDifficulty={(value) =>
                    handleSelect('difficulty', value)
                }
            />
            {/* 문제 타입 선택 */}
            <ProblemTypeSelector
                selectedType={problemData.type}
                onSelectedType={(value) => handleSelect('type', value)}
            />
            {/* 문제 내용 입력 */}
            <ProblemContentInput
                title={problemData.title}
                description={problemData.description}
                hint={problemData.hint}
                explanation={problemData.explanation}
                reference={problemData.reference}
                onChange={handleChange}
            />
            {/* 문제 옵션 입력 */}
            <ProblemOption
                type={problemData.type}
                options={problemData.options}
                answer={problemData.answer}
                onOptionChange={handleOptionChange}
                onSelectedOX={(value) => handleSelect('answer', value)}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                문제 생성
            </button>
            {isSuccess && (
                <p className="text-green-500 text-center mt-4">
                    문제 생성이 완료되었습니다!
                </p>
            )}
        </form>
    )
}

export default CreateProblemForm
