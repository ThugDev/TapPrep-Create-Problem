import { useInfiniteQuery } from '@tanstack/react-query'
import { getProblemList } from '../apis/problem'
import { UseProblemListProps } from './type'

export const useProblemList = ({
    sectorName,
    difficulty,
}: UseProblemListProps) => {
    return useInfiniteQuery({
        queryKey: ['problemList', sectorName, difficulty],
        queryFn: async ({ pageParam = 1 }) => {
            return getProblemList({
                sector: sectorName,
                difficulty,
                page: pageParam,
                limit: 10,
            })
        },
        getNextPageParam: (lastPage): number | undefined => {
            return typeof lastPage.nextPage === 'number'
                ? lastPage.nextPage
                : undefined
        },
        initialPageParam: 1,
    })
}
