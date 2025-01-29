
import { ReactNode } from "react";

import ImageOverlay from "./OverlayImage";
import { BgSymbol } from "@/interfaces/BgSymbol";
import BackgroundLayer from "./BackgroundLayer";
import PortfolioPage from "@/enums/PortfolioPage";
import ImageData from "@/interfaces/ImageData";

interface OverlayLayersProps {
    children?: ReactNode;
    image: ImageData;
    page?: PortfolioPage;
    bgSymbols?: BgSymbol[]
}

const OverlayLayers = ({ 
    children,
    image,
    bgSymbols,
    page
}: OverlayLayersProps) => {
    return <main className={"flex flex-col h-full w-full"}>
        <div className={`h-full w-full absolute bottom-0 right-0`}>
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