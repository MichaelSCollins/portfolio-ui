import { OverlayAnchors } from "../enums/OverlayDirection";

interface ImageData {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    anchor?: OverlayAnchors;
}

export default ImageData