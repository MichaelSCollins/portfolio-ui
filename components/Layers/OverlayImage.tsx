"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import OverlayTwClassBuilder from '../../styles/OverlayTwBuilder';
import PortfolioPage from '@/enums/PortfolioPage';
import FadeInImage from '@/interfaces/FadeInImage';
import useClassBuilder from '@/hooks/useClassBuilder';
import TwBuilderType from '@/enums/TailwindBuilderType';

interface OverlayImageProps {
    image: FadeInImage;
    page?: PortfolioPage;
}
const ImageOverlay = ({ 
        image, 
        page 
    }: OverlayImageProps) => {
    const [ loaded, setLoaded ] = useState(false)
    const classBuilder = useClassBuilder(TwBuilderType.Overlay)
        .setPage(page)
    const fadeInLoadingAnimation = {
        transition: 'opacity',
        transitionDuration: '.5s',
        opacity: loaded ? '100' : '0',
    }
    const classes = classBuilder?.build()
    console.log(classes?.container)
    return <div className={classes?.container} style={fadeInLoadingAnimation}>
        <Image 
            placeholder={'empty'}
            src={image.src}
            fill
            alt={image.alt}
            onLoad={(e) => {
                classBuilder?.setLoaded(true)
                setLoaded(true)
            }} /></div>
};

export default ImageOverlay;