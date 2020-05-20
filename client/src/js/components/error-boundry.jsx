import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }
  static getDirvedStateFromError(error) {
    return { hasErrored: true };
  }
  componentDidCatch(err) {
    console.log(err);
  }
  render() {
    if (this.state.hasErrored) {
      return (
        <div>
          <img src="https://i.imgur.com/DWO5Hzg.png" alt="" />
          <div class="alert alert-danger" role="alert">
            <h1> This Page is Wrong</h1>
            You have been trying for ten minutes. It’s pretty late at night and
            pretty dark in your room. You reach over and flick on a lamp. You
            feel oh so stupid. The gap in the toy is a triangle and you only
            have the cylinder and cube pieces. In dismay you toss the toy aside.
            Curse your five year old’s inability to keep track of the triangle!
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
