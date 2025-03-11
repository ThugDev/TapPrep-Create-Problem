import { InterviewAnswerProps } from '../components/answer/type'

export type UseProblemListProps = {
    sectorName: string | undefined
    difficulty: number
    page: number
}

export type sumbitAnswerProps = {
    formData: {
        answerText: string
        answerOX: boolean | null
        selectedOption: string | null
    }
}

export type UserAnswerInitializationProps = {
    data: InterviewAnswerProps['data']
    setAnswerText: (text: string) => void
    setAnswerOX: (ox: boolean) => void
    handleSelectedOption: (option: string) => void
}
