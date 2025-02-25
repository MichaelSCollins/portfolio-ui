"use client"

import Image from "next/image"
import ImageItem from "@/lib/interfaces/ImageData"
import { useState } from "react"
import fadeInAnimation from "@/lib/animations/fadeInAnimation"

const ImageView = ({ image, fill = false }: { image: ImageItem, fill?: boolean }) => {
    const [loaded, setLoaded] = useState(false)
    return <Image
        height={image.height}
        width={image.width}
        src={image.src}
        alt={image.alt}
        fill={fill}
        className="w-full"
        style={fadeInAnimation(loaded)}
        onLoad={() => setLoaded(true)} />
}

export default ImageView