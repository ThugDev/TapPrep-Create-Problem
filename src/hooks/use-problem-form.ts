import { useCallback, useState } from 'react'
import { ProblemDataType } from '../components/createProblem/type'

export const useProblemForm = (initialState: ProblemDataType) => {
    const [problemData, setProblemData] =
        useState<ProblemDataType>(initialState)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setProblemData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelect = useCallback(
        (field: string, value: string | string[] | number | boolean) => {
            setProblemData((prev) => ({
                ...prev,
                [field]:
                    field === 'answer' && prev.type === 'tf'
                        ? value === 'O'
                            ? true
                            : false
                        : value,
            }))
        },
        []
    )

    const resetAnswerForOX = () => {
        if (problemData.type === 'tf') {
            setProblemData((prev) => ({
                ...prev,
                answer: problemData.answer === 'O' ? 'true' : 'false',
            }))
        }
    }

    return {
        problemData,
        handleChange,

        handleSelect,
        resetAnswerForOX,
    }
}
