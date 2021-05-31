import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../Global";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  Mobile,
  NavMenu,
  NavItem,
  NavLink,
  NavItemBtn,
  NavBtnLink,
} from "./NavBar.styles";

const NavBar = ({ bg }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav transparent={bg}>
        <NavContainer>
          <NavLogo to="/" onClick={closeMenu}>
            <NavIcon />
            Welcome
          </NavLogo>
          <Mobile onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </Mobile>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/Services">Portfolio</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/Contact">Contact Me </NavLink>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/Blog">
                  <Button primary>Blog</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/Blog">
                  <Button onClick={closeMenu} fontBig primary>
                    Blog
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavContainer>{" "}
      </Nav>
    </IconContext.Provider>
  );
};

export default NavBar;
