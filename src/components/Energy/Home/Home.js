import React from "react";
import Button from "../../Button/Button";
import "./Home.css";

const Home = ({ title, desc, rightBtnTxt, rightBtnLink }) => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url("https://www.tesla.com/sites/default/files/energy-page/energy-hero/D-energy-hero.jpg")`,
      }}
    >
      <div className="home__container">
        <div className="home__text">
          <p>{title}</p>
          <div className="home__textDesc">
            <p>{desc}</p>
          </div>
        </div>
        <div className="home__lowerThird">
          <div className="home__divider">
            <div className="home__solar">
              <img
                src="https://www.tesla.com/sites/default/files/energy-page/energy-badges/solar.svg"
                alt="solar"
              />
              <p>
                Convert
                <br />
                Solar into
                <br />
                Energy
              </p>
            </div>
            <hr />
            <div className="home__wall">
              <img
                src="https://www.tesla.com/sites/default/files/energy-page/energy-badges/powerwall.svg"
                alt="wall"
              />
              <p>
                Store energy
                <br />
                with
                <br />
                Powerwall
              </p>
            </div>
            <hr />
            <div className="home__access">
              <div className="home__titleText">
                <span>24/7</span>
              </div>
              <p>
                Access <br />
                Backup Power <br />
                Anytime
              </p>
            </div>
          </div>
          <div className="home__buttons">
            <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
