import PortfolioPage from '../../../lib/enums/PortfolioPage';
import TwBuilderType from '../../../lib/enums/TailwindBuilderType';
import useClassBuilder from '../../../hooks/useClassBuilder';
import HeroClassBuilder from '../../../lib/tailwind-class-builders/HeroClassBuilder';
import React from 'react';

interface HeroTitleProps { title: string, subtitle?: string, page?: PortfolioPage }
const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle, page }) => {
    const classes = useClassBuilder<HeroClassBuilder>(TwBuilderType.Hero)
        .setPage(page)
        .build()
    return (<div className={`
                w-full
                flex flex-col
                left-0 items-start
                lg:mb-4
                max-lg:mb-1
                text-weight-bold
                space-y-2 md:space-y-3`}
        style={{
            // lineHeight:
            //     classes.lineHeight
        }}>
        <section className={`${classes.title} font-bold tracking-tight leading-tight`}>
            {title}
        </section>
        {subtitle && (
            <section className={`${classes.subtitle} font-semibold tracking-wide`}>
                {subtitle}
            </section>
        )}
    </div>
    );
};

export default HeroTitle;