import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import './NavBar.module.css'
import NavbarMobile from './Navbar.mobile';

const navItems = [{
    name: "Home",
    link: "/"
},
// {
//     name: "About Me",
//     link: "/about"
// },
{
    name: "Contact",
    link: "/contact"
}]
const NavBar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span className={styles.mike}>Mike<span className={styles.dev}>Dev</span></span>
            </div>
            <div className='md:hidden   '>
                <NavbarMobile />
            </div>
            <ul className={`flex justify-between 
                gap-8 mr-2 max-md:display-none max-md:opacity-0 max-md:z-0
                z-50`}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link || "/"}>
                            <p className={"nav-link hover:text-primary"} >{item.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;