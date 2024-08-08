import React from 'react';
import './scrollUp.css';

const ScrollUp: React.FC = () => {
    window.addEventListener ("scroll",function ()  {
      const scrollUpElement: HTMLElement | null = document.querySelector('.scrollup');
      // saat scrool lebih dari 560 px tingginya akn menambahkan sebuah style yaitu bottom tambah 3 rem jadi munculah scroll upnya
      if (window.scrollY >= 560) {
        scrollUpElement?.classList.add('show-scroll');
      } else {
        scrollUpElement?.classList.remove('show-scroll');
      }
    });


  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;