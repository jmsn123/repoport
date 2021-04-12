import React,{useState,useEffect} from 'react'
import{FaBars,FaTimes}from "react-icons/fa"
import{IconContext}from "react-icons/lib"
import { Button } from '../../Global';
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
    NavBtnLink} from './NavBar.styles'


const NavBar = () => {
    const [click,setClick] = useState(false)
    const [button,setButton]=useState(true)
    const handleClick = ()=>{
        setClick(!click)
    }
    const closeMenu = ()=> setClick(false)

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

  window.addEventListener('resize', showButton);
    return (
    <IconContext.Provider value={{color:'#fff'}}>

        <Nav>
        <NavContainer>
        <NavLogo to='/' onClick={closeMenu}>            
        <NavIcon/>
        Welcome
        </NavLogo>
        <Mobile onClick={handleClick}>
            {click?<FaTimes/>:<FaBars/>}
        </Mobile>
        <NavMenu onClick={handleClick}click={click}>
            <NavItem>
                <NavLink to="/">
                Home
                </NavLink>
            </NavItem>
    
            <NavItem>
                <NavLink to="/Services">
                Services
                </NavLink>
            </NavItem>
   
            <NavItem>
                <NavLink to="/Contact">
                Contact
                </NavLink>
            </NavItem>
            <NavItemBtn>
                {button?(
                    <NavBtnLink to="/sign-up">
                        <Button primary>Sign up</Button>
                    </NavBtnLink>
                ):<NavBtnLink to="/sign-up">
                        <Button onClick={closeMenu} fontBig primary>Sign up</Button>
                    </NavBtnLink>}
            </NavItemBtn>
        </NavMenu>


        </NavContainer>  </Nav> 
        </IconContext.Provider>
   
    )
}

export default NavBar
