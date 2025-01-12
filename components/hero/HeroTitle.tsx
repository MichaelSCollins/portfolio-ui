import HeroPosition from '@/enums/HeroPosition';
import React from 'react';
import { twMerge } from 'tw-merge';

interface HeroTitleProps { title: string, subtitle?: string, description?: string, position?: HeroPosition }
const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle, description, position }) => {
    const fontSizes = {
        title: "md:text-hlg max-md:text-hsm",
        subtitle: "md:text-hmd max-md:text-hxs"
    }
    if (position === HeroPosition.CONTACT)
    {
        fontSizes.title = "md:text-hmd max-md:text-hsm";
        fontSizes.subtitle = "md:text-hmd max-md:text-hxs";
    }
    const twTitle = twMerge(fontSizes.title + ' text-foreground')
    const twSubtitle = twMerge(fontSizes.subtitle + ' text-primary')
    return (
        <section
            className={`
                flex flex-col
                left-0 items-start
                max-sm:justify-center
                mb-2
                text-weight-bold
                text-nowrap
            `}
            style={{ lineHeight: "3.25rem" }}>
            <span className={twTitle}>
                <b >{title}</b><br></br>
            </span>
            <span className={twSubtitle}>
                <b >{subtitle}</b>
            </span>
            {description && <p>
                {description}
            </p>}
        </section>
    );
};

export default HeroTitle;