import { axiosInstance } from './axiosInstance'
import {
    GetProblemDetailProps,
    GetProblemListProps,
    GetProblemListResponse,
    PostProblemAnswerProps,
    PostProblemAnswerResponse,
} from './type'

export const getProblemList = async ({
    sector,
    difficulty,
    page,
    limit,
}: GetProblemListProps) => {
    const response = await axiosInstance.get<GetProblemListResponse>(
        `/api/problem/list?sector=${sector}&difficulty=${difficulty}&page=${page}&limit=${limit}`
    )
    return response.data
}

export const getProblemDetail = async ({
    problem_id,
}: GetProblemDetailProps) => {
    const response = await axiosInstance.get(`/api/problem/${problem_id}`)
    return response.data
}

export const postProblemAnswer = async ({
    problemId,
    option,
}: PostProblemAnswerProps) => {
    const response = await axiosInstance.post<PostProblemAnswerResponse>(
        '/api/problem/answer',
        {
            problemId,
            option,
        }
    )
    return response.data
}
