import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import  "./style.css";
import logo from "./logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { animateScroll as scroll } from 'react-scroll';
import {Link as Links} from "react-scroll";


const Navbar = () => {
  const ToggleHome = () => {
    scroll.scrollToTop()
  }
  return (
<nav className="navbar navbar-expand-lg bg-dark fixed-top ">
  <div className="container">
    <LinkR className="navbar-brand" to="/" onClick={ToggleHome} >
        <img src={logo} alt="logo..."/>
    </LinkR>
    <button className="navbar-toggler"
     type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent"
       aria-expanded="false" aria-label="Toggle navigation">
     <FontAwesomeIcon icon={faBars} style={{color:"#FFF"}} />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Links className="nav-link " aria-current="page" to="Header"
           smooth={true}
           duration={500}
           spy={true}
           offset={-80}
          >Home</Links>
        </li>
        <li className="nav-item">
          <Links className="nav-link" to='about'
           smooth={true}
           duration={500}
           spy={true}
           offset={-80}
          >About me</Links>
        </li>
        <li className="nav-item">
          <Links className="nav-link" to='services'
           smooth={true}
           duration={500}
           spy={true}
           offset={-80}
          >Services</Links>
        </li>
        <li className="nav-item">
          <Links className="nav-link" to='experience'
           smooth={true}
           duration={500}
           spy={true}
           offset={-80}
          >How Work</Links>
        </li>
        <li className="nav-item">
          <Links className="nav-link" to='portfolio'
           smooth={true}
           duration={500}
           spy={true}
           offset={-80}
          >Portfolio</Links>
        </li>
        <li className="nav-item">
          <Links className="nav-link" to="contact"
           smooth={true}
           duration={500}
           spy={true}
           offset={-80}
          >Contact Us</Links>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
