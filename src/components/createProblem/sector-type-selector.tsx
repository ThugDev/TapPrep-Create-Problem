import { SECTOR_TYPE } from '../../constants/sector-type'

type SectorTypeSelectorProps = {
    selectedSector: string
    onSelectedSector: (sector: string) => void
}

const SectorTypeSelector = ({
    selectedSector,
    onSelectedSector,
}: SectorTypeSelectorProps) => {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">분야</label>
            <div className="flex gap-2 flex-wrap">
                {SECTOR_TYPE.map((sector) => (
                    <div
                        key={sector.name}
                        onClick={() => onSelectedSector(sector.name)}
                        className={`cursor-pointer px-4 py-2 border rounded ${
                            selectedSector === sector.name
                                ? 'ring-2 ring-offset-2 ring-blue-500'
                                : ''
                        }`}
                    >
                        {sector.name}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SectorTypeSelector
