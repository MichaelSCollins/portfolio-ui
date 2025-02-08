import ClassBuilderType from "@/lib/enums/TailwindBuilderType";
import HeroClassBuilder from "@/lib/tailwind-class-builders/HeroClassBuilder";
import OverlayImageClassBuilder from "@/lib/tailwind-class-builders/OverlayImageClassBuilder";
import ClassBuilder from "@/lib/tailwind-class-builders/TailwindBuilder";

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