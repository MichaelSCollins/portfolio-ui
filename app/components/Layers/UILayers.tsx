
import { ReactNode } from "react";

import ImageOverlay from "./OverlayImage";
import { BgSymbol } from "../../../lib/interfaces/BgSymbol";
import BackgroundLayer from "./BackgroundLayer";
import PortfolioPage from "../../../lib/enums/PortfolioPage";
import ImageData from "../../../lib/interfaces/ImageData";

interface OverlayLayersProps {
    children?: ReactNode;
    image?: ImageData;
    page?: PortfolioPage;
    bgSymbols?: BgSymbol[]
}

const UILayers = ({
    children,
    image,
    bgSymbols,
    page
}: OverlayLayersProps) => {
    return <main className={"flex flex-col h-full w-full md:justify-center"}>
        <div className={`h-full w-full bottom-0 right-0`}>
            <BackgroundLayer bgSymbols={bgSymbols || []} />
        </div>
        <div className={`h-full w-full`}>
            {image && <ImageOverlay
                {...{
                    image,
                    page
                }}
            />}
        </div>
        <div className="z-20 h-full w-full flex flex-col justify-center">
            {children}
        </div>
    </main>
}

export default UILayers;