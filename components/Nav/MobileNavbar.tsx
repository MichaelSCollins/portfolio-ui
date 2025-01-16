"use client"

import React, { useState } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            <MenuButton onClick={toggleMenu}>
                <RxHamburgerMenu className="hover:animate-pulse absolute top-5 right-5 md:opacity-0 rounded-lg p-2 z-30 opacity-75 text-6xl border border-foreground text-foreground  cursor-pointer hover:border-primary hover:text-primary  display-none justify-end right-12" />
            </MenuButton>
            {isOpen && <Menu className="z-50 absolute top-20 right-5 transition duration-2500 ease-in-out" isOpen={isOpen}>
                <MenuItem href="/"><FaHome /> Home</MenuItem>
                {/* <MenuItem href="#about"><FaInfoCircle /> About</MenuItem> */}
                {/* <MenuItem href="#services"><FaServicestack /> Services</MenuItem> */}
                <MenuItem href="/contact"><FaEnvelope /> Contact</MenuItem>
            </Menu>}
        </div>
    );
};

const MenuButton = styled.button`
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
`;

const Menu = styled.div<{ isOpen: boolean }>`
    display: absolute;
    width: 80%;
    background-color: var(--secondary);
    color: white;
    text-align: center;
    transition: max-height 0.9s cubic-bezier(0.68, -0.55, 0.27, 1.55), 
                opacity 0.3s ease-in-out, 
                transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55), 
                background-color 0.9s ease-in-out, 
                box-shadow 0.9s ease-in-out,
                border 0.9s ease-in-out;
    overflow: hidden;
    max-height: ${props => (props.isOpen ? '300px' : '0')};
    opacity: ${props => (props.isOpen ? '1' : '0')};
    transform: ${props => (props.isOpen ? 'scaleY(1)' : 'scaleY(0.5)')};
    background-color: ${props => (props.isOpen ? 'var(--secondary)' : 'var(--background)')};
    box-shadow: ${props => (props.isOpen ? '0 4px 8px rgba(0, 0, 0, 0.3)' : 'none')};
    border: ${props => (props.isOpen ? '2px solid var(--primary)' : '2px solid transparent')};
`;

const MenuItem = styled.a`
    display: flex;
    align-items: center;
    padding: 12px 20px;
    text-decoration: none;
    color: white;
    transition: background-color 0.3s ease-in-out, border-left 0.3s ease-in-out, transform 0.3s ease-in-out;
    font-size: 18px;

    &:hover {
        background-color: #575757;
        border-left: 4px solid var(--primary);
        transform: translateX(5px);
    }

    svg {
        margin-right: 12px;
        font-size: 20px;
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--primary);
    }
`;

export default NavbarMobile;