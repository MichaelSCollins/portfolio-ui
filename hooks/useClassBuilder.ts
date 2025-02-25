import ClassBuilderType from "@/lib/enums/TailwindBuilderType";
import HeroClassBuilder from "@/lib/tailwind/HeroClassBuilder";
import OverlayImageClassBuilder from "@/lib/tailwind/OverlayImageClassBuilder";
import ClassBuilder from "@/lib/tailwind/TailwindBuilder";

// Singleton Class Builder
const classBuilders = new Map<ClassBuilderType, ClassBuilder>()
const useClassBuilder = <T>(builderType: ClassBuilderType): T => {
    let builder = classBuilders.get(builderType)
    if (!builder)
    {
        switch (builderType)
        {
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