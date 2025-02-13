import { GetProblemListResponse } from '../../apis/type'

export type ProblemListContentProps = {
    data?: {
        pageParams: unknown[]
        pages: GetProblemListResponse[]
    }
    hasNextPage: boolean
    fetchNextPage: () => void
    isFetchingNextPage: boolean
}
