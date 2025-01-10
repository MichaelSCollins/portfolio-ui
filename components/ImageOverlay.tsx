import React from 'react';
import Image from 'next/image';
import styles from './ImageCard.module.css';

interface ImageCardProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, width, height }) => {
    return (
        <div className="overlay max-lg:w-7/12">
            <Image src={src} alt={alt} width={600} height={0}/>
        </div>
    );
};

export default ImageCard;