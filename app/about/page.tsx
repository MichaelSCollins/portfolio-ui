import OverlayLayers from "@/components/Layers/OverlayLayers";
import UpButton from "@/components/controls/UpButton";
import Hero from "@/components/hero/Hero"
import PortfolioPage from "@/enums/PortfolioPage";
import { OverlayAnchors } from "@/enums/OverlayDirection";
import Img from '@/public/img/bg/image.png'
import ImageData from "@/interfaces/ImageData";
import Background from '@/.fake/background.json'
import { useCMS } from "@/hooks/useCMS";
import PageContent from "@/interfaces/PageContent";

const defaultImage: ImageData = {
  src: Img.src,
  anchor: OverlayAnchors.BOTTOM_RIGHT,
  alt: 'overlay-image'
}
export default function About() {
  const { getObj } = useCMS()
  const content = getObj<PageContent>("about")
  return (
    <div className="h-full w-screen">
      <OverlayLayers
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
      </OverlayLayers >
    </div >
  );
}
