import React, { useState } from "react";
import "./SignUp.css";

import { Link, useHistory } from "react-router-dom";

import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";

import LanguageIcon from "@material-ui/icons/Language";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { login } from "../../features/userSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const createAcc = (e) => {
    e.preventDefault();

    if (!firstName) {
      return alert("Please enter a First Name!");
    }
    if (!lastName) {
      return alert("Please enter a Last Name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user
          .updateProfile({
            displayName: firstName,
          })
          .then(() => {
            dispatch(
              login({
                email: authUser.user?.email,
                uid: authUser.user.uid,
                displayName: firstName,
              })
            );
            history.push("/account");
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signUp">
      <div className="signUp__header">
        <div className="signUp__logo">
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="signUp__lang">
          <LanguageIcon /> <span>en-US</span>
        </div>
      </div>
      <div className="signUp__info">
        <h1>Create Account</h1>
        <form className="signUp__form">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <ButtonPrimary
            name="Create Account"
            type="submit"
            onClick={createAcc}
          />
        </form>
        <div className="signUp__divider">
          <hr /> <span>OR</span>
          <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="Sign In" />
        </Link>
      </div>
      <footer className="footer">
        <p>Tesla &copy; 2021</p>
        <p>Privacy & Legal</p>
        <p>Demo Project</p>
      </footer>
    </div>
  );
};

export default SignUp;
