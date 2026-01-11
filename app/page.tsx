import UILayers from "@/components/Layers/UILayers";
import Hero from "@/components/hero/Hero";
import DownButton from "../lib/components/DownButton";
import SymbolStrategy, { SymbolId } from "@/components/Layers/bg/symbols/SymbolStrategy";
import PortfolioPage from "../lib/enums/PortfolioPage";
import ImageData from "../lib/interfaces/ImageData";
import { useCMS } from "../hooks/useCMS";
import ExperienceCarousel from "@/components/ExperienceCarousel";

const title = "Mike Collins"
const subtitle = "Sr. Developer"

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
    <div className="w-full min-h-screen flex flex-col">
      <UILayers
        image={image}
        bgSymbols={[]}>
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-start justify-start w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
            <section className="flex items-center gap-4 mb-6 md:mb-0 md:mr-8">
              {/* <DownButton /> */}
            </section>
            <div className="flex flex-col w-full md:w-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <SymbolStrategy symbolId={SymbolId.Arrow} />
                </div>
                <div className="flex-1">
                  <Hero {...{ title, subtitle }} page={PortfolioPage.TITLE} />
                </div>
              </div>
              {/* Experience Carousel Section */}
              <div className="w-full mt-12 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-12 pb-12">
                <ExperienceCarousel itemsToShow={3} />
              </div>
            </div>

          </div>
        </div>
      </UILayers>
    </div>
  )
}
