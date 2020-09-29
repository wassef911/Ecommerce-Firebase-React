import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectCurrentUser } from "../../../redux/user/userSelector";
import { signOutStart } from "../../../redux/user/userActions";

import { default as CartIcon } from "./cartIcon.container";
import { default as CartDropDown } from "./cartDropDown.container";
import NavbarItem from "./navbarItem";
import ToogleButton from "./toogleButton";
import UserImg from "./userImg";

import { properDocTitle } from "../../utils/util-functions";
import "./navbar.scss";

const NavBar = ({
  currentUser,
  location,
  toggleCartHidden,
  hidden,
  signOutStart,
}) => {
  document.title = properDocTitle(location.pathname);
  return (
    <>
      <nav className="mb-1 navBar navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a
          className="navbar-brand p-0"
          href="https://github.com/wassef911/Cloth-Store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="logo">Cloth Store</h3>
        </a>

        <ToogleButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto">
            <NavbarItem content="HOME" to="/" />
            <NavbarItem content="SHOP" to="/shop" />
            <NavbarItem content="CONTACT" to="/contact" />

            {currentUser ? (
              <NavbarItem>
                <a className="nav-link" onClick={() => signOutStart()} href="/">
                  SIGN OUT
                </a>
              </NavbarItem>
            ) : (
              <NavbarItem content="SIGN IN" to="/sign" />
            )}
            {!!currentUser ? (
              <UserImg
                displayName={currentUser.displayName}
                photoURL={currentUser.photoURL}
              />
            ) : null}

            <NavbarItem>
              <button
                type="button"
                className="btn nav-link p-1"
                data-toggle="modal"
                data-target="#exampleModalScrollable"
                onClick={toggleCartHidden}
              >
                <CartIcon />
              </button>
            </NavbarItem>
          </ul>
        </div>
      </nav>
      <CartDropDown />
      <div className="block"></div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
