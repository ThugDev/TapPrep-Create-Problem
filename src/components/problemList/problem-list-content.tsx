import { ProblemListContentProps } from './type'
import Pagination from './pagination'
import { memo } from 'react'

const ProblemListContent = memo(
    ({
        data,
        handleSelecteProblem,
        page,
        setPage,
    }: ProblemListContentProps) => {
        return (
            <div className="max-w-[800px] min-w-[600px] h-[500px] flex-col py-12  rounded-lg ">
                {data.problemList.map((problem, pageIndex) => (
                    <div
                        key={pageIndex}
                        className="grid grid-cols-1 justify-center items-center gap-2 "
                    >
                        <div
                            key={problem.problem_id}
                            className="w-full flex-items px-2 py-1 my-2 hover:bg-[#eee] rounded-lg  "
                            onClick={() =>
                                handleSelecteProblem(problem.problem_id)
                            }
                        >
                            <h2 className=" overflow-hidden cursor-pointer whitespace-nowrap text-ellipsis ">
                                {problem.title}
                            </h2>
                        </div>
                    </div>
                ))}
                <Pagination
                    page={page}
                    setPage={setPage}
                    lastPage={data.lastPage}
                />
            </div>
        )
    }
)

export default ProblemListContent
