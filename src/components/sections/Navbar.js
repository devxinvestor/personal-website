import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Button } from '../scripts/Button';
import '../styles/Navbar.css';
import { scrollToSection } from '../scripts/Scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo' onClick={closeMobileMenu}>
            <div
              className='devin-mohr-link'
              onClick={() => {
                closeMobileMenu();
                scrollToSection('home-section');
              }}
            >
              DEVIN MOHR
            </div>
            <a
              href='https://www.linkedin.com/in/devinmohr/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-linkedin-square' />
            </a>
            <a
              href='https://github.com/devxinvestor'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-github-square' />
            </a>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={() => {
                  closeMobileMenu();
                  scrollToSection('home-section');
                }}
              >
                Home
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={() => {
                  closeMobileMenu();
                  scrollToSection('about-section');
                }}
              >
                About Me
              </div>
            </li>
            <li className='nav-item'>
              <div
                className='nav-links'
                onClick={() => {
                  closeMobileMenu();
                  scrollToSection('projects-section');
                }}
              >
                Projects
              </div>
            </li>
            {/*
            <li>
              <a
                href='Devin Mohr resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Resume
              </a>
            </li>
            */}
          </ul>
          {/*
          {button && <Button buttonStyle='btn--outline'>Resume</Button>}
          */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
