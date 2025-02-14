import { useState } from 'react'
import { HintButtonProps } from './type'
import HintView from './hidden-view'

const HintButton = ({ hint }: HintButtonProps) => {
    const [clickHint, setClickHint] = useState<boolean>(false)

    return (
        <div className="w-[80%] h-12 flex justify-end items-center mb-12 ">
            <button
                onClick={() => setClickHint(!clickHint)}
                className="p-2 bg-gray-700 rounded cursor-pointer shadow-sm shadow-black"
            >
                <p>힌트</p>
            </button>
            {clickHint && <HintView setClickHint={setClickHint} hint={hint} />}
        </div>
    )
}
export default HintButton
