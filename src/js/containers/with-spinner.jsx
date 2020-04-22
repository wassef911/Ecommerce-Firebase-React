import React from "react";
import Spinner from "../components/spinner";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};
export default WithSpinner;
