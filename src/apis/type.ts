export type GetProblemListProps = {
    sector: string
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
    username: string
    refreshToken: string
}

export type RefreshTokenResponse = {
    statusCode: number
    message: string
    accessToken: string
}

export type GitLoginResponse = {
    message: string
    statusCode: number
    token: LoginToken
    userData: LoginUserData
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
