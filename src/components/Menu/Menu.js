import React from "react";
import "./Menu.css";

import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";

import MenuItem from "./MenuItem/MenuItem";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const Menu = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();

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
    <div className="menu">
      <MenuItem title="existing inventory" />
      <MenuItem title="used inventory" />
      <MenuItem title="trade-in" />
      {user && (
        <MenuItem open onClick={() => history.push("/energy")} title="Energy" />
      )}
      <MenuItem title="roadster" />
      <MenuItem title="semi" />
      <MenuItem title="charging" />
      <MenuItem title="powerwall" />
      <MenuItem title="commercial solar" />
      <MenuItem title="test drive" />
      <MenuItem title="find us" />
      <MenuItem title="support" />
      <MenuItem title="India" />
      <MenuItem open onClick={logOut} title="Logout" />
    </div>
  );
};

export default Menu;
