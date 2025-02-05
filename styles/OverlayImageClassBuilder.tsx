import PortfolioPage from "@/enums/PortfolioPage"
import { OverlayAnchors } from "@/enums/OverlayDirection"
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
        switch (this.anchor)
        {
            case OverlayAnchors.BOTTOM_RIGHT:
                if (this.page === PortfolioPage.ABOUT)
                    imageContainerStyles += `
                        sm:w-3/5 h-3/4 
                        max-sm:h-1/3 max-md:w-3/4 
                        bottom-0 max-sm:right-0 sm:-right-12`
                else imageContainerStyles += `
                    w-1/2 h-2/3
                    max-sm:h-1/3 max-sm:w-2/3 
                    bottom-0 right-0`
                break;
            case OverlayAnchors.BOTTOM_LEFT:
                imageContainerStyles += ` sm:w-2/5 sm:h-3/5 left-0 sm:bottom-0 
                            max-sm:w-11/12 max-sm:bottom-0`
                break;
        }
        console.log({ newStyles: imageContainerStyles, a: this.anchor })
        return { container: twMerge(imageContainerStyles) }
    }
}

export default OverlayTwClassBuilder