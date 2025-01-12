import { ReactNode } from "react";

import ImageCard from "./ImageCard";
import SymbolStrategy, { SymbolId } from "./bg/symbols/SymbolStrategy";
import { BgSymbol } from "@/interfaces/BgSymbol";

const defaults = {
    width: 600,
    height: 300,
    src: "img/page-content/blue-guy-3.png",
    anchor: "right",
    alt: "Overlay-Image",
    bgSymbols: [
        {
            symbolId: SymbolId.Arrow, position: {
                top: '25%',
                left: '2%'
            }
        },
        // { symbolId: SymbolId.Keyboard, position: { top: '12%', right: '0%' } }
    ]
};

interface OverlayLayersProps {
    children?: ReactNode;
    src?: string;
    anchor?: string;
    width?: number;
    height?: number;
    alt?: string;
    bgSymbols?: BgSymbol[]
}

const BackgroundSymbolsLayer = ({ bgSymbols }: { bgSymbols: BgSymbol[] }) => (
    <div id="bg-symbols" className="w-full absolute top-0 h-screen">
        {bgSymbols?.map((symbol: BgSymbol, index: number) => (
            <div key={index} style={{ position: 'absolute', ...symbol.position }}>
                <SymbolStrategy {...symbol} />
            </div>
        ))}
    </div>
);

const OverlayLayers = ({ children,
    src = defaults.src,
    anchor = defaults.anchor,
    width = defaults.width,
    height = defaults.height,
    bgSymbols = defaults.bgSymbols
}: OverlayLayersProps) => <main >
        <BackgroundSymbolsLayer bgSymbols={bgSymbols} />
        {children}
        <ImageCard
            {...{
                ...defaults,
                src: src || defaults.src,
                anchor: anchor || defaults.anchor,
                width: width || defaults.width,
                height: height || defaults.height,
            }}
        />
    </main>

export default OverlayLayers;