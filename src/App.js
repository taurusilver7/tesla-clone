import React, { useEffect, useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import SolarPanel from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";

import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import Menu from "./components/Menu/Menu";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Account from "./components/Account/Account";

import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import Energy from "./components/Energy/Energy";

const App = () => {
  const user = useSelector(selectUser);
  const [menuOpen, setMenuOpen] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        dispatch(
          login({
            email: authUser?.email,
            uid: authUser?.uid,
            displayName: authUser?.displayName,
          })
        );
      } else {
        // User has signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* tesla account of the user */}
          {user && (
            <Route exact path="/account">
              {!user ? (
                <Redirect to="/login" />
              ) : (
                <>
                  <Account menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                  {!menuOpen && <Menu />}
                </>
              )}
            </Route>
          )}
          {/* One the menu's for promotion... */}
          {user && (
            <Route exact path="/energy">
              <Energy menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              {!menuOpen && <Menu />}
            </Route>
          )}
          

          {/* login form to access the account */}
          <Route exact path="/login">
            {user ? <Redirect to="/account" /> : <Login />}
          </Route>

          {/* Signup form to create accounts */}
          <Route exact path="/signup">
            <SignUp />
          </Route>

          {/* Homepage displayed on the application */}
          <Route exact path="/">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {!menuOpen && <Menu />}
            <div className="app__itemContainer">
              <Item
                title="Model S"
                desc="Schedule a touchless test drive"
                descLink=""
                backgroundImg={ModelS}
                leftBtnTxt="CUSTOM ORDER"
                leftBtnLink=""
                rightBtnTxt="LEARN MORE"
                rightBtnLink=""
                twoButtons="true"
                first
              />
              <Item
                title="Solar & Power Wall"
                desc="Power Everything"
                descLink=""
                backgroundImg={SolarPanel}
                leftBtnTxt="LEARN MORE"
                leftBtnLink=""
                rightBtnTxt="CUSTOM ORDER"
                rightBtnLink=""
                twoButtons="false"
              />
              <Item
                title="Model 3"
                desc="Schedule a touchless test drive"
                descLink=""
                backgroundImg={Model3}
                leftBtnTxt="CUSTOM ORDER"
                leftBtnLink=""
                rightBtnTxt="LEARN MORE"
                rightBtnLink=""
                twoButtons="true"
              />
              <Item
                title="Model X"
                desc="Schedule a touchless test drive"
                descLink=""
                backgroundImg={ModelX}
                leftBtnTxt="CUSTOM ORDER"
                leftBtnLink=""
                rightBtnTxt="EXISTING INVENTORY"
                rightBtnLink=""
                twoButtons="true"
              />
              <Item
                title="Model Y"
                desc="Schedule a touchless test drive"
                descLink=""
                backgroundImg={ModelY}
                leftBtnTxt="ORDER NOW"
                leftBtnLink=""
                rightBtnTxt="STAY UPDATED"
                rightBtnLink=""
                twoButtons="true"
              />
              <Item
                title="Solar & Powerwall"
                desc="Power Everything"
                descLink=""
                backgroundImg={SolarRoof}
                leftBtnTxt="LEARN MORE"
                leftBtnLink=""
                rightBtnTxt="ORDER NOW"
                rightBtnLink=""
                twoButtons="false"
              />
              <Item
                title="Solar Accessories"
                desc="Money-back guarantee"
                descLink=""
                backgroundImg={Accessories}
                leftBtnTxt="ORDER NOW"
                leftBtnLink=""
                rightBtnTxt="LEARN MORE"
                rightBtnLink=""
                twoButtons="false"
              />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
