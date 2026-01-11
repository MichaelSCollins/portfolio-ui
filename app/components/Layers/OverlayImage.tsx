"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import PortfolioPage from '../../../lib/enums/PortfolioPage';
import ImageData from '../../../lib/interfaces/ImageData';
import useClassBuilder from '../../../hooks/useClassBuilder';
import ClassBuilderType from '../../../lib/enums/TailwindBuilderType';
import OverlayTwClassBuilder from '../../../lib/tailwind-class-builders/OverlayImageClassBuilder';

interface OverlayImageProps {
    image: ImageData;
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
    const [loaded, setLoaded] = useState(false)
    const [classes, setClasses] = useState(classBuilder?.build())
    const fadeInLoadingAnimation = {
        transition: 'opacity',
        transitionDuration: '1s',
        opacity: loaded ? '100' : '0',
    }
    return <div style={fadeInLoadingAnimation}>
        <Image
            className={classes?.container}
            placeholder={'empty'}
            width={image.width}
            height={image.height}
            src={image.src}
            alt={image.alt}
            onLoad={() => {
                setClasses(classBuilder
                    .setLoaded(true)
                    .build()
                )
                setLoaded(true)
            }} />
    </div>
};

export default ImageOverlay;