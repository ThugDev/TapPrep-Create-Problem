import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { getProblemDetail } from '../apis/problem'
import { GetProblemDetailResponse } from '../apis/type'
import LoadingPage from '../components/common/loading-page'
import ErrorPage from '../components/common/error-page'
import ProblemContent from '../components/problemDetail/problem-content'
import AnswerExplanation from '../components/problemDetail/answer-explanation'
import HintButton from '../components/hint/hidden-button'
import Answer from '../components/answer/answer'

const ProblemDetail = () => {
    const { state } = useLocation()
    const { problem_id } = state

    const { data, isLoading, isError } = useQuery<GetProblemDetailResponse>({
        queryKey: ['problemDetail'],
        queryFn: () => getProblemDetail({ problem_id: problem_id }),
    })

    if (isLoading) <LoadingPage />
    if (isError) <ErrorPage message="문제 데이터가 없습니다." />

    return (
        <div className="w-full h-full flex-center py-20">
            <div className="w-[80%] overflow-y-auto">
                <div className="flex-1 flex-center flex-col">
                    {data && (
                        <>
                            <ProblemContent
                                title={data?.problemData.title}
                                description={data?.problemData.description}
                            />
                            <HintButton hint={data.problemData.hint} />
                            <Answer data={data} />
                        </>
                    )}
                </div>
            </div>
            {data?.isSolved === true && (
                <div className="w-full ">
                    <AnswerExplanation
                        isCorrect={data?.problemData.isCorrect}
                        explanation={data?.problemData.explanation}
                        reference={data?.problemData.reference}
                    />
                </div>
            )}
        </div>
    )
}
export default ProblemDetail
