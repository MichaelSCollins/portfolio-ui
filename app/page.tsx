import OverlayLayers from "@/components/Image/OverlayLayers";
import Hero from "@/components/hero/Hero";
import DownButton from "@/components/controls/DownButton";
import SymbolStrategy, { SymbolId } from "@/components/Image/bg/symbols/SymbolStrategy";
import HeroPosition from "@/enums/HeroPosition";
import { OverlayAnchors } from "@/enums/OverlayDirection";

const title = "MIKE COLLINS"
const subtitle = "Lead Developer"
const imageSrc = "/img/page-content/blue-guy-3.png"
const imageWidth = 600

export default function Home() {
  return (
    <div className="my-auto font-[family-name:var(--font-geist-sans)]">
      <OverlayLayers
        anchor={OverlayAnchors.BOTTOM_RIGHT}
        src={imageSrc}
        bgSymbols={[]}
        width={imageWidth}>
        <div className="flex flex-col max-sm: ml-4 justify-center"><div className="flex w-full sm:ml-12">
          <SymbolStrategy symbolId={SymbolId.Arrow} />
          <Hero {...{ title, subtitle }} position={HeroPosition.TITLE} />
        </div></div>

        <DownButton />
      </OverlayLayers>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
