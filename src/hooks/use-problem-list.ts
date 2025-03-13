import { useSuspenseQuery } from '@tanstack/react-query'
import { getProblemList } from '../apis/problem'
import { UseProblemListProps } from './type'

export const useProblemList = ({
    sectorName,
    difficulty,
    page,
}: UseProblemListProps) => {
    return useSuspenseQuery({
        queryKey: ['problemList', sectorName, difficulty, page],
        queryFn: async () => {
            return getProblemList({
                sector: sectorName,
                difficulty,
                page,
                limit: 10,
            })
        },
    })
}
