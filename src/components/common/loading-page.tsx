const LoadingPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mb-4"></div>
                <p className="text-xl text-gray-700">Loading...</p>
            </div>
        </div>
    )
}

export default LoadingPage
