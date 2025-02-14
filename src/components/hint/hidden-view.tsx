import { HintViewProps } from './type'

const HintView = ({ setClickHint, hint }: HintViewProps) => {
    return (
        <div className="w-[500px] absolute min-h-2 pb-5 rounded bg-gray-700 shadow-sm shadow-black">
            <div className="w-full flex justify-end items-center">
                <button
                    onClick={() => setClickHint(false)}
                    className=" py-1 pr-3 cursor-pointer"
                >
                    <p>x</p>
                </button>
            </div>
            <div className="w-full px-2">
                <p>{hint}</p>
            </div>
        </div>
    )
}
export default HintView
