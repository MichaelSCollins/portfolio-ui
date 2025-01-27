
import { ReactNode } from "react";

import ImageOverlay from "./OverlayImage";
import { BgSymbol } from "@/interfaces/BgSymbol";
import BackgroundLayer from "./BackgroundLayer";
import PortfolioPage from "@/enums/PortfolioPage";
import FadeInImage from "@/interfaces/FadeInImage";

interface OverlayLayersProps {
    children?: ReactNode;
    image: FadeInImage;
    page?: PortfolioPage;
    bgSymbols?: BgSymbol[]
}

const OverlayLayers = ({ 
    children,
    image,
    bgSymbols,
    page
}: OverlayLayersProps) => {
    return <main className={"flex flex-col h-full"}>
        <div className={`h-full w-full border absolute bottom-0 right-0`}>
            <BackgroundLayer bgSymbols={bgSymbols || []} />
            <ImageOverlay
                {...{
                    image,
                    page
                }}
            />
        </div>
        {children}
    </main>
}

export default OverlayLayers;