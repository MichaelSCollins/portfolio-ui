import React from 'react';
import { useCMS } from '../hooks/useCMS'; // Adjust the import path as necessary

const Header: React.FC = () => {
    const { getString } = useCMS();

    return (
        <div className="max-sm:flex flex-col max-sm:justify-center mb-2 text-weight-bold " style={{ lineHeight: "3.25rem" }}>
            <span className={"md:text-hlg max-md:text-hsm text-foreground"}>
                <b>{getString('header.name')}</b><br></br>
            </span>
            <span className='md:text-hmd max-md:text-hxs text-primary'>
                <b>{getString('header.title')}</b>
            </span>
            <button>{getString('header.buttonText')}</button>
        </div>
    );
};

export default Header;