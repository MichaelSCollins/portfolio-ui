import { OverlayAnchors } from "@/enums/OverlayDirection";

interface FadeInImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    anchor?: OverlayAnchors;
}

export default FadeInImage