import { twMerge } from "tw-merge"
import SketchedArrowSymbol from "./SketchedArrow"
import SketchedKeyboard from "./SketchedKeyboard"
import SketchedMailSymbol from "./SketchedMail"

export enum SymbolId {
    Arrow = 'arrow',
    Keyboard = 'keyboard',
    Mail = "Mail"
}

const SymbolStrategy = ({ symbolId, position }: { symbolId: SymbolId, position?: object }) => {
    let positionStyles = ''
    if (!position)
    {
        positionStyles += 'flex flex-col justify-end'
    } else
    {
        for (const [key, value] of Object.entries(position))
        {
            if (value !== undefined)
                positionStyles += `${key}-${value} `
        }
        positionStyles += ' absolute'
    }
    const twStyles = twMerge(positionStyles)
    let symbolComponent = <symbol>?</symbol>
    switch (symbolId)
    {
        case SymbolId.Arrow:
            symbolComponent = <SketchedArrowSymbol />
            break;
        case SymbolId.Keyboard:
            symbolComponent = <SketchedKeyboard />
            break;
        case SymbolId.Mail:
            symbolComponent = <SketchedMailSymbol />
            break;
    }
    return <div className={twStyles}>{symbolComponent}</div>
}

export default SymbolStrategy;