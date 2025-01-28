import { OverlayAnchors } from "@/enums/OverlayDirection"
import PortfolioPage from "@/enums/PortfolioPage"

class TailwindClassBuilder {
    page?: PortfolioPage
    loaded = false
    twStyles = ''
    constructor() {
        this.twStyles = ``
    }
    setPage(page?: PortfolioPage) {
        this.page = page;
        return this;
    }
    setLoaded(loaded: boolean) {
        this.loaded = loaded
        return this;
    }
    build(): {
        container?: string,
        title?: string,
        subtitle?: string,
        lineHeight?: string
    } {
        return {}
    }
}

export default TailwindClassBuilder