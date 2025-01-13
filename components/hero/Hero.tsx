import HeroPosition from "@/enums/HeroPosition";
import HeroButtons from "./HeroButtons";
import HeroContainer from "./HeroContainer";
import HeroTitle from "./HeroTitle";

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
  return <HeroContainer
    className={`${position === HeroPosition.CONTACT
      ? "left-0 absolute top-32"
      : ""
      }`}>
    <HeroTitle {...{ title, subtitle, description, position }} />
    {!hideButtons ? <HeroButtons /> : <></>}
    {description ? <p className="max-sm:w-3/4 w-1/3">{description}</p> : <></>}
  </HeroContainer>
}
export default Hero;