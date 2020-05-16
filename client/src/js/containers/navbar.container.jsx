import React from "react";
import { Query } from "react-apollo";

import NavBar from "../components/navBar-Components/navbar";
import { GET_CART_HIDDEN } from "../../graphQL/querys";

function NavbarContainer() {
  return (
    <Query query={GET_CART_HIDDEN}>
      {({ data }) => <NavBar hidden={data.cartHidden} />}
    </Query>
  );
}

export default NavbarContainer;
