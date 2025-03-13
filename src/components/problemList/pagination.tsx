import { ChevronLeft, ChevronRight } from 'lucide-react'

export type PaginationProps = {
    page: number
    setPage: (page: number) => void
    lastPage: number
}

const Pagination = ({ page, setPage, lastPage }: PaginationProps) => {
    const handleNext = () => {
        if (page === lastPage) {
            alert('마지막 페이지입니다.')
        } else {
            setPage(page + 1)
        }
    }

    const handlePrev = () => {
        if (page === 1) {
            alert('첫번째 페이지입니다.')
        } else {
            setPage(page - 1)
        }
    }

    return (
        <div className="w-full flex-center flex-row my-12">
            <div onClick={handlePrev} className="cursor-pointer">
                <ChevronLeft />
            </div>
            {Array.from({ length: lastPage }, (_, i) => i + 1).map(
                (pageNum) => (
                    <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`px-3 py-1 rounded-md cursor-pointer ${
                            pageNum === page
                                ? 'bg-blue-500 text-white'
                                : 'hover:bg-gray-200'
                        }`}
                    >
                        {pageNum}
                    </button>
                )
            )}
            <div onClick={handleNext} className="cursor-pointer">
                <ChevronRight />
            </div>
        </div>
    )
}
export default Pagination
