import { useLocation, useNavigate } from 'react-router-dom'
import { SectorDataType } from './type'
import { useState } from 'react'
import { useProblemList } from '../hooks/useProblemList'
import DifficultySelector from '../components/problemList/difficultySelector'
import ProblemListContent from '../components/problemList/problemListContent'
import LoadingPage from '../components/common/loading-page'
import ErrorPage from '../components/common/error-page'

const ProblemList = () => {
    const { state } = useLocation()
    const sector: SectorDataType = state.sector
    const [selectedDifficulty, setSelectedDifficulty] = useState(1)
    const navigate = useNavigate()

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isError,
        isFetchingNextPage,
    } = useProblemList({
        sectorName: sector.name,
        difficulty: selectedDifficulty,
    })

    if (isLoading) <LoadingPage />
    if (isError) <ErrorPage message="문제 데이터가 없습니다." />

    const handleSelectProblem = (problem_id: number) => {
        navigate('/selectedSector/problemList/problemDetail', {
            state: { problem_id: problem_id },
        })
    }

    return (
        <div className="w-full h-full flex-center flex-col ">
            <DifficultySelector
                selectedDifficulty={selectedDifficulty}
                onSelectDifficulty={setSelectedDifficulty}
            />
            <div className="w-full text-2xl font-bold flex-center p-4 my-24">
                {sector.name}
            </div>
            <ProblemListContent
                data={data}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                handleSelecteProblem={handleSelectProblem}
            />
        </div>
    )
}

export default ProblemList
