import { useCreateProblem } from '../../hooks/use-create-problem'
import { SECTOR_TYPE } from '../../constants/sector-type'
import ProblemContentInput from './problem-content-input'
import ProblemOption from './problem-option'
import { useProblemForm } from '../../hooks/use-problem-form'
import SelectSection from './select-section'
import { useNavigate } from 'react-router-dom'

const CreateProblemForm = () => {
    const { mutate, isSuccess } = useCreateProblem()

    const navigate = useNavigate()

    const { problemData, handleChange, handleSelect, resetAnswerForOX } =
        useProblemForm({
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

    if (isSuccess) {
        alert('문제 생성이 완료되었습니다.')
        navigate('/dashboard')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-[600px] p-6 bg-white shadow-md rounded-lg flex flex-col gap-4"
        >
            <p className="text-2xl font-bold">문제 생성</p>
            {/* 선택 섹션 */}
            <SelectSection
                sectorType={problemData.sectorType}
                types={selectedSector?.types}
                sector={problemData.sector}
                difficulty={problemData.difficulty}
                problemType={problemData.type}
                handleSelect={handleSelect}
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
                answer={problemData.answer}
                onAnswerChange={(value) => handleSelect('answer', value)}
            />
            <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                문제 생성
            </button>
        </form>
    )
}

export default CreateProblemForm
