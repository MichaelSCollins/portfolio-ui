import UILayers from "@/components/Layers/UILayers";
import Hero from "@/components/hero/Hero";
import DownButton from "@/components/controls/DownButton";
import SymbolStrategy, { SymbolId } from "@/components/Layers/bg/symbols/SymbolStrategy";
import PortfolioPage from "@/enums/PortfolioPage";
import ImageData from "@/interfaces/ImageData";
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
        <div className="flex flex-col w-full max-sm:pl-4 justify-center">
          <div className="flex w-full sm:ml-12">
            <SymbolStrategy symbolId={SymbolId.Arrow} />
            <Hero {...{ title, subtitle }} page={PortfolioPage.TITLE} />
          </div>
        </div>
        <DownButton />
      </UILayers>
    </div>
  );
}