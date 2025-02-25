
"use client"
import { useCMS } from "@/hooks/useCMS";

import UILayers from "@/components/layers/UILayers";
import UpButton from "@/components/controls/UpButton";
import Hero from "@/components/hero/Hero"
import PortfolioPage from "@/lib/enums/PortfolioPage";
import { OverlayAnchors } from "@/lib/enums/OverlayDirection";
import ImageItem from "@/lib/interfaces/ImageData";
import Background from '@/.fake/background.json'
import PageContent from "@/lib/interfaces/PageContent";
import movementAnimation from "@/lib/animations/movement";
import { useLoadedContext } from "@/hooks/useLoadedContext";

const defaultImage: ImageItem = {
  src: "/img/bg/image.png",
  "width": 600,
  "height": 480,
  anchor: OverlayAnchors.BOTTOM_RIGHT,
  alt: 'overlay-image'
}
export default function About() {
  const { getObj } = useCMS()
  const content = getObj<PageContent>("about")
  return (
    <div className="h-full w-full">
      <UILayers
        halfLayout
        page={PortfolioPage.ABOUT}
        image={content?.image ?? defaultImage}
        bgSymbols={Background.about}>
        <Content content={content} />
      </UILayers >
    </div >
  );
}

const Content = ({ content }: { content: PageContent }) => {
  const { isLoaded } = useLoadedContext()
  return <div
    style={movementAnimation(isLoaded, PortfolioPage.ABOUT)}
    className="flex max-md:justify-center mb-12 ml-16 mt-4 mr-12">
    <UpButton />
    <Hero
      {...content}
      page={PortfolioPage.ABOUT}
      hideButtons />
  </div>
}
