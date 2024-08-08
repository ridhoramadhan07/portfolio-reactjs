import React from 'react';
import './qualification.css';

const Qualification: React.FC = () => {
    const [toggleState, setToggleState] = React.useState(0);
    const toggleTab = (index: number) => {
        setToggleState(index);
        toggleState === index ? setToggleState(0) : setToggleState(index);
    };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container ">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? 'qualification__button button--flex qualification__active' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? 'qualification__content-active' : 'qualification__content '}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SD 2 Bojongkantong</h3>
                <span className="qualification__subtitle">Banjar City, West Java </span>
                <div className="qualification__calender">
                  <i className="i uil uil-calendar-alt">2010 - 2016</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">SMP 2 Banjar</h3>
                <span className="qualification__subtitle">Banjar City, West Java</span>
                <div className="qualification__calender">
                  <i className="i uil uil-calendar-alt">2016 - 2019</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SMA 1 Banjar</h3>
                <span className="qualification__subtitle">Banjar City, West Java</span>
                <div className="qualification__calender">
                  <i className="i uil uil-calendar-alt">2019 - 2022</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Universitas Bina Sarana Informatika</h3>
                <span className="qualification__subtitle">Tasikmalaya, West Java </span>
                <div className="qualification__calender">
                  <i className="i uil uil-calendar-alt">2022 - Now </i>
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? 'qualification__content-active' : 'qualification__content '}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">create a website for Setakawan Konveksi</h3>
                <span className="qualification__subtitle">work from home </span>
                <div className="qualification__calender">
                  <i className="i uil uil-calendar-alt">Okt - des 2023</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">create a Correspondence Website Desa Cintaraja</h3>
                <span className="qualification__subtitle">Tasimalaya, West Java</span>
                <div className="qualification__calender">
                  <i className="i uil uil-calendar-alt">Nov - des 2023</i>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
