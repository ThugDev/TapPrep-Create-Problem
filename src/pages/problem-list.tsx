import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useProblemList } from '../hooks/use-problem-list'
import DifficultySelector from '../components/problemList/difficulty-selector'
import ProblemListContent from '../components/problemList/problem-list-content'

const ProblemList = () => {
    const { sector } = useParams<{ sector: string }>()
    const [selectedDifficulty, setSelectedDifficulty] = useState(1)
    const [page, setPage] = useState<number>(1)
    const navigate = useNavigate()

    const { data } = useProblemList({
        sectorName: sector,
        difficulty: selectedDifficulty,
        page,
    })

    const handleSelectProblem = (problem_id: number) => {
        navigate('/dashboard/problemDetail', {
            state: { problem_id: problem_id },
        })
    }

    return (
        <div className="w-full h-full flex-center flex-col overflow-y-auto ">
            <div className="w-full text-4xl font-bold flex-center p-4 my-2">
                {sector}
            </div>
            <div className="w-[30%] flex justify-end">
                <DifficultySelector
                    selectedDifficulty={selectedDifficulty}
                    onSelectDifficulty={setSelectedDifficulty}
                />
            </div>
            <ProblemListContent
                data={data}
                handleSelecteProblem={handleSelectProblem}
                page={page}
                setPage={setPage}
            />
        </div>
    )
}

export default ProblemList
