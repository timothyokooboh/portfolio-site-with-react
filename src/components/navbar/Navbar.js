import { StyledNavbar } from "./Navbar.styled";
import { MdMenu, MdClose } from "react-icons/md";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const navigate = useNavigate();

  const openMenu = () => {
    const menuDropdown = document.querySelector("#menu-close");

    menuDropdown.classList.remove("hide-menu");
    menuDropdown.classList.add("show-menu");
  };

  const closeMenu = () => {
    const menuDropdown = document.querySelector("#menu-close");
    menuDropdown.classList.add("hide-menu");
    menuDropdown.classList.remove("show-menu");
  };

  const handleClick = (url) => {
    closeMenu();
    navigate(url);
  };

  return (
    <StyledNavbar>
      <div className="desktop-links">
        <CustomLink to="/">
          <span className="name">
            Timothy <br /> Okooboh
          </span>
        </CustomLink>
        <div>
          <CustomLink to="/projects">
            <span className="link">Projects</span>
          </CustomLink>
          <CustomLink to="/articles">
            <span className="link">Articles</span>
          </CustomLink>
          <CustomLink to="/contact">
            <span className="link contact">Contact</span>
          </CustomLink>
        </div>
      </div>

      <MdMenu className="menu-icon" id="menu-open" onClick={() => openMenu()} />
      <div className="mobile-menu" id="menu-close">
        <div>
          {" "}
          <MdClose className="menu-close" onClick={() => closeMenu()} />{" "}
        </div>
        <div>
          <div onClick={() => handleClick("/projects")}>Projects</div>
          <div onClick={() => handleClick("/articles")}>Articles</div>
          <div onClick={() => handleClick("/contact")}>Contact</div>
        </div>
        <Footer color="white" />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
