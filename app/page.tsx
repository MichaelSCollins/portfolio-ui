import UILayers from "@/components/Layers/UILayers";
import Hero from "@/components/hero/Hero";
import DownButton from "@/components/controls/DownButton";
import SymbolStrategy, { SymbolId } from "@/components/Layers/bg/symbols/SymbolStrategy";
import PortfolioPage from "@/lib/enums/PortfolioPage";
import ImageData from "@/lib/interfaces/ImageData";
import { useCMS } from "@/hooks/useCMS";

const title = "MIKE COLLINS"
const subtitle = "Lead Developer"

interface AppPage {
  title: string,
  subtitle: string,
  image: ImageData,
}
export default function Home() {
  const { getObj } = useCMS()
  if (!getObj<AppPage>('home'))
    throw Error('Missing home property in content.json file.')
  const { image }: AppPage = getObj<AppPage>('home')
  return (
    <div className="w-full">
      <UILayers
        image={image}
        bgSymbols={[]}>
        <div className="flex flex-col max-sm:pl-4 justify-center">
          <div className="flex mt-8 sm:ml-12 md:w-1/2 justify-center">
            <SymbolStrategy symbolId={SymbolId.Arrow} />
            <Hero {...{ title, subtitle }} page={PortfolioPage.TITLE} />
          </div>
        </div>
        <DownButton />
      </UILayers>
    </div>
  );
}