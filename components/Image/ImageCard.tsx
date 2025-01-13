import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tw-merge';
import { OverlayAnchors } from '@/app/page';

interface ImageCardProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    anchor?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, anchor, width, height }) => {
    const twStyles = twMerge(`
        ${anchor} z-0 
        max-lg:w-6/12 max-sm:w-2/3 ${anchor == OverlayAnchors.BOTTOM_LEFT ? 'hidden sm:block' : ''}`);
    return <Image src={src} alt={alt} className={twStyles} width={width} height={height} />
};

export default ImageCard;