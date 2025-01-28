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
        <nav className={'flex w-full justify-between p-4'}>
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
    return <ul className={`md:flex md:justify-between 
        md:gap-8 md:mr-2 max-md:hidden mt-2
        z-40`}>
        {Content?.nav.items?.map(NavItem)}
    </ul>
}

const MobileMenu = () => {
    return <div className='md:hidden z-50'>
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