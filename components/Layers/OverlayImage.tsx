"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { twMerge } from 'tw-merge';
import { OverlayAnchors } from '@/enums/OverlayDirection';

interface ImageCardProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    anchor?: OverlayAnchors;
}

const ImageOverlay: React.FC<ImageCardProps> = ({ src, alt, anchor, width, height }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const twStyles = twMerge(`
        ${anchor?.valueOf()} 
        ${imageLoaded ? '' : ''}
        ${anchor == OverlayAnchors.BOTTOM_RIGHT
            ? ' max-sm:w-8/12 sm:w-1/2 absolute bottom-0 right-0'
            : ''}
        ${anchor == OverlayAnchors.BIG_BOTTOM_RIGHT
            ? 'sm:w-6/12 absolute right-0 bottom-0'
            : ''}
         ${anchor == OverlayAnchors.BOTTOM_LEFT
            ? ' sm:w-6/12 max-sm:w-11/12 absolute max-sm:left-5 sm:left-4 sm:top-32 max-sm:bottom-0'
            : ''
        } `);
    return <Image src={src}
        onLoad={() => setImageLoaded(true)}
        alt={alt}
        className={twStyles}
        width={width} height={height} />
};

export default ImageOverlay;