import HeroPosition from '@/enums/HeroPosition';
import React from 'react';
import { twMerge } from 'tw-merge';

interface HeroTitleProps { title: string, subtitle?: string, position?: HeroPosition }
const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle, position }) => {
    const fontSizes = {
        title: "md:text-hlg max-md:text-hsm",
        subtitle: "md:text-hmd max-md:text-hxs"
    }
    if (position === HeroPosition.CONTACT)
    {
        fontSizes.title = "md:text-hmd max-md:text-hsm";
        fontSizes.subtitle = "md:text-hmd max-md:text-hxs";
    }
    else if (position === HeroPosition.ABOUT)
    {
        fontSizes.title = "md:text-hsm max-md:text-hxs";
        fontSizes.subtitle = "md:text-h2xs max-md:text-3xs";
    }
    const twTitle = twMerge(fontSizes.title + ' text-foreground')
    const twSubtitle = twMerge(fontSizes.subtitle + ' text-primary')
    return (
        <section
            className={`
                flex flex-col
                left-0 items-start
                lg:mb-4
                max-lg:mb-1
                text-weight-bold
                text-nowrap
            `}
            style={{
                lineHeight: position === HeroPosition.ABOUT
                    ? "2.5rem"
                    : "3.25rem"
            }}>
            <span className={twTitle}>
                <b >{title}</b>
            </span>
            <span className={twSubtitle}>
                <b >{subtitle}</b>
            </span>
        </section>
    );
};

export default HeroTitle;