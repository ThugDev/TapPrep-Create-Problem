import { useSuspenseQuery } from '@tanstack/react-query'
import { getProblemList } from '../apis/problem'
import { UseProblemListProps } from './type'
import axios from 'axios'

export const useProblemList = ({
    sectorName,
    difficulty,
    page,
}: UseProblemListProps) => {
    return useSuspenseQuery({
        queryKey: ['problemList', sectorName, difficulty, page],
        queryFn: async () => {
            try {
                return await getProblemList({
                    sector: sectorName,
                    difficulty,
                    page,
                    limit: 10,
                })
            } catch (error: any) {
                if (
                    axios.isAxiosError(error) &&
                    error.response?.status === 400
                ) {
                    alert('문제 내용이 존재 하지 않습니다.')
                } else {
                    alert('문제 목록을 불러오는 중 오류가 발생했습니다.')
                }
            }
        },
    })
}
