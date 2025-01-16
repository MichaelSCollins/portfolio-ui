import React from 'react';

const Header: React.FC = () => {

    return (
        <div className="max-sm:flex flex-col max-sm:justify-center mb-2 text-weight-bold " style={{ lineHeight: "3.25rem" }}>
            <span className={"md:text-hlg max-md:text-hsm text-foreground"}>
                <b >MIKE COLLINS</b><br></br>
            </span>
            <span className='md:text-hmd max-md:text-hxs text-primary'>
                <b >Lead Developer</b>
            </span>
        </div>
    );
};

export default Header;