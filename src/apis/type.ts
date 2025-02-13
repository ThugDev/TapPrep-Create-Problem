export type GetProblemListProps = {
    sector: string
    difficulty: number
    page: number | boolean
    limit: number
}

export type GetProblemListResponse = {
    problemList: {
        problem_id: number
        title: string
        type: string
        isSolved: boolean
    }[]
    nextPage: number | boolean
}
