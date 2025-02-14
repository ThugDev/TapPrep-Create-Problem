import { useEffect } from 'react'
import { UserAnswerInitializationProps } from './type'

export const useAnswerInitialization = ({
    data,
    setAnswerText,
    setAnswerOX,
    handleSelectedOption,
}: UserAnswerInitializationProps) => {
    const { type, answer } = data?.problemData ?? {}

    useEffect(() => {
        if (data?.isSolved === true) {
            if (type === 3) {
                setAnswerText(answer as string)
            } else if (type === 2) {
                setAnswerOX(answer as boolean)
            } else {
                handleSelectedOption(answer?.toString() as string)
            }
        }
    }, [data?.isSolved, JSON.stringify(data?.problemData)])
}
