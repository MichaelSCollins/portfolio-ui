"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import PortfolioPage from '@/enums/PortfolioPage';
import FadeInImage from '@/interfaces/FadeInImage';
import useClassBuilder from '@/hooks/useClassBuilder';
import ClassBuilderType from '@/enums/TailwindBuilderType';
import OverlayTwClassBuilder from '@/styles/OverlayImageClassBuilder';

let classes;
interface FadeImageProps {
    image: FadeInImage;
    className?: string;
}
const FadeImage = ({ 
        image, 
        className
    }: FadeImageProps) => {
        const [ loaded, setLoaded ] = useState(false)
        const fadeInLoadingAnimation = {
            transition: 'opacity',
            transitionDuration: '.5s',
            opacity: loaded ? '100' : '0',
        }
        return <div className={className} style={fadeInLoadingAnimation}>
            <Image 
                fill
                placeholder={'empty'}
                src={image.src}
                alt={image.alt}
                onLoad={(e) => {
                    setLoaded(true)
                }} />
        </div>
};

export default FadeImage;