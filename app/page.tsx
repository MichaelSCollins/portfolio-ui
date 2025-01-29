import OverlayLayers from "@/components/Layers/OverlayLayers";
import Hero from "@/components/hero/Hero";
import DownButton from "@/components/controls/DownButton";
import SymbolStrategy, { SymbolId } from "@/components/Layers/bg/symbols/SymbolStrategy";
import PortfolioPage from "@/enums/PortfolioPage";
import { OverlayAnchors } from "@/enums/OverlayDirection";
import ImageData from "@/interfaces/ImageData";
import { useCMS } from "@/hooks/useCMS";

const title = "MIKE COLLINS"
const subtitle = "Lead Developer"
const imageSrc = "/img/page-content/blue-guy-3.png"
const imageWidth = 750
const imageHeight = 600
interface AppPage {
  title: string,
  subtitle: string,
  image: ImageData,
}
export default function Home() {
  const { getObj } = useCMS()
  const { image }: AppPage | null = getObj<AppPage>('home')


  return (
    <div className="w-full">
      <OverlayLayers
        image={image}
        bgSymbols={[]}>
        <div className="flex flex-col w-full max-sm:pl-4 justify-center">
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