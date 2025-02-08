import { useCMS } from "@/hooks/useCMS";

import UILayers from "@/components/Layers/UILayers";
import UpButton from "@/components/controls/UpButton";
import Hero from "@/components/hero/Hero"
import PortfolioPage from "@/lib/enums/PortfolioPage";
import { OverlayAnchors } from "@/lib/enums/OverlayDirection";
import Img from '@/public/img/bg/image.png'
import ImageData from "@/lib/interfaces/ImageData";
import Background from '@/.fake/background.json'
import PageContent from "@/lib/interfaces/PageContent";

const defaultImage: ImageData = {
  src: Img.src,
  "width": 600,
  "height": 480,
  anchor: OverlayAnchors.BOTTOM_RIGHT,
  alt: 'overlay-image'
}
export default function About() {
  const { getObj } = useCMS()
  const content = getObj<PageContent>("about")
  return (
    <div className="h-full w-screen">
      <UILayers
        page={PortfolioPage.ABOUT}
        image={content?.image ?? defaultImage}
        bgSymbols={Background.about}>
        <div className="flex max-sm:justify-between w-3/4 max-sm:w-1/2">
          <UpButton />
          <Hero
            {...content}
            page={PortfolioPage.ABOUT}
            hideButtons />
        </div>
      </UILayers >
    </div >
  );
}
