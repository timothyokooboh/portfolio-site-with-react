import { StyledNavbar } from './Navbar.styled';
import { MdMenu, MdClose } from "react-icons/md";
import Footer from '../footer/Footer';
import { useState } from 'react';

const Navbar = () => {
    const openMenu = () => {
        const menuDropdown = document.querySelector('#menu-close');
        
        menuDropdown.classList.remove("hide-menu")
        menuDropdown.classList.add("show-menu")
    }

    const closeMenu = () => {
        const menuDropdown = document.querySelector('#menu-close');
        menuDropdown.classList.add("hide-menu")
        menuDropdown.classList.remove("show-menu")
    }

    return ( 
        <StyledNavbar>
            <div>
                <div>Works</div>
                <div>Blog</div>
                <div>Contact</div>
            </div>

            
            <MdMenu  className='menu-icon' id='menu-open' onClick={() => openMenu() } />
            <div className='mobile-menu' id='menu-close'>
                <div> <MdClose className='menu-close' onClick={() => closeMenu() } />  </div>
                <div>
                    <div>Works</div>
                    <div>Blog</div>
                    <div>Contact</div>
                </div>
                <Footer color="white" />
            </div>
            
        </StyledNavbar>
    );
}
 
export default Navbar;