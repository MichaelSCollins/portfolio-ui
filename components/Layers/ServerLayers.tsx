import PortfolioPage from "@/lib/enums/PortfolioPage"
import ImageItem from "@/lib/interfaces/ImageData"
import ImageOverlayLayer from "./ImageOverlayLayer";
import { JSX, ReactNode } from "react";

interface ServerLayersProps {
    page: PortfolioPage;
    children: ReactNode;
    halfLayout: boolean;
    image?: ImageItem;
}

const ServerLayers = ({
    image,
    page,
    halfLayout,
    children
}: ServerLayersProps) => {
    return image ? (<ImageOverlayLayer {...{
        halfLayout,
        page,
        image
    }}>
        {children}
    </ImageOverlayLayer>)
        : children as JSX.Element
}

export default ServerLayers