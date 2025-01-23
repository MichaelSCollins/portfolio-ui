import { ReactNode } from "react";

import ImageOverlay from "./OverlayImage";
import { SymbolId } from "./bg/symbols/SymbolStrategy";
import { BgSymbol } from "@/interfaces/BgSymbol";
import { OverlayAnchors } from "@/enums/OverlayDirection";
import { twMerge } from "tw-merge";
import BackgroundLayer from "./BackgroundLayer";

const defaults = {
    width: 600,
    height: 300,
    src: "img/page-content/blue-guy-3.png",
    alt: "Overlay-Image",
    anchor: OverlayAnchors.BOTTOM_RIGHT,
    bgSymbols: [
        {
            symbolId: SymbolId.Arrow, position: {
                top: '18%',
                left: '2%',
            }
        },
        // { symbolId: SymbolId.Keyboard, position: { top: '12%', right: '0%' } }
    ]
};

interface OverlayLayersProps {
    children?: ReactNode;
    src?: string;
    anchor?: OverlayAnchors;
    width?: number;
    height?: number;
    alt?: string;
    bgSymbols?: BgSymbol[]
}



const OverlayLayers = ({ children,
    src = defaults.src,
    anchor = defaults.anchor,
    width = defaults.width,
    height = defaults.height,
    bgSymbols = defaults.bgSymbols
}: OverlayLayersProps) => {
    const twStyles = twMerge("h-full h-min-screen flex flex-col " 
        + anchor === OverlayAnchors.BOTTOM_LEFT 
            ? ' justify-between pb-72' : '')
    return <main className={twStyles}>
        <BackgroundLayer bgSymbols={bgSymbols} />
        {children}
        <ImageOverlay
            {...{
                ...defaults,
                src: src || defaults.src,
                anchor: anchor || defaults.anchor,
                width: width || defaults.width,
                height: height || defaults.height,
            }}
        />
    </main>
}

export default OverlayLayers;