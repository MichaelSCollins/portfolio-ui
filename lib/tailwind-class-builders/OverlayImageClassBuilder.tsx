import PortfolioPage from "../enums/PortfolioPage"
import { OverlayAnchors } from "../enums/OverlayDirection"
import { twMerge } from "tw-merge"
import TailwindClassBuilder from "./TailwindBuilder"

class OverlayTwClassBuilder extends TailwindClassBuilder {
    anchor: string | undefined
    constructor() {
        super()
    }
    setAnchor(anchor?: OverlayAnchors) {
        if (anchor)
            this.anchor = anchor?.valueOf();
        else console.warn("Anchor undefined.")
        return this;
    }
    override build() {
        let imageContainerStyles = 'absolute '
        switch (this.anchor) {
            case OverlayAnchors.BOTTOM_RIGHT:
                if (this.page === PortfolioPage.ABOUT)
                    imageContainerStyles += `
                        max-md:w-3/5 max-md:h-2/5  md:h-3/4 md:w-auto
                        bottom-0 max-md:right-0 md:-right-12`
                else imageContainerStyles += `
                    max-md:h-64 max-md:w-64 md:h-3/4 md:w-auto
                    bottom-0 right-0`
                break;
            case OverlayAnchors.BOTTOM_LEFT:
                imageContainerStyles += ` sm:w-2/5 sm:h-3/5 left-0 sm:bottom-0 
                            max-sm:w-11/12 max-sm:bottom-0  md:h-3/4 md:w-auto`
                break;
        }
        return { container: twMerge(imageContainerStyles) }
    }
}

export default OverlayTwClassBuilder