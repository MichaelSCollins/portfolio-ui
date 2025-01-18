import { BgSymbol } from "@/interfaces/BgSymbol";
import SymbolStrategy from "./bg/symbols/SymbolStrategy";

const BackgroundLayer = ({ bgSymbols }: { bgSymbols: BgSymbol[] }) => (
    <div id="bg-symbols" className="w-full h-full absolute top-0">
        {bgSymbols?.map((symbol: BgSymbol, index: number) => (
            <div key={index} className="absolute border z-0 " style={{ ...symbol.position }}>
                <SymbolStrategy {...symbol} />
            </div>
        ))}
    </div>
);
export default BackgroundLayer