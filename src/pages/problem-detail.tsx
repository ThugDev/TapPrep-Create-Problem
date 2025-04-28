import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import { getProblemDetail } from '../apis/problem'
import { GetProblemDetailResponse } from '../apis/type'
import ProblemContent from '../components/problemDetail/problem-content'
import AnswerExplanation from '../components/problemDetail/answer-explanation'
import HintButton from '../components/hint/hidden-button'
import Answer from '../components/answer/answer'

const ProblemDetail = () => {
    const { state } = useLocation()
    const { problem_id } = state
    const { data } = useQuery<GetProblemDetailResponse>({
        queryKey: ['problemDetail'],
        queryFn: () => getProblemDetail({ problem_id: problem_id }),
    })

    return (
        <div className="flex-center">
            <div className={`w-full relative max-w-full h-full py-20 `}>
                <div className="w-full overflow-y-auto">
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
            </div>

            {data?.isSolved === true && (
                <>
                    <div className="h-[80%] border border-[#e9e9e9] rounded-md absolute left-1/2 top-28" />
                    <div className="w-full flex-center">
                        <AnswerExplanation
                            isCorrect={data?.problemData.isCorrect}
                            explanation={data?.problemData.explanation}
                            reference={data?.problemData.reference}
                        />
                    </div>
                </>
            )}
        </div>
    )
}
export default ProblemDetail
