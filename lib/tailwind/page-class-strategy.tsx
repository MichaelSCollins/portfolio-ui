import PortfolioPage from "../enums/PortfolioPage"

export const halfWidth: Record<number, string> = {
    [1]: "md:w-1/2 max-md:mx-auto",
    [0]: "w-full",
}
export const flexDirection: Record<PortfolioPage, string> = {
    [PortfolioPage.ABOUT]: "md:flex-row max-md:flex-col",
    [PortfolioPage.TITLE]: "flex-col",
    [PortfolioPage.CONTACT]: "flex-col",
    [PortfolioPage.LOGIN]: "flex-col",
    [PortfolioPage.HOME]: "flex-col",
    [PortfolioPage.UNKNOWN]: "flex-col"
}