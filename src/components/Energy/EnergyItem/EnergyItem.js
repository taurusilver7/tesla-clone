import React from "react";
import Button from "../../Button/Button";
import "./EnergyItem.css";

const EnergyItem = ({ backgroundImg, title, subTitle, desc }) => {
  return (
    <>
      <div
        className="energyItem"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      ></div>
      <div className="energyItem__container">
        <div className="energyItem__left">
          <div className="energyItem__title">
            <div className="energyItem__text">
              <h3>{title}</h3>
              <h2>{subTitle}</h2>
            </div>
            <div className="energyItem__buttons">
              <Button
                className="energyItem__btn"
                imp="secondary"
                text="Reserve Now"
              />
              <Button
                className="energyItem__btn"
                imp="secondary"
                text="Learn More"
              />
            </div>
          </div>
        </div>
        <div className="energyItem__right">
          <div className="energyItem__desc">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergyItem;
