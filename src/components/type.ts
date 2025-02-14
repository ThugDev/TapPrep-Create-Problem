export type OptionListProps = {
    options?: { [key: string]: string }[]
    selectedOption: string | null
    onSelect: (key: string) => void
}
export type ProblemAnswerOXProps = {
    answerOX: boolean | null
    setAnswerOX: (answerOX: boolean) => void
}
export type ProblemAnswerTextProps = {
    answerText: string
    setAnswerText: (answerText: string) => void
}
