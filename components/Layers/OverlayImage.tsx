"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import PortfolioPage from '@/enums/PortfolioPage';
import FadeInImage from '@/interfaces/FadeInImage';
import useClassBuilder from '@/hooks/useClassBuilder';
import ClassBuilderType from '@/enums/TailwindBuilderType';
import OverlayTwClassBuilder from '@/styles/OverlayImageClassBuilder';

interface OverlayImageProps {
    image: FadeInImage;
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
        const [ loaded, setLoaded ] = useState(false)
        const [classes, setClasses] = useState(classBuilder?.build())
        const fadeInLoadingAnimation = {
            transition: 'opacity',
            transitionDuration: '1s',
            opacity: loaded ? '100' : '0',
        }
        return <div className={classes?.container} style={fadeInLoadingAnimation}>
            <Image 
                fill
                placeholder={'empty'}
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