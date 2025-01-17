import HeroPosition from "@/enums/HeroPosition";
import HeroButtons from "./HeroButtons";
import HeroContainer from "./HeroContainer";
import HeroTitle from "./HeroTitle";
// import Link from "next/link";

const Hero = ({
  title,
  subtitle,
  description,
  position,
  hideButtons
}: {
  title: string,
  subtitle?: string,
  description?: string,
  position?: HeroPosition,
  hideButtons?: boolean
}) => {
  const maxLength = 250
  const clippedDesc = description?.substring(0, maxLength)
  return <HeroContainer
    className={`${position === HeroPosition.CONTACT
      ? " max-sm:flex max-sm:flex-col "
      : position === HeroPosition.ABOUT
        ? " top-0" : ""
      }`}>
    <HeroTitle {...{ title, subtitle, description, position }} />
    {!hideButtons ? <HeroButtons /> : <></>}
    {description ? <div className="max-sm:w-3/4 w-2/5 cursor-pointer">
      <p className="text-clip text-xs">{clippedDesc} <a>... [Read More]</a></p>
    </div> : <></>}
  </HeroContainer>
}
export default Hero;