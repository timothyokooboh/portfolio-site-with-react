import { StyledNavbar } from './Navbar.styled';
import { MdMenu, MdClose } from "react-icons/md";
import Footer from '../footer/Footer';
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();

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

    const test = (url) => {
        closeMenu()
        navigate(url)
    }

    return ( 
        <StyledNavbar>
            <div className="desktop-links">
                <Link to="/">Timothy <br /> Okooboh </Link>
                <div>
                    <Link to="/works">Works</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
    
            <MdMenu className='menu-icon' id='menu-open' onClick={() => openMenu() } />
            <div className='mobile-menu' id='menu-close'>
                <div> <MdClose className='menu-close' onClick={() => closeMenu() } />  </div>
                <div>
                    <div onClick={() => test('/works')}>Works</div>
                    <div to="/blog">Blog</div>
                    <div to="/contact">Contact</div>
                </div>
                <Footer color="white" />
            </div>
            
        </StyledNavbar>
    );
}
 
export default Navbar;