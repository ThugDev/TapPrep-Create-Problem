import React, { useState } from 'react'
import { ToggleSwitchProps, ToggleType } from './type'

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onToggle }) => {
    const [toggle, setToggle] = useState<ToggleType>('FE')

    const handleToggle = (type: ToggleType) => {
        setToggle(type)
        onToggle?.(type)
    }

    return (
        <div
            className="w-[160px] h-10 rounded-[20px] p-2 flex-items flex-row bg-[#E6F1F9] relative"
            style={{ boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.10)' }}
        >
            <div
                className="absolute w-[75px] h-9 bg-white rounded-[18px] top-[2px] left-[2px] transition-transform duration-200"
                style={{
                    transform:
                        toggle === 'FE'
                            ? 'translateX(0px)'
                            : 'translateX(80px)',
                }}
            />
            <button
                onClick={() => handleToggle('FE')}
                className="absolute top-1.5 left-7 flex items-center justify-center bg-transparent border-none focus:outline-none"
            >
                <span
                    className="font-semibold text-[#0F99E4] text-xl transition-opacity duration-300"
                    style={{ opacity: toggle === 'FE' ? 1 : 0 }}
                >
                    FE
                </span>
            </button>

            <button
                onClick={() => handleToggle('BE')}
                className="absolute top-1.5 right-7 flex items-center justify-center bg-transparent border-none focus:outline-none"
            >
                <span
                    className="font-semibold text-[#0F99E4] text-xl transition-opacity duration-300"
                    style={{ opacity: toggle === 'BE' ? 1 : 0 }}
                >
                    BE
                </span>
            </button>
        </div>
    )
}

export default ToggleSwitch
