import UILayers from "@/components/layers/UILayers";
import DownButton from "@/components/controls/DownButton";
import PortfolioPage from "@/lib/enums/PortfolioPage";
import ImageItem from "@/lib/interfaces/ImageData";
import { useCMS } from "@/hooks/useCMS";
import IconHero from "@/components/hero/IconHero";

const title = "MIKE COLLINS"
const subtitle = "Lead Developer"

interface AppPage {
  title: string,
  subtitle: string,
  image: ImageItem,
}
export default async function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getObj } = useCMS()
  if (!getObj<AppPage>('home'))
    throw Error('Missing home property in content.json file.')
  const { image }: AppPage = getObj<AppPage>('home')
  return (
    <div className="w-full h-full">
      <UILayers
        halfLayout
        image={image}
        page={PortfolioPage.TITLE}>
        <IconHero {...{ title, subtitle }} />
        <DownButton />
      </UILayers>
    </div>
  );
}

