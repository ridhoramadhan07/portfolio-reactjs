import './footer.css'
import React from'react';

const Footer:React.FC = () => {
    return (
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Ridho</h1>

          <ul className="footer__list">
            <li>
              <a href="#" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Testimonial
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a href="https://www.facebook.com/ridho.ramadhan.351104?mibextid=ZbWKwL" className="footer__social-link" target="_blank">
              <i className="bx bxl-facebook"></i>
            </a>

            <a href="https://www.instagram.com/rridho07_?igsh=ajVobG9xdmRlbDB1" className="footer__social-link" target="_blank">
              <i className="bx bxl-instagram"></i>
            </a>

            <a href="https://github.com/ridhoramadhan07" className="footer__social-link" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <span className="footer__copy">&#169; ridho. All right reserved</span>
        </div>
      </footer>
    );
};

export default Footer;