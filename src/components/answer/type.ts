import { GetProblemDetailResponse } from '../../apis/type'
import { useAnswerForm } from '../../hooks/useAnswerForm'

// difficulty 변경 핸들러 타입
export type handleDifficultyProps = {
    difficultyValue: number
}

export type ProblemListScreenProps = {
    problemList: { problem_id: number; title: string }[]
    nextPage: number | boolean
}

export type InterviewAnswerProps = {
    data?: GetProblemDetailResponse
}

export type AnswerFormProps = {
    problemType: number
    formData: ReturnType<typeof useAnswerForm>['formData']
    setAnswerText: (text: string) => void
    setAnswerOX: (ox: boolean) => void
}
