import PortfolioPage from "@/enums/PortfolioPage";
import HeroButtons from "./HeroButtons";
import HeroTitle from "./HeroTitle";
import useClassBuilder from "@/hooks/useClassBuilder";
import TwBuilderType from "@/enums/TailwindBuilderType";
import HeroClassBuilder from "@/styles/HeroClassBuilder";
// import Link from "next/link";
const Hero = ({
  title,
  subtitle,
  description,
  page,
  hideButtons
}: {
  title: string,
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
  
  return <div className={classes.container}>
    <HeroTitle {...{ title, subtitle, description, page }} />
    {description && <section className="max-sm:w-3/4 w-2/5 cursor-pointer">
      <p className="text-clip text-xs">{clippedDesc} <a>... [Read More]</a></p>
    </section>}
    {!hideButtons && <HeroButtons />}
  </div>
}
export default Hero;