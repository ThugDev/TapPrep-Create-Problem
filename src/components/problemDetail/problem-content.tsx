import { ProblemContentProps } from './type'

const ProblemContent = ({ title, description }: ProblemContentProps) => {
    return (
        <div className="w-[80%] mt-12 flex-center flex-col">
            <p className="font-bold text-2xl">{title}</p>
            <div className="min-h-[200px] flex justify-center items-center rounded my-12">
                <p className="text-lg">{description}</p>
            </div>
        </div>
    )
}

export default ProblemContent
