import { RxHamburgerMenu } from "react-icons/rx";
import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import './NavBar.module.css'
const NavBar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span className={styles.mike}>Mike<span className={styles.dev}>Devx</span></span>
            </div>
            <RxHamburgerMenu className="hover:animate-pulse absolute top-5 right-5 md:opacity-0 rounded-lg p-2 z-30 opacity-75 text-6xl border border-foreground text-foreground  cursor-pointer hover:border-primary hover:text-primary  display-none justify-end right-12" />
            <ul className={`flex justify-evenly 
                w-1/3 max-sm:display-none
                z-50`}>
                <li>
                    <Link href="/">
                        <p className={"nav-link hover:text-primary"} >Home</p>
                    </Link>
                </li>
                <li>
                    <a href="/about">
                        <p className={"nav-link hover:text-primary"} >About Me</p>
                    </a>
                </li>
                <li>
                    <Link href="/contact">
                        <p className={"nav-link hover:text-primary"} >Contact</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;