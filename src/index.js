import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MainContent } from './mainContent';
import { Footer } from './footerContent';

const Header = () => {
  return(
    <>
      <nav id='navContainer'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' id='reactLogo'></img>
        <ul id='navMenu'>
          <li className='navItems'>Pricing</li>
          <li className='navItems'>About</li>
          <li className='navItems'>Contact</li>
        </ul>
      </nav>
      <MainContent />
      <Footer />
    </>
  )
}



ReactDOM.render(<Header />, document.getElementById("root"))