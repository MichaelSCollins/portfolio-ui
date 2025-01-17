import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import './NavBar.module.css'
import NavbarMobile from './MobileNavbar';
import Content from '@/.fake/content.json'
interface NavItem {
    name: string,
    href: string
}

const NavBar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <MobileMenu />
            <NavMenu />
        </nav>
    );
};

const Logo = () => <div className={styles.logo}>
    <span className={styles.mike}>Mike<span className={styles.dev}>Dev</span></span>
</div>

const NavMenu = () => {
    return <ul className={`flex justify-between 
        gap-8 mr-2 max-md:display-none`}>
        {Content?.nav.items?.map(NavItem)}
    </ul>
}

const MobileMenu = () => {
    return <div className='md:hidden'>
        <NavbarMobile />
    </div>
}

const NavItem = (item: NavItem) => {
    return <li key={item.name}>
        <Link href={item.href || "/"}>
            <p className={"nav-link hover:text-primary"} >
                {item.name}
            </p>
        </Link>
    </li>
}

export default NavBar;