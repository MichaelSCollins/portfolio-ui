import PortfolioPage from "@/lib/enums/PortfolioPage";
import ImageItem from "@/lib/interfaces/ImageData";
import { flexDirection } from "@/lib/tailwind/page-class-strategy";
import { ReactNode } from "react";
import ImageOverlay from "../image/OverlayImage";

const ImageOverlayLayer = ({ image, page, halfLayout, children }:
    {
        image: ImageItem, page: PortfolioPage,
        halfLayout: boolean, children: ReactNode
    }
) => <div className={"flex " + flexDirection[page]}>
        <div className={`z-20 flex flex-col 
${halfLayout ? 1 : 0} justify-center`}>
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

export default ImageOverlayLayer