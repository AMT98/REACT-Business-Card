import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Info } from './InfoContent';
import { ContactButtons } from './ButtonContent';
import { MainContent } from './MainContent';
import { Footer } from './FooterContent';
const Page = () => {
  return (
    <div className='bodyContent'>
      <Info />
      <ContactButtons />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))