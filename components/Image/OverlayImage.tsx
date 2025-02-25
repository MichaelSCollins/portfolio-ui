"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import PortfolioPage from '@/lib/enums/PortfolioPage';
import ImageItem from '@/lib/interfaces/ImageData';
import useClassBuilder from '@/hooks/useClassBuilder';
import ClassBuilderType from '@/lib/enums/TailwindBuilderType';
import OverlayTwClassBuilder from '@/lib/tailwind/OverlayImageClassBuilder';
import movementAnimation from '@/lib/animations/movement';
import { useLoadedContext } from '@/hooks/useLoadedContext';

interface OverlayImageProps {
    image: ImageItem;
    page?: PortfolioPage;
}
const ImageOverlay = ({
    image,
    page
}: OverlayImageProps) => {
    const classBuilder = useClassBuilder<OverlayTwClassBuilder>(
        ClassBuilderType.OverlayImage
    ).setAnchor(image.anchor)
        .setPage(page)
    const { isLoaded, setIsLoaded } = useLoadedContext()
    const [classes, setClasses] = useState(classBuilder?.build())

    return <div
        className='h-full flex justify-center'
        style={movementAnimation(isLoaded, page!)}>
        <Image
            className={classes?.container}
            width={image.width}
            height={image.height}
            src={image.src}
            alt={image.alt}
            priority
            onLoad={() => {
                setClasses(classBuilder
                    .setLoaded(true)
                    .build()
                )
                setIsLoaded(true)
            }} />
    </div>
};

export default ImageOverlay;