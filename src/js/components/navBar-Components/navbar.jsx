import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { selectCurrentUser } from "../../../redux/user/userSelector";
import { selectHidden } from "../../../redux/cart/cartSelector";
import { toggleCartHidden } from "../../../redux/cart/cartAction";
import { signOutStart } from "../../../redux/user/userActions";

import CartIcon from "./cart-icon";
import CartDropDown from "./cartDropDown";
import NavbarItem from "./navbarItem";
import ToogleButton from "./toogleButton";

import "./navbar.scss";
import UserImg from "./userImg";

const NavBar = ({ currentUser, location, toggleCartHidden, signOutStart }) => {
  const properDocTitle = (location) => {
    let pathName = location;
    if (pathName === "/") pathName = "home";

    let locationName = pathName.split("/").join(" ");
    locationName = locationName.split(" ");

    return locationName[locationName.length - 1].toUpperCase();
  };
  document.title = properDocTitle(location.pathname);

  const notify = () =>
    toast.warn("© 2020 : Wassef Ben Ahmed !", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  useEffect(() => {
    notify();
  }, []);
  return (
    <>
      <ToastContainer transition={Slide} />
      <nav className="mb-1 navBar navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a
          className="navbar-brand p-0"
          href="https://github.com/wassef911/Cloth-Store"
          target="_blank"
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
                class="btn nav-link p-1"
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
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  signOutStart: () => dispatch(signOutStart()),
});

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
