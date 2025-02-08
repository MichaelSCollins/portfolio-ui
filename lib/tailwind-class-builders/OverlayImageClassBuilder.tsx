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
        let imageContainerStyles = 'absolute '
        switch (this.anchor)
        {
            case OverlayAnchors.BOTTOM_RIGHT:
                if (this.page === PortfolioPage.ABOUT)
                    imageContainerStyles += `
                        max-md:w-96 max-md:h-90
                        bottom-0 max-md:right-0 md:-right-12`
                else imageContainerStyles += `
                    max-md:h-64 max-md:w-64
                    bottom-0 right-0`
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