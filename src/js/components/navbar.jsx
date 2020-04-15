import React from "react";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

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
        <Link className="navbar-brand p-0 " to="/">
          <h3 id="logo">Cloth Store</h3>
        </Link>
        <ToogleButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto">
            <NavbarItem content="HOME" to="/" />
            <NavbarItem content="SHOP" to="/shop" />
            <NavbarItem content="CONTACT" to="/contact" />
            {currentUser ? (
              <NavbarItem>
                <a className="nav-link" onClick={() => auth.signOut()} href="/">
                  SIGN OUT
                </a>
              </NavbarItem>
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
