import { axiosInstance } from './axios-instance'
import {
    CreateProblemResponse,
    GetProblemDetailProps,
    GetProblemListProps,
    GetProblemListResponse,
    PostCreateProblemProps,
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

export const postCreateProblem = async (props: PostCreateProblemProps) => {
    const response = await axiosInstance.post<CreateProblemResponse>(
        '/api/problem',
        {
            sector: props.sector,
            sectorType: props.sectorType,
            difficulty: props.difficulty,
            type: props.type,
            title: props.title,
            description: props.description,
            answer: props.answer,
            hint: props.hint,
            explanation: props.explanation,
            reference: props.reference,
        }
    )
    return response.data
}
