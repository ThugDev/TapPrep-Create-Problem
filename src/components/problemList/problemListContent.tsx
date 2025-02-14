import { ProblemListContentProps } from './type'

const ProblemListContent = ({
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    handleSelecteProblem,
}: ProblemListContentProps) => {
    return (
        <div className="w-full h-[500px] overflow-y-auto flex-center flex-col py-12 ">
            {data?.pages.map((page, pageIndex) => (
                <div
                    key={pageIndex}
                    className="grid grid-cols-5 justify-center items-center mt-12 gap-12"
                >
                    {page?.problemList.map((problem) => (
                        <div
                            key={problem.problem_id}
                            className="w-[300px] flex-center p-2 my-2 cursor-pointer hover:bg-gray-600 rounded-lg"
                            onClick={() =>
                                handleSelecteProblem(problem.problem_id)
                            }
                        >
                            <h2>{problem.title}</h2>
                        </div>
                    ))}
                </div>
            ))}
            <div className="w-full h-12 flex-center">
                {hasNextPage && (
                    <button
                        onClick={() => fetchNextPage()}
                        disabled={isFetchingNextPage}
                        className="w-40 mt-20 p-4 cursor-pointer hover:bg-gray-600 rounded-lg"
                    >
                        {isFetchingNextPage ? 'Loading more...' : 'Load More'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default ProblemListContent
