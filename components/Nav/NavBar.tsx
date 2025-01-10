import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span className={styles.mike}>Mike</span>
                <span className={styles.dev}>Dev</span>
            </div>
            <ul className={styles.navItems}>
                <li>
                    <Link href="/">
                        <p className={styles.navLink}>Home</p>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <p className={styles.navLink} >About Me</p>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <p className={styles.navLink} >Contact</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;