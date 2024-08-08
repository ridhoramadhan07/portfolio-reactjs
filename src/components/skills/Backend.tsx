import React from 'react';
const Backend:React.FC = () => {
    return (
      <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Node Js</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Express js</h3>
                <span className="skills__level">Intemadiate</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Intermadiate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">Firebase</h3>
                <span className="skills__level">Intermadiate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Backend ;