import { OverlayAnchors } from "@/lib/enums/OverlayDirection";

interface ImageItem {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    anchor?: OverlayAnchors;
}

export default ImageItem