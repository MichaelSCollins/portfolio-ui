import ClassBuilderType from "@/enums/TailwindBuilderType";
import HeroTailwindBuilder from "@/styles/HeroTwBuilder";
import OverlayTwClassBuilder from "@/styles/OverlayTwBuilder";
import ClassBuilder from "@/styles/TailwindBuilder";


let classBuilders = new Map<
ClassBuilderType, ClassBuilder>()
const useClassBuilder = (builderType: ClassBuilderType) => {
    let builder = classBuilders.get(builderType)
    if(!builder) {
        switch(builderType) {
            case ClassBuilderType.Hero:
                builder = new HeroTailwindBuilder()
                break
            case ClassBuilderType.Overlay:
                builder = new OverlayTwClassBuilder()
                break
        }
        classBuilders.set(builderType, builder)
    }
    return builder
}

export default useClassBuilder