import React from "react";
import "./Energy.css";

import { Link, useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { auth } from "../../firebase";
import { logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import Home from "./Home/Home";
import EnergyItem from "./EnergyItem/EnergyItem";

const Energy = ({ menuOpen, setMenuOpen }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="energy">
        <Link to="/">
          <div className="energy__logo">
            {/* <img src={TeslaLogo} alt="logo" /> */}
            <img
              className="energy__logo"
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="logo"
            />
          </div>
        </Link>

        <div className="energy__center">
          <p>Model S</p>
          <p>Model 3</p>
          <p>Model X</p>
          <p>Model Y</p>
          <p>Solar Roof</p>
          <p>Solar Panel</p>
        </div>

        <div className="energy__right">
          <Link to="/account" className={!menuOpen && "energy__link--hidden"}>
            Account
          </Link>
          <Link
            onClick={logOut}
            className={!menuOpen && "energy__link--hidden"}
          >
            Logout
          </Link>

          <div className="energy__menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <Button>
                <MenuIcon />
              </Button>
            ) : (
              <Button>
                <CloseIcon />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="energy__itemContainer">
        <Home
          title="Tesla"
          desc="Power Eveything"
          descLink=""
          rightBtnTxt="RESERVE NOW"
          rightBtnLink=""
        />
        <EnergyItem
          title="Powerwall"
          subTitle="Store Your Energy"
          backgroundImg="https://www.tesla.com/sites/default/files/energy-page/energy-powerwall/D-powerwall.jpg"
          desc="A home battery designed to store your clean energy, so you can use it anytime you want—at night or during an outage."
        />
        <EnergyItem
          title="Solar"
          subTitle="Produce Clean Energy"
          backgroundImg="https://www.tesla.com/sites/default/files/energy-page/energy-solar/D-solarroof.jpg"
          desc="Convert sunlight into clean energy with a brand new Solar Roof."
        />
        <EnergyItem
          title="MegaPack-Powerpack"
          subTitle="Massive Energy Storage"
          backgroundImg="https://www.tesla.com/sites/default/files/energy-page/energy-commercial/D-commercial.jpg"
          desc="A giant battery designed to change the way we power the world—with clean energy, at an enormous scale."
        />
      </div>
    </>
  );
};

export default Energy;
