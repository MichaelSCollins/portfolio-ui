import React from 'react';
import { twMerge } from 'tw-merge';
const HeroContainer = ({ children, className }: { children: React.JSX.Element[], className: string }) => {
    const twStyles = twMerge(className + " flex flex-col sm:w-full justify-left");
    return <div className={twStyles}>
        {children}
    </div>
}
export default HeroContainer;