import React from "react";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectHidden } from "../../redux/cart/cartSelector";
import { toggleCartHidden } from "../../redux/cart/cartAction";

import CartIcon from "./cart-icon";
import CartDropDown from "./cartDropDown";
import NavbarItem from "./navbarItem";
import ToogleButton from "./toogleButton";

import "./navbar.scss";

const NavBar = ({ currentUser, location, hidden, toggleCartHidden }) => {
  let locationName = location.pathname;
  if (locationName === "/") locationName = "home";
  document.title = locationName.split("/").join(" ").toUpperCase();
  return (
    <>
      <nav className="mb-1 navBar navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Link className="navbar-brand p-0" to="/">
          <h3 className=" logo">Cloth Store</h3>
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
                onClick={toggleCartHidden}
              >
                <CartIcon />
              </button>
            </NavbarItem>
          </ul>
        </div>
      </nav>
      {hidden ? null : <CartDropDown />}
      <div className="block"></div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectHidden(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
