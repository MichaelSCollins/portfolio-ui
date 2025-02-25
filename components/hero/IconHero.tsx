"use client"

import movementAnimation from "@/lib/animations/movement"
import PortfolioPage from "@/lib/enums/PortfolioPage"
import { useLoadedContext } from "@/hooks/useLoadedContext"
import SymbolStrategy, { SymbolId } from "../layers/bg/symbols/SymbolStrategy"
import Hero from "./Hero"

const IconHero = ({ title, subtitle }: { title: string, subtitle: string }) => {
    const { isLoaded } = useLoadedContext()
    return <div className={`
      flex justify-center max-md:flex-col 
      relative mt-auto max-md:w-full  w-full
      z-50 h-full`}>
        <div style={movementAnimation(isLoaded, PortfolioPage.HOME)}
            className="top-8 md:absolute max-md:ml-auto my-12 flex justify-center">
            <SymbolStrategy symbolId={SymbolId.Arrow} />
            <Hero {...{ title, subtitle }} page={PortfolioPage.TITLE} />
        </div>
    </div>
}

export default IconHero