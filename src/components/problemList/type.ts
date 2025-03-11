import { GetProblemListResponse } from '../../apis/type'

export type ProblemListContentProps = {
    data: GetProblemListResponse
    handleSelecteProblem: (problem_id: number) => void
    page: number
    setPage: (page: number) => void
}

export type DifficultySelectorProps = {
    selectedDifficulty: number
    onSelectDifficulty: (value: number) => void
}
