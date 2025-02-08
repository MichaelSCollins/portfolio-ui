import PortfolioPage from "@/lib/enums/PortfolioPage";
import TailwindClassBuilder from "./TailwindBuilder";
import { twMerge } from "tw-merge";

class HeroTitleClassBuilder extends TailwindClassBuilder {
  override build(): { title: string, subtitle: string, lineHeight: string } {
    const fontSizes = {
      title: "md:text-hlg max-md:text-hsm",
      subtitle: "md:text-hmd max-md:text-hxs"
    }
    switch (this.page)
    {
      case PortfolioPage.CONTACT:
        fontSizes.title = "md:text-hmd max-md:text-hsm";
        fontSizes.subtitle = "md:text-hmd max-md:text-hxs";
        break;
      case PortfolioPage.ABOUT:
        fontSizes.title = "md:text-hsm max-md:text-hxs";
        fontSizes.subtitle = "md:text-h2xs max-md:text-3xs";
        break;

    }
    const title = twMerge(fontSizes.title + ' text-foreground')
    const subtitle = twMerge(fontSizes.subtitle + ' text-primary')
    return {
      title,
      subtitle,
      lineHeight: this.page === PortfolioPage.ABOUT
        ? "2.5rem"
        : "3.25rem"

    }
  }
}

export default HeroTitleClassBuilder