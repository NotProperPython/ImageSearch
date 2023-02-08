import React, { useState } from "react";
import SeasonDisplay from "../components/SeasonDisplay";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

class Seasons extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: null };
  // }
  state = { lat: null, errorMessage: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (
      <>
        {this.state.lat ? (
          <SeasonDisplay lat={this.state.lat} />
        ) : this.state.errorMessage ? (
          <Error message={this.state.errorMessage} />
        ) : (
          <Spinner message="Please accept location request" />
        )}
      </>
    );
  }
}

Spinner.defaultProps = {
  message: "Loading...",
};

export default Seasons;
