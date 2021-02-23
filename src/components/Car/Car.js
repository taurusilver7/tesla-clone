import React from "react";
import "./Car.css";

import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";

const Car = ({ img, model, testDrive }) => {
  return (
    <div className="car">
      <div className="car__image">
        <img src={img} alt={model} />
      </div>
      <h1 className="car__model">{model}</h1>
      <div className="car__actions">
        <ButtonPrimary name="order" />
        {testDrive && <ButtonSecondary name="test drive" />}
      </div>

      <div className="car__info">
        <span>Request a call</span> to speak with a product specialist, value
        your trade-in or apply for leasing.
      </div>
    </div>
  );
};

export default Car;
