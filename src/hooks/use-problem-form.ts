import { useState } from 'react'
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

    const handleOptionChange = (index: number, value: string) => {
        const updatedOptions = [...problemData.options]
        updatedOptions[index] = value
        setProblemData((prev) => ({ ...prev, options: updatedOptions }))
    }

    const handleSelect = (field: string, value: string | number | boolean) => {
        setProblemData((prev) => ({
            ...prev,
            [field]:
                field === 'answer' && prev.type === 'tf'
                    ? value === 'O'
                        ? true
                        : false
                    : value,
        }))
    }

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
        handleOptionChange,
        handleSelect,
        resetAnswerForOX,
    }
}
