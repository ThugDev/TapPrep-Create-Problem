import { useMemo, useState } from 'react'
import { ToggleType } from './type'
import ToggleSwitch from './toggle-switch'

import { useSuspenseQuery } from '@tanstack/react-query'
import { getStatBe, getStatFe } from '../../apis/stat'
import { MergedSector } from '../../utils/merged-sector'
import {
    BeSectorData,
    FeSectorData,
} from '../../constants/solution-icon-images'

const MySolutions = () => {
    const [currentView, setCurrentView] = useState('FE')

    const { data } = useSuspenseQuery({
        queryKey: currentView === 'FE' ? ['statFe'] : ['statBe'],
        queryFn: currentView === 'FE' ? getStatFe : getStatBe,
    })

    const handleToggle = (value: ToggleType) => {
        setCurrentView(value)
    }

    const iconsToDisplay = currentView === 'FE' ? FeSectorData : BeSectorData

    const mergedData = useMemo(() => {
        return MergedSector({ sectorData: iconsToDisplay, data })
    }, [iconsToDisplay, data])

    return (
        <div className="w-full flex-center flex-col rounded-full -mt-16">
            <ToggleSwitch onToggle={handleToggle} />
            <div className="h-[300px]  flex-center">
                <div className="w-full px-8 grid grid-cols-4">
                    {mergedData.map((item, index) => {
                        const progressPercent =
                            (item.correct / item.total) * 100
                        return (
                            <div key={index} className="w-24 h-24">
                                <img
                                    src={item.image}
                                    className={`w-20 h-20 ${item.correct === 0 ? ' opacity-50' : ' opacity-100'}`}
                                />
                                <div className="w-[60%]  bg-[#D9D9D9] h-1 mt-1 ml-2 rounded">
                                    {item.correct !== 0 && (
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
        </div>
    )
}

export default MySolutions
