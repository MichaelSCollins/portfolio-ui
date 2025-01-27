import PortfolioPage from "@/enums/PortfolioPage"
import { OverlayAnchors } from "@/enums/OverlayDirection"
import { twMerge } from "tw-merge"
import TailwindClassBuilder from "./TailwindBuilder"

class OverlayTwClassBuilder extends TailwindClassBuilder {
    anchor: string | undefined
    constructor(anchor?: OverlayAnchors) {
        super()
        this.twStyles = `${this.anchor}`
        if(anchor)
            this.anchor = anchor.valueOf()
    }
    override build() {
        let newStyles = 'absolute '
        switch (this.anchor)
        {
            case OverlayAnchors.BOTTOM_RIGHT:
                if(this.page === PortfolioPage.ABOUT)
                    newStyles += ` w-3/5 h-3/4 max-sm:h-1/3 max-sm:w-full bottom-0 right-0`
                else newStyles += ` w-3/5 h-3/4 max-sm:h-1/3 max-sm:w-2/3 z-50 bottom-0 right-0` 
                break;
            case OverlayAnchors.BOTTOM_LEFT:
                newStyles += ` sm:w-1/3 sm:left-0 sm:bottom-0 
                              max-sm:left-5 max-sm:w-11/12 max-sm:bottom-0`
                break;
        }
        console.log(newStyles)
        return { container: twMerge(newStyles) }
    }
}

export default OverlayTwClassBuilder