import { useLocation } from 'react-router-dom'
import { SectorDataType } from './type'
import { useState } from 'react'
import { useProblemList } from '../hooks/useProblemList'
import DifficultySelector from '../components/problemList/difficultySelector'
import ProblemListContent from '../components/problemList/problemListContent'

const ProblemList = () => {
    const { state } = useLocation()
    const sector: SectorDataType = state.sector
    const [selectedDifficulty, setSelectedDifficulty] = useState(1)

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

    if (isLoading) <div>Loading...</div>
    if (isError) <div>"문제 데이터를 불러오는데 오류가 발생했습니다."</div>

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
            />
        </div>
    )
}

export default ProblemList
