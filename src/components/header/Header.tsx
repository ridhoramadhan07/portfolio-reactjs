import React, { useState } from 'react';
import './header.css';
const Header: React.FC = () => {

  /*=============== Change Background Header ===============*/

  window.addEventListener('scroll', function () {
    const header: HTMLElement | null = document.querySelector('.header');
    if (header) {
      if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    }
  });

  /*=============== Toggle menu ===============*/
  const [toggle, showToggle] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Ridho
        </a>

        <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => setActiveLink("#home")} className={activeLink === "#home"? "nav__link active" : "nav__link"}>
                <i className="uil uil-estate nav__icon" />
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" onClick={() => setActiveLink("#about")} className={activeLink === "#about"? "nav__link active" : "nav__link"}>
                <i className="uil uil-user nav__icon" />
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveLink("#skills")} className={activeLink === "#skills"? "nav__link active" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon" />
                Skills
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#services" onClick={() => setActiveLink("#services")} className={activeLink === "#services"? "nav__link active" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon" />
                Services
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#portfolio" onClick={() => setActiveLink("#portfolio")} className={activeLink === "#portfolio"? "nav__link active" : "nav__link"}>
                <i className="uil uil-scenery nav__icon" />
                Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveLink("#contact")} className={activeLink === "#contact"? "nav__link active" : "nav__link"}>
                <i className="uil uil-message nav__icon" />
                Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showToggle(!toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
export default Header;
