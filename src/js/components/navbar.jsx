import React from "react";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./navbar.scss";
import CartIcon from "./cart-icon";
import CartDropDown from "./cartDropDown";
import NavbarItem from "./navbarItem";
import ToogleButton from "./toogleButton";

const NavBar = ({ currentUser, location }) => {
  let locationName = location.pathname;
  if (locationName == "/") locationName = "home";
  document.title = locationName.split("/").join(" ").toUpperCase();
  return (
    <>
      <nav className="mb-1 navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand p-0 " href="/">
          <h3 id="logo">Cloth Store</h3>
        </a>
        <ToogleButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto">
            <NavbarItem content="HOME" to="/" />
            <NavbarItem content="SHOP" to="/shop" />
            <NavbarItem content="CONTACT" to="/contact" />
            {currentUser ? (
              <NavbarItem
                content="SIGN OUT"
                to="/"
                onClick={() => auth.signOut()}
              />
            ) : (
              <NavbarItem content="SIGN IN" to="/sign" />
            )}
            <NavbarItem>
              <button
                type="button"
                class="btn nav-link p-1"
                data-toggle="modal"
                data-target="#exampleModalScrollable"
              >
                <CartIcon />
              </button>
            </NavbarItem>
          </ul>
        </div>
      </nav>
      <CartDropDown />
    </>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser: currentUser,
});
export default connect(mapStateToProps)(withRouter(NavBar));
