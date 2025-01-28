import ClassBuilderType from "@/enums/TailwindBuilderType";
import HeroClassBuilder from "@/styles/HeroClassBuilder";
import OverlayImageClassBuilder from "@/styles/OverlayImageClassBuilder";
import ClassBuilder from "@/styles/TailwindBuilder";

// Singleton Class Builder
let classBuilders = new Map<ClassBuilderType, ClassBuilder>()
const useClassBuilder = <T>(builderType: ClassBuilderType): T => {
    let builder = classBuilders.get(builderType)
    if(!builder) {
        switch(builderType) {
            case ClassBuilderType.Hero:
                builder = new HeroClassBuilder()
                break
            case ClassBuilderType.OverlayImage:
                builder = new OverlayImageClassBuilder()
                break
        }
        classBuilders.set(builderType, builder)
    }
    return builder as T
}

export default useClassBuilder