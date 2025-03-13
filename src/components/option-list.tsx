import { OptionListProps } from './type'

const OptionList = ({ options, selectedOption, onSelect }: OptionListProps) => {
    return (
        <div className="w-[80%] flex-center flex-col">
            {options?.map((item, index) => {
                const [key, value] = Object.entries(item)[0]
                return (
                    <button
                        key={key || index}
                        className={`min-w-[120px] p-2 my-1 rounded cursor-pointer ${selectedOption === key ? 'bg-blue-500' : ' border-[1px] border-[#d9d9d9]'}`}
                        onClick={() => onSelect(key)}
                    >
                        <p>
                            {index + 1}. {value}
                        </p>
                    </button>
                )
            })}
        </div>
    )
}
export default OptionList
