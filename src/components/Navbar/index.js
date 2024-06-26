import React from 'react';
import './navbar.css';
import { Bars, Nav, NavLink, NavIcon, Logo } from './NavbarElements'


const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            
            
            {/* <img id='logo' src={require("../../images/Aashray_BG_upscaled.png")} alt="logo" /> */}
            <img id='logo-1' src={require("../../images/aashray-logo.jpeg")} alt="logo" />
            

            <NavIcon onClick={toggle}>
                <Bars />
            </NavIcon>

        </Nav>
    </>
  )
}

export default Navbar
