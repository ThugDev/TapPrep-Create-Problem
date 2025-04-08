import { useMutation } from '@tanstack/react-query'
import { postCreateProblem } from '../apis/problem'
import { CreateProblemResponse, PostCreateProblemProps } from '../apis/type'

export const useCreateProblem = () => {
    return useMutation<CreateProblemResponse, Error, PostCreateProblemProps>({
        mutationKey: ['createProblem'],
        mutationFn: (props: PostCreateProblemProps) => postCreateProblem(props),
    })
}
