import PortfolioPage from "@/lib/enums/PortfolioPage";
import TailwindClassBuilder from "./TailwindBuilder";
import { twMerge } from "tw-merge";

class HeroClassBuilder extends TailwindClassBuilder {
  override build() {
    const classes = {
      title: "md:text-hlg max-md:text-hsm",
      subtitle: "md:text-hmd max-md:text-hxs",
      container: ""
    }
    switch (this.page)
    {
      case PortfolioPage.TITLE:
        classes.title = "md:text-hmd max-md:text-hsm";
        classes.subtitle = "md:text-hmd max-md:text-hxs pb-2";
        classes.container = "justify-center"
        break;
      case PortfolioPage.CONTACT:
        classes.title = "md:text-hmd max-md:text-hsm";
        classes.subtitle = "md:text-hmd max-md:text-hxs";
        classes.container = "max-sm:flex max-sm:flex-col w-full max-sm:pl-2"
        break;
      case PortfolioPage.ABOUT:
        classes.title = "md:text-hsm max-md:text-hxs";
        classes.subtitle = "md:text-h2xs max-md:text-h3xs";
        classes.container = "max-sm:absolute max-sm:top-24 max-sm:mx-12"
        break;

    }
    const title = twMerge(classes.title + ' text-foreground')
    const subtitle = twMerge(classes.subtitle + ' text-primary')
    const container = classes.container
    return {
      title,
      subtitle,
      container,
      lineHeight: this.page === PortfolioPage.ABOUT
        ? "2.5rem"
        : "3.25rem"
    }
  }
}

export default HeroClassBuilder