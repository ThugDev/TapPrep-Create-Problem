import { useState } from 'react'

export const useAnswerForm = () => {
    const [formData, setFormData] = useState({
        answerText: '',
        answerOX: null as boolean | null,
        selectedOption: null as string | null,
    })

    const handleSelectedOption = (key: string) => {
        setFormData((prev) => ({ ...prev, selectedOption: key }))
    }

    const setAnswerText = (text: string) => {
        setFormData((prev) => ({ ...prev, answerText: text }))
    }

    const setAnswerOX = (ox: boolean | null) => {
        setFormData((prev) => ({ ...prev, answerOX: ox }))
    }

    return { formData, handleSelectedOption, setAnswerOX, setAnswerText }
}
