import { useNavigate } from 'react-router-dom'

import { SectorDataType } from './type'
import { SectorData } from '../constants/sector-data'

const SelectedSector = () => {
    const navigate = useNavigate()

    const handleSectorClick = (item: SectorDataType) => {
        navigate('problemList', { state: { sector: item } })
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-[600px] grid grid-cols-2 jus gap-4 ">
                {SectorData.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleSectorClick(item)}
                        className="w-full h-20 flex justify-center items-center rounded-lg cursor-pointer hover:opacity-75"
                        style={{
                            backgroundColor: item.color,
                            color: item.legendFontColor,
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SelectedSector
