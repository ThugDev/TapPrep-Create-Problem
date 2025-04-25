import { UserProfileResponse } from '../../apis/type'

export type DashBoardButtonPorps = {
    text: string
}

export type LevelVeiwProps = {
    level?: string
    nickName?: string
}

export type ToggleType = 'FE' | 'BE'

export interface ToggleSwitchProps {
    onToggle?: (type: ToggleType) => void
}

export type DashboardUserProfileProps = {
    userProfileData?: UserProfileResponse | null
}

export type MySolutionContentProps = {
    mergedData: {
        solvedCount: number
        correct: number
        totalCount: number
        name: string
        image: string
    }[]
    onSector: (name: string) => void
}
