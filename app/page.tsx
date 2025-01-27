import OverlayLayers from "@/components/Layers/OverlayLayers";
import Hero from "@/components/hero/Hero";
import DownButton from "@/components/controls/DownButton";
import SymbolStrategy, { SymbolId } from "@/components/Layers/bg/symbols/SymbolStrategy";
import PortfolioPage from "@/enums/PortfolioPage";
import { OverlayAnchors } from "@/enums/OverlayDirection";
import FadeInImage from "@/interfaces/FadeInImage";

const title = "MIKE COLLINS"
const subtitle = "Lead Developer"
const imageSrc = "/img/page-content/blue-guy-3.png"
const imageWidth = 750
const imageHeight = 600

export default function Home() {
  const image: FadeInImage = {
    src: imageSrc,
    anchor: OverlayAnchors.BOTTOM_RIGHT,
    width: imageWidth,
    height: imageHeight,
    alt: 'overlay-image'
  }
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <OverlayLayers
        image={image}
        bgSymbols={[]}>
        <div className="flex flex-col w-full max-sm:ml-4 justify-center">
          <div className="flex w-full sm:ml-12">
            <SymbolStrategy symbolId={SymbolId.Arrow} />
            <Hero {...{ title, subtitle }} page={PortfolioPage.TITLE} />
          </div>
        </div>
        <DownButton />
      </OverlayLayers>
    </div>
  );
}