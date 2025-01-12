import React from 'react';
import { twMerge } from 'tw-merge';
const HeroContainer = ({ children, className }: { children: React.JSX.Element[], className: string }) => {
    const twStyles = twMerge(className + " max-sm:z-10 flex flex-col w-full z-10  justify-left ml-16");
    console.log({ twStyles })
    return <div className={twStyles}>
        {children}
    </div>
}
export default HeroContainer;