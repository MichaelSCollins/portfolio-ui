import { useCMS } from "../../hooks/useCMS";

import UILayers from "@/components/Layers/UILayers";
import UpButton from "../../lib/components/UpButton";
import Hero from "@/components/hero/Hero"
import PortfolioPage from "../../lib/enums/PortfolioPage";
import { OverlayAnchors } from "../../lib/enums/OverlayDirection";
import Img from '@/../public/img/bg/image.png'
import ImageData from "../../lib/interfaces/ImageData";
import Background from '../..//.fake/background.json'
import PageContent from "../../lib/interfaces/PageContent";

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
        <div className="flex justify-between w-min mt-24 md:ml-12">
          <section className="flex mt-8 sm:ml-12 justify-cente mr-12">
            <UpButton />
          </section>
          <Hero
            {...content}
            page={PortfolioPage.ABOUT}
            hideButtons />
        </div>
      </UILayers >
    </div >
  );
}
