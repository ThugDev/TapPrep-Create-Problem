import { DashBoardButtonPorps } from './type'

const DashBoardButton = ({ text }: DashBoardButtonPorps) => {
    return (
        <button className="border border-[#0F99E4] py-2 px-2 rounded-md mx-2">
            <p className="text-[8px]">{text}</p>
        </button>
    )
}
export default DashBoardButton
