import { twMerge } from "tw-merge"
import SketchedArrowSymbol from "./SkechedArrow"
import SketchedKeyboard from "./SketchedKeyboard"

export enum SymbolId {
    Arrow = 'arrow',
    Keyboard = 'keyboard'
}

const SymbolStrategy = ({ symbolId, position }: { symbolId: SymbolId, position: object }) => {
    console.log({ position})
    let positionStyles = ''
    for(const [key, value] of Object.entries(position)) {
        console.log(key, value)
        if(value !== undefined)
            positionStyles += `${key}-${value} `
    }
    const twStyles = twMerge(positionStyles + 'absolute')
    console.log({ twStyles})
    let symbolComponent = <symbol>?</symbol>
    switch(symbolId) {
        case SymbolId.Arrow:
            symbolComponent =  <SketchedArrowSymbol />
            break;
        case SymbolId.Keyboard:
            symbolComponent =  <SketchedKeyboard/>
            break;
    }
    return <div className={twStyles}>{symbolComponent}</div>
}

export default SymbolStrategy;