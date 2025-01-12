import OverlayLayers from "@/components/Image/OverlayLayers";
import Hero from "@/components/hero/Hero";
import DownButton from "@/components/controls/DownButton";

const title = "MIKE COLLINS"
const subtitle = "Lead Developer"
const imageSrc = "/img/page-content/blue-guy-3.png"
const imageWidth = 600

export enum OverlayAnchors {
  BOTTOM_RIGHT = "overlay-right",
  BOTTOM_LEFT = "overlay-left",
}

export default function Home() {
  return (
    <div className="p-4 min-h-screen font-[family-name:var(--font-geist-sans)]">
        <OverlayLayers 
          anchor={OverlayAnchors.BOTTOM_RIGHT}
          src={imageSrc}
          width={imageWidth}>
          <Hero {...{ title, subtitle }} />
          <DownButton/>
        </OverlayLayers>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
