import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='social-media-wrap'>
        <small className='website-rights'>Devin Mohr © 2024</small>
        <div className='social-icons'>
          <a href='https://www.linkedin.com/in/devinmohr/' target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-linkedin-square'/>
            </a>
          <a href='https://github.com/devxinvestor' target='_blank' rel='noopener noreferrer'>
             <i className='fa fa-github-square'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;