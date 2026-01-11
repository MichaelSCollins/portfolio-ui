import PortfolioPage from "../../../lib/enums/PortfolioPage";
import HeroButtons from "./HeroButtons";
import HeroTitle from "./HeroTitle";
import useClassBuilder from "../../../hooks/useClassBuilder";
import TwBuilderType from "../../../lib/enums/TailwindBuilderType";
import HeroClassBuilder from "../../../lib/tailwind-class-builders/HeroClassBuilder";

const Hero = ({
  title,
  subtitle,
  description,
  page,
  hideButtons
}: {
  title?: string,
  subtitle?: string,
  description?: string,
  page?: PortfolioPage,
  hideButtons?: boolean
}) => {
  const maxLength = 250
  const clippedDesc = description?.substring(0, maxLength)
  const classes = useClassBuilder<HeroClassBuilder>(TwBuilderType.Hero)
    .setPage(page)
    .build()

  return <div className={`${classes.container} flex flex-col gap-4 md:gap-6`}>
    <HeroTitle {...{ title: title ?? "", subtitle, description, page }} />
    {description && <section className="max-sm:w-3/4 w-2/5 cursor-pointer">
      <p className="text-clip md:text-lg text-foreground/80 leading-relaxed">{clippedDesc} <a className="text-primary hover:underline">... [Read More]</a></p>
    </section>}
    {!hideButtons && <HeroButtons />}
  </div>
}
export default Hero;