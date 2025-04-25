import { MySolutionContentProps } from './type'

const MySolutionContent = ({
    mergedData,
    onSector,
}: MySolutionContentProps) => {
    return (
        <div className="h-[300px] flex-center">
            <div className="w-full px-8 grid grid-cols-4">
                {mergedData.map((item, index) => {
                    const progressPercent =
                        (item.solvedCount / item.totalCount) * 100
                    console.log(item)
                    return (
                        <div
                            key={index}
                            className="w-24 h-24"
                            onClick={() => onSector(item.name)}
                        >
                            <img
                                src={item.image}
                                className={`w-20 h-20 hover:cursor-pointer ${item.solvedCount === 0 ? ' opacity-50' : ' opacity-100'}`}
                            />
                            <div className="w-[60%]  bg-[#D9D9D9] h-1 mt-1 ml-2 rounded">
                                {item.solvedCount !== 0 && (
                                    <div
                                        className="bg-[#0F99E4] h-1 rounded"
                                        style={{
                                            width: `${progressPercent}%`,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default MySolutionContent
