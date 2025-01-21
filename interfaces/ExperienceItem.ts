interface ExperienceItem {
    title: string
    // role: string
    duration?: string
    description?: string
    skills?: string[]
    img?: {
        src: string,
        alt?: string
    }
    skillBreakdown?: number[]
    achievements?: string[]
    screenshots?: string[]
}

export default ExperienceItem