import { BgSymbol } from "@/lib/interfaces/BgSymbol";
import SymbolStrategy from "./bg/symbols/SymbolStrategy";

const BackgroundLayer = ({ bgSymbols }: { bgSymbols: BgSymbol[] }) => (
    <div className={`h-full w-full bottom-0 right-0 absolute`}>
        <div id="bg-symbols" className="w-full w-max-screen h-full absolute top-0 max-sm:hidden">
            {bgSymbols?.map((symbol: BgSymbol, index: number) =>
                <BackgroundSymbol key={index} index={index} symbol={symbol} />
            )}
        </div>
    </div>
);

interface BgSymbolProps { index: number; symbol: BgSymbol }
const BackgroundSymbol = ({
    index,
    symbol }: BgSymbolProps) => {
    return <div key={index} className="absolute "
        style={
            { ...symbol.position }
        }>
        <SymbolStrategy {...symbol} />
    </div>
}

export default BackgroundLayer