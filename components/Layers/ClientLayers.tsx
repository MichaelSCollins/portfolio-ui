"use client"

import { LoadedProvider } from "@/hooks/useLoadedContext"
import ImageOverlay from "../image/OverlayImage"
import PortfolioPage from "@/lib/enums/PortfolioPage"
import ImageItem from "@/lib/interfaces/ImageData"
import { halfWidth, flexDirection } from "@/lib/tailwind/page-class-strategy"

interface ClientLayersProps {
    halfLayout: boolean;
    children: React.ReactNode;
    page: PortfolioPage;
    image?: ImageItem;
}

const ClientLayers = ({ halfLayout, children, image, page }: ClientLayersProps) => {
    const width = halfWidth[halfLayout ? 1 : 0]
    return <LoadedProvider>
        <div className={"flex " + flexDirection[page]}>
            <div className={`z-20 flex flex-col 
            ${width} justify-center`}>
                {children}
            </div>
            <div className={`h-full w-full`}>
                {image && <ImageOverlay
                    {...{
                        image,
                        page
                    }}
                />}
            </div>
        </div>
    </LoadedProvider>
}

export default ClientLayers