import { LevelList } from '../../constants/level-list'
import { LevelVeiwProps } from './type'

const LevelView = ({ level, nickName }: LevelVeiwProps) => {
    const currentLevel = LevelList.find((item) => item.level === Number(level))

    return (
        <div className="w-full h-[120px] flex flex-row justify-start items-center gap-x-4 bg-white px-10 shadow-md rounded-md">
            {/* 추후 이미지로 변경 해야함 */}
            <img src={currentLevel?.image} className="w-[52px] h-[52px]" />
            <div>
                <p className="text-xs font-light">{currentLevel?.title}</p>
                <p className="text-2xl">
                    {nickName || '알수없음'} 님은{' '}
                    <span className="text-[#0F99E4]">{currentLevel?.rank}</span>{' '}
                    이에요
                </p>
            </div>
        </div>
    )
}
export default LevelView
