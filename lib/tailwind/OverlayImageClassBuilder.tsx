import PortfolioPage from "@/lib/enums/PortfolioPage"
import { OverlayAnchors } from "@/lib/enums/OverlayDirection"
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
        let imageContainerStyles = ' '
        switch (this.anchor)
        {
            case OverlayAnchors.BOTTOM_RIGHT:
                if (this.page === PortfolioPage.ABOUT)
                    imageContainerStyles += ` 
                        max-md:w-96 max-md:h-90
                         max-md:right-0 -right-12`
                else imageContainerStyles += `
                    max-md:h-2/3 h-1/2 w-1/2 max-md:w-2/3 md:pt-12 ml-auto mt-auto right-0`
                break;
            case OverlayAnchors.BOTTOM_LEFT:
                imageContainerStyles += ` sm:w-2/5 sm:h-3/5 left-0 sm:bottom-0 
                            max-sm:w-11/12 max-sm:bottom-0`
                break;
        }
        return { container: twMerge(imageContainerStyles) }
    }
}

export default OverlayTwClassBuilder