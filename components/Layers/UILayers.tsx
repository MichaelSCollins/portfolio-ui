import { ReactElement, ReactNode } from "react";

import { BgSymbol } from "@/lib/interfaces/BgSymbol";
import PortfolioPage from "@/lib/enums/PortfolioPage";
import ImageItem from "@/lib/interfaces/ImageData";
import BackgroundLayer from "./BackgroundLayer";

import ClientLayers from "./ClientLayers";
import ServerLayers from "./ServerLayers";

interface UILayersProps {
    children?: ReactNode;
    serverContent?: ReactElement;
    image?: ImageItem;
    page?: PortfolioPage;
    halfLayout?: boolean;
    bgSymbols?: BgSymbol[]
}
const UILayers = ({
    children,
    image = undefined,
    serverContent = undefined,
    page = PortfolioPage.UNKNOWN,
    bgSymbols = [],
    halfLayout = false
}: UILayersProps) => {
    return <div className={Styles.container}>
        <BackgroundLayer bgSymbols={bgSymbols || []} />
        {children && <ClientLayers {...{
            halfLayout,
            page,
            image,
        }}>
            {children}
        </ClientLayers>}
        {serverContent && <ServerLayers
            halfLayout={halfLayout}
            page={page}
            image={image}>
            {serverContent}
        </ServerLayers>}
    </div>
}

class Styles {
    static container = `relative
        flex flex-col 
        h-full w-full 
        md:justify-center`
}

export default UILayers;