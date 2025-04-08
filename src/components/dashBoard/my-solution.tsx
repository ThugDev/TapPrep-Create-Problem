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
import { useNavigate } from 'react-router-dom'
import MySolutionContent from './my-solution-content'
import CreateNavigateButton from './create-navigate-button'

const MySolutions = () => {
    const [currentView, setCurrentView] = useState('FE')
    const navigate = useNavigate()

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

    const handleSector = (sector: string) => {
        navigate(`problemList/${sector}`)
    }

    return (
        <div className=" relative w-full flex-center flex-col  -mt-16">
            <ToggleSwitch onToggle={handleToggle} />
            <MySolutionContent
                mergedData={mergedData}
                onSector={handleSector}
            />
            <CreateNavigateButton />
        </div>
    )
}

export default MySolutions
