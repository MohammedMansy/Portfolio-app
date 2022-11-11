import React from 'react';
import "./style.css";
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const contactMe = () => {
    scroll.scrollToBottom();
  }
  return (
    <header className='header-wrapper'>
        <div className='main-info'>
            <h1> Web Develpoment and Websites Promotions </h1>
            <Typed
            className='typed-text'
            strings={['Web Design' , 'Web Development' , ' Facebook Ads SMM' , 'Google Ads' ]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <Link onClick={contactMe}  to="contact" className='btn-main-offer'> Contact Me</Link>
        </div>
    </header>
  )
}

export default Header

