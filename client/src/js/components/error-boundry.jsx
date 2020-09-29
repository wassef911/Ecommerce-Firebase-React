import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored)
      return (
        <div className="error">
          <img
            width="350px"
            src="https://i.imgur.com/QIxIKBH.png"
            alt="ghost"
          />
          <p>
            Once alive and now dead, this ghost appears to have some unfinished
            business. Could it be with you? Or the treasure hidden under the
            floorboards of the old mansion in the hills that may never reach its
            rightful owner, a compassionate school teacher in Brooklyn.
          </p>
        </div>
      );

    return this.props.children;
  }
}
