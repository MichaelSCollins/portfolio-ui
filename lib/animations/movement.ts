import PortfolioPage from "../enums/PortfolioPage"

const movementAnimation = (
    loaded: boolean = true,
    page: PortfolioPage) => {
    switch (page)
    {
        case PortfolioPage.HOME:
            return {
                transition: 'transform',
                transitionDuration: '1s',
                transform: loaded
                    ? 'translateX(0%)'
                    : 'translateX(-400%)'
            }
        case PortfolioPage.ABOUT:
            return {
                transition: 'transform',
                transitionDuration: '.9s',
                transform: loaded
                    ? 'translateY(0%)'
                    : 'translateY(400%)'
            }
        default:
            return {
                transition: 'transform',
                transitionDuration: '1s',
                transform: loaded
                    ? 'translateX(-1%)'
                    : 'translateX(100%)',
            }
    }
}

export default movementAnimation