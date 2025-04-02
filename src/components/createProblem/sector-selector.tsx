type SectorSelectorProps = {
    sectorType: string[] | []
    selectedSectorType: string
    onSelectedSectorType: (sectorType: string) => void
}

const SectorSelector = ({
    sectorType,
    selectedSectorType,
    onSelectedSectorType,
}: SectorSelectorProps) => {
    return (
        <div>
            <label className="block text-sm font-medium mb-2">분야 타입</label>
            <div className="flex gap-2">
                {sectorType.map((type) => (
                    <div
                        key={type}
                        onClick={() => onSelectedSectorType(type)}
                        className={`cursor-pointer px-4 py-2 border rounded ${
                            selectedSectorType === type
                                ? 'ring-2 ring-offset-2 ring-blue-500'
                                : 'bg-gray-100'
                        }`}
                    >
                        {type}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SectorSelector
