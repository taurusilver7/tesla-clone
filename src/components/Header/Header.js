import React from "react";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          {/* <img src={TeslaLogo} alt="logo" /> */}
          <img
            className="header__logo"
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt="logo"
          />
        </div>
      </Link>

      <div className="header__center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panel</p>
      </div>

      <div className="header__right">
        <p className={!menuOpen && "header__link--hidden"}>Shop</p>
        <Link to="/login" className={!menuOpen && "header__link--hidden"}>
          Tesla Account
        </Link>

        <div className="header__menu" onClick={() => setMenuOpen(!menuOpen)}>
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
  );
};

export default Header;
