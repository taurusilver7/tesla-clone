import React from "react";
import "./Account.css";

import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import Car from "../Car/Car";

const Account = ({ menuOpen, setMenuOpen }) => {
  const user = useSelector(selectUser);
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
    <div className="account">
      <div className="account__header">
        <div className="account__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="account__links">
          <Link to="/account">Model S</Link>
          <Link to="/account">Model 3</Link>
          <Link to="/account">Model X</Link>
          <Link to="/account">Model Y</Link>
          <Link to="/account">Solar Roof</Link>
          <Link to="/account">Solar Panels</Link>
          <Link to="/account">Shop</Link>
          <Link to="/account">Tesla Account</Link>
          <Link onClick={logOut}>Logout</Link>

          <div className="account__menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <Button>
                <MenuIcon className="account__open" />
              </Button>
            ) : (
              <Button>
                <CloseIcon className="account__close" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="account__info">
        <div className="account__person">
          <h4>{user?.displayName + "'s"} Tesla</h4>
          <h5>
            The new features <span>energy</span> is open to users in the Menu
          </h5>
        </div>
        <div className="account__infoRight">
          <Link to="/">Home</Link>
          <Link to="/account">Account</Link>
          <Link>History</Link>
          <Link onClick={logOut}>Logout</Link>
        </div>
      </div>
      <div className="account__car">
        <Car
          img="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
          model="Model S"
          testDrive
        />
        <Car
          img="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
          model="Model 3"
          testDrive
        />

        <Car
          img="https://electrek.co/wp-content/uploads/sites/3/2017/11/tesla-roadster_side_view.jpg?quality=82&strip=all"
          model="Roadster"
          testDrive
        />
        <Car
          img="https://carwow-uk-2.imgix.net/model-photos/original/tesla_19model3sd1b_sideview_deep-blue-metallic.png?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=60&w=750"
          model="Model 3"
        />

        <Car
          img="https://tesla-cdn.thron.com/delivery/public/image/tesla/d6748b90-2f77-4791-bc9d-dd8962ee7721/bvlatuR/std/0x0/modelx@2"
          model="    "
          testDrive
        />

        <Car
          img="https://www.motortrend.com/uploads/sites/5/2019/03/Tesla-Model-Y-red-.jpg"
          model="Model X"
          testDrive
        />
        <Car
          img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2020-02-15-at-9-54-16-am-1581782098.png"
          model="Model Y"
          testDrive
        />

        <Car
          img="https://specials-images.forbesimg.com/imageserve/5e8a1a4701879f000703db9d/960x0.jpg?fit=scale"
          model="     "
        />
      </div>
    </div>
  );
};

export default Account;
