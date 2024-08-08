import React from "react";

const Social: React.FC = () => {
    return (
      <div className="home__social">
        <a href="https://www.facebook.com/ridho.ramadhan.351104?mibextid=ZbWKwL" className="home__social-icon" target="_blank">
          <i className="uil uil-facebook-f"></i>
        </a>

        <a href="https://www.instagram.com/rridho07_?igsh=ajVobG9xdmRlbDB1" className="home__social-icon" target="_blank">
          <i className="uil uil-instagram"></i>
        </a>

        <a href="https://github.com/ridhoramadhan07" className="home__social-icon" target="_blank">
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    );
};

export default Social;