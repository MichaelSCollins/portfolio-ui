interface ExperienceItem {
    screenshots: never[]
    title: string
    // role: string
    duration?: string
    description?: string
    skills?: string[]
    img: {
        src: string,
        alt: string
    }
    skillBreakdown?: number[]
    achievements?: string[]
}

export default ExperienceItem