import Header from '../header/Header';
import React from 'react';
import Data from './Data';
import Social from './Social';
import ScrolDown from './scrollDown';
import './home.css';
const Home : React.FC = () => {
  return (
    <>
      <Header />
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
          </div>
          <ScrolDown/>
        </div>
      </section>
    </>
  );
};

export default Home;
