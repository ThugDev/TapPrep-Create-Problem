import { SectorDataType } from '../constants/type'
import { GetStatFeResponse, statType } from '../apis/type'

export type MergedSectorProp = {
    sectorData: SectorDataType[]
    data: GetStatFeResponse
}

export const MergedSector = ({ sectorData, data }: MergedSectorProp) => {
    const merged = sectorData.map((sector: SectorDataType) => {
        const matchingStat = data.stats.find(
            (stat: statType) =>
                stat.sector_name.toLocaleLowerCase() ===
                sector.name.toLocaleLowerCase()
        )
        return {
            ...sector,
            solvedCount: matchingStat?.solvedCount ?? 0,
            correct: matchingStat?.correct ?? 0,
            totalCount: matchingStat?.totalCount ?? 0,
        }
    })
    return merged
}
