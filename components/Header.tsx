"use client"

import React from 'react';
import Typography from '@material-ui/core/Typography';

const Header: React.FC = () => {

    return (
        <div className="mb-2 text-weight-bold" style={{ lineHeight: "3.25rem"}}>
            <span style={{ fontSize: "3.25rem"}} className={" text-foreground"}>
                <b>MIKE COLLINS</b><br></br>
            </span>
            <span style={{ fontSize: "2.8rem"}} className={" text-primary"}>
            <b>Lead Developer</b>
            </span>
        </div>
    );
};

export default Header;