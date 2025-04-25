export type GetProblemListProps = {
    sector: string | undefined
    difficulty: number
    page: number | boolean
    limit: number
}

export type GetProblemListResponse = {
    problemList: {
        problem_id: number
        title: string
        type: string
        isSolved: boolean
    }[]
    nextPage: number | boolean
    lastPage: number
}

export type GetProblemDetailProps = {
    problem_id: number
}

export type GetProblemDetailResponse = {
    statusCode: number
    message: string
    isSolved: boolean
    problemData: {
        problem_id: number
        title: string
        description: string
        hint: string
        options?: ProblemOption[]
        type: number
        explanation?: string
        reference?: string
        answer?: boolean | string
        isCorrect?: boolean
    }
}

export type ProblemOption = {
    [key: string]: string
}

export type PostProblemAnswerProps = {
    problemId?: number
    option: number | string | boolean | null
}

export type PostProblemAnswerResponse = {
    message: string
    problemResult: {
        answer: string
        explanation: string
        isCorrect: boolean
        problem_id: number
        reference: string
        title: string
    }
    statusCode: number
}

export type PostRefreshTokenProps = {
    username: string | null
    refreshToken: string
}

export type RefreshTokenResponse = {
    data: { accessToken: string; newRefreshToken: string }
    statusCode: number
    message: string
    accessToken: string
}

export type GitLoginResponse = {
    message: string
    statusCode: number
    token: LoginToken
    userData: LoginUserData
    role: string
}

export type LoginToken = {
    accessToken: string
    refreshToken: string
}

export type LoginUserData = {
    nickname: string
    profile_image: string
    username?: string
}

// user.ts 의 타입
export type UserProfileResponse = {
    statusCode: number
    message: string
    userData: {
        username: string
        nickname: string
        profile_image: string
        level: string
    }
}

export type statType = {
    correct: number
    sector_name: string
    totalCount: number
    solvedCount: number
}

export type GetStatFeResponse = {
    statusCode: number
    message: string
    stats: statType[]
}

// create problem
export type CreateProblemResponse = {
    sector: string
    sectorType: string
    difficulty: number
    type: string
    title: string
    description: string
    answer: string[] | boolean | string
    hint: string
    explanation: string
    reference: string
}

export type PostCreateProblemProps = {
    sector: string
    sectorType: string
    difficulty: number
    type: string
    title: string
    description: string
    answer: string[] | boolean | string
    hint: string
    explanation: string
    reference: string
}
