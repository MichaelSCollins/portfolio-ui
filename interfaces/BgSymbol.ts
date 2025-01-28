import { SymbolId } from "@/components/Layers/bg/symbols/SymbolStrategy";

export interface BgSymbol {
    symbolId: SymbolId | string;
    position: {
        top?: number | string, 
        left?: number | string, 
        bottom?: number | string, 
        right?: number | string
    }
}
