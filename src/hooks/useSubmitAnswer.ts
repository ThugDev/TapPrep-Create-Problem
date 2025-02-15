import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostProblemAnswerResponse } from '../apis/type'
import { sumbitAnswerProps } from './type'
import { postProblemAnswer } from '../apis/problem'

export const useSubmitAnswer = (problemId: number) => {
    const queryClient = useQueryClient()

    const mutation = useMutation<
        PostProblemAnswerResponse,
        any,
        sumbitAnswerProps
    >({
        mutationFn: async ({ formData }) => {
            const option = formData.answerText.trim()
                ? formData.answerText.toLocaleLowerCase()
                : formData.answerOX !== null
                  ? formData.answerOX
                  : Number(formData.selectedOption)
            return postProblemAnswer({
                problemId,
                option,
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['problemData'] })
            alert('제출 완료: 답안이 정상적으로 제출되었습니다.')
        },
        onError: (error: any) => {
            if (error.response?.status === 400) {
                alert('제출 오류: 이미 제출된 답안입니다.')
            } else {
                alert('오류: 답안 제출 중 오류가 발생했습니다.')
            }
        },
    })

    return {
        submitAnswer: mutation.mutate,
        isLoading: mutation.isPending,
        isError: mutation.isError,
        responseData: mutation.data,
    }
}
